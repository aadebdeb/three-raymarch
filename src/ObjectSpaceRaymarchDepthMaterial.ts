import { BasicDepthPacking, RGBADepthPacking } from 'three';
import { ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchMaterialParameters } from './ObjectSpaceRaymarchMaterial';
import { RaymarchShaderChunk } from './shaders/RaymarchShaderChunk';

type DepthPackingTypes = typeof BasicDepthPacking | typeof RGBADepthPacking;

export interface ObjectSpaceRaymarchDepthMaterialParameters extends ObjectSpaceRaymarchMaterialParameters {
  getDistanceChunk?: string,
  /**
   * Encoding for depth packing.
   */
  depthPacking?: DepthPackingTypes,
};

/**
 * A material for object space raymarching equivalent to MeshDepthMaterial.
 */
export class ObjectSpaceRaymarchDepthMaterial extends ObjectSpaceRaymarchMaterial {
  depthPacking: DepthPackingTypes;
  constructor(parameters: ObjectSpaceRaymarchDepthMaterialParameters = {}) {
    const overrideChunks: {[key: string]: string} = {};
    if (parameters.getDistanceChunk) {
      overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;
    }
    super(
      RaymarchShaderChunk['raymarch_depth_frag'],
      overrideChunks,
      parameters
    );
    this.depthPacking = parameters.depthPacking !== undefined ? parameters.depthPacking : BasicDepthPacking;
  }
}