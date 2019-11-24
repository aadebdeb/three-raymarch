export const raymarch_basic_frag = `
uniform vec3 diffuse;

#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <basic_material_pars_fragment>
#include <basic_get_material_pars_fragment>
#include <basic_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;