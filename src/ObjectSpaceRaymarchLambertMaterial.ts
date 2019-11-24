import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchLambertMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  emissive?: Color,
  getMaterialChunk?: string,
  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
}

export class ObjectSpaceRaymarchLambertMaterial extends ObjectSpaceRaymarchMaterial {
  combine: number;
  constructor(parameters: ObjectSpaceRaymarchLambertMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.lambert_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_lambert_frag,
      overrideChunks,
      Object.assign({}, parameters, {
      uniforms: UniformsUtils.merge([
        parameters.uniforms ? parameters.uniforms : {},
        UniformsLib.fog,
        UniformsLib.lights,
        {
          'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
          'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
          // override UniformsLib.envmap
          'envMap': { value: parameters.envMap ? parameters.envMap : null },
          'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
          'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
        }
      ]),
    }));
    this.envMap = parameters.envMap ? parameters.envMap : null;
    this.combine = parameters.combine ? parameters.combine : MultiplyOperation;
    this.lights = true;
    this.fog = true;
  }

  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive: Color) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
    this.needsUpdate = true;
  }

  get reflectivity(): number {
    return this.uniforms['reflectivity'].value;
  }

  set reflectivity(reflectivity: number) {
    this.uniforms['reflectivity'].value = reflectivity;
  }

  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}