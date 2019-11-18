export const basic_get_material_pars_fragment = `
uniform vec3 diffuse;
ObjectSpaceRaymarchBasicMaterial getMaterial(vec3 position, vec3 worldNormal) {
  return ObjectSpaceRaymarchBasicMaterial(diffuse);
}
`;