import { UniformsUtils } from 'three';
import { ObjectSpaceRaymarchStandardMaterial, ObjectSpaceRaymarchStandardMaterialParameters } from './ObjectSpaceRaymarchStandardMaterial';

export interface ObjectSpaceRaymarchPhysicalMaterialParameters extends ObjectSpaceRaymarchStandardMaterialParameters {
  /** Clearcoat level. */
  clearcoat?: number,
  /** How rough the clearcoat appears. */
  clearcoatRoughness?: number,
}

/**
 * A material for object space raymarching equivalent to MeshPhysicalMaterial.
 */
export class ObjectSpaceRaymarchPhysicalMaterial extends ObjectSpaceRaymarchStandardMaterial {
  constructor(parameters: ObjectSpaceRaymarchPhysicalMaterialParameters = {}) {
    super(Object.assign({}, parameters, {
      defines: {
        'PHYSICAL': '',
      },
      uniforms: UniformsUtils.merge([
        parameters.uniforms ? parameters.uniforms : {},
        {
          'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },
          'clearcoat': { value: parameters.clearcoat !== undefined ? parameters.clearcoat : 0.0 },
          'clearcoatRoughness': { value: parameters.clearcoatRoughness !== undefined ? parameters.clearcoatRoughness : 0.0 },
        },
      ])
    }));
  }

    /** Clearcoat level. */
  get clearcoat(): number {
    return this.uniforms['clearcoat'].value;
  }

  set clearcoat(clearcoat: number) {
    this.uniforms['clearcoat'].value = clearcoat;
  }

  /** How rough the clearcoat appears. */
  get clearcoatRoughness(): number {
    return this.uniforms['clearcoatRoughness'].value;
  }

  set clearcoatRoughness(clearcoatRoughness: number) {
    this.uniforms['clearcoatRoughness'].value = clearcoatRoughness;
  }
}