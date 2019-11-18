export const raymarch_lambert_frag = `
#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars_begin>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <lambert_material_pars_fragment>
#include <lambert_get_material_pars_fragment>
#include <lambert_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;