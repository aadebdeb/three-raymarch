import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

export interface ObjectSpaceRaymarchRawMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  getDistanceChunk?: string,
  getColorChunk?: string,
}

export class ObjectSpaceRaymarchRawMaterial extends ObjectSpaceRaymarchMaterial {
  constructor(parameters: ObjectSpaceRaymarchRawMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks.distance_pars_fragment = parameters.getDistanceChunk;
    }
    if (parameters.getColorChunk) {
      overrideChunks.raw_color_pars_fragment = parameters.getColorChunk;
    }
    super(
      RaymarchShaderChunk.raymarch_raw_frag,
      overrideChunks,
      parameters,
    );
  }
}