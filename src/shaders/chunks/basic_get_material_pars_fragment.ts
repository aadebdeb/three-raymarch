export const basic_get_material_pars_fragment = `
ObjectSpaceRaymarchBasicMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {
  ObjectSpaceRaymarchBasicMaterial material;
  material.diffuse = diffuse;
  return material;
}
`;