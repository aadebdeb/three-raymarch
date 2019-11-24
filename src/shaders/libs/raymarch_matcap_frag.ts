export const raymarch_matcap_frag = `
uniform vec3 diffuse;
uniform sampler2D matcap;

#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <matcap_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;