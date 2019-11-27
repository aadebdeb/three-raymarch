import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchPhongMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /** Color of the material. */
  color?: Color,
  /** Emissive color of the material. */
  emissive?: Color,
  /** Specular color of the material. */
  specular?: Color,
  /** How shiny the specular highlight is. */
  shininess?: number,
  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
  getMaterialChunk?: string,
}

/**
 * A material for object space raymarching equivalent to MeshPhongMaterial.
 */
export class ObjectSpaceRaymarchPhongMaterial extends ObjectSpaceRaymarchMaterial {
  combine: number;
  constructor(parameters: ObjectSpaceRaymarchPhongMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.phong_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_phong_frag,
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

  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive: Color) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  get specular(): Color {
    return this.uniforms['specular'].value;
  }

  set specular(specular: Color) {
    this.uniforms['specular'].value = specular.clone();
  }

  get shininess(): number {
    return this.uniforms['shininess'].value;
  }

  set shininess(shininess: number) {
    this.uniforms['shininess'].value = shininess;
  }

  get envMap(): CubeTexture | null {
    return this.uniforms['envMap'].value;
  }

  set envMap(envMap: CubeTexture | null) {
    this.uniforms['envMap'].value = envMap;
    this.needsUpdate = true;
  }

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