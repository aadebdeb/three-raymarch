import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchDepthMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {};

/**
 * A material for object space raymarching equivalent to MeshDepthMaterial.
 */
export class ObjectSpaceRaymarchDepthMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchDepthMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_par_fragment = parameters.getDistanceChunk;
    }
    super(
      ShaderChunk.raymarch_depth_frag,
      overrideChunks,
      parameters,
    )
  }
}