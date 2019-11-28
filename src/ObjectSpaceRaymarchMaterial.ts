import { ShaderMaterial, IUniform, UniformsUtils } from 'three';
import { ShaderChunk } from './shaders/ShaderChunk';

const INCLUDE_PATTERN = /^[ \t]*#include +<([\w\d./]+)>/gm;

function resolveIncludes(fragmentShader: string, overrideChunks: {[key: string]: string}): string {
  const chunks = Object.assign({}, ShaderChunk, overrideChunks);
  function includeReplacer(match: string, include: string) {
    const str = chunks[include];
    return str ? resolveIncludes(str) : match;
  }
  function resolveIncludes(str: string): string {
    return str.replace(INCLUDE_PATTERN, includeReplacer);
  }
  return resolveIncludes(fragmentShader);
}

export interface ObjectSpaceRaymarchMaterialParameters {
  getDistanceChunk?: string,
  /** Max raymarching iteration. */
  maxRaymarchIteration?: number,
  /** Distance to judge hit of ray and surface. */
  hitDistance?: number,
  differentiateDistance?: number,
  /** Scale of distance to raymarch. */
  distanceScale?: number,
  /** Arbitary uniforms. */
  uniforms?: { [uniform: string]: IUniform },
  /** Arbitary defines */
  defines?: {[define: string]: any},
  opacity?: number,
}

/**
 * Base material class for object space raymarching.
 */
export abstract class ObjectSpaceRaymarchMaterial extends ShaderMaterial {
  constructor(
    fragmentShader: string,
    overrideChunks: {[key: string]: string},
    {
      maxRaymarchIteration = 32,
      hitDistance = 0.001,
      differentiateDistance = 0.001,
      distanceScale = 1.0,
      opacity = 1.0,
      uniforms = {},
      defines = {},
    }: ObjectSpaceRaymarchMaterialParameters = {}) {
    if (distanceScale <= 0.0) {
      throw new Error('ObjectSpaceRaymarchMaterial: distanceScale must be bigger than 0.');
    }
    super({
      vertexShader: ShaderChunk.raymarch_vert,
      fragmentShader: resolveIncludes(fragmentShader, overrideChunks),
      uniforms: UniformsUtils.merge([
        uniforms,
        {
          'opacity': { value: opacity },
          'hitDistance': { value: hitDistance },
          'differentiateDistance': { value: differentiateDistance },
          'distanceScale': { value: distanceScale },
          'invModelMatrix': { value: null },
          'mvpMatrix': { value: null },
          'size': { value: null },
          'isOrthographic': { value: false },
          'cameraDirection': { value: null },
        }
      ]),
      defines: Object.assign(
        {
          'MAX_RAYMARCH_ITERATION': maxRaymarchIteration,
        },
        defines,
      ),
    });
    this.extensions.fragDepth = true;
  }

  get maxRaymarchIteration(): number {
    return this.defines['MAX_RAYMARCH_ITERATION'];
  }

  set maxRaymarchIteration(maxRaymarchIteration: number) {
    this.defines['MAX_RAYMARCH_ITERATION'] = Math.floor(maxRaymarchIteration);
    this.needsUpdate = true;
  }

  get hitDistance(): number {
    return this.uniforms['hitDistance'].value;
  }

  set hitDistance(hitDistance: number) {
    this.uniforms['hitDistance'].value = hitDistance;
  }

  get differentiateDistance(): number {
    return this.uniforms['differentiateDistance'].value;
  }

  set differentiateDistance(differentiateDistance: number) {
    this.uniforms['differentiateDistance'].value = differentiateDistance;
  }

  get distanceScale(): number {
    return this.uniforms['distanceScale'].value;
  }

  set distanceScale(distanceScale: number) {
    if (distanceScale <= 0.0) {
      throw new Error('ObjectSpaceRaymarchMaterial: distanceScale must be bigger than 0.');
    }
    this.uniforms['distanceScale'].value = distanceScale;
  }

  /**
   * @override
   */
  get opacity(): number {
    return this.uniforms['opacity'].value;
  }

  /**
   * @override
   */
  set opacity(opacity: number) {
    if (this.uniforms) {
      this.uniforms['opacity'].value = opacity;
    }
  }

}