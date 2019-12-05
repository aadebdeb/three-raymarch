# three-raymarch

Raymarching Plugin for three.js

## How to Use

```js
const material = new ObjectSpaceRaymarchStandardMaterial({
  getDistanceChunk: `
    float sdSphere(vec3 p, float r) {
    return length(p) - r;
    }

    float getDistance(vec3 p) {
    p = mod(p, 1.0) - 0.5;
    return sdSphere(p, 0.4);
    }`,
  color: new Color(0x2194ce),
  emissive: new Color(0x000000),
  roughness: 0.5,
  metalness: 0.5,
});

const raymarch = new ObjectSpaceRaymarch({
material: material,
size: new Vector3(2, 2, 2)
});

const scene = new Scene();
scene.add(raymarch);
```

## Docs

https://aadebdeb.github.io/three-raymarch/docs/

## Examples

- Materials
  - ObjectSpaceRaymarchBasicMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/basic_material.html
  - ObjectSpaceRaymarchLambertMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/lambert_material.html
  - ObjectSpaceRaymarchPhongMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/phong_material.html
  - ObjectSpaceRaymarchStandardMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/standard_material.html
  - ObjectSpaceRaymarchPhysicalMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/physical_material.html
  - ObjectSpaceRaymarchNormalMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/normal_material.html
  - ObjectSpaceRaymarchDepthMaterial
    - https://aadebdeb.github.io/three-raymarch/examples/materials/depth_material.html
- Environmental Maps
  - https://aadebdeb.github.io/three-raymarch/examples/envmaps.html
- Metaballs
  - https://aadebdeb.github.io/three-raymarch/examples/metaballs.html
- OrthographicCamera
  - https://aadebdeb.github.io/three-raymarch/examples/orthographic_camera.html
