export const raymarch_raw_frag = `
#include <packing>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <raw_color_pars_fragment>

void main(void) {
  #include <raymarch_fragment>

  gl_FragColor = getColor(position, normal);

  #include <raymarch_write_depth_fragment>
}
`;