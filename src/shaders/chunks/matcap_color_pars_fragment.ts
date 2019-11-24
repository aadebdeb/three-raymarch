export const matcap_color_pars_fragment = `
vec3 getColor(vec3 position, vec3 worldNormal) {
  vec4 diffuseColor = vec4(diffuse, opacity);

  vec3 viewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  vec3 viewDir = normalize(viewPosition);
  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));
  vec3 y = cross(viewDir, x);
  vec2 uv = vec2(dot(x, worldNormal), dot(y, worldNormal)) * 0.495 + 0.5;

  #ifdef USE_MATCAP
    vec4 matcapColor = texture2D(matcap, uv);
    matcapColor = matcapTexelToLinear(matcapColor);
  #else
    vec4 matcapColor = vec4(1.0);
  #endif

  vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;

  return outgoingLight;
} 
`;