export const raymarch_write_depth_fragment = `
vec4 clipPos = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
gl_FragDepthEXT = (clipPos.z / clipPos.w) * 0.5 + 0.5;
`;