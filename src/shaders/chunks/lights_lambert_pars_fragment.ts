/**
 * @ignore
 */
export const lights_lambert_pars_fragments = `
struct LambertMaterial {
  vec3 diffuseColor;
};

void RE_Direct_Lambert(const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight) {
  float dotNL = saturate(dot(geometry.normal, directLight.direction));
  vec3 irradiance = dotNL * directLight.color;

  #ifndef PHYSICALLY_CORRECT_LIGHTS
    irradiance *= PI;
  #endif

  reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);
}

void RE_IndirectDiffuse_Lambert(const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight) {
  reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);
}

#define RE_Direct RE_Direct_Lambert
#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert
`;