/**
 * @ignore
 */
export const raymarch_common_pars_fragment: string = `
varying vec3 vPosition;
varying vec3 vRaymarchNormal;

uniform float opacity;
uniform vec3 cameraDirection;
uniform mat4 modelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform mat3 normalMatrix;
uniform vec3 size;
uniform float hitDistance;
uniform float differentiateDistance;
uniform float distanceScale;

mat4 invertModelMatrix(mat4 matrix) {
  // matrix must not include scale
  return mat4(
    matrix[0][0], matrix[1][0], matrix[2][0], 0,
    matrix[0][1], matrix[1][1], matrix[2][1], 0,
    matrix[0][2], matrix[1][2], matrix[2][2], 0,
    -matrix[3][0] * matrix[0][0] -matrix[3][1] * matrix[0][1] - matrix[3][2] * matrix[0][2],
    -matrix[3][0] * matrix[1][0] -matrix[3][1] * matrix[1][1] - matrix[3][2] * matrix[1][2],
    -matrix[3][0] * matrix[2][0] -matrix[3][1] * matrix[2][1] - matrix[3][2] * matrix[2][2],
    1
  );
}
`;