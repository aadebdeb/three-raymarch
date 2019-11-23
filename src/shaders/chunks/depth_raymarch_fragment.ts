export const depth_raymarch_fragment = `
Ray ray = convertRayFromWorldToObject(createRay());

vec2 range = getRaymarchRange(ray);
float t;
vec3 position; // for fog
if (raymarch(ray, range.x, range.y, t)) {
  position = ray.origin + t * ray.direction;
  vec4 clipPos = mvpMatrix * vec4(position, 1.0);
  gl_FragDepthEXT = (clipPos.z / clipPos.w) * 0.5 + 0.5;
  gl_FragColor = vec4(vec3(1.0 - gl_FragDepthEXT), opacity);
} else {
  discard;
}
`;