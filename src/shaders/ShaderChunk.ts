import { raymarch_common_pars_fragment } from './chunks/raymarch_common_pars_fragment';
import { ray_pars_fragment } from './chunks/ray_pars_fragment';
import { distance_pars_fragment } from './chunks/distance_pars_fragment';
import { raymarch_pars_fragment } from './chunks/raymarch_pars_fragment';
import { raymarch_fragment } from './chunks/raymarch_fragment';
import { normal_color_pars_fragment } from './chunks/normal_color_pars_fragment';
import { basic_color_pars_fragment } from './chunks/basic_color_pars_fragment';
import { basic_get_material_pars_fragment } from './chunks/basic_get_material_pars_fragment';
import { basic_material_pars_fragment } from './chunks/basic_material_pars_fragment';
import { lambert_color_pars_fragment } from './chunks/lambert_color_pars_fragment';
import { lambert_get_material_pars_fragment } from './chunks/lambert_get_material_pars_fragment';
import { lambert_material_pars_fragment } from './chunks/lambert_material_pars_fragment';

import { raymarch_vert } from './libs/raymarch_vert';
import { raymarch_normal_frag } from './libs/raymarch_normal_frag';
import { raymarch_basic_frag } from './libs/raymarch_basic_frag';
import { raymarch_lambert_frag } from './libs/raymarch_lambert_frag';

export const ShaderChunk: {[key: string]: string} = {
  raymarch_common_pars_fragment: raymarch_common_pars_fragment,
  ray_pars_fragment: ray_pars_fragment,
  distance_pars_fragment: distance_pars_fragment,
  raymarch_pars_fragment: raymarch_pars_fragment,
  raymarch_fragment: raymarch_fragment,
  normal_color_pars_fragment: normal_color_pars_fragment,
  basic_color_pars_fragment: basic_color_pars_fragment,
  basic_get_material_pars_fragment: basic_get_material_pars_fragment,
  basic_material_pars_fragment: basic_material_pars_fragment,
  lambert_color_pars_fragment: lambert_color_pars_fragment,
  lambert_get_material_pars_fragment: lambert_get_material_pars_fragment,
  lambert_material_pars_fragment: lambert_material_pars_fragment,

  raymarch_vert: raymarch_vert,
  raymarch_normal_frag: raymarch_normal_frag,
  raymarch_basic_frag: raymarch_basic_frag,
  raymarch_lambert_frag: raymarch_lambert_frag,
};