export const raymarch_vert = `
varying vec3 vPosition;
varying vec3 vRaymarchNormal;

uniform vec3 size;

void main(void) {
  vec3 transformed = size * vec3(position);
  vPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
  vRaymarchNormal = normalize(normalMatrix * normal);
  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
`; 