export const distance_pars_fragment = `
float getDistance(vec3 p) {
  p = mod(p, 0.25) - 0.125;
  return length(p) - 0.05;
}
`;