export const raymarch_physical_frag = `
#ifdef PHYSICAL
  #define REFLECTIVITY
  #define CLEARCOAT
#endif

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float metalness;
uniform float roughness;

#ifdef REFLECTIVITY
  uniform float reflectivity;
#endif

#ifdef CLEARCOAT
  uniform float clearcoat;
  uniform float clearcoatRoughness;
#endif

#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_physical_pars_fragment>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <physical_material_pars_fragment>
#include <physical_get_material_pars_fragment>

void main(void) {
  #include <raymarch_fragment>

  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  ObjectSpaceRaymarchPhysicalMaterial physicalMaterial = getMaterial(position, worldPosition, normal);

  vec4 diffuseColor = vec4(physicalMaterial.diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = physicalMaterial.emissive;

  float roughnessFactor = physicalMaterial.roughness;
  float metalnessFactor = physicalMaterial.metalness;
  #ifdef REFLECTIVITY
    float reflectivity = physicalMaterial.reflectivity;
  #endif
  #ifdef CLEARCOAT
    float clearcoat = physicalMaterial.clearcoat;
    float clearcoatRoughness = physicalMaterial.clearcoatRoughness;
  #endif

  vec3 worldNormal = normal;
  #include <lights_physical_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_end>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);

  #include <raymarch_write_depth_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;