import { WebGLRenderer, Scene, Camera, Geometry, BufferGeometry, Material, Group, Mesh, BoxBufferGeometry, Vector3, Matrix4 } from 'three';
import { ObjectSpaceRaymarchMaterial} from './ObjectSpaceRaymarchMaterial';

export class ObjectSpaceRaymarch extends Mesh {
  private static geometry = new BoxBufferGeometry(1.0, 1.0, 1.0);

  size: Vector3;
  /**
   * @override
   */
  onBeforeRender: (renderer: WebGLRenderer, scene: Scene, camera: Camera, geometry: Geometry | BufferGeometry, material: Material, group: Group) => void;
  private invModelMatrix: Matrix4;
  private mvpMatrix: Matrix4;
  constructor(material: ObjectSpaceRaymarchMaterial) {
      super(ObjectSpaceRaymarch.geometry, material);
    this.size = new Vector3(4.5, 2.5, 2.5);
    this.invModelMatrix = new Matrix4();
    this.mvpMatrix = new Matrix4();
    this.onBeforeRender = (_, __, camera) => {
      this.invModelMatrix.getInverse(this.matrixWorld);
      material.uniforms['invModelMatrix'].value = this.invModelMatrix;
      this.mvpMatrix.multiplyMatrices(camera.matrixWorldInverse, this.matrixWorld);
      this.mvpMatrix.premultiply(camera.projectionMatrix);
      material.uniforms['mvpMatrix'].value = this.mvpMatrix;
      material.uniforms['size'].value = this.size;
    };
  }

}