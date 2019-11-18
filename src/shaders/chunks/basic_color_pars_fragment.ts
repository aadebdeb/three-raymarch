export const basic_color_pars_fragment = `
vec3 getColor(vec3 position, vec3 worldNormal) {
  ObjectSpaceRaymarchBasicMaterial material = getMaterial(position, worldNormal);
  return material.color;
}
`;