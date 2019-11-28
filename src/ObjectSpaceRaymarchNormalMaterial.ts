import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchNormalMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  getDistanceChunk?: string,
};

/**
 * A material for object space raymarching equivalent to MeshNormalMaterial.
 */
export class ObjectSpaceRaymarchNormalMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchNormalMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk.raymarch_normal_frag, 
      overrideChunks,
      parameters
    );
  }
}