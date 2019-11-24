import { raymarch_common_pars_fragment } from './chunks/raymarch_common_pars_fragment';
import { ray_pars_fragment } from './chunks/ray_pars_fragment';
import { distance_pars_fragment } from './chunks/distance_pars_fragment';
import { raymarch_pars_fragment } from './chunks/raymarch_pars_fragment';
import { raymarch_fragment } from './chunks/raymarch_fragment';
import { raymarch_write_depth_fragment } from './chunks/raymarch_write_depth_fragment';
import { basic_get_material_pars_fragment } from './chunks/basic_get_material_pars_fragment';
import { basic_material_pars_fragment } from './chunks/basic_material_pars_fragment';
import { lambert_get_material_pars_fragment } from './chunks/lambert_get_material_pars_fragment';
import { lambert_material_pars_fragment } from './chunks/lambert_material_pars_fragment';
import { phong_get_material_pars_fragment } from './chunks/phong_get_material_pars_fragment';
import { phong_material_pars_fragment } from './chunks/phong_material_pars_fragment';
import { physical_get_material_pars_fragment } from './chunks/physical_get_material_pars_fragment';
import { physical_material_pars_fragment } from './chunks/physical_material_pars_fragment';
import { raw_color_pars_fragment } from './chunks/raw_color_pars_fragment';
import { raymarch_fog_pars_fragment } from './chunks/raymarch_fog_pars_fragment';
import { raymarch_fog_fragment } from './chunks/raymarch_fog_fragment';
import { envmap_fragment } from './chunks/envmap_fragment';
import { envmap_pars_fragment } from './chunks/envmap_pars_fragment';
import { lights_lambert_fragment } from './chunks/lights_lambert_fragment';
import { lights_lambert_pars_fragments } from './chunks/lights_lambert_pars_fragment';
import { lights_fragment_begin } from './chunks/lights_fragment_begin';
import { lights_fragment_end } from './chunks/lights_fragment_end';

import { raymarch_vert } from './libs/raymarch_vert';
import { raymarch_normal_frag } from './libs/raymarch_normal_frag';
import { raymarch_basic_frag } from './libs/raymarch_basic_frag';
import { raymarch_lambert_frag } from './libs/raymarch_lambert_frag';
import { raymarch_phong_frag } from './libs/raymarch_phong_frag';
import { raymarch_physical_frag } from './libs/raymarch_physical_frag';
import { raymarch_depth_frag } from './libs/raymarch_depth_frag';
import { raymarch_matcap_frag } from './libs/raymarch_matcap_frag';
import { raymarch_raw_frag } from './libs/raymarch_raw_frag';

export const ShaderChunk: {[key: string]: string} = {
  raymarch_common_pars_fragment: raymarch_common_pars_fragment,
  ray_pars_fragment: ray_pars_fragment,
  distance_pars_fragment: distance_pars_fragment,
  raymarch_pars_fragment: raymarch_pars_fragment,
  raymarch_fragment: raymarch_fragment,
  raymarch_write_depth_fragment: raymarch_write_depth_fragment,
  basic_get_material_pars_fragment: basic_get_material_pars_fragment,
  basic_material_pars_fragment: basic_material_pars_fragment,
  lambert_get_material_pars_fragment: lambert_get_material_pars_fragment,
  lambert_material_pars_fragment: lambert_material_pars_fragment,
  phong_get_material_pars_fragment: phong_get_material_pars_fragment,
  phong_material_pars_fragment: phong_material_pars_fragment,
  physical_get_material_pars_fragment: physical_get_material_pars_fragment,
  physical_material_pars_fragment: physical_material_pars_fragment,
  raw_color_pars_fragment: raw_color_pars_fragment,
  raymarch_fog_pars_fragment: raymarch_fog_pars_fragment,
  raymarch_fog_fragment: raymarch_fog_fragment,
  envmap_fragment: envmap_fragment,
  envmap_pars_fragment: envmap_pars_fragment,
  lights_lambert_fragment: lights_lambert_fragment,
  lights_lambert_pars_fragment: lights_lambert_pars_fragments,
  lights_fragment_begin: lights_fragment_begin,
  light_fragment_end: lights_fragment_end,

  raymarch_vert: raymarch_vert,
  raymarch_normal_frag: raymarch_normal_frag,
  raymarch_basic_frag: raymarch_basic_frag,
  raymarch_lambert_frag: raymarch_lambert_frag,
  raymarch_phong_frag: raymarch_phong_frag,
  raymarch_physical_frag: raymarch_physical_frag,
  raymarch_depth_frag: raymarch_depth_frag,
  raymarch_matcap_frag: raymarch_matcap_frag,
  raymarch_raw_frag: raymarch_raw_frag,
};