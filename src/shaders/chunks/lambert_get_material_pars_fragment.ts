export const lambert_get_material_pars_fragment = `
ObjectSpaceRaymarchLambertMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {
  ObjectSpaceRaymarchLambertMaterial material;
  material.diffuse = diffuse;
  material.emissive = emissive;
  return material;
}
`;