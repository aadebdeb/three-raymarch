export const physical_get_material_pars_fragment = `
ObjectSpaceRaymarchPhysicalMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {
  ObjectSpaceRaymarchPhysicalMaterial material;
  material.diffuse = diffuse;
  material.emissive = emissive;
  material.metalness = metalness;
  material.roughness = roughness;
  #ifdef REFLECTIVITY
    material.reflectivity = reflectivity;
  #endif
  #ifdef CLEARCOAT
    material.clearcoat = clearcoat;
    material.clearcoatRoughness = clearcoatRoughness;
  #endif
  return material;
}
`;