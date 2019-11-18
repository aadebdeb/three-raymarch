export const phong_get_material_pars_fragment = `
ObjectSpaceRaymarchPhongMaterial getMaterial(vec3 position, vec3 worldNormal) {
  return ObjectSpaceRaymarchPhongMaterial(diffuse, emissive, specular, shininess);
}
`;