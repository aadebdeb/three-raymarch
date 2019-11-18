export const raymarch_common_pars_fragment: string = `
#extension GL_EXT_frag_depth : enable

varying vec3 vPosition;
varying vec3 vRaymarchNormal;

uniform mat4 modelMatrix;
uniform mat4 invModelMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 mvpMatrix;
uniform mat3 normalMatrix;
uniform vec3 size;
uniform float hitDistance;
uniform float differentiateDistance;
uniform float distanceScale;
`;