export const raymarch_lambert_frag = `
uniform vec3 diffuse;
uniform vec3 emissive;

#include <common>
#include <packing>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_lambert_pars_fragment>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <lambert_material_pars_fragment>
#include <lambert_get_material_pars_fragment>

void main(void) {
  #include <raymarch_fragment>

  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  ObjectSpaceRaymarchLambertMaterial lambertMaterial = getMaterial(position, worldPosition, normal);

  vec4 diffuseColor = vec4(lambertMaterial.diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = lambertMaterial.emissive;

  vec3 worldNormal = normal;
  #include <lights_lambert_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_end>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);

  #include <raymarch_write_depth_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;