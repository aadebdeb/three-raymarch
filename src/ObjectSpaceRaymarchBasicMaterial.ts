import { Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from "./ObjectSpaceRaymarchMaterial";
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchBasicMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  getMaterialChunk?: string,
}

export class ObjectSpaceRaymarchBasicMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchBasicMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.basic_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_basic_frag,
      overrideChunks,
      Object.assign({}, parameters, {
      uniforms: UniformsUtils.merge([
        UniformsLib.fog,
        parameters.uniforms ? parameters.uniforms : {},
        {
          'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
        }
      ]),
    }));
    this.fog = true;
  }

  get color(): Color {
    return this.uniforms['diffuse'].value.clone();
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }
}