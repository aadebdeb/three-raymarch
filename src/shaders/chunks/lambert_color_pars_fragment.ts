export const lambert_color_pars_fragment = `
void getLights(vec3 position, vec3 worldNormal, out vec3 lightFront, out vec3 indirectFront) {
  GeometricContext geometry;
  vec3 mvPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  geometry.position = mvPosition;
  geometry.normal = worldNormal;
  geometry.viewDir = normalize(-mvPosition.xyz);

  lightFront = vec3(0.0);
  indirectFront = vec3(0.0);

  IncidentLight directLight;
  float dotNL;
  vec3 directLightColor_Diffuse;

  #if NUM_POINT_LIGHTS > 0
    for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
      getPointDirectLightIrradiance(pointLights[ i ], geometry, directLight);
      dotNL = dot(geometry.normal, directLight.direction);
      directLightColor_Diffuse = PI * directLight.color;
      lightFront += saturate( dotNL ) * directLightColor_Diffuse;
	}
  #endif

  #if NUM_SPOT_LIGHTS > 0
  for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
    getSpotDirectLightIrradiance(spotLights[ i ], geometry, directLight);
    dotNL = dot(geometry.normal, directLight.direction);
    directLightColor_Diffuse = PI * directLight.color;
    lightFront += saturate(dotNL) * directLightColor_Diffuse;
  }
  #endif

  #if NUM_DIR_LIGHTS > 0
    for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
      getDirectionalDirectLightIrradiance(directionalLights[ i ], geometry, directLight);
      dotNL = dot(geometry.normal, directLight.direction);
      directLightColor_Diffuse = PI * directLight.color;
      lightFront += saturate(dotNL) * directLightColor_Diffuse;
    }
  #endif

  #if NUM_HEMI_LIGHTS > 0
  for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
    indirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );
  }
  #endif
}

vec3 getColor(vec3 position, vec3 worldNormal) {
  ObjectSpaceRaymarchLambertMaterial material = getMaterial(position, worldNormal);

  vec3 lightFront, indirectFront;
  getLights(position, worldNormal, lightFront, indirectFront);

  vec4 diffuseColor = vec4(material.color, 1.0);
  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = material.emissive;

  reflectedLight.indirectDiffuse = getAmbientLightIrradiance(ambientLightColor);

  reflectedLight.indirectDiffuse += indirectFront;

  reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );
  reflectedLight.directDiffuse = lightFront;
  reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert(diffuseColor.rgb);

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

  return outgoingLight;
}
`;