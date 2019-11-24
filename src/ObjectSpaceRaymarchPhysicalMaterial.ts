import { Color, CubeTexture, UniformsLib, UniformsUtils, MultiplyOperation } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchPhysicalMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  emissive?: Color,
  metalness?: number,
  roughness?: number,
  clearcoat?: number,
  clearcoatRoughness?: number,
  envMap?: CubeTexture,
  reflectivity?: number,
  refractionRatio?: number,
  combine?: number,
  getMaterialChunk?: string,
}

export class ObjectSpaceRaymarchPhysicalMaterial extends ObjectSpaceRaymarchMaterial {
  combine: number;
  constructor(parameters: ObjectSpaceRaymarchPhysicalMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getMaterialChunk) {
      overrideChunks.physical_get_material_pars_fragment = parameters.getMaterialChunk;
    }
    super(
      ShaderChunk.raymarch_physical_frag,
      overrideChunks,
      Object.assign({}, parameters, {
        defines: {
          'PHYSICAL': '',
        },
        uniforms: UniformsUtils.merge([
          parameters.uniforms ? parameters.uniforms : {},
          UniformsLib.lights,
          UniformsLib.fog,
          {
            'diffuse': { value: parameters.color ? parameters.color : new Color(0xffffff) },
            'emissive': { value: parameters.emissive ? parameters.emissive : new Color(0x000000) },
            'metalness': { value: parameters.metalness !== undefined ? parameters.metalness : 0.5 },
            'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },
            'clearcoat': { value: parameters.clearcoat !== undefined ? parameters.clearcoat : 0.0 },
            'clearcoatRoughness': { value: parameters.clearcoatRoughness !== undefined ? parameters.clearcoatRoughness : 0.0 },
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

  set emissive(emissive) {
    this.uniforms['emissive'].value = emissive.clone();
  }

  get metalness(): number {
    return this.uniforms['metalness'].value;
  }

  set metalness(metalness: number) {
    this.uniforms['metalness'].value = metalness;
  }

  get roughness(): number {
    return this.uniforms['roughness'].value;
  }

  set roughness(roughness: number) {
    this.uniforms['roughness'].value = roughness;
  }

  get clearcoat(): number {
    return this.uniforms['clearcoat'].value;
  }

  set clearcoat(clearcoat: number) {
    this.uniforms['clearcoat'].value = clearcoat;
  }

  get clearcoatRoughness(): number {
    return this.uniforms['clearcoatRoughness'].value;
  }

  set clearcoatRoughness(clearcoatRoughness: number) {
    this.uniforms['clearcoatRoughness'].value = clearcoatRoughness;
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
    this.uniforms['reflectivity'].value =  reflectivity;
  }

  get refractionRatio(): number {
    return this.uniforms['refractionRatio'].value;
  }

  set refractionRatio(refractionRatio: number) {
    this.uniforms['refractionRatio'].value = refractionRatio;
  }
}