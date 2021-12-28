import * as THREE from "three";

import fragment from "./glsl/sky.frag";
import vertex from "./glsl/sky.vert";

const Sky = () => {
  const mat = new THREE.ShaderMaterial({
    fragmentShader: fragment as string,
    vertexShader: vertex as string,
    uniforms: {
      luminance: { value: 1 },
      turbidity: { value: 2 },
      rayleigh: { value: 1 },
      mieCoefficient: { value: 0.005 },
      mieDirectionalG: { value: 0.8 },
      sunPosition: { value: new THREE.Vector3() },
    },
    side: THREE.BackSide,
  });

  THREE.Mesh.call(this, new THREE.SphereBufferGeometry(1, 32, 15), mat);
};

export default Sky;
