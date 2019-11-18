import { Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchPhongMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  shininess?: number,
  specular?: Color,
  emissive?: Color,
  getMaterialChunk?: string,
}

export class ObjectSpaceRaymarchPhongMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchPhongMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.phong_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_phong_frag,
      overrideChunks,
      Object.assign({}, parameters, {
        uniforms: UniformsUtils.merge([
          parameters.uniforms ? parameters.uniforms : {},
          UniformsLib.fog,
          UniformsLib.lights,
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'shininess': { value: parameters.shininess !== undefined ? parameters.shininess : 30 },
            'specular': { value: parameters.specular ? parameters.specular : new Color(0x111111) },
            'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
          },
        ]),
      }),
    );
    this.lights = true;
    this.fog = true;
  }
}