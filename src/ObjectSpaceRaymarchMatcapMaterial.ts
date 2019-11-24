import { Texture, Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchMatcapMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  color?: Color,
  matcap?: Texture,
}

export class ObjectSpaceRaymarchMatcapMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchMatcapMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    super(
      ShaderChunk.raymarch_matcap_frag,
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

  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  get matcap(): Texture | null {
    return this.uniforms['matcap'].value;
  }

  /**
   * must make #needsUpdate true.
   */
  set matcap(matcap: Texture | null) {
    this.uniforms['matcap'].value = matcap;
  }
}