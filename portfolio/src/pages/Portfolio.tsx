import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import {
  TextGeometry,
  TextGeometryParameters,
} from "three/examples/jsm/geometries/TextGeometry";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";

import ProfileImage from "../assets/images/profile.png";
import fragmentShader from "../glsl/fragment.glsl";
import vertexShader from "../glsl/vertex.glsl";

const StyledBody = styled.div`
  width: 100%;
  height: 100%;
  background-color: black;
`;

const StyledPlate = styled.div`
  width: 50%;
  height: 100%;
  margin: auto;
  background-color: #292929;
`;

const StrokeAnimBefore = keyframes`
  0% {
    transform: scale3d(0,1,1);
  }
  100% {
    transform: scale3d(1,1,1);
  }
`;

const StrokeAnimAfter = keyframes`
  0% {
    transform: scale3d(1,0,1);
  }
  100% {
    transform: scale3d(1,1,1);
  }
`;

const StyledProfileIcon = styled.div`
  --border-color: cyan;
  --border-size: 0.2rem;

  width: 30%;
  height: auto;
  margin: 0 35%;
  box-sizing: border-box;
  position: relative;

  &::before,
  &::after {
    box-sizing: inherit;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform-origin: center;
  }
  &::before {
    border-top: var(--border-size) solid var(--border-color);
    border-bottom: var(--border-size) solid var(--border-color);
    animation: ${StrokeAnimBefore} 1.0s ease-in-out;
  }
  &::after {
    border-left var(--border-size) solid var(--border-color);
    border-right var(--border-size) solid var(--border-color);
    animation: ${StrokeAnimAfter} 1.0s ease-in-out;
  }
`;

const StyledProfileImg = styled.img`
  width: 100%;
`;

type UniformsType = {
  uTime: { value: number };
};

const tanh = (x: number) => {
  return (
    (Math.pow(Math.E, x) - Math.pow(Math.E, -x)) /
    (Math.pow(Math.E, x) + Math.pow(Math.E, -x))
  );
};

const Portfolio = () => {
  const uniforms = {
    uTime: {
      value: 0.0,
    },
  };

  const createMesh = (
    w: number,
    h: number,
    init: {
      position: { x: number; y: number; z: number };
      rotation: { x: number; y: number; z: number };
    }
  ) => {
    const width = w * 3;
    const height = h;
    const widthVertex = 256;
    const heightVertex = 64;
    const geometry = new THREE.PlaneGeometry(
      width,
      height,
      widthVertex,
      heightVertex
    );
    const positions = geometry.attributes.position.array as Array<number>;
    for (let i = 0; i < positions.length; i += 3) {
      const x = (widthVertex * 2) / 5 - ((i / 3) % (widthVertex + 1));
      positions[i + 2] = tanh((x / widthVertex) * 25) * 100;
    }
    const colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      color.setRGB(245, 176, 65);
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Uint8Array(colors), 3, true)
    );

    const material = new THREE.MeshLambertMaterial({
      wireframe: true,
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.x = init.rotation.x;
    mesh.rotation.y = init.rotation.y;
    mesh.rotation.z = init.rotation.z;
    mesh.position.x = init.position.x;
    mesh.position.y = init.position.y;
    mesh.position.z = init.position.z;
    return mesh;
  };

  const createRightWaveMesh = (w: number, h: number) => {
    const width = w * 3;
    const height = h;
    const widthVertex = 256;
    const heightVertex = 64;

    const geometry = new THREE.PlaneGeometry(
      width,
      height,
      widthVertex,
      heightVertex
    );
    const positions = geometry.attributes.position.array as Array<number>;
    for (let i = 0; i < positions.length; i += 3) {
      const x = (widthVertex * 2) / 5 - ((i / 3) % (widthVertex + 1));
      positions[i + 2] = Math.pow(Math.E, -(x / widthVertex) * 5) * 100 - 300;
    }
    const colors = [];
    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      color.setRGB(231, 76, 60);
      colors.push(color.r, color.g, color.b);
    }
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Uint8Array(colors), 3, true)
    );

    const material = new THREE.MeshLambertMaterial({
      wireframe: true,
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(0, -100, 0);
    mesh.rotation.set(-Math.PI / 6, 0, 0);
    return mesh;
  };

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    document
      .getElementById("canvas-container")
      .appendChild(renderer.domElement);

    const fov = 60;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = h / 2 / Math.tan(fovRad);
    const camera = new THREE.PerspectiveCamera(fov, w / h, 1, dist * 2);
    camera.position.set(0, 0, dist);

    const light = new THREE.SpotLight(0xffffff, 3, -10, -Math.PI / 4, 10, 0.5);
    light.position.set(-w * (9 / 11), h * (7 / 5), -10);

    const leftMesh = createMesh(w, h, {
      position: { x: 0, y: -100, z: 0 },
      rotation: { x: -Math.PI / 6, y: 0, z: 0 },
    });

    const rightMesh = createRightWaveMesh(w, h);

    const loader = new FontLoader();
    loader.load(
      "https://storage.googleapis.com/champon-portfolio/SAO_UI_BOLD.json",
      (font) => {
        const textGeo = new TextGeometry("HELLO", { font: font });
        const textMat = new THREE.MeshLambertMaterial();
        const mesh = new THREE.Mesh(textGeo, textMat);
        scene.add(mesh);
      }
    );

    const scene = new THREE.Scene();
    scene.add(light);
    scene.add(leftMesh);
    scene.add(rightMesh);

    render(renderer, camera, light, leftMesh, scene);
  }, []);

  const render = (
    renderer: THREE.Renderer,
    camera: THREE.Camera,
    light: THREE.Light,
    mesh: THREE.Mesh,
    scene: THREE.Scene
  ) => {
    requestAnimationFrame(() => {
      render(renderer, camera, light, mesh, scene);
    });
    /*
    if (mesh.rotation.x < 0) {
      mesh.position.y += 3;
      mesh.position.z += 2;
      mesh.rotation.x += Math.PI / 360;
    mesh.position.x -= 3;
    }
    */
    renderer.render(scene, camera);
  };

  return (
    <StyledBody>
      {/*<StyledPlate>
        <StyledProfileIcon>
          <StyledProfileImg src={ProfileImage as string} alt="profile-image" />
        </StyledProfileIcon>
        </StyledPlate>*/}
      <div id="canvas-container"></div>
    </StyledBody>
  );
};

export default Portfolio;
