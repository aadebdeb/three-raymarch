import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from "./ObjectSpaceRaymarchMaterial";
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchBasicMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /** Color of the material. */
  color?: Color,
  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
  getDistanceChunk?: string,
  getMaterialChunk?: string,
}

/**
 * A material for object space raymarching equivalent to MeshBasicMaterial. 
 */
export class ObjectSpaceRaymarchBasicMaterial extends ObjectSpaceRaymarchMaterial {
  combine: number;
  constructor(parameters: ObjectSpaceRaymarchBasicMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks['basic_get_material_pars_fragment'] = parameters.getMaterialChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_basic_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
      uniforms: UniformsUtils.merge([
        UniformsLib.fog,
        UniformsLib.envmap,
        parameters.uniforms ? parameters.uniforms : {},
        {
          'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
          // override UniformsLib.envmap
          'envMap': { value: parameters.envMap ? parameters.envMap : null },
          'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
          'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
        },
      ]),
    }));
    this.envMap = parameters.envMap ? parameters.envMap : null;
    this.combine = parameters.combine ? parameters.combine : MultiplyOperation;
    this.fog = true;
  }

  /** Color of the material. */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /** The environment map. */
  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
  }

  /**
   * How much the environment map affects the surface.
   */
  get reflectivity(): number {
    return this.uniforms['reflectivity'].value;
  }

  set reflectivity(reflectivity: number) {
    this.uniforms['reflectivity'].value = reflectivity;
  }

  /**
   * The index of refraction.
   */
  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}