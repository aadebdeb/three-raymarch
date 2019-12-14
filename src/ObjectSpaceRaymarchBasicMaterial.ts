import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from "./ObjectSpaceRaymarchMaterial";
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchBasicMaterial}.
 */
export interface ObjectSpaceRaymarchBasicMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
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
   * Equivalent to [MeshBasicMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.color).
   */
  color?: Color,

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshBasicMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.envMap).
   */
  envMap?: CubeTexture | null,

  /**
   * How much the environment map affects the surface; also see {@link ObjectSpaceRaymarchBasicMaterial.combine}.
   * The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).
   * Equivalent to [MeshBasicMaterial.reflectivity](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.reflectivity).
   */
  reflectivity?: number,

  /**
   * The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material.
   * It is used with environment mapping modes [THREE.CubeRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures) and [THREE.EquirectangularRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * The refraction ratio should not exceed 1. Default is 0.98.
   * Equivalent to [MeshBasicMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.refractionRatio).
   */
  refractionRatio?: number,

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeahBasicMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.combine).
   */
  combine?: number,
}

/**
 * A material for object space raymarching equivalent to [MeshBasicMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial). 
 */
export class ObjectSpaceRaymarchBasicMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchBasicMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks['basic_get_material_pars_fragment'] = parameters.getMaterialChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_basic_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
      uniforms: UniformsUtils.merge([
        UniformsLib.fog,
        UniformsLib.envmap,
        parameters.uniforms ? parameters.uniforms : {},
        {
          'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
          // override UniformsLib.envmap
          'envMap': { value: parameters.envMap ? parameters.envMap : null },
          'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
          'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
        },
      ]),
    }));
    this.envMap = parameters.envMap ? parameters.envMap : null;
    this.combine = parameters.combine ? parameters.combine : MultiplyOperation;
    this.fog = true;
  }

  /**
   * Color of the material, by default set to white (0xffffff).
   * Equivalent to [MeshBasicMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.color).
   */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshBasicMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.envMap).
   */
  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
  }

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeahBasicMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.combine).
   */
  combine: number;

  /**
   * How much the environment map affects the surface; also see {@link ObjectSpaceRaymarchBasicMaterial.combine}.
   * The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).
   * Equivalent to [MeshBasicMaterial.reflectivity](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.reflectivity).
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
   * Equivalent to [MeshBasicMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshBasicMaterial.refractionRatio).
   */
  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}