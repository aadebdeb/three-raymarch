(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["THREE_RAYMARCH"] = factory();
	else
		root["THREE_RAYMARCH"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: ACESFilmicToneMapping, AddEquation, AddOperation, AdditiveBlending, AlphaFormat, AlwaysDepth, AlwaysStencilFunc, AmbientLight, AmbientLightProbe, AnimationClip, AnimationLoader, AnimationMixer, AnimationObjectGroup, AnimationUtils, ArcCurve, ArrayCamera, ArrowHelper, Audio, AudioAnalyser, AudioContext, AudioListener, AudioLoader, AxesHelper, AxisHelper, BackSide, BasicDepthPacking, BasicShadowMap, BinaryTextureLoader, Bone, BooleanKeyframeTrack, BoundingBoxHelper, Box2, Box3, Box3Helper, BoxBufferGeometry, BoxGeometry, BoxHelper, BufferAttribute, BufferGeometry, BufferGeometryLoader, ByteType, Cache, Camera, CameraHelper, CanvasRenderer, CanvasTexture, CatmullRomCurve3, CineonToneMapping, CircleBufferGeometry, CircleGeometry, ClampToEdgeWrapping, Clock, ClosedSplineCurve3, Color, ColorKeyframeTrack, CompressedTexture, CompressedTextureLoader, ConeBufferGeometry, ConeGeometry, CubeCamera, CubeGeometry, CubeReflectionMapping, CubeRefractionMapping, CubeTexture, CubeTextureLoader, CubeUVReflectionMapping, CubeUVRefractionMapping, CubicBezierCurve, CubicBezierCurve3, CubicInterpolant, CullFaceBack, CullFaceFront, CullFaceFrontBack, CullFaceNone, Curve, CurvePath, CustomBlending, CylinderBufferGeometry, CylinderGeometry, Cylindrical, DataTexture, DataTexture2DArray, DataTexture3D, DataTextureLoader, DecrementStencilOp, DecrementWrapStencilOp, DefaultLoadingManager, DepthFormat, DepthStencilFormat, DepthTexture, DirectionalLight, DirectionalLightHelper, DirectionalLightShadow, DiscreteInterpolant, DodecahedronBufferGeometry, DodecahedronGeometry, DoubleSide, DstAlphaFactor, DstColorFactor, DynamicBufferAttribute, DynamicCopyUsage, DynamicDrawUsage, DynamicReadUsage, EdgesGeometry, EdgesHelper, EllipseCurve, EqualDepth, EqualStencilFunc, EquirectangularReflectionMapping, EquirectangularRefractionMapping, Euler, EventDispatcher, ExtrudeBufferGeometry, ExtrudeGeometry, Face3, Face4, FaceColors, FaceNormalsHelper, FileLoader, FlatShading, Float32Attribute, Float32BufferAttribute, Float64Attribute, Float64BufferAttribute, FloatType, Fog, FogExp2, Font, FontLoader, FrontFaceDirectionCCW, FrontFaceDirectionCW, FrontSide, Frustum, GammaEncoding, Geometry, GeometryUtils, GreaterDepth, GreaterEqualDepth, GreaterEqualStencilFunc, GreaterStencilFunc, GridHelper, Group, HalfFloatType, HemisphereLight, HemisphereLightHelper, HemisphereLightProbe, IcosahedronBufferGeometry, IcosahedronGeometry, ImageBitmapLoader, ImageLoader, ImageUtils, ImmediateRenderObject, IncrementStencilOp, IncrementWrapStencilOp, InstancedBufferAttribute, InstancedBufferGeometry, InstancedInterleavedBuffer, InstancedMesh, Int16Attribute, Int16BufferAttribute, Int32Attribute, Int32BufferAttribute, Int8Attribute, Int8BufferAttribute, IntType, InterleavedBuffer, InterleavedBufferAttribute, Interpolant, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, InvertStencilOp, JSONLoader, KeepStencilOp, KeyframeTrack, LOD, LatheBufferGeometry, LatheGeometry, Layers, LensFlare, LessDepth, LessEqualDepth, LessEqualStencilFunc, LessStencilFunc, Light, LightProbe, LightProbeHelper, LightShadow, Line, Line3, LineBasicMaterial, LineCurve, LineCurve3, LineDashedMaterial, LineLoop, LinePieces, LineSegments, LineStrip, LinearEncoding, LinearFilter, LinearInterpolant, LinearMipMapLinearFilter, LinearMipMapNearestFilter, LinearMipmapLinearFilter, LinearMipmapNearestFilter, LinearToneMapping, Loader, LoaderUtils, LoadingManager, LogLuvEncoding, LoopOnce, LoopPingPong, LoopRepeat, LuminanceAlphaFormat, LuminanceFormat, MOUSE, Material, MaterialLoader, Math, Matrix3, Matrix4, MaxEquation, Mesh, MeshBasicMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshFaceMaterial, MeshLambertMaterial, MeshMatcapMaterial, MeshNormalMaterial, MeshPhongMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshToonMaterial, MinEquation, MirroredRepeatWrapping, MixOperation, MultiMaterial, MultiplyBlending, MultiplyOperation, NearestFilter, NearestMipMapLinearFilter, NearestMipMapNearestFilter, NearestMipmapLinearFilter, NearestMipmapNearestFilter, NeverDepth, NeverStencilFunc, NoBlending, NoColors, NoToneMapping, NormalBlending, NotEqualDepth, NotEqualStencilFunc, NumberKeyframeTrack, Object3D, ObjectLoader, ObjectSpaceNormalMap, OctahedronBufferGeometry, OctahedronGeometry, OneFactor, OneMinusDstAlphaFactor, OneMinusDstColorFactor, OneMinusSrcAlphaFactor, OneMinusSrcColorFactor, OrthographicCamera, PCFShadowMap, PCFSoftShadowMap, ParametricBufferGeometry, ParametricGeometry, Particle, ParticleBasicMaterial, ParticleSystem, ParticleSystemMaterial, Path, PerspectiveCamera, Plane, PlaneBufferGeometry, PlaneGeometry, PlaneHelper, PointCloud, PointCloudMaterial, PointLight, PointLightHelper, Points, PointsMaterial, PolarGridHelper, PolyhedronBufferGeometry, PolyhedronGeometry, PositionalAudio, PositionalAudioHelper, PropertyBinding, PropertyMixer, QuadraticBezierCurve, QuadraticBezierCurve3, Quaternion, QuaternionKeyframeTrack, QuaternionLinearInterpolant, REVISION, RGBADepthPacking, RGBAFormat, RGBA_ASTC_10x10_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGBDEncoding, RGBEEncoding, RGBEFormat, RGBFormat, RGBM16Encoding, RGBM7Encoding, RGB_ETC1_Format, RGB_PVRTC_2BPPV1_Format, RGB_PVRTC_4BPPV1_Format, RGB_S3TC_DXT1_Format, RawShaderMaterial, Ray, Raycaster, RectAreaLight, RectAreaLightHelper, RedFormat, ReinhardToneMapping, RepeatWrapping, ReplaceStencilOp, ReverseSubtractEquation, RingBufferGeometry, RingGeometry, Scene, SceneUtils, ShaderChunk, ShaderLib, ShaderMaterial, ShadowMaterial, Shape, ShapeBufferGeometry, ShapeGeometry, ShapePath, ShapeUtils, ShortType, Skeleton, SkeletonHelper, SkinnedMesh, SmoothShading, Sphere, SphereBufferGeometry, SphereGeometry, Spherical, SphericalHarmonics3, SphericalReflectionMapping, Spline, SplineCurve, SplineCurve3, SpotLight, SpotLightHelper, SpotLightShadow, Sprite, SpriteMaterial, SrcAlphaFactor, SrcAlphaSaturateFactor, SrcColorFactor, StaticCopyUsage, StaticDrawUsage, StaticReadUsage, StereoCamera, StreamCopyUsage, StreamDrawUsage, StreamReadUsage, StringKeyframeTrack, SubtractEquation, SubtractiveBlending, TOUCH, TangentSpaceNormalMap, TetrahedronBufferGeometry, TetrahedronGeometry, TextBufferGeometry, TextGeometry, Texture, TextureLoader, TorusBufferGeometry, TorusGeometry, TorusKnotBufferGeometry, TorusKnotGeometry, Triangle, TriangleFanDrawMode, TriangleStripDrawMode, TrianglesDrawMode, TubeBufferGeometry, TubeGeometry, UVMapping, Uint16Attribute, Uint16BufferAttribute, Uint32Attribute, Uint32BufferAttribute, Uint8Attribute, Uint8BufferAttribute, Uint8ClampedAttribute, Uint8ClampedBufferAttribute, Uncharted2ToneMapping, Uniform, UniformsLib, UniformsUtils, UnsignedByteType, UnsignedInt248Type, UnsignedIntType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedShortType, VSMShadowMap, Vector2, Vector3, Vector4, VectorKeyframeTrack, Vertex, VertexColors, VertexNormalsHelper, VideoTexture, WebGLMultisampleRenderTarget, WebGLRenderTarget, WebGLRenderTargetCube, WebGLRenderer, WebGLUtils, WireframeGeometry, WireframeHelper, WrapAroundEnding, XHRLoader, ZeroCurvatureEnding, ZeroFactor, ZeroSlopeEnding, ZeroStencilOp, sRGBEncoding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/ObjectSpaceRaymarch.ts":
/*!************************************!*\
  !*** ./src/ObjectSpaceRaymarch.ts ***!
  \************************************/
/*! exports provided: ObjectSpaceRaymarch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarch\", function() { return ObjectSpaceRaymarch; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchBasicMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchBasicMaterial */ \"./src/ObjectSpaceRaymarchBasicMaterial.ts\");\n\n\n/**\n * An 3D Object for object space raymarching.\n */\nclass ObjectSpaceRaymarch extends three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"] {\n    constructor({ material = new _ObjectSpaceRaymarchBasicMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchBasicMaterial\"](), size = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](1, 1, 1), } = {}) {\n        super(ObjectSpaceRaymarch.geometry, material);\n        this.size = size;\n        this.invModelMatrix = new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]();\n        this.mvpMatrix = new three__WEBPACK_IMPORTED_MODULE_0__[\"Matrix4\"]();\n        this.onBeforeRender = (_, __, camera) => {\n            this.invModelMatrix.getInverse(this.matrixWorld);\n            material.uniforms['invModelMatrix'].value = this.invModelMatrix;\n            this.mvpMatrix.multiplyMatrices(camera.matrixWorldInverse, this.matrixWorld);\n            this.mvpMatrix.premultiply(camera.projectionMatrix);\n            material.uniforms['mvpMatrix'].value = this.mvpMatrix;\n            material.uniforms['size'].value = this.size;\n            const isOrthographic = !!camera.isOrthographicCamera;\n            material.uniforms['isOrthographic'].value = isOrthographic;\n            material.uniforms['cameraDirection'].value = new three__WEBPACK_IMPORTED_MODULE_0__[\"Vector3\"](0, 0, 1).applyMatrix4(camera.matrixWorld).normalize();\n        };\n    }\n}\nObjectSpaceRaymarch.geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxBufferGeometry\"](1.0, 1.0, 1.0);\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarch.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchBasicMaterial.ts":
/*!*************************************************!*\
  !*** ./src/ObjectSpaceRaymarchBasicMaterial.ts ***!
  \*************************************************/
/*! exports provided: ObjectSpaceRaymarchBasicMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchBasicMaterial\", function() { return ObjectSpaceRaymarchBasicMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n\n/**\n * A material for object space raymarching equivalent to MeshBasicMaterial.\n */\nclass ObjectSpaceRaymarchBasicMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        if (parameters.getMaterialChunk) {\n            overrideChunks['basic_get_material_pars_fragment'] = parameters.getMaterialChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__[\"RaymarchShaderChunk\"]['raymarch_basic_frag'], overrideChunks, Object.assign({}, parameters, {\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].envmap,\n                parameters.uniforms ? parameters.uniforms : {},\n                {\n                    'diffuse': { value: parameters.color ? parameters.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                    // override UniformsLib.envmap\n                    'envMap': { value: parameters.envMap ? parameters.envMap : null },\n                    'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },\n                    'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },\n                },\n            ]),\n        }));\n        this.envMap = parameters.envMap ? parameters.envMap : null;\n        this.combine = parameters.combine ? parameters.combine : three__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyOperation\"];\n        this.fog = true;\n    }\n    /** Color of the material. */\n    get color() {\n        return this.uniforms['diffuse'].value;\n    }\n    set color(color) {\n        this.uniforms['diffuse'].value = color.clone();\n    }\n    /** The environment map. */\n    get envMap() {\n        return this.uniforms['envMap'].value;\n    }\n    set envMap(envMap) {\n        this.uniforms['envMap'].value = envMap;\n    }\n    /**\n     * How much the environment map affects the surface.\n     */\n    get reflectivity() {\n        return this.uniforms['reflectivity'].value;\n    }\n    set reflectivity(reflectivity) {\n        this.uniforms['reflectivity'].value = reflectivity;\n    }\n    /**\n     * The index of refraction.\n     */\n    get refractionRatio() {\n        return this.uniforms['refractionRatio'].value;\n    }\n    set refractionRatio(refractionRatio) {\n        this.uniforms['refractionRatio'].value = refractionRatio;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchBasicMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchDepthMaterial.ts":
/*!*************************************************!*\
  !*** ./src/ObjectSpaceRaymarchDepthMaterial.ts ***!
  \*************************************************/
/*! exports provided: ObjectSpaceRaymarchDepthMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchDepthMaterial\", function() { return ObjectSpaceRaymarchDepthMaterial; });\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n;\n/**\n * A material for object space raymarching equivalent to MeshDepthMaterial.\n */\nclass ObjectSpaceRaymarchDepthMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__[\"RaymarchShaderChunk\"]['raymarch_depth_frag'], overrideChunks, parameters);\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchDepthMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchLambertMaterial.ts":
/*!***************************************************!*\
  !*** ./src/ObjectSpaceRaymarchLambertMaterial.ts ***!
  \***************************************************/
/*! exports provided: ObjectSpaceRaymarchLambertMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchLambertMaterial\", function() { return ObjectSpaceRaymarchLambertMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n\n/**\n * A material for object space raymarching equivalent to MeshLambertMaterial.\n */\nclass ObjectSpaceRaymarchLambertMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        if (parameters.getMaterialChunk) {\n            overrideChunks['lambert_get_material_pars_fragment'] = parameters.getMaterialChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__[\"RaymarchShaderChunk\"]['raymarch_lambert_frag'], overrideChunks, Object.assign({}, parameters, {\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                parameters.uniforms ? parameters.uniforms : {},\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].lights,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].envmap,\n                {\n                    'diffuse': { value: parameters.color ? parameters.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                    'emissive': { value: parameters.emissive ? parameters.emissive : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x000000) },\n                    // override UniformsLib.envmap\n                    'envMap': { value: parameters.envMap ? parameters.envMap : null },\n                    'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },\n                    'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },\n                }\n            ]),\n        }));\n        this.envMap = parameters.envMap ? parameters.envMap : null;\n        this.combine = parameters.combine ? parameters.combine : three__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyOperation\"];\n        this.lights = true;\n        this.fog = true;\n    }\n    /** Color of the material. */\n    get color() {\n        return this.uniforms['diffuse'].value;\n    }\n    set color(color) {\n        this.uniforms['diffuse'].value = color.clone();\n    }\n    get emissive() {\n        return this.uniforms['emissive'].value;\n    }\n    /** Emissive color of the material. */\n    set emissive(emissive) {\n        this.uniforms['emissive'].value = emissive.clone();\n    }\n    get envMap() {\n        return this.uniforms['envMap'].value;\n    }\n    set envMap(envMap) {\n        this.uniforms['envMap'].value = envMap;\n        this.needsUpdate = true;\n    }\n    get reflectivity() {\n        return this.uniforms['reflectivity'].value;\n    }\n    set reflectivity(reflectivity) {\n        this.uniforms['reflectivity'].value = reflectivity;\n    }\n    get refractionRatio() {\n        return this.uniforms['refractionRatio'].value;\n    }\n    set refractionRatio(refractionRatio) {\n        this.uniforms['refractionRatio'].value = refractionRatio;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchLambertMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchMatcapMaterial.ts":
/*!**************************************************!*\
  !*** ./src/ObjectSpaceRaymarchMatcapMaterial.ts ***!
  \**************************************************/
/*! exports provided: ObjectSpaceRaymarchMatcapMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchMatcapMaterial\", function() { return ObjectSpaceRaymarchMatcapMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n\n/**\n * A material for object space raymarching equivalent to MeshMatcapMaterial.\n */\nclass ObjectSpaceRaymarchMatcapMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__[\"RaymarchShaderChunk\"]['raymarch_matcap_frag'], overrideChunks, Object.assign({}, parameters, {\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n                parameters.uniforms ? parameters.uniforms : {},\n                {\n                    'diffuse': { value: parameters.color ? parameters.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                    'matcap': { value: parameters.matcap ? parameters.matcap : null },\n                },\n            ]),\n        }));\n        if (parameters.matcap) {\n            this.matcap = parameters.matcap;\n        }\n    }\n    /** Color of the material. */\n    get color() {\n        return this.uniforms['diffuse'].value;\n    }\n    set color(color) {\n        this.uniforms['diffuse'].value = color.clone();\n    }\n    /** The matacap map. */\n    get matcap() {\n        return this.uniforms['matcap'].value;\n    }\n    /**\n     * The matpcap map.\n     * #needsUpdate must be set true to apply the change.\n     */\n    set matcap(matcap) {\n        this.uniforms['matcap'].value = matcap;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchMatcapMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchMaterial.ts":
/*!********************************************!*\
  !*** ./src/ObjectSpaceRaymarchMaterial.ts ***!
  \********************************************/
/*! exports provided: ObjectSpaceRaymarchMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchMaterial\", function() { return ObjectSpaceRaymarchMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\nconst INCLUDE_PATTERN = /^[ \\t]*#include +<([\\w\\d./]+)>/gm;\nfunction resolveIncludes(fragmentShader, overrideChunks) {\n    const chunks = Object.assign({}, _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__[\"RaymarchShaderChunk\"], overrideChunks);\n    function includeReplacer(match, include) {\n        const str = chunks[include];\n        return str ? resolveIncludes(str) : match;\n    }\n    function resolveIncludes(str) {\n        return str.replace(INCLUDE_PATTERN, includeReplacer);\n    }\n    return resolveIncludes(fragmentShader);\n}\n/**\n * Base material class for object space raymarching.\n */\nclass ObjectSpaceRaymarchMaterial extends three__WEBPACK_IMPORTED_MODULE_0__[\"ShaderMaterial\"] {\n    constructor(fragmentShader, overrideChunks, { maxRaymarchIteration = 32, hitDistance = 0.001, differentiateDistance = 0.001, distanceScale = 1.0, opacity = 1.0, uniforms = {}, defines = {}, } = {}) {\n        if (distanceScale <= 0.0) {\n            throw new Error('ObjectSpaceRaymarchMaterial: distanceScale must be bigger than 0.');\n        }\n        super({\n            vertexShader: _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__[\"RaymarchShaderChunk\"].raymarch_vert,\n            fragmentShader: resolveIncludes(fragmentShader, overrideChunks),\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                uniforms,\n                {\n                    'opacity': { value: opacity },\n                    'hitDistance': { value: hitDistance },\n                    'differentiateDistance': { value: differentiateDistance },\n                    'distanceScale': { value: distanceScale },\n                    'invModelMatrix': { value: null },\n                    'mvpMatrix': { value: null },\n                    'size': { value: null },\n                    'isOrthographic': { value: false },\n                    'cameraDirection': { value: null },\n                }\n            ]),\n            defines: Object.assign({\n                'MAX_RAYMARCH_ITERATION': maxRaymarchIteration,\n            }, defines),\n        });\n        this.extensions.fragDepth = true;\n    }\n    get maxRaymarchIteration() {\n        return this.defines['MAX_RAYMARCH_ITERATION'];\n    }\n    set maxRaymarchIteration(maxRaymarchIteration) {\n        this.defines['MAX_RAYMARCH_ITERATION'] = Math.floor(maxRaymarchIteration);\n        this.needsUpdate = true;\n    }\n    get hitDistance() {\n        return this.uniforms['hitDistance'].value;\n    }\n    set hitDistance(hitDistance) {\n        this.uniforms['hitDistance'].value = hitDistance;\n    }\n    get differentiateDistance() {\n        return this.uniforms['differentiateDistance'].value;\n    }\n    set differentiateDistance(differentiateDistance) {\n        this.uniforms['differentiateDistance'].value = differentiateDistance;\n    }\n    get distanceScale() {\n        return this.uniforms['distanceScale'].value;\n    }\n    set distanceScale(distanceScale) {\n        if (distanceScale <= 0.0) {\n            throw new Error('ObjectSpaceRaymarchMaterial: distanceScale must be bigger than 0.');\n        }\n        this.uniforms['distanceScale'].value = distanceScale;\n    }\n    /**\n     * @override\n     */\n    get opacity() {\n        return this.uniforms['opacity'].value;\n    }\n    /**\n     * @override\n     */\n    set opacity(opacity) {\n        if (this.uniforms) {\n            this.uniforms['opacity'].value = opacity;\n        }\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchNormalMaterial.ts":
/*!**************************************************!*\
  !*** ./src/ObjectSpaceRaymarchNormalMaterial.ts ***!
  \**************************************************/
/*! exports provided: ObjectSpaceRaymarchNormalMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchNormalMaterial\", function() { return ObjectSpaceRaymarchNormalMaterial; });\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n;\n/**\n * A material for object space raymarching equivalent to MeshNormalMaterial.\n */\nclass ObjectSpaceRaymarchNormalMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__[\"RaymarchShaderChunk\"].raymarch_normal_frag, overrideChunks, parameters);\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchNormalMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchPhongMaterial.ts":
/*!*************************************************!*\
  !*** ./src/ObjectSpaceRaymarchPhongMaterial.ts ***!
  \*************************************************/
/*! exports provided: ObjectSpaceRaymarchPhongMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchPhongMaterial\", function() { return ObjectSpaceRaymarchPhongMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n\n/**\n * A material for object space raymarching equivalent to MeshPhongMaterial.\n */\nclass ObjectSpaceRaymarchPhongMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        if (parameters.getMaterialChunk) {\n            overrideChunks['phong_get_material_pars_fragment'] = parameters.getMaterialChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__[\"RaymarchShaderChunk\"]['raymarch_phong_frag'], overrideChunks, Object.assign({}, parameters, {\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                parameters.uniforms ? parameters.uniforms : {},\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].lights,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].envmap,\n                {\n                    'diffuse': { value: parameters.color ? parameters.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                    'shininess': { value: parameters.shininess !== undefined ? parameters.shininess : 30 },\n                    'specular': { value: parameters.specular ? parameters.specular : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x111111) },\n                    'emissive': { value: parameters.emissive ? parameters.emissive : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x000000) },\n                    // override UniformsLib.envmap\n                    'envMap': { value: parameters.envMap ? parameters.envMap : null },\n                    'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },\n                    'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },\n                },\n            ]),\n        }));\n        this.envMap = parameters.envMap ? parameters.envMap : null;\n        this.combine = parameters.combine ? parameters.combine : three__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyOperation\"];\n        this.lights = true;\n        this.fog = true;\n    }\n    get color() {\n        return this.uniforms['diffuse'].value;\n    }\n    set color(color) {\n        this.uniforms['diffuse'].value = color.clone();\n    }\n    get emissive() {\n        return this.uniforms['emissive'].value;\n    }\n    set emissive(emissive) {\n        this.uniforms['emissive'].value = emissive.clone();\n    }\n    get specular() {\n        return this.uniforms['specular'].value;\n    }\n    set specular(specular) {\n        this.uniforms['specular'].value = specular.clone();\n    }\n    get shininess() {\n        return this.uniforms['shininess'].value;\n    }\n    set shininess(shininess) {\n        this.uniforms['shininess'].value = shininess;\n    }\n    get envMap() {\n        return this.uniforms['envMap'].value;\n    }\n    set envMap(envMap) {\n        this.uniforms['envMap'].value = envMap;\n        this.needsUpdate = true;\n    }\n    get reflectivity() {\n        return this.uniforms['reflectivity'].value;\n    }\n    set reflectivity(reflectivity) {\n        this.uniforms['reflectivity'].value = reflectivity;\n    }\n    get refractionRatio() {\n        return this.uniforms['refractionRatio'].value;\n    }\n    set refractionRatio(refractionRatio) {\n        this.uniforms['refractionRatio'].value = refractionRatio;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchPhongMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchPhysicalMaterial.ts":
/*!****************************************************!*\
  !*** ./src/ObjectSpaceRaymarchPhysicalMaterial.ts ***!
  \****************************************************/
/*! exports provided: ObjectSpaceRaymarchPhysicalMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchPhysicalMaterial\", function() { return ObjectSpaceRaymarchPhysicalMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchStandardMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchStandardMaterial */ \"./src/ObjectSpaceRaymarchStandardMaterial.ts\");\n\n\n/**\n * A material for object space raymarching equivalent to MeshPhysicalMaterial.\n */\nclass ObjectSpaceRaymarchPhysicalMaterial extends _ObjectSpaceRaymarchStandardMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchStandardMaterial\"] {\n    constructor(parameters = {}) {\n        super(Object.assign({}, parameters, {\n            defines: {\n                'PHYSICAL': '',\n            },\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                parameters.uniforms ? parameters.uniforms : {},\n                {\n                    'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },\n                    'clearcoat': { value: parameters.clearcoat !== undefined ? parameters.clearcoat : 0.0 },\n                    'clearcoatRoughness': { value: parameters.clearcoatRoughness !== undefined ? parameters.clearcoatRoughness : 0.0 },\n                },\n            ])\n        }));\n    }\n    /** Clearcoat level. */\n    get clearcoat() {\n        return this.uniforms['clearcoat'].value;\n    }\n    set clearcoat(clearcoat) {\n        this.uniforms['clearcoat'].value = clearcoat;\n    }\n    /** How rough the clearcoat appears. */\n    get clearcoatRoughness() {\n        return this.uniforms['clearcoatRoughness'].value;\n    }\n    set clearcoatRoughness(clearcoatRoughness) {\n        this.uniforms['clearcoatRoughness'].value = clearcoatRoughness;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchPhysicalMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchRawMaterial.ts":
/*!***********************************************!*\
  !*** ./src/ObjectSpaceRaymarchRawMaterial.ts ***!
  \***********************************************/
/*! exports provided: ObjectSpaceRaymarchRawMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchRawMaterial\", function() { return ObjectSpaceRaymarchRawMaterial; });\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\nclass ObjectSpaceRaymarchRawMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_0__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        if (parameters.getColorChunk) {\n            overrideChunks['raw_color_pars_fragment'] = parameters.getColorChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_1__[\"RaymarchShaderChunk\"]['raymarch_raw_frag'], overrideChunks, parameters);\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchRawMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchStandardMaterial.ts":
/*!****************************************************!*\
  !*** ./src/ObjectSpaceRaymarchStandardMaterial.ts ***!
  \****************************************************/
/*! exports provided: ObjectSpaceRaymarchStandardMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchStandardMaterial\", function() { return ObjectSpaceRaymarchStandardMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n\n\n\n/**\n * A material for object space raymarching equivalent to MeshStandardMaterial.\n */\nclass ObjectSpaceRaymarchStandardMaterial extends _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"] {\n    constructor(parameters = {}) {\n        const overrideChunks = {};\n        if (parameters.getDistanceChunk) {\n            overrideChunks['distance_pars_fragment'] = parameters.getDistanceChunk;\n        }\n        if (parameters.getMaterialChunk) {\n            overrideChunks['physical_get_material_pars_fragment'] = parameters.getMaterialChunk;\n        }\n        super(_shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_2__[\"RaymarchShaderChunk\"]['raymarch_physical_frag'], overrideChunks, Object.assign({}, parameters, {\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                parameters.uniforms ? parameters.uniforms : {},\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].lights,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].fog,\n                three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsLib\"].envmap,\n                {\n                    'diffuse': { value: parameters.color ? parameters.color : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0xffffff) },\n                    'emissive': { value: parameters.emissive ? parameters.emissive : new three__WEBPACK_IMPORTED_MODULE_0__[\"Color\"](0x000000) },\n                    'metalness': { value: parameters.metalness !== undefined ? parameters.metalness : 0.5 },\n                    'roughness': { value: parameters.roughness !== undefined ? parameters.roughness : 0.5 },\n                    // override UniformsLib.envmap\n                    'envMap': { value: parameters.envMap ? parameters.envMap : null },\n                    'reflectivity': { value: parameters.reflectivity !== undefined ? parameters.reflectivity : 1.0 },\n                    'refractionRatio': { value: parameters.refractionRatio !== undefined ? parameters.refractionRatio : 0.98 },\n                }\n            ]),\n        }));\n        this.envMap = parameters.envMap ? parameters.envMap : null;\n        this.combine = parameters.combine ? parameters.combine : three__WEBPACK_IMPORTED_MODULE_0__[\"MultiplyOperation\"];\n        this.lights = true;\n        this.fog = true;\n    }\n    /** Color of the material. */\n    get color() {\n        return this.uniforms['diffuse'].value;\n    }\n    set color(color) {\n        this.uniforms['diffuse'].value = color.clone();\n    }\n    /** Emissive color of the material. */\n    get emissive() {\n        return this.uniforms['emissive'].value;\n    }\n    set emissive(emissive) {\n        this.uniforms['emissive'].value = emissive.clone();\n    }\n    /** How much the material is like a metal. */\n    get metalness() {\n        return this.uniforms['metalness'].value;\n    }\n    set metalness(metalness) {\n        this.uniforms['metalness'].value = metalness;\n    }\n    /** How rough the material appears. */\n    get roughness() {\n        return this.uniforms['roughness'].value;\n    }\n    set roughness(roughness) {\n        this.uniforms['roughness'].value = roughness;\n    }\n    get envMap() {\n        return this.uniforms['envMap'].value;\n    }\n    set envMap(envMap) {\n        this.uniforms['envMap'].value = envMap;\n        this.needsUpdate = true;\n    }\n    get reflectivity() {\n        return this.uniforms['reflectivity'].value;\n    }\n    set reflectivity(reflectivity) {\n        this.uniforms['reflectivity'].value = reflectivity;\n    }\n    get refractionRatio() {\n        return this.uniforms['refractionRatio'].value;\n    }\n    set refractionRatio(refractionRatio) {\n        this.uniforms['refractionRatio'].value = refractionRatio;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchStandardMaterial.ts?");

/***/ }),

/***/ "./src/ObjectSpaceRaymarchToonMaterial.ts":
/*!************************************************!*\
  !*** ./src/ObjectSpaceRaymarchToonMaterial.ts ***!
  \************************************************/
/*! exports provided: ObjectSpaceRaymarchToonMaterial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchToonMaterial\", function() { return ObjectSpaceRaymarchToonMaterial; });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var _ObjectSpaceRaymarchPhongMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchPhongMaterial */ \"./src/ObjectSpaceRaymarchPhongMaterial.ts\");\n\n\n/**\n * A material for object space raymarching equivalent to MeshToonMaterial.\n */\nclass ObjectSpaceRaymarchToonMaterial extends _ObjectSpaceRaymarchPhongMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchPhongMaterial\"] {\n    constructor(parameters = {}) {\n        super(Object.assign({}, parameters, {\n            defines: {\n                'TOON': '',\n            },\n            uniforms: three__WEBPACK_IMPORTED_MODULE_0__[\"UniformsUtils\"].merge([\n                parameters.uniforms ? parameters.uniforms : {},\n                {\n                    'gradientMap': { value: parameters.gradientMap ? parameters.gradientMap : null },\n                },\n            ]),\n        }));\n    }\n    get gradientMap() {\n        return this.uniforms['gradientMap'].value;\n    }\n    set gradientMap(gradientMap) {\n        this.uniforms['gradientMap'].value = gradientMap;\n    }\n}\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/ObjectSpaceRaymarchToonMaterial.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: ObjectSpaceRaymarch, ObjectSpaceRaymarchMaterial, ObjectSpaceRaymarchNormalMaterial, ObjectSpaceRaymarchBasicMaterial, ObjectSpaceRaymarchLambertMaterial, ObjectSpaceRaymarchPhongMaterial, ObjectSpaceRaymarchToonMaterial, ObjectSpaceRaymarchStandardMaterial, ObjectSpaceRaymarchPhysicalMaterial, ObjectSpaceRaymarchDepthMaterial, ObjectSpaceRaymarchMatcapMaterial, ObjectSpaceRaymarchRawMaterial, RaymarchShaderChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ObjectSpaceRaymarch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ObjectSpaceRaymarch */ \"./src/ObjectSpaceRaymarch.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarch\", function() { return _ObjectSpaceRaymarch__WEBPACK_IMPORTED_MODULE_0__[\"ObjectSpaceRaymarch\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMaterial */ \"./src/ObjectSpaceRaymarchMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchMaterial\", function() { return _ObjectSpaceRaymarchMaterial__WEBPACK_IMPORTED_MODULE_1__[\"ObjectSpaceRaymarchMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchNormalMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ObjectSpaceRaymarchNormalMaterial */ \"./src/ObjectSpaceRaymarchNormalMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchNormalMaterial\", function() { return _ObjectSpaceRaymarchNormalMaterial__WEBPACK_IMPORTED_MODULE_2__[\"ObjectSpaceRaymarchNormalMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchBasicMaterial__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ObjectSpaceRaymarchBasicMaterial */ \"./src/ObjectSpaceRaymarchBasicMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchBasicMaterial\", function() { return _ObjectSpaceRaymarchBasicMaterial__WEBPACK_IMPORTED_MODULE_3__[\"ObjectSpaceRaymarchBasicMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchLambertMaterial__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ObjectSpaceRaymarchLambertMaterial */ \"./src/ObjectSpaceRaymarchLambertMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchLambertMaterial\", function() { return _ObjectSpaceRaymarchLambertMaterial__WEBPACK_IMPORTED_MODULE_4__[\"ObjectSpaceRaymarchLambertMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchPhongMaterial__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ObjectSpaceRaymarchPhongMaterial */ \"./src/ObjectSpaceRaymarchPhongMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchPhongMaterial\", function() { return _ObjectSpaceRaymarchPhongMaterial__WEBPACK_IMPORTED_MODULE_5__[\"ObjectSpaceRaymarchPhongMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchToonMaterial__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ObjectSpaceRaymarchToonMaterial */ \"./src/ObjectSpaceRaymarchToonMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchToonMaterial\", function() { return _ObjectSpaceRaymarchToonMaterial__WEBPACK_IMPORTED_MODULE_6__[\"ObjectSpaceRaymarchToonMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchStandardMaterial__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ObjectSpaceRaymarchStandardMaterial */ \"./src/ObjectSpaceRaymarchStandardMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchStandardMaterial\", function() { return _ObjectSpaceRaymarchStandardMaterial__WEBPACK_IMPORTED_MODULE_7__[\"ObjectSpaceRaymarchStandardMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchPhysicalMaterial__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ObjectSpaceRaymarchPhysicalMaterial */ \"./src/ObjectSpaceRaymarchPhysicalMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchPhysicalMaterial\", function() { return _ObjectSpaceRaymarchPhysicalMaterial__WEBPACK_IMPORTED_MODULE_8__[\"ObjectSpaceRaymarchPhysicalMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchDepthMaterial__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ObjectSpaceRaymarchDepthMaterial */ \"./src/ObjectSpaceRaymarchDepthMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchDepthMaterial\", function() { return _ObjectSpaceRaymarchDepthMaterial__WEBPACK_IMPORTED_MODULE_9__[\"ObjectSpaceRaymarchDepthMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchMatcapMaterial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ObjectSpaceRaymarchMatcapMaterial */ \"./src/ObjectSpaceRaymarchMatcapMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchMatcapMaterial\", function() { return _ObjectSpaceRaymarchMatcapMaterial__WEBPACK_IMPORTED_MODULE_10__[\"ObjectSpaceRaymarchMatcapMaterial\"]; });\n\n/* harmony import */ var _ObjectSpaceRaymarchRawMaterial__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ObjectSpaceRaymarchRawMaterial */ \"./src/ObjectSpaceRaymarchRawMaterial.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ObjectSpaceRaymarchRawMaterial\", function() { return _ObjectSpaceRaymarchRawMaterial__WEBPACK_IMPORTED_MODULE_11__[\"ObjectSpaceRaymarchRawMaterial\"]; });\n\n/* harmony import */ var _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shaders/RaymarchShaderChunk */ \"./src/shaders/RaymarchShaderChunk.ts\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"RaymarchShaderChunk\", function() { return _shaders_RaymarchShaderChunk__WEBPACK_IMPORTED_MODULE_12__[\"RaymarchShaderChunk\"]; });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/index.ts?");

/***/ }),

/***/ "./src/shaders/RaymarchShaderChunk.ts":
/*!********************************************!*\
  !*** ./src/shaders/RaymarchShaderChunk.ts ***!
  \********************************************/
/*! exports provided: RaymarchShaderChunk */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RaymarchShaderChunk\", function() { return RaymarchShaderChunk; });\n/* harmony import */ var _chunks_raymarch_common_pars_fragment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./chunks/raymarch_common_pars_fragment */ \"./src/shaders/chunks/raymarch_common_pars_fragment.ts\");\n/* harmony import */ var _chunks_ray_pars_fragment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./chunks/ray_pars_fragment */ \"./src/shaders/chunks/ray_pars_fragment.ts\");\n/* harmony import */ var _chunks_distance_pars_fragment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chunks/distance_pars_fragment */ \"./src/shaders/chunks/distance_pars_fragment.ts\");\n/* harmony import */ var _chunks_raymarch_pars_fragment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chunks/raymarch_pars_fragment */ \"./src/shaders/chunks/raymarch_pars_fragment.ts\");\n/* harmony import */ var _chunks_raymarch_fragment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chunks/raymarch_fragment */ \"./src/shaders/chunks/raymarch_fragment.ts\");\n/* harmony import */ var _chunks_raymarch_write_depth_fragment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunks/raymarch_write_depth_fragment */ \"./src/shaders/chunks/raymarch_write_depth_fragment.ts\");\n/* harmony import */ var _chunks_basic_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chunks/basic_get_material_pars_fragment */ \"./src/shaders/chunks/basic_get_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_basic_material_pars_fragment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./chunks/basic_material_pars_fragment */ \"./src/shaders/chunks/basic_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_lambert_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./chunks/lambert_get_material_pars_fragment */ \"./src/shaders/chunks/lambert_get_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_lambert_material_pars_fragment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chunks/lambert_material_pars_fragment */ \"./src/shaders/chunks/lambert_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_phong_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chunks/phong_get_material_pars_fragment */ \"./src/shaders/chunks/phong_get_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_phong_material_pars_fragment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chunks/phong_material_pars_fragment */ \"./src/shaders/chunks/phong_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_physical_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./chunks/physical_get_material_pars_fragment */ \"./src/shaders/chunks/physical_get_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_physical_material_pars_fragment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./chunks/physical_material_pars_fragment */ \"./src/shaders/chunks/physical_material_pars_fragment.ts\");\n/* harmony import */ var _chunks_raw_color_pars_fragment__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./chunks/raw_color_pars_fragment */ \"./src/shaders/chunks/raw_color_pars_fragment.ts\");\n/* harmony import */ var _chunks_raymarch_fog_pars_fragment__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chunks/raymarch_fog_pars_fragment */ \"./src/shaders/chunks/raymarch_fog_pars_fragment.ts\");\n/* harmony import */ var _chunks_raymarch_fog_fragment__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./chunks/raymarch_fog_fragment */ \"./src/shaders/chunks/raymarch_fog_fragment.ts\");\n/* harmony import */ var _chunks_envmap_fragment__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./chunks/envmap_fragment */ \"./src/shaders/chunks/envmap_fragment.ts\");\n/* harmony import */ var _chunks_envmap_pars_fragment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./chunks/envmap_pars_fragment */ \"./src/shaders/chunks/envmap_pars_fragment.ts\");\n/* harmony import */ var _chunks_lights_lambert_fragment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./chunks/lights_lambert_fragment */ \"./src/shaders/chunks/lights_lambert_fragment.ts\");\n/* harmony import */ var _chunks_lights_lambert_pars_fragment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./chunks/lights_lambert_pars_fragment */ \"./src/shaders/chunks/lights_lambert_pars_fragment.ts\");\n/* harmony import */ var _chunks_lights_fragment_begin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chunks/lights_fragment_begin */ \"./src/shaders/chunks/lights_fragment_begin.ts\");\n/* harmony import */ var _chunks_lights_fragment_end__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chunks/lights_fragment_end */ \"./src/shaders/chunks/lights_fragment_end.ts\");\n/* harmony import */ var _libs_raymarch_vert__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./libs/raymarch_vert */ \"./src/shaders/libs/raymarch_vert.ts\");\n/* harmony import */ var _libs_raymarch_normal_frag__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./libs/raymarch_normal_frag */ \"./src/shaders/libs/raymarch_normal_frag.ts\");\n/* harmony import */ var _libs_raymarch_basic_frag__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./libs/raymarch_basic_frag */ \"./src/shaders/libs/raymarch_basic_frag.ts\");\n/* harmony import */ var _libs_raymarch_lambert_frag__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./libs/raymarch_lambert_frag */ \"./src/shaders/libs/raymarch_lambert_frag.ts\");\n/* harmony import */ var _libs_raymarch_phong_frag__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./libs/raymarch_phong_frag */ \"./src/shaders/libs/raymarch_phong_frag.ts\");\n/* harmony import */ var _libs_raymarch_physical_frag__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./libs/raymarch_physical_frag */ \"./src/shaders/libs/raymarch_physical_frag.ts\");\n/* harmony import */ var _libs_raymarch_depth_frag__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./libs/raymarch_depth_frag */ \"./src/shaders/libs/raymarch_depth_frag.ts\");\n/* harmony import */ var _libs_raymarch_matcap_frag__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./libs/raymarch_matcap_frag */ \"./src/shaders/libs/raymarch_matcap_frag.ts\");\n/* harmony import */ var _libs_raymarch_raw_frag__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./libs/raymarch_raw_frag */ \"./src/shaders/libs/raymarch_raw_frag.ts\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst RaymarchShaderChunk = {\n    raymarch_common_pars_fragment: _chunks_raymarch_common_pars_fragment__WEBPACK_IMPORTED_MODULE_0__[\"raymarch_common_pars_fragment\"],\n    ray_pars_fragment: _chunks_ray_pars_fragment__WEBPACK_IMPORTED_MODULE_1__[\"ray_pars_fragment\"],\n    distance_pars_fragment: _chunks_distance_pars_fragment__WEBPACK_IMPORTED_MODULE_2__[\"distance_pars_fragment\"],\n    raymarch_pars_fragment: _chunks_raymarch_pars_fragment__WEBPACK_IMPORTED_MODULE_3__[\"raymarch_pars_fragment\"],\n    raymarch_fragment: _chunks_raymarch_fragment__WEBPACK_IMPORTED_MODULE_4__[\"raymarch_fragment\"],\n    raymarch_write_depth_fragment: _chunks_raymarch_write_depth_fragment__WEBPACK_IMPORTED_MODULE_5__[\"raymarch_write_depth_fragment\"],\n    basic_get_material_pars_fragment: _chunks_basic_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_6__[\"basic_get_material_pars_fragment\"],\n    basic_material_pars_fragment: _chunks_basic_material_pars_fragment__WEBPACK_IMPORTED_MODULE_7__[\"basic_material_pars_fragment\"],\n    lambert_get_material_pars_fragment: _chunks_lambert_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_8__[\"lambert_get_material_pars_fragment\"],\n    lambert_material_pars_fragment: _chunks_lambert_material_pars_fragment__WEBPACK_IMPORTED_MODULE_9__[\"lambert_material_pars_fragment\"],\n    phong_get_material_pars_fragment: _chunks_phong_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_10__[\"phong_get_material_pars_fragment\"],\n    phong_material_pars_fragment: _chunks_phong_material_pars_fragment__WEBPACK_IMPORTED_MODULE_11__[\"phong_material_pars_fragment\"],\n    physical_get_material_pars_fragment: _chunks_physical_get_material_pars_fragment__WEBPACK_IMPORTED_MODULE_12__[\"physical_get_material_pars_fragment\"],\n    physical_material_pars_fragment: _chunks_physical_material_pars_fragment__WEBPACK_IMPORTED_MODULE_13__[\"physical_material_pars_fragment\"],\n    raw_color_pars_fragment: _chunks_raw_color_pars_fragment__WEBPACK_IMPORTED_MODULE_14__[\"raw_color_pars_fragment\"],\n    raymarch_fog_pars_fragment: _chunks_raymarch_fog_pars_fragment__WEBPACK_IMPORTED_MODULE_15__[\"raymarch_fog_pars_fragment\"],\n    raymarch_fog_fragment: _chunks_raymarch_fog_fragment__WEBPACK_IMPORTED_MODULE_16__[\"raymarch_fog_fragment\"],\n    envmap_fragment: _chunks_envmap_fragment__WEBPACK_IMPORTED_MODULE_17__[\"envmap_fragment\"],\n    envmap_pars_fragment: _chunks_envmap_pars_fragment__WEBPACK_IMPORTED_MODULE_18__[\"envmap_pars_fragment\"],\n    lights_lambert_fragment: _chunks_lights_lambert_fragment__WEBPACK_IMPORTED_MODULE_19__[\"lights_lambert_fragment\"],\n    lights_lambert_pars_fragment: _chunks_lights_lambert_pars_fragment__WEBPACK_IMPORTED_MODULE_20__[\"lights_lambert_pars_fragments\"],\n    lights_fragment_begin: _chunks_lights_fragment_begin__WEBPACK_IMPORTED_MODULE_21__[\"lights_fragment_begin\"],\n    light_fragment_end: _chunks_lights_fragment_end__WEBPACK_IMPORTED_MODULE_22__[\"lights_fragment_end\"],\n    raymarch_vert: _libs_raymarch_vert__WEBPACK_IMPORTED_MODULE_23__[\"raymarch_vert\"],\n    raymarch_normal_frag: _libs_raymarch_normal_frag__WEBPACK_IMPORTED_MODULE_24__[\"raymarch_normal_frag\"],\n    raymarch_basic_frag: _libs_raymarch_basic_frag__WEBPACK_IMPORTED_MODULE_25__[\"raymarch_basic_frag\"],\n    raymarch_lambert_frag: _libs_raymarch_lambert_frag__WEBPACK_IMPORTED_MODULE_26__[\"raymarch_lambert_frag\"],\n    raymarch_phong_frag: _libs_raymarch_phong_frag__WEBPACK_IMPORTED_MODULE_27__[\"raymarch_phong_frag\"],\n    raymarch_physical_frag: _libs_raymarch_physical_frag__WEBPACK_IMPORTED_MODULE_28__[\"raymarch_physical_frag\"],\n    raymarch_depth_frag: _libs_raymarch_depth_frag__WEBPACK_IMPORTED_MODULE_29__[\"raymarch_depth_frag\"],\n    raymarch_matcap_frag: _libs_raymarch_matcap_frag__WEBPACK_IMPORTED_MODULE_30__[\"raymarch_matcap_frag\"],\n    raymarch_raw_frag: _libs_raymarch_raw_frag__WEBPACK_IMPORTED_MODULE_31__[\"raymarch_raw_frag\"],\n};\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/RaymarchShaderChunk.ts?");

/***/ }),

/***/ "./src/shaders/chunks/basic_get_material_pars_fragment.ts":
/*!****************************************************************!*\
  !*** ./src/shaders/chunks/basic_get_material_pars_fragment.ts ***!
  \****************************************************************/
/*! exports provided: basic_get_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basic_get_material_pars_fragment\", function() { return basic_get_material_pars_fragment; });\nconst basic_get_material_pars_fragment = `\nObjectSpaceRaymarchBasicMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {\n  ObjectSpaceRaymarchBasicMaterial material;\n  material.diffuse = diffuse;\n  return material;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/basic_get_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/basic_material_pars_fragment.ts":
/*!************************************************************!*\
  !*** ./src/shaders/chunks/basic_material_pars_fragment.ts ***!
  \************************************************************/
/*! exports provided: basic_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"basic_material_pars_fragment\", function() { return basic_material_pars_fragment; });\nconst basic_material_pars_fragment = `\nstruct ObjectSpaceRaymarchBasicMaterial {\n  vec3 diffuse;\n};\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/basic_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/distance_pars_fragment.ts":
/*!******************************************************!*\
  !*** ./src/shaders/chunks/distance_pars_fragment.ts ***!
  \******************************************************/
/*! exports provided: distance_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"distance_pars_fragment\", function() { return distance_pars_fragment; });\nconst distance_pars_fragment = `\nfloat getDistance(vec3 p) {\n  p = mod(p, 0.25) - 0.125;\n  return length(p) - 0.05;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/distance_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/envmap_fragment.ts":
/*!***********************************************!*\
  !*** ./src/shaders/chunks/envmap_fragment.ts ***!
  \***********************************************/
/*! exports provided: envmap_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"envmap_fragment\", function() { return envmap_fragment; });\nconst envmap_fragment = `\n#ifdef USE_ENVMAP\n\n  vec3 cameraToFrag;\n  if (isOrthographic) {\n    cameraToFrag = normalize(vec3(-viewMatrix[0][2], -viewMatrix[1][2], -viewMatrix[2][2]));\n  } else {\n    cameraToFrag = normalize(worldPosition - cameraPosition);\n  }\n\n  vec3 worldNormal = inverseTransformDirection(normal, viewMatrix);\n\n  #ifdef ENVMAP_MODE_REFLECTION\n    vec3 reflectVec = reflect(cameraToFrag, worldNormal);\n  #else\n    vec3 reflectVec = refract(cameraToFrag, worldNormal, refractionRatio);\n  #endif\n\n  vec4 envColor = textureCube(envMap, vec3(flipEnvMap * reflectVec.x, reflectVec.yz));\n\n  envColor = envMapTexelToLinear(envColor);\n\n  #ifdef ENVMAP_BLENDING_MULTIPLY\n    outgoingLight = mix(outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity);\n  #elif defined(ENVMAP_BLENDING_MIX)\n    outgoingLight = mix(outgoingLight, envColor.xyz, specularStrength * reflectivity);\n  #elif defined(ENVMAP_BLENDING_ADD)\n    outgoingLight += envColor.xyz * specularStrength * reflectivity;\n  #endif\n\n#endif\n\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/envmap_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/envmap_pars_fragment.ts":
/*!****************************************************!*\
  !*** ./src/shaders/chunks/envmap_pars_fragment.ts ***!
  \****************************************************/
/*! exports provided: envmap_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"envmap_pars_fragment\", function() { return envmap_pars_fragment; });\nconst envmap_pars_fragment = `\n#ifdef USE_ENVMAP\n\n  #ifndef REFLECTIVITY\n    uniform float reflectivity;\n  #endif\n  uniform float refractionRatio;\n\n#endif\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/envmap_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lambert_get_material_pars_fragment.ts":
/*!******************************************************************!*\
  !*** ./src/shaders/chunks/lambert_get_material_pars_fragment.ts ***!
  \******************************************************************/
/*! exports provided: lambert_get_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lambert_get_material_pars_fragment\", function() { return lambert_get_material_pars_fragment; });\nconst lambert_get_material_pars_fragment = `\nObjectSpaceRaymarchLambertMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {\n  ObjectSpaceRaymarchLambertMaterial material;\n  material.diffuse = diffuse;\n  material.emissive = emissive;\n  return material;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lambert_get_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lambert_material_pars_fragment.ts":
/*!**************************************************************!*\
  !*** ./src/shaders/chunks/lambert_material_pars_fragment.ts ***!
  \**************************************************************/
/*! exports provided: lambert_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lambert_material_pars_fragment\", function() { return lambert_material_pars_fragment; });\nconst lambert_material_pars_fragment = `\nstruct ObjectSpaceRaymarchLambertMaterial {\n  vec3 diffuse;\n  vec3 emissive;\n};\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lambert_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lights_fragment_begin.ts":
/*!*****************************************************!*\
  !*** ./src/shaders/chunks/lights_fragment_begin.ts ***!
  \*****************************************************/
/*! exports provided: lights_fragment_begin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lights_fragment_begin\", function() { return lights_fragment_begin; });\nconst lights_fragment_begin = `\nGeometricContext geometry;\nvec3 mvPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;\ngeometry.position = mvPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize(-mvPosition.xyz);\n\nIncidentLight directLight;\n\n#if (NUM_POINT_LIGHTS > 0) && defined(RE_Direct)\n  PointLight pointLight;\n  #pragma unroll_loop\n  for (int i = 0; i < NUM_POINT_LIGHTS; i++) {\n    pointLight = pointLights[ i ];\n    getPointDirectLightIrradiance(pointLight, geometry, directLight);\n    #if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS)\n    directLight.color *= all(bvec3( pointLight.shadow, directLight.visible, receiveShadow)) ? getPointShadow(pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar) : 1.0;\n    #endif\n    RE_Direct( directLight, geometry, material, reflectedLight );\n  }\n#endif\n\n#if (NUM_SPOT_LIGHTS > 0) && defined(RE_Direct)\n  SpotLight spotLight;\n  #pragma unroll_loop\n  for (int i = 0; i < NUM_SPOT_LIGHTS; i++) {\n    spotLight = spotLights[ i ];\n    getSpotDirectLightIrradiance(spotLight, geometry, directLight);\n    #if defined(USE_SHADOWMAP) && (UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS)\n    directLight.color *= all(bvec3(spotLight.shadow, directLight.visible, receiveShadow)) ? getShadow(spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ]) : 1.0;\n    #endif\n    RE_Direct(directLight, geometry, material, reflectedLight);\n  }\n#endif\n\n\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\nDirectionalLight directionalLight;\n#pragma unroll_loop\nfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n  directionalLight = directionalLights[ i ];\n  getDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n  #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )\n  directLight.color *= all( bvec3( directionalLight.shadow, directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n  #endif\n  RE_Direct( directLight, geometry, material, reflectedLight );\n}\n#endif\n\n#if (NUM_RECT_AREA_LIGHTS > 0) && defined(RE_Direct_RectArea)\n  RectAreaLight rectAreaLight;\n  #pragma unroll_loop\n  for (int i = 0; i < NUM_RECT_AREA_LIGHTS; i++) {\n    rectAreaLight = rectAreaLights[ i ];\n    RE_Direct_RectArea(rectAreaLight, geometry, material, reflectedLight);\n  }\n#endif\n\n\n#if defined( RE_IndirectDiffuse )\n  vec3 iblIrradiance = vec3(0.0);\n  vec3 irradiance = getAmbientLightIrradiance(ambientLightColor);\n  irradiance += getLightProbeIrradiance(lightProbe, geometry);\n  #if (NUM_HEMI_LIGHTS > 0)\n    #pragma unroll_loop\n    for (int i = 0; i < NUM_HEMI_LIGHTS; i ++) {\n      irradiance += getHemisphereLightIrradiance(hemisphereLights[ i ], geometry);\n    }\n  #endif\n#endif\n\n#if defined( RE_IndirectSpecular )\nvec3 radiance = vec3(0.0);\nvec3 clearcoatRadiance = vec3(0.0);\n#endif\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lights_fragment_begin.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lights_fragment_end.ts":
/*!***************************************************!*\
  !*** ./src/shaders/chunks/lights_fragment_end.ts ***!
  \***************************************************/
/*! exports provided: lights_fragment_end */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lights_fragment_end\", function() { return lights_fragment_end; });\nconst lights_fragment_end = `\n#if defined( RE_IndirectDiffuse )\nRE_IndirectDiffuse(irradiance, geometry, material, reflectedLight);\n#endif\n#if defined( RE_IndirectSpecular )\nRE_IndirectSpecular(radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight);\n#endif\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lights_fragment_end.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lights_lambert_fragment.ts":
/*!*******************************************************!*\
  !*** ./src/shaders/chunks/lights_lambert_fragment.ts ***!
  \*******************************************************/
/*! exports provided: lights_lambert_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lights_lambert_fragment\", function() { return lights_lambert_fragment; });\nconst lights_lambert_fragment = `\nLambertMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lights_lambert_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/lights_lambert_pars_fragment.ts":
/*!************************************************************!*\
  !*** ./src/shaders/chunks/lights_lambert_pars_fragment.ts ***!
  \************************************************************/
/*! exports provided: lights_lambert_pars_fragments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"lights_lambert_pars_fragments\", function() { return lights_lambert_pars_fragments; });\nconst lights_lambert_pars_fragments = `\nstruct LambertMaterial {\n  vec3 diffuseColor;\n};\n\nvoid RE_Direct_Lambert(const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight) {\n  float dotNL = saturate(dot(geometry.normal, directLight.direction));\n  vec3 irradiance = dotNL * directLight.color;\n\n  #ifndef PHYSICALLY_CORRECT_LIGHTS\n    irradiance *= PI;\n  #endif\n\n  reflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);\n}\n\nvoid RE_IndirectDiffuse_Lambert(const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight) {\n  reflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert(material.diffuseColor);\n}\n\n#define RE_Direct RE_Direct_Lambert\n#define RE_IndirectDiffuse RE_IndirectDiffuse_Lambert\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/lights_lambert_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/phong_get_material_pars_fragment.ts":
/*!****************************************************************!*\
  !*** ./src/shaders/chunks/phong_get_material_pars_fragment.ts ***!
  \****************************************************************/
/*! exports provided: phong_get_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phong_get_material_pars_fragment\", function() { return phong_get_material_pars_fragment; });\nconst phong_get_material_pars_fragment = `\nObjectSpaceRaymarchPhongMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {\n  return ObjectSpaceRaymarchPhongMaterial(diffuse, emissive, specular, shininess);\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/phong_get_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/phong_material_pars_fragment.ts":
/*!************************************************************!*\
  !*** ./src/shaders/chunks/phong_material_pars_fragment.ts ***!
  \************************************************************/
/*! exports provided: phong_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"phong_material_pars_fragment\", function() { return phong_material_pars_fragment; });\nconst phong_material_pars_fragment = `\nstruct ObjectSpaceRaymarchPhongMaterial {\n  vec3 diffuse;\n  vec3 emissive;\n  vec3 specular;\n  float shininess;\n};\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/phong_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/physical_get_material_pars_fragment.ts":
/*!*******************************************************************!*\
  !*** ./src/shaders/chunks/physical_get_material_pars_fragment.ts ***!
  \*******************************************************************/
/*! exports provided: physical_get_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"physical_get_material_pars_fragment\", function() { return physical_get_material_pars_fragment; });\nconst physical_get_material_pars_fragment = `\nObjectSpaceRaymarchPhysicalMaterial getMaterial(vec3 position, vec3 worldPosition, vec3 worldNormal) {\n  ObjectSpaceRaymarchPhysicalMaterial material;\n  material.diffuse = diffuse;\n  material.emissive = emissive;\n  material.metalness = metalness;\n  material.roughness = roughness;\n  #ifdef REFLECTIVITY\n    material.reflectivity = reflectivity;\n  #endif\n  #ifdef CLEARCOAT\n    material.clearcoat = clearcoat;\n    material.clearcoatRoughness = clearcoatRoughness;\n  #endif\n  return material;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/physical_get_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/physical_material_pars_fragment.ts":
/*!***************************************************************!*\
  !*** ./src/shaders/chunks/physical_material_pars_fragment.ts ***!
  \***************************************************************/
/*! exports provided: physical_material_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"physical_material_pars_fragment\", function() { return physical_material_pars_fragment; });\nconst physical_material_pars_fragment = `\nstruct ObjectSpaceRaymarchPhysicalMaterial {\n  vec3 diffuse;\n  vec3 emissive;\n  float metalness;\n  float roughness;\n  #ifdef REFLECTIVITY\n    float reflectivity;\n  #endif\n  #ifdef CLEARCOAT\n    float clearcoat;\n    float clearcoatRoughness;\n  #endif\n};\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/physical_material_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raw_color_pars_fragment.ts":
/*!*******************************************************!*\
  !*** ./src/shaders/chunks/raw_color_pars_fragment.ts ***!
  \*******************************************************/
/*! exports provided: raw_color_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raw_color_pars_fragment\", function() { return raw_color_pars_fragment; });\nconst raw_color_pars_fragment = `\nvec4 getColor(vec3 position, vec3 worldNormal) {\n  return vec4(1.0);\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raw_color_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/ray_pars_fragment.ts":
/*!*************************************************!*\
  !*** ./src/shaders/chunks/ray_pars_fragment.ts ***!
  \*************************************************/
/*! exports provided: ray_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ray_pars_fragment\", function() { return ray_pars_fragment; });\nconst ray_pars_fragment = `\nstruct Ray {\n  vec3 origin;\n  vec3 direction;\n};\n\nRay createPerspectiveRay() {\n  return Ray(\n    cameraPosition,\n    normalize(vPosition - cameraPosition)\n  );\n}\n\nRay createOrthographicRay() {\n  return Ray(\n    vPosition + dot(vPosition - cameraPosition, cameraDirection) * cameraDirection,\n    cameraDirection\n  );\n}\n\nRay createRay() {\n  if (isOrthographic) {\n    return createOrthographicRay();\n  }\n  return createPerspectiveRay();\n}\n\nRay convertRayFromWorldToObject(Ray ray) {\n  vec3 origin = (invModelMatrix * vec4(ray.origin, 1.0)).xyz;\n  vec3 direction = normalize((invModelMatrix * vec4(ray.direction, 0.0)).xyz);\n  return Ray(origin, direction);\n}\n\nvec2 getRaymarchRange(Ray ray) {\n  vec3 hs = 0.5 * size;\n  vec2 range = vec2(0.0, 1e8);\n  for (int i = 0; i < 3; i++) {\n    if (ray.direction[i] == 0.0) continue;\n    float t1 = (hs[i] - ray.origin[i]) / ray.direction[i];\n    float t2 = (-hs[i] - ray.origin[i]) / ray.direction[i];\n    range.x = max(range.x, min(t1, t2));\n    range.y = min(range.y, max(t1, t2));\n  }\n  return range;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/ray_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_common_pars_fragment.ts":
/*!*************************************************************!*\
  !*** ./src/shaders/chunks/raymarch_common_pars_fragment.ts ***!
  \*************************************************************/
/*! exports provided: raymarch_common_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_common_pars_fragment\", function() { return raymarch_common_pars_fragment; });\nconst raymarch_common_pars_fragment = `\nvarying vec3 vPosition;\nvarying vec3 vRaymarchNormal;\n\nuniform float opacity;\nuniform vec3 cameraDirection;\nuniform mat4 modelMatrix;\nuniform mat4 invModelMatrix;\nuniform mat4 modelViewMatrix;\nuniform mat4 mvpMatrix;\nuniform mat3 normalMatrix;\nuniform vec3 size;\nuniform float hitDistance;\nuniform float differentiateDistance;\nuniform float distanceScale;\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_common_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_fog_fragment.ts":
/*!*****************************************************!*\
  !*** ./src/shaders/chunks/raymarch_fog_fragment.ts ***!
  \*****************************************************/
/*! exports provided: raymarch_fog_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_fog_fragment\", function() { return raymarch_fog_fragment; });\nconst raymarch_fog_fragment = `\n#ifdef USE_FOG\n\n  float fogDepth = -(modelViewMatrix * vec4(position, 1.0)).z;\n\n  #ifdef FOG_EXP2\n\n    float fogFactor = 1.0 - exp(-fogDensity * fogDensity * fogDepth * fogDepth);\n\n  #else\n\n    float fogFactor = smoothstep(fogNear, fogFar, fogDepth);\n\n  #endif\n\n  gl_FragColor.rgb = mix(gl_FragColor.rgb, fogColor, fogFactor);\n\n#endif\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_fog_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_fog_pars_fragment.ts":
/*!**********************************************************!*\
  !*** ./src/shaders/chunks/raymarch_fog_pars_fragment.ts ***!
  \**********************************************************/
/*! exports provided: raymarch_fog_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_fog_pars_fragment\", function() { return raymarch_fog_pars_fragment; });\nconst raymarch_fog_pars_fragment = `\n#ifdef USE_FOG\n\n  uniform vec3 fogColor;\n\n  #ifdef FOG_EXP2\n\n    uniform float fogDensity;\n\n  #else\n\n    uniform float fogNear;\n    uniform float fogFar;\n\n  #endif\n\n#endif\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_fog_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_fragment.ts":
/*!*************************************************!*\
  !*** ./src/shaders/chunks/raymarch_fragment.ts ***!
  \*************************************************/
/*! exports provided: raymarch_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_fragment\", function() { return raymarch_fragment; });\nconst raymarch_fragment = `\nRay ray = convertRayFromWorldToObject(createRay());\n\nvec2 range = getRaymarchRange(ray);\nfloat t;\nif (!raymarch(ray, range.x, range.y, t)) {\n  discard;\n  return;\n}\nvec3 position = ray.origin + t * ray.direction;\nvec3 normal = normalMatrix * (t == range.x ? normalize(vRaymarchNormal) : getNormal(position));\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_pars_fragment.ts":
/*!******************************************************!*\
  !*** ./src/shaders/chunks/raymarch_pars_fragment.ts ***!
  \******************************************************/
/*! exports provided: raymarch_pars_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_pars_fragment\", function() { return raymarch_pars_fragment; });\nconst raymarch_pars_fragment = `\nvec3 getNormal(vec3 p) {\n  vec2 e = vec2(differentiateDistance, 0.0);\n  return normalize(vec3(\n    getDistance(p + e.xyy) - getDistance(p - e.xyy),\n    getDistance(p + e.yxy) - getDistance(p - e.yxy),\n    getDistance(p + e.yyx) - getDistance(p - e.yyx)\n  ));\n}\n\nbool raymarch(Ray ray, float tmin, float tmax, out float t) {\n  t = tmin;\n  vec3 p = ray.origin + t * ray.direction;\n  for (int i = 0; i < MAX_RAYMARCH_ITERATION; i++) {\n    float d = distanceScale * getDistance(p);\n    if (d <= 0.0) {\n      return true;\n    }\n    t += d;\n    if (t > tmax) break;\n    p += d * ray.direction;\n    if (d < hitDistance) {\n      return true;\n    }\n  }\n  return false;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_pars_fragment.ts?");

/***/ }),

/***/ "./src/shaders/chunks/raymarch_write_depth_fragment.ts":
/*!*************************************************************!*\
  !*** ./src/shaders/chunks/raymarch_write_depth_fragment.ts ***!
  \*************************************************************/
/*! exports provided: raymarch_write_depth_fragment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_write_depth_fragment\", function() { return raymarch_write_depth_fragment; });\nconst raymarch_write_depth_fragment = `\nvec4 clipPos = mvpMatrix * vec4(position, 1.0);\ngl_FragDepthEXT = (clipPos.z / clipPos.w) * 0.5 + 0.5;\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/chunks/raymarch_write_depth_fragment.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_basic_frag.ts":
/*!*************************************************!*\
  !*** ./src/shaders/libs/raymarch_basic_frag.ts ***!
  \*************************************************/
/*! exports provided: raymarch_basic_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_basic_frag\", function() { return raymarch_basic_frag; });\nconst raymarch_basic_frag = `\nuniform vec3 diffuse;\n\n#include <common>\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n#include <basic_material_pars_fragment>\n#include <basic_get_material_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  ObjectSpaceRaymarchBasicMaterial material = getMaterial(position, worldPosition, normal);\n\n  vec3 outgoingLight = material.diffuse;\n\n  float specularStrength = 1.0;\n  #include <envmap_fragment>\n\n  gl_FragColor = vec4(outgoingLight, opacity);\n\n  #include <raymarch_write_depth_fragment>\n  #include <tonemapping_fragment>\n  #include <raymarch_fog_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_basic_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_depth_frag.ts":
/*!*************************************************!*\
  !*** ./src/shaders/libs/raymarch_depth_frag.ts ***!
  \*************************************************/
/*! exports provided: raymarch_depth_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_depth_frag\", function() { return raymarch_depth_frag; });\nconst raymarch_depth_frag = `\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n  #include <raymarch_write_depth_fragment>\n  gl_FragColor = vec4(vec3(1.0 - gl_FragDepthEXT), opacity);\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_depth_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_lambert_frag.ts":
/*!***************************************************!*\
  !*** ./src/shaders/libs/raymarch_lambert_frag.ts ***!
  \***************************************************/
/*! exports provided: raymarch_lambert_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_lambert_frag\", function() { return raymarch_lambert_frag; });\nconst raymarch_lambert_frag = `\nuniform vec3 diffuse;\nuniform vec3 emissive;\n\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_lambert_pars_fragment>\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n#include <lambert_material_pars_fragment>\n#include <lambert_get_material_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  ObjectSpaceRaymarchLambertMaterial lambertMaterial = getMaterial(position, worldPosition, normal);\n\n  vec4 diffuseColor = vec4(lambertMaterial.diffuse, opacity);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = lambertMaterial.emissive;\n\n  #include <lights_lambert_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_end>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\n  float specularStrength = 1.0;\n  #include <envmap_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n  #include <raymarch_write_depth_fragment>\n  #include <tonemapping_fragment>\n  #include <raymarch_fog_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_lambert_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_matcap_frag.ts":
/*!**************************************************!*\
  !*** ./src/shaders/libs/raymarch_matcap_frag.ts ***!
  \**************************************************/
/*! exports provided: raymarch_matcap_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_matcap_frag\", function() { return raymarch_matcap_frag; });\nconst raymarch_matcap_frag = `\nuniform vec3 diffuse;\nuniform sampler2D matcap;\n\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  vec4 diffuseColor = vec4(diffuse, opacity);\n\n  vec3 viewPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;\n  vec3 viewDir = normalize(viewPosition);\n  vec3 x = normalize(vec3(viewDir.z, 0.0, -viewDir.x));\n  vec3 y = cross(viewDir, x);\n  vec2 uv = vec2(dot(x, normal), dot(y, normal)) * 0.495 + 0.5;\n\n  #ifdef USE_MATCAP\n  vec4 matcapColor = texture2D(matcap, uv);\n  matcapColor = matcapTexelToLinear(matcapColor);\n  #else\n    vec4 matcapColor = vec4(1.0);\n  #endif\n\n  vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n  #include <raymarch_write_depth_fragment>\n  #include <tonemapping_fragment>\n  #include <raymarch_fog_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_matcap_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_normal_frag.ts":
/*!**************************************************!*\
  !*** ./src/shaders/libs/raymarch_normal_frag.ts ***!
  \**************************************************/
/*! exports provided: raymarch_normal_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_normal_frag\", function() { return raymarch_normal_frag; });\nconst raymarch_normal_frag = `\n#include <packing>\n#include <raymarch_common_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  gl_FragColor = vec4(packNormalToRGB(normal), opacity);\n\n  #include <raymarch_write_depth_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_normal_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_phong_frag.ts":
/*!*************************************************!*\
  !*** ./src/shaders/libs/raymarch_phong_frag.ts ***!
  \*************************************************/
/*! exports provided: raymarch_phong_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_phong_frag\", function() { return raymarch_phong_frag; });\nconst raymarch_phong_frag = `\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\n\n#include <common>\n#include <packing>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n#include <phong_material_pars_fragment>\n#include <phong_get_material_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  ObjectSpaceRaymarchPhongMaterial phongMaterial = getMaterial(position, worldPosition, normal);\n\n  vec4 diffuseColor = vec4(phongMaterial.diffuse, opacity);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = phongMaterial.emissive;\n\n  vec3 specular = phongMaterial.specular;\n  float shininess = phongMaterial.shininess;\n  float specularStrength = 1.0;\n\n  #include <lights_phong_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_end>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  #include <envmap_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n  #include <raymarch_write_depth_fragment>\n  #include <tonemapping_fragment>\n  #include <raymarch_fog_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_phong_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_physical_frag.ts":
/*!****************************************************!*\
  !*** ./src/shaders/libs/raymarch_physical_frag.ts ***!
  \****************************************************/
/*! exports provided: raymarch_physical_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_physical_frag\", function() { return raymarch_physical_frag; });\nconst raymarch_physical_frag = `\n#ifdef PHYSICAL\n  #define REFLECTIVITY\n  #define CLEARCOAT\n#endif\n\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float metalness;\nuniform float roughness;\n\n#ifdef REFLECTIVITY\n  uniform float reflectivity;\n#endif\n\n#ifdef CLEARCOAT\n  uniform float clearcoat;\n  uniform float clearcoatRoughness;\n#endif\n\n#include <common>\n#include <packing>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <raymarch_fog_pars_fragment>\n#include <raymarch_common_pars_fragment>\n#include <envmap_common_pars_fragment>\n#include <envmap_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n#include <physical_material_pars_fragment>\n#include <physical_get_material_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  vec3 worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;\n  ObjectSpaceRaymarchPhysicalMaterial physicalMaterial = getMaterial(position, worldPosition, normal);\n\n  vec4 diffuseColor = vec4(physicalMaterial.diffuse, opacity);\n  ReflectedLight reflectedLight = ReflectedLight(vec3(0.0), vec3(0.0), vec3(0.0), vec3(0.0));\n  vec3 totalEmissiveRadiance = physicalMaterial.emissive;\n\n  float roughnessFactor = physicalMaterial.roughness;\n  float metalnessFactor = physicalMaterial.metalness;\n  #ifdef REFLECTIVITY\n    float reflectivity = physicalMaterial.reflectivity;\n  #endif\n  #ifdef CLEARCOAT\n    float clearcoat = physicalMaterial.clearcoat;\n    float clearcoatRoughness = physicalMaterial.clearcoatRoughness;\n  #endif\n\n  #include <lights_physical_fragment>\n  #include <lights_fragment_begin>\n  #include <lights_fragment_end>\n\n  vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\n  float specularStrength = 1.0;\n  #include <envmap_fragment>\n\n  gl_FragColor = vec4(outgoingLight, diffuseColor.a);\n\n  #include <raymarch_write_depth_fragment>\n  #include <tonemapping_fragment>\n  #include <raymarch_fog_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_physical_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_raw_frag.ts":
/*!***********************************************!*\
  !*** ./src/shaders/libs/raymarch_raw_frag.ts ***!
  \***********************************************/
/*! exports provided: raymarch_raw_frag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_raw_frag\", function() { return raymarch_raw_frag; });\nconst raymarch_raw_frag = `\n#include <packing>\n#include <raymarch_common_pars_fragment>\n#include <ray_pars_fragment>\n#include <distance_pars_fragment>\n#include <raymarch_pars_fragment>\n#include <raw_color_pars_fragment>\n\nvoid main(void) {\n  #include <raymarch_fragment>\n\n  gl_FragColor = getColor(position, normal);\n\n  #include <raymarch_write_depth_fragment>\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_raw_frag.ts?");

/***/ }),

/***/ "./src/shaders/libs/raymarch_vert.ts":
/*!*******************************************!*\
  !*** ./src/shaders/libs/raymarch_vert.ts ***!
  \*******************************************/
/*! exports provided: raymarch_vert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"raymarch_vert\", function() { return raymarch_vert; });\nconst raymarch_vert = `\nvarying vec3 vPosition;\nvarying vec3 vRaymarchNormal;\n\nuniform vec3 size;\n\n#include <shadowmap_pars_vertex>\n\nvoid main(void) {\n  vec3 transformed = size * vec3(position);\n  vPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;\n  vRaymarchNormal = normal;\n  vec4 mvPosition = modelViewMatrix * vec4(transformed, 1.0);\n  gl_Position = projectionMatrix * mvPosition;\n}\n`;\n\n\n//# sourceURL=webpack://THREE_RAYMARCH/./src/shaders/libs/raymarch_vert.ts?");

/***/ })

/******/ });
});