export const normal_color_pars_fragment = `
vec3 getColor(vec3 position, vec3 worldNormal) {
  return packNormalToRGB(worldNormal);
}
`