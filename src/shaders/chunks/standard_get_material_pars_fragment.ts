export const standard_get_material_pars_fragment = `
ObjectSpaceRaymarchStandardMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {
  return ObjectSpaceRaymarchStandardMaterial(diffuse, emissive, metalness, roughness);
}
`;