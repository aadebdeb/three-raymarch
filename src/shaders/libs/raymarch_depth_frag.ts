export const raymarch_depth_frag = `
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>

void main(void) {
  #include <depth_raymarch_fragment>
}
`;