export const raymarch_fragment = `
Ray ray = convertRayFromWorldToObject(createRay());

vec2 range = getRaymarchRange(ray);
float t;
if (!raymarch(ray, range.x, range.y, t)) {
  discard;
  return;
}
vec3 position = ray.origin + t * ray.direction;
vec3 normal = normalMatrix * (t == range.x ? normalize(vRaymarchNormal) : getNormal(position));
`;