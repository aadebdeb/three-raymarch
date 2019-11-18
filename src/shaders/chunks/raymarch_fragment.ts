export const raymarch_fragment = `
Ray ray = convertRayFromWorldToObject(Ray(
  cameraPosition,
  normalize(vPosition - cameraPosition)
));

vec2 range = getRaymarchRange(ray);
float t;
vec3 position; // for fog
if (raymarch(ray, range.x, range.y, t)) {
  position = ray.origin + t * ray.direction;
  vec3 normal = t == range.x ? normalize(vRaymarchNormal) : normalMatrix * getNormal(position);
  gl_FragColor = vec4(getColor(position, normal), 1.0);
  vec4 clipPos = mvpMatrix * vec4(position, 1.0);
  gl_FragDepthEXT = (clipPos.z / clipPos.w) * 0.5 + 0.5;
} else {
  discard;
}
`;