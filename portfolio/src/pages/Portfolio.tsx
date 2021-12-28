import React, { useEffect } from "react";
import * as THREE from "three";

import fragment from "../shader/glsl/sky.frag";
import vertex from "../shader/glsl/sky.vert";
import Sky from "../shader/Sky";

const Portfolio = () => {
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      100,
      2000000
    );
    camera.position.set(0, 100, 2000);
    const helper = new THREE.GridHelper(1000, 2, 0xffffff, 0xffffff);
    scene.add(helper);

    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.5;
    const parentElement = document.getElementById("container");
    parentElement.appendChild(renderer.domElement);

    const mat = new THREE.ShaderMaterial({
      fragmentShader: fragment,
      vertexShader: vertex,
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
    const geo = new THREE.SphereBufferGeometry(1, 32, 15);
    const sky = new THREE.Mesh(geo, mat);
    scene.add(sky);

    renderer.render(scene, camera);
  }, []);

  return <div id="container"></div>;
};

export default Portfolio;
