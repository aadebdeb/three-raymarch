import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchDepthMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  getDistanceChunk?: string,
};

/**
 * A material for object space raymarching equivalent to MeshDepthMaterial.
 */
export class ObjectSpaceRaymarchDepthMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchDepthMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_depth_frag'],
      overrideChunks,
      parameters,
    )
  }
}