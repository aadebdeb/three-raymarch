import { BasicDepthPacking, RGBADepthPacking } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export type DepthPackingTypes = typeof BasicDepthPacking | typeof RGBADepthPacking;

/**
 * Parameters of {@link ObjectSpaceRaymarchDepthMaterial}.
 */
export interface ObjectSpaceRaymarchDepthMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /**
   * Shader chunk which defines `float getDistance(vec3 p)` function.
   * This function is used to estimate distance.
   * 
   * e.g.
   * ```glsl
   * float getDistance(vec3 p) {
   *   p = mod(p, 0.5) - 0.25;
   *   return length(p) - 0.1;
   * }
   * ```
   */
  getDistanceChunk?: string,

  /**
   * Encoding for depth packing. Default is [BasicDepthPacking](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * Equivalent to [MeshDepthMaterial.depthPacking](https://threejs.org/docs/index.html#api/en/materials/MeshDepthMaterial.depthPacking).
   */
  depthPacking?: DepthPackingTypes,
};

/**
 * A material for object space raymarching equivalent to [MeshDepthMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshDepthMaterial).
 */
export class ObjectSpaceRaymarchDepthMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchDepthMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_depth_frag'],
      overrideChunks,
      parameters
    );
    this.depthPacking = parameters.depthPacking !== undefined ? parameters.depthPacking : BasicDepthPacking;
  }

  /**
   * Encoding for depth packing. Default is [BasicDepthPacking](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * Equivalent to [MeshDepthMaterial.depthPacking](https://threejs.org/docs/index.html#api/en/materials/MeshDepthMaterial.depthPacking).
   */
  depthPacking: DepthPackingTypes;
}