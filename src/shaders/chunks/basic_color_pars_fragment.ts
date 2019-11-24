export const basic_color_pars_fragment = `
vec3 getColor(vec3 position, vec3 worldNormal) {
  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
  ObjectSpaceRaymarchBasicMaterial material = getMaterial(position, worldPosition, worldNormal);

  vec3 outgoingLight = material.color;

  #include <envmap_fragment>

  return outgoingLight;
}
`;