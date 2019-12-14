import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchLambertMaterial}.
 */
export interface ObjectSpaceRaymarchLambertMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
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
   * Equivalent to [MeshLambertMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.color).
   */
  color?: Color,

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshLambertMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.emissive).
   */
  emissive?: Color,

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshLambertMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.envMap).
   */
  envMap?: CubeTexture,

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeahLambertMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeahLambertMaterial.combine).
   */
  combine?: number,

  /**
   * How much the environment map affects the surface; also see {@link ObjectSpaceRaymarchLambertMaterial.combine}.
   * Equivalent to [MeshLambertMaterial.refiectivity](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.reflectivity).
   */
  reflectivity?: number,

  /**
   * The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material.
   * It is used with environment mapping modes [THREE.CubeRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures) and [THREE.EquirectangularRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * The refraction ratio should not exceed 1. Default is 0.98.
   * Equivalent to [MeshLambertMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.refractionRatio).
   */
  refractionRatio?: number,
}

/**
 * A material for object space raymarching equivalent to [MeshLambertMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial).
 */
export class ObjectSpaceRaymarchLambertMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchLambertMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks['lambert_get_material_pars_fragment'] = parameters.getMaterialChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_lambert_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
      uniforms: UniformsUtils.merge([
        parameters.uniforms ? parameters.uniforms : {},
        UniformsLib.fog,
        UniformsLib.lights,
        UniformsLib.envmap,
        {
          'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
          'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
          // override UniformsLib.envmap
          'envMap': { value: parameters.envMap ? parameters.envMap : null },
          'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
          'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
        }
      ]),
    }));
    this.envMap = parameters.envMap ? parameters.envMap : null;
    this.combine = parameters.combine ? parameters.combine : MultiplyOperation;
    this.lights = true;
    this.fog = true;
  }

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshLambertMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.color).
   */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshLambertMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.emissive).
   */
  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive: Color) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshLambertMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.envMap).
   */
  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
    this.needsUpdate = true;
  }

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeahLambertMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeahLambertMaterial.combine).
   */
  combine: number;

  /**
   * How much the environment map affects the surface; also see {@link ObjectSpaceRaymarchLambertMaterial.combine}.
   * Equivalent to [MeshLambertMaterial.refiectivity](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.reflectivity).
   */
  get reflectivity(): number {
    return this.uniforms['reflectivity'].value;
  }

  set reflectivity(reflectivity: number) {
    this.uniforms['reflectivity'].value = reflectivity;
  }

  /**
   * The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material.
   * It is used with environment mapping modes [THREE.CubeRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures) and [THREE.EquirectangularRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * The refraction ratio should not exceed 1. Default is 0.98.
   * Equivalent to [MeshLambertMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshLambertMaterial.refractionRatio).
   */
  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}