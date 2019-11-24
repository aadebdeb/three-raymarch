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

void main(void) {
  #include <raymarch_fragment>

  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  ObjectSpaceRaymarchBasicMaterial material = getMaterial(position, worldPosition, normal);

  vec3 outgoingLight = material.diffuse;

  vec3 worldNormal = normal; // TODO: 
  float specularStrength = 1.0;
  #include <envmap_fragment>

  gl_FragColor = vec4(outgoingLight, opacity);

  #include <raymarch_write_depth_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;