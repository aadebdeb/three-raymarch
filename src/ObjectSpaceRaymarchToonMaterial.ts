import { UniformsUtils, Texture } from 'three';
import { ObjectSpaceRaymarchPhongMaterialParameters, ObjectSpaceRaymarchPhongMaterial } from "./ObjectSpaceRaymarchPhongMaterial";

export interface ObjectSpaceRaymarchToonMateiralParameters extends ObjectSpaceRaymarchPhongMaterialParameters {
  gradientMap?: Texture;
}

/**
 * A material for object space raymarching equivalent to MeshToonMaterial.
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

  get gradientMap(): Texture | null {
    return this.uniforms['gradientMap'].value;
  }

  set gradientMap(gradientMap: Texture | null) {
    this.uniforms['gradientMap'].value = gradientMap;
  }
}
