import { Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchPhysicalMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  emissive?: Color,
  metalness?: number,
  roughness?: number,
  clearcoat?: number,
  clearcoatRoughness?: number,
  reflectivity?: number,
  getMaterialChunk?: string,
}

export class ObjectSpaceRaymarchPhysicalMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchPhysicalMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.physical_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_physical_frag,
      overrideChunks,
      Object.assign({}, parameters, {
        defines: {
          'PHYSICAL': '',
        },
        uniforms: UniformsUtils.merge([
          parameters.uniforms ? parameters.uniforms : {},
          UniformsLib.lights,
          UniformsLib.fog,
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
            'metalness': { value: parameters.metalness !== undefined ? parameters.metalness : 0.5 },
            'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },
            'clearcoat': { value: parameters.clearcoat !== undefined ? parameters.clearcoat : 0.0 },
            'clearcoatRoughness': { value: parameters.clearcoatRoughness !== undefined ? parameters.clearcoatRoughness : 0.0 },
            'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 0.0 },
          },
        ]),
      }),
    );
    this.lights = true;
    this.fog = true;
  }

}