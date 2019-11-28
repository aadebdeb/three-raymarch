import { Color, CubeTexture, UniformsUtils, UniformsLib, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchStandardMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /** Color of the material. */
  color?: Color,
  /** Emissive color of the material. */
  emissive?: Color,
  /** How much the material is like a metal. */
  metalness?: number,
  /** How rough the material appears. */
  roughness?: number,
  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
  getDistanceChunk?: string,
  getMaterialChunk?: string,
}

/**
 * A material for object space raymarching equivalent to MeshStandardMaterial.
 */
export class ObjectSpaceRaymarchStandardMaterial extends ObjectSpaceRaymarchMaterial {
  combine: number;
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

  /** Color of the material. */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /** Emissive color of the material. */
  get emissive(): Color {
    return this.uniforms['emissive'].value;
  }

  set emissive(emissive) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  /** How much the material is like a metal. */
  get metalness(): number {
    return this.uniforms['metalness'].value;
  }

  set metalness(metalness: number) {
    this.uniforms['metalness'].value = metalness;
  }

  /** How rough the material appears. */
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