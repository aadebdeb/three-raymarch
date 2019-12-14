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
 * 
 * **Usage:**
 * 
 * ```typescript
 * import { Scene, Vector3, Color, TextureLoader } from 'three';
 * import { ObjectSpaceRaymarch, ObjectSpaceRaymarchToonMaterial } from 'three-raymarch';
 * const material = new ObjectSpaceRaymarchToonMaterial({
 *   getDistanceChunk: `
 *     float getDistance(vec3 p) {
 *     p = mod(p, 0.5) - 0.25;
 *     return length(p) - 0.1;
 *   }`,
 *   size: new Vector3(5, 5, 5),
 *   color: new Color(0x2194ce),
 *   gradientMap: new TextureLoader().load('path/to/gradientmap/texture'),
 * });
 * const raymarch = new ObjectSpaceRaymarch(material);
 * const scene = new Scene();
 * scene.add(raymarch);
 * ```
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
