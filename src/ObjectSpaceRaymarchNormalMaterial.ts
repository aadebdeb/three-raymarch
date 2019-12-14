import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchNormalMaterial}.
 */
export interface ObjectSpaceRaymarchNormalMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /**
   * Shader chunk which defines `float getDistance(vec3 p)` function.
   * This function is used to estimate distance.
   * 
   * e.g.
   * ```glsl
   * float getDistance(vec3 p) {
   *   p = mod(p, 0.5) - 0.25;
   *   return length(p) - 0.1;
   * }
   * ```
   */
  getDistanceChunk?: string,
};

/**
 * A material for object space raymarching equivalent to [MeshNormalMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshNormalMaterial).
 * 
 * **Usage:**
 * 
 * ```typescript
 * import { Scene, Vector3, Color } from 'three';
 * import { ObjectSpaceRaymarch, ObjectSpaceRaymarchNormalMaterial } from 'three-raymarch';
 * const material = new ObjectSpaceRaymarchNormalMaterial({
 *   getDistanceChunk: `
 *     float getDistance(vec3 p) {
 *     p = mod(p, 0.5) - 0.25;
 *     return length(p) - 0.1;
 *   }`,
 *   size: new Vector3(5, 5, 5),
 * });
 * const raymarch = new ObjectSpaceRaymarch(material);
 * const scene = new Scene();
 * scene.add(raymarch);
 * ```
 */
export class ObjectSpaceRaymarchNormalMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchNormalMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk.raymarch_normal_frag, 
      overrideChunks,
      parameters
    );
  }
}