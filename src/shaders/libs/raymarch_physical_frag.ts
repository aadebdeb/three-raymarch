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
#include <physical_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;