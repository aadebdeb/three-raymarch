import { UniformsUtils } from 'three';
import { ObjectSpaceRaymarchStandardMaterial, ObjectSpaceRaymarchStandardMaterialParameters } from './ObjectSpaceRaymarchStandardMaterial';

/**
 * Parameters of {@link ObjectSpaceRaymarchPhysicalMaterial}.
 */
export interface ObjectSpaceRaymarchPhysicalMaterialParameters extends ObjectSpaceRaymarchStandardMaterialParameters {
  /**
   * Clearcoat level, from 0.0 to 1.0. Default is 0.0.
   * Equivalent to [MeshPhysicalMaterial.clearcoat](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial.clearcoat).
   */
  clearcoat?: number,

  /**
   * How rough the clearcoat appears, from 0.0 to 1.0. Default is 0.0.
   * Equivalent to [MeshPhysicalMaterial.clearcoatRoughness](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial.clearcoatRoughness).
   */
  clearcoatRoughness?: number,
}

/**
 * A material for object space raymarching equivalent to [MeshPhysicalMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial).
 * 
 * **Usage:**
 * 
 * ```typescript
 * import { Scene, Vector3, Color } from 'three';
 * import { ObjectSpaceRaymarch, ObjectSpaceRaymarchPhysicalMaterial } from 'three-raymarch';
 * const material = new ObjectSpaceRaymarchPhysicalMaterial({
 *   getDistanceChunk: `
 *     float getDistance(vec3 p) {
 *     p = mod(p, 0.5) - 0.25;
 *     return length(p) - 0.1;
 *   }`,
 *   size: new Vector3(5, 5, 5),
 *   metalness: 0.5,
 *   roughness: 0.5,
 *   clearcoat: 0.5,
 *   clearcoatRoughness: 0.5,
 * });
 * const raymarch = new ObjectSpaceRaymarch(material);
 * const scene = new Scene();
 * scene.add(raymarch);
 * ```
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

  /**
   * Clearcoat level, from 0.0 to 1.0. Default is 0.0.
   * Equivalent to [MeshPhysicalMaterial.clearcoat](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial.clearcoat).
   */
  get clearcoat(): number {
    return this.uniforms['clearcoat'].value;
  }

  set clearcoat(clearcoat: number) {
    this.uniforms['clearcoat'].value = clearcoat;
  }

  /**
   * How rough the clearcoat appears, from 0.0 to 1.0. Default is 0.0.
   * Equivalent to [MeshPhysicalMaterial.clearcoatRoughness](https://threejs.org/docs/index.html#api/en/materials/MeshPhysicalMaterial.clearcoatRoughness).
   */
  get clearcoatRoughness(): number {
    return this.uniforms['clearcoatRoughness'].value;
  }

  set clearcoatRoughness(clearcoatRoughness: number) {
    this.uniforms['clearcoatRoughness'].value = clearcoatRoughness;
  }
}