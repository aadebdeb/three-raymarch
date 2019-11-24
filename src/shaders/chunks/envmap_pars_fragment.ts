export const envmap_pars_fragment = `
#ifdef USE_ENVMAP

  #ifndef REFLECTIVITY
    uniform float reflectivity;
  #endif
  uniform float refractionRatio;

#endif
`