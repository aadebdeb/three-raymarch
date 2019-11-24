import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { ShaderChunk } from './shaders/ShaderChunk';

export interface ObjectSpaceRaymarchRawMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {}

export class ObjectSpaceRaymarchRawMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchRawMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_par_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getColorChunk) {
      overrideChunks.raw_color_pars_fragment = parameters.getColorChunk;
    }
    super(
      ShaderChunk.raymarch_raw_frag,
      overrideChunks,
      parameters,
    );
  }
}