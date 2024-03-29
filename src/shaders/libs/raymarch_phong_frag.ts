/**
 * @ignore
 */
export const raymarch_phong_frag = `
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;

#include <common>
#include <packing>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <raymarch_fog_pars_fragment>
#include <raymarch_common_pars_fragment>
#include <ray_pars_fragment>
#include <distance_pars_fragment>
#include <raymarch_pars_fragment>
#include <phong_material_pars_fragment>
#include <phong_get_material_pars_fragment>

void main(void) {
  #include <raymarch_fragment>

  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  ObjectSpaceRaymarchPhongMaterial phongMaterial = getMaterial(position, worldPosition, normal);

  vec4 diffuseColor = vec4(phongMaterial.diffuse, opacity);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = phongMaterial.emissive;

  vec3 specular = phongMaterial.specular;
  float shininess = phongMaterial.shininess;
  float specularStrength = 1.0;

  #include <lights_phong_fragment>
  #include <lights_fragment_begin>
  #include <lights_fragment_end>

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

  #include <envmap_fragment>

  gl_FragColor = vec4(outgoingLight, diffuseColor.a);

  #include <raymarch_write_depth_fragment>
  #include <tonemapping_fragment>
  #include <raymarch_fog_fragment>
}
`;