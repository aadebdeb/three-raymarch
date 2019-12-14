import { Color, CubeTexture, UniformsUtils, UniformsLib, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchStandardMaterial}.
 */
export interface ObjectSpaceRaymarchStandardMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
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

  getMaterialChunk?: string,

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshStandardMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.color).
   */
  color?: Color,

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshStandardMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.emissive).
   */
  emissive?: Color,

  /**
   * How much the material is like a metal.
   * Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, with nothing (usually) in between.
   * Default is 0.5. A value between 0.0 and 1.0 could be used for a rusty metal look.
   * Equivalent to [MeshStandardMaterial.metalness](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.metalness).
   */
  metalness?: number,

  /**
   * How rough the material appears.
   * 0.0 means a smooth mirror reflection, 1.0 means fully diffuse.
   * Default is 0.5.
   * Equivalent to [MeshStandardMaterial.roughness](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.roughness).
   */
  roughness?: number,

  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
}

/**
 * A material for object space raymarching equivalent to [MeshStandardMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial).
 */
export class ObjectSpaceRaymarchStandardMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchStandardMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks['physical_get_material_pars_fragment'] = parameters.getMaterialChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_physical_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
        uniforms: UniformsUtils.merge([
          parameters.uniforms ? parameters.uniforms : {},
          UniformsLib.lights,
          UniformsLib.fog,
          UniformsLib.envmap,
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
            'metalness': { value: parameters.metalness !== undefined ? parameters.metalness : 0.5 },
            'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },
            // override UniformsLib.envmap
            'envMap': { value: parameters.envMap ? parameters.envMap : null },
            'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
            'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
          }
        ]),
      }),
    );
    this.envMap = parameters.envMap ? parameters.envMap : null;
    this.combine = parameters.combine ? parameters.combine : MultiplyOperation;
    this.lights = true;
    this.fog = true;
  }

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshStandardMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.color).
   */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshStandardMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.emissive).
   */
  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  /**
   * How much the material is like a metal.
   * Non-metallic materials such as wood or stone use 0.0, metallic use 1.0, with nothing (usually) in between.
   * Default is 0.5. A value between 0.0 and 1.0 could be used for a rusty metal look.
   * Equivalent to [MeshStandardMaterial.metalness](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.metalness).
   */
  get metalness(): number {
    return this.uniforms['metalness'].value;
  }

  set metalness(metalness: number) {
    this.uniforms['metalness'].value = metalness;
  }

  /**
   * How rough the material appears.
   * 0.0 means a smooth mirror reflection, 1.0 means fully diffuse.
   * Default is 0.5.
   * Equivalent to [MeshStandardMaterial.roughness](https://threejs.org/docs/index.html#api/en/materials/MeshStandardMaterial.roughness).
   */
  get roughness(): number {
    return this.uniforms['roughness'].value;
  }

  set roughness(roughness: number) {
    this.uniforms['roughness'].value = roughness;
  }

  
  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
    this.needsUpdate = true;
  }

  combine: number;

  get reflectivity(): number {
    return this.uniforms['reflectivity'].value;
  }

  set reflectivity(reflectivity: number) {
    this.uniforms['reflectivity'].value = reflectivity;
  }

  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }

}