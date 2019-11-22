export const lambert_get_material_pars_fragment = `
ObjectSpaceRaymarchLambertMaterial getMaterial(vec3 position, vec3 worldNormal) {
  return ObjectSpaceRaymarchLambertMaterial(diffuse, emissive);
}
`;