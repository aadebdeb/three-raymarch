/**
 * @ignore
 */
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

void main(void) {
  #include <raymarch_fragment>

  vec4 diffuseColor = vec4(diffuse, opacity);

  vec3 viewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  vec3 viewDir = normalize(viewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5;

  #ifdef USE_MATCAP
  vec4 matcapColor = texture2D(matcap, uv);
  matcapColor = matcapTexelToLinear(matcapColor);
  #else
    vec4 matcapColor = vec4(1.0);
  #endif

  vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);

  #include <raymarch_write_depth_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;