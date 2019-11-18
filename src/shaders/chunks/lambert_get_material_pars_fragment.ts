export const lambert_get_material_pars_fragment = `
uniform vec3 diffuse;
uniform vec3 emissive;
ObjectSpaceRaymarchLambertMaterial getMaterial(vec3 position, vec3 worldNormal) {
  return ObjectSpaceRaymarchLambertMaterial(diffuse, emissive);
}
`;