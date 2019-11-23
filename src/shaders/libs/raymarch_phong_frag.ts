export const raymarch_phong_frag = `
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <phong_material_pars_fragment>
#include <phong_get_material_pars_fragment>
#include <phong_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;