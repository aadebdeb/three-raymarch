export const physical_material_pars_fragment = `
struct ObjectSpaceRaymarchPhysicalMaterial {
  vec3 diffuse;
  vec3 emissive;
  float metalness;
  float roughness;
  #ifdef REFLECTIVITY
    float reflecitvity;
  #endif
  #ifdef CLEARCOAT
    float clearcoat;
    float clearcoatRoughness;
  #endif
};
`;