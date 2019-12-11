import { Mesh, BoxBufferGeometry } from 'three';
import { ObjectSpaceRaymarchMaterial} from './ObjectSpaceRaymarchMaterial';

/**
 * An 3D Object for object space raymarching.
 */
export class ObjectSpaceRaymarch extends Mesh {
  private static geometry = new BoxBufferGeometry(1.0, 1.0, 1.0);
  constructor(material: ObjectSpaceRaymarchMaterial) {
    super(ObjectSpaceRaymarch.geometry, material);
  }
}