import { Texture, Color, UniformsLib, UniformsUtils } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchMatcapMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  /** Color of the material. */
  color?: Color,
  /** The matacp map */
  matcap?: Texture,
  getDistanceChunk?: string,
}

/**
 * A material for object space raymarching equivalent to MeshMatcapMaterial.
 */
export class ObjectSpaceRaymarchMatcapMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchMatcapMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk.raymarch_matcap_frag,
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

  /** Color of the material. */
  get color(): Color {
    return this.uniforms['diffuse'].value;
  }

  set color(color: Color) {
    this.uniforms['diffuse'].value = color.clone();
  }

  /** The matacap map. */
  get matcap(): Texture | null {
    return this.uniforms['matcap'].value;
  }

  /**
   * The matpcap map.
   * #needsUpdate must be set true to apply the change.
   */
  set matcap(matcap: Texture | null) {
    this.uniforms['matcap'].value = matcap;
  }
}