export const physical_color_pars_fragment = `
vec3 getColor(vec3 position, vec3 worldNormal) {
  ObjectSpaceRaymarchPhysicalMaterial raymarchMat = getMaterial(position, worldNormal);

  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));
  vec3 totalEmissiveRadiance = raymarchMat.emissive;

  // ref: lights_physical_fragment
  PhysicalMaterial material;
  material.diffuseColor = raymarchMat.diffuse * (1.0 - raymarchMat.metalness);
  material.specularRoughness = clamp(raymarchMat.roughness, 0.04, 1.0);

  #ifdef REFLECTIVITY
    material.specularColor = mix(vec3(MAXIMUM_SPECULAR_COEFFICIENT * pow2(raymarchMat.reflectivity)), raymarchMat.diffuse, raymarchMat.metalness);
  #else
    material.specularColor = mix(vec3(DEFAULT_SPECULAR_COEFFICIENT), raymarchMat.diffuse, raymarchMat.metalness);
  #endif

  #ifdef CLEARCOAT
    material.clearcoat = saturate(raymarchMat.clearcoat);
    material.clearcoatRoughness = clamp(raymarchMat.clearcoatRoughness, 0.04, 1.0);
  #endif

  // ref: lights_fragment_begin
  GeometricContext geometry;
  vec3 mvPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
  geometry.position = mvPosition;
  geometry.normal = worldNormal;
  geometry.viewDir = normalize(-mvPosition.xyz);

  IncidentLight directLight;

  #if (NUM_POINT_LIGHTS > 0) && defined(RE_Direct)
    PointLight pointLight;
    #pragma unroll_loop
    for (int i = 0; i < NUM_POINT_LIGHTS; i++) {
      pointLight = pointLights[ i ];
      getPointDirectLightIrradiance(pointLight, geometry, directLight);
      #if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)
      directLight.color *= all(bvec3( pointLight.shadow, directLight.visible, receiveShadow)) ? getPointShadow(pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar) : 1.0;
      #endif
      RE_Direct( directLight, geometry, material, reflectedLight );
    }
  #endif

  #if (NUM_SPOT_LIGHTS > 0) && defined(RE_Direct)
    SpotLight spotLight;
    #pragma unroll_loop
    for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {
      spotLight = spotLights[ i ];
      getSpotDirectLightIrradiance(spotLight, geometry, directLight);
      #if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)
      directLight.color *= all(bvec3(spotLight.shadow, directLight.visible, receiveShadow)) ? getShadow(spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ]) : 1.0;
      #endif
      RE_Direct(directLight, geometry, material, reflectedLight);
    }
  #endif

  #if (NUM_DIR_LIGHTS > 0) && defined(RE_Direct)
    DirectionalLight directionalLight;
    #pragma unroll_loop
    for (int i = 0; i < NUM_DIR_LIGHTS; i++) {
      directionalLight = directionalLights[ i ];
      getDirectionalDirectLightIrradiance(directionalLight, geometry, directLight);
      #if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS)
      directLight.color *= all(bvec3(directionalLight.shadow, directLight.visible, receiveShadow)) ? getShadow(directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ]) : 1.0;
      #endif
      RE_Direct(directLight, geometry, material, reflectedLight);
    }
  #endif

  
  #if (NUM_RECT_AREA_LIGHTS > 0) && defined(RE_Direct_RectArea)
    RectAreaLight rectAreaLight;
    #pragma unroll_loop
    for (int i = 0; i < NUM_RECT_AREA_LIGHTS; i++) {
      rectAreaLight = rectAreaLights[ i ];
      RE_Direct_RectArea(rectAreaLight, geometry, material, reflectedLight);
    }
  #endif


  #if defined( RE_IndirectDiffuse )
    vec3 iblIrradiance = vec3(0.0);
    vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);
    irradiance += getLightProbeIrradiance(lightProbe, geometry);
    #if (NUM_HEMI_LIGHTS > 0)
      #pragma unroll_loop
      for (int i = 0; i < NUM_HEMI_LIGHTS; i ++) {
        irradiance += getHemisphereLightIrradiance(hemisphereLights[ i ], geometry);
      }
    #endif
  #endif

  // ref: lights_fragment_end
  #if defined( RE_IndirectSpecular )
    vec3 radiance = vec3(0.0);
    vec3 clearcoatRadiance = vec3(0.0);
  #endif

  #if defined( RE_IndirectDiffuse )
    RE_IndirectDiffuse(irradiance, geometry, material, reflectedLight);
  #endif
  #if defined( RE_IndirectSpecular )
    RE_IndirectSpecular(radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight);
  #endif

  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;

  return outgoingLight;
}
`;