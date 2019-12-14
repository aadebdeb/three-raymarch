import { Texture, Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchMatcapMaterial}.
 */
export interface ObjectSpaceRaymarchMatcapMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
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

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshMatcapMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial.color).
   */
  color?: Color,

  /**
   * The matcap map. Default is null.
   * Equivalent to [MeshMatcapMaterial.matcap](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial.matcap).
   */
  matcap?: Texture | null,
}

/**
 * A material for object space raymarching equivalent to [MeshMatcapMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial).
 */
export class ObjectSpaceRaymarchMatcapMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchMatcapMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_matcap_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
        uniforms: UniformsUtils.merge([
          UniformsLib.fog,
          parameters.uniforms ? parameters.uniforms : {},
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'matcap': { value: parameters.matcap ? parameters.matcap : null },
          },
        ]),
      }),
    );
    if (parameters.matcap) {
      this.matcap = parameters.matcap;
    } 
  }

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshMatcapMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial.color).
   */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /**
   * The matcap map. Default is null.
   * Equivalent to [MeshMatcapMaterial.matcap](https://threejs.org/docs/index.html#api/en/materials/MeshMatcapMaterial.matcap).
   */
  get matcap(): Texture | null {
    return this.uniforms['matcap'].value;
  }

  set matcap(matcap: Texture | null) {
    this.uniforms['matcap'].value = matcap;
  }
}