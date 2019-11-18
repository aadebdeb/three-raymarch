export const raymarch_fog_pars_fragment = `
#ifdef USE_FOG

  uniform vec3 fogColor;

  #ifdef FOG_EXP2

    uniform float fogDensity;

  #else

    uniform float fogNear;
    uniform float fogFar;

  #endif

#endif
`;