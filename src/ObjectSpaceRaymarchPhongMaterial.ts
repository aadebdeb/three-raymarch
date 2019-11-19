import { Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchPhongMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  emissive?: Color,
  specular?: Color,
  shininess?: number,
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

  get color(): Color {
    return this.uniforms['diffuse'].value.clone();
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  get emissive(): Color {
    return this.uniforms['emissive'].value.clone();
  }

  set emissive(emissive: Color) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  get specular(): Color {
    return this.uniforms['specular'].value.clone();
  }

  set specular(specular: Color) {
    this.uniforms['specular'].value = specular.clone();
  }

  get shininess(): number {
    return this.uniforms['shininess'].value;
  }

  set shininess(shininess: number) {
    this.uniforms['shininess'].value = shininess;
  }

}