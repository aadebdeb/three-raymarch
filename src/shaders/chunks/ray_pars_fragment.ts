export const ray_pars_fragment = `
struct Ray {
  vec3 origin;
  vec3 direction;
};

Ray createPerspectiveRay() {
  return Ray(
    cameraPosition,
    normalize(vPosition - cameraPosition)
  );
}

vec3 getCameraDirection() {
  // camera +z direction
  return vec3(viewMatrix[2][0], viewMatrix[2][1], viewMatrix[2][2]);
}

Ray createOrthographicRay() {
  vec3 cameraDirection = getCameraDirection();
  return Ray(
    vPosition + dot(vPosition - cameraPosition, cameraDirection) * cameraDirection,
    cameraDirection
  );
}

bool isOrthographicCamera() {
  return projectionMatrix[3][3] == 1.0;
}

Ray createRay() {
  if (isOrthographicCamera()) {
    return createOrthographicRay();
  }
  return createPerspectiveRay();
}

Ray convertRayFromWorldToObject(Ray ray) {
  mat4 invModelMatrix = invertModelMatrix(modelMatrix);
  vec3 origin = (invModelMatrix * vec4(ray.origin, 1.0)).xyz;
  vec3 direction = normalize((invModelMatrix * vec4(ray.direction, 0.0)).xyz);
  return Ray(origin, direction);
}

vec2 getRaymarchRange(Ray ray) {
  vec3 hs = 0.5 * size;
  vec2 range = vec2(0.0, 1e8);
  for (int i = 0; i < 3; i++) {
    if (ray.direction[i] == 0.0) continue;
    float t1 = (hs[i] - ray.origin[i]) / ray.direction[i];
    float t2 = (-hs[i] - ray.origin[i]) / ray.direction[i];
    range.x = max(range.x, min(t1, t2));
    range.y = min(range.y, max(t1, t2));
  }
  return range;
}
`;