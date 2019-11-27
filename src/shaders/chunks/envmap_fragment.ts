export const envmap_fragment = `
#ifdef USE_ENVMAP

  vec3 cameraToFrag;
  if (isOrthographic) {
    cameraToFrag = normalize(vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]));
  } else {
    cameraToFrag = normalize(worldPosition - cameraPosition);
  }

  vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);

  #ifdef ENVMAP_MODE_REFLECTION
    vec3 reflectVec = reflect(cameraToFrag, worldNormal);
  #else
    vec3 reflectVec = refract(cameraToFrag, worldNormal, refractionRatio);
  #endif

  vec4 envColor = textureCube(envMap, vec3(flipEnvMap * reflectVec.x, reflectVec.yz));

  envColor = envMapTexelToLinear(envColor);

  #ifdef ENVMAP_BLENDING_MULTIPLY
    outgoingLight = mix(outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity);
  #elif defined(ENVMAP_BLENDING_MIX)
    outgoingLight = mix(outgoingLight, envColor.xyz, specularStrength * reflectivity);
  #elif defined(ENVMAP_BLENDING_ADD)
    outgoingLight += envColor.xyz * specularStrength * reflectivity;
  #endif

#endif

`;