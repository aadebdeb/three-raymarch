import { UniformsUtils, Texture } from 'three';
import { ObjectSpaceRaymarchPhongMaterialParameters, ObjectSpaceRaymarchPhongMaterial } from "./ObjectSpaceRaymarchPhongMaterial";

/**
 * Parameters of {@link ObjectSpaceRaymarchToonMaterial}.
 */
export interface ObjectSpaceRaymarchToonMateiralParameters extends ObjectSpaceRaymarchPhongMaterialParameters {
  /**
   * Gradient map for the toon shading. Default is null.
   * Equivalent to [MeshToonMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial.gradientMap).
   */
  gradientMap?: Texture;
}

/**
 * A material for object space raymarching equivalent to [MeshToonMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial).
 */
export class ObjectSpaceRaymarchToonMaterial extends ObjectSpaceRaymarchPhongMaterial {
  constructor(parameters: ObjectSpaceRaymarchToonMateiralParameters = {}) {
    super(Object.assign({}, parameters, {
      defines: {
        'TOON': '',
      },
      uniforms: UniformsUtils.merge([
        parameters.uniforms ? parameters.uniforms : {},
        {
          'gradientMap': { value: parameters.gradientMap ? parameters.gradientMap : null },
        },
      ]),
    }));
  }

  /**
   * Gradient map for the toon shading. Default is null.
   * Equivalent to [MeshToonMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshToonMaterial.gradientMap).
   */
  get gradientMap(): Texture | null {
    return this.uniforms['gradientMap'].value;
  }

  set gradientMap(gradientMap: Texture | null) {
    this.uniforms['gradientMap'].value = gradientMap;
  }
}
