import { WebGLRenderer, Scene, Camera, Geometry, BufferGeometry, Material, Group, Mesh, BoxBufferGeometry, Vector3 } from 'three';
import { ObjectSpaceRaymarchMaterial} from './ObjectSpaceRaymarchMaterial';
import { ObjectSpaceRaymarchBasicMaterial } from './ObjectSpaceRaymarchBasicMaterial';

export interface ObjectSpaceRaymarchParameters {
  material?: ObjectSpaceRaymarchMaterial,
  size?: Vector3,
}

/**
 * An 3D Object for object space raymarching.
 */
export class ObjectSpaceRaymarch extends Mesh {
  private static geometry = new BoxBufferGeometry(1.0, 1.0, 1.0);

  size: Vector3;
  /**
   * @override
   */
  onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: Geometry | BufferGeometry, material: Material, group: Group) => void;
  constructor({
    material = new ObjectSpaceRaymarchBasicMaterial(),
    size = new Vector3(1, 1, 1),
  }: ObjectSpaceRaymarchParameters = {}) {
    super(ObjectSpaceRaymarch.geometry, material);
    this.size = size;
    this.onBeforeRender = (_renderer, _scene, _camera, _geometry, material) => {
      (material as ObjectSpaceRaymarchMaterial).uniforms['size'].value = this.size;
    };
  }

}