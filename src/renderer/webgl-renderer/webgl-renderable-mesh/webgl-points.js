import {WebGLRenderableMesh} from './webgl-renderable-mesh';
import {GL} from '../../luma.gl2/webgl2';

export default class WebGLPoints extends WebGLRenderableMesh {
  constructor({points, renderer}) {
    super({mesh: points, renderer});
  }

  render(cameraUniforms) {
    super.render(cameraUniforms);
    if (this._uint32Indices === true) {
      this.renderer.glContext.drawElements(GL.POINTS, this._numberOfVertices, GL.UNSIGNED_INT, 0);
    } else {
      this.renderer.glContext.drawElements(GL.POINTS, this._numberOfVertices, GL.UNSIGNED_SHORT, 0);
    }
  }
}