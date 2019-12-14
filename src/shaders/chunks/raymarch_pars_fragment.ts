/**
 * @ignore
 */
export const raymarch_pars_fragment = `
vec3 getNormal(vec3 p) {
  vec2 e = vec2(differentiateDistance, 0.0);
  return normalize(vec3(
    getDistance(p + e.xyy) - getDistance(p - e.xyy),
    getDistance(p + e.yxy) - getDistance(p - e.yxy),
    getDistance(p + e.yyx) - getDistance(p - e.yyx)
  ));
}

bool raymarch(Ray ray, float tmin, float tmax, out float t) {
  t = tmin;
  vec3 p = ray.origin + t * ray.direction;
  for (int i = 0; i < MAX_RAYMARCH_ITERATION; i++) {
    float d = distanceScale * getDistance(p);
    if (d <= 0.0) {
      return true;
    }
    t += d;
    if (t > tmax) break;
    p += d * ray.direction;
    if (d < hitDistance) {
      return true;
    }
  }
  return false;
}
`;