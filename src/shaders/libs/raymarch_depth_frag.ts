export const raymarch_depth_frag = `
#include <packing>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>

void main(void) {
  #include <raymarch_fragment>
  #include <raymarch_write_depth_fragment>
  #if DEPTH_PACKING == 3200
    gl_FragColor = vec4(vec3(1.0 - gl_FragDepthEXT), opacity);
  #elif DEPTH_PACKING == 3201
    gl_FragColor = packDepthToRGBA(gl_FragDepthEXT);
  #endif
}
`;