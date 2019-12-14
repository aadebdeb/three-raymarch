import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

/**
 * Parameters of {@link ObjectSpaceRaymarchPhongMaterial}.
 */
export interface ObjectSpaceRaymarchPhongMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
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
   * Equivalent to [MeshPhongMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.color).
   */
  color?: Color,

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshPhongMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.emissive).
   */
  emissive?: Color,

  /**
   * Specular color of the material. Default is a Color set to 0x111111 (very dark grey).
   * This defines how shiny the material is and the color of its shine.
   * Equivalent to [MeshPhongMaterial.specular](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.specular).
   */
  specular?: Color,

  /**
   * How shiny the {@link .specular} highlight is; a higher value gives a sharper highlight. Default is 30.
   * Equivalent to [MeshPhongMaterial.shininess](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.shininess).
   */
  shininess?: number,

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshPhongMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.envMap).
   */
  envMap?: CubeTexture,

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeshPhongMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.combine).
   */
  combine?: number,

  /**
   * How much the environment map affects the surface; also see {@link .combine}.
   * The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).
   * Equivalent to [MeshPhongMaterial.reflectivity](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.reflectivity).
   */
  reflectivity?: number,

  /**
   * The index of refraction (IOR) of air (approximately 1) divided by the index of refraction of the material.
   * It is used with environment mapping modes [THREE.CubeRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures) and [THREE.EquirectangularRefractionMapping](https://threejs.org/docs/index.html#api/en/constants/Textures).
   * The refraction ratio should not exceed 1. Default is 0.98.
   * Equivalent to [MeshPhongMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.refractionRatio).
   */
  refractionRatio?: number,
}

/**
 * A material for object space raymarching equivalent to [MeshPhongMaterial](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial).
 */
export class ObjectSpaceRaymarchPhongMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchPhongMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks['phong_get_material_pars_fragment'] = parameters.getMaterialChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_phong_frag'],
      overrideChunks,
      Object.assign({}, parameters, {
        uniforms: UniformsUtils.merge([
          parameters.uniforms ? parameters.uniforms : {},
          UniformsLib.fog,
          UniformsLib.lights,
          UniformsLib.envmap,
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'shininess': { value: parameters.shininess !== undefined ? parameters.shininess : 30 },
            'specular': { value: parameters.specular ? parameters.specular : new Color(0x111111) },
            'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
            // override UniformsLib.envmap
            'envMap': { value: parameters.envMap ? parameters.envMap : null },
            'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },
            'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },
          },
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
   * Equivalent to [MeshPhongMaterial.color](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.color).
   */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /**
   * Emissive (light) color of the material, essentially a solid color unaffected by other lighting. Default is black.
   * Equivalent to [MeshPhongMaterial.emissive](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.emissive).
   */
  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive: Color) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  /**
   * Specular color of the material. Default is a Color set to 0x111111 (very dark grey).
   * This defines how shiny the material is and the color of its shine.
   * Equivalent to [MeshPhongMaterial.specular](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.specular).
   */
  get specular(): Color {
    return this.uniforms['specular'].value;
  }

  set specular(specular: Color) {
    this.uniforms['specular'].value = specular.clone();
  }

  /**
   * How shiny the {@link .specular} highlight is; a higher value gives a sharper highlight. Default is 30.
   * Equivalent to [MeshPhongMaterial.shininess](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.shininess).
   */
  get shininess(): number {
    return this.uniforms['shininess'].value;
  }

  set shininess(shininess: number) {
    this.uniforms['shininess'].value = shininess;
  }

  /**
   * The environment map. Default is null.
   * Equivalent to [MeshPhongMaterial.envMap](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.envMap).
   */
  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
  }

  /**
   * How to combine the result of the surface's color with the environment map, if any.
   * Equivalent to [MeshPhongMaterial.combine](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.combine).
   */
  combine: number;

  /**
   * How much the environment map affects the surface; also see {@link .combine}.
   * The default value is 1 and the valid range is between 0 (no reflections) and 1 (full reflections).
   * Equivalent to [MeshPhongMaterial.reflectivity](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.reflectivity).
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
   * Equivalent to [MeshPhongMaterial.refractionRatio](https://threejs.org/docs/index.html#api/en/materials/MeshPhongMaterial.refractionRatio).
   */
  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}