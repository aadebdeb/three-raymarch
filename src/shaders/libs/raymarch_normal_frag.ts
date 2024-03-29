/**
 * @ignore
 */
export const raymarch_normal_frag = `
#include <packing>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>

void main(void) {
  #include <raymarch_fragment>

  gl_FragColor = vec4(packNormalToRGB(normal), opacity);

  #include <raymarch_write_depth_fragment>
}
`;