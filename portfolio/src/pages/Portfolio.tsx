import React, { useCallback, useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";

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

const Portfolio = () => {
  const uniforms = {
    uTime: {
      value: 0.0,
    },
  };

  const createMesh = (w: number, h: number) => {
    const geometry = new THREE.PlaneGeometry(w, h * 2, 64, 64);
    const positions = geometry.attributes.position.array as Array<number>;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] = Math.sin(i / 1000) * 50;
    }
    const material = new THREE.MeshBasicMaterial({ wireframe: true });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.rotation.z = -Math.PI / 2;
    mesh.rotation.x = -Math.PI / 3;
    mesh.position.x = -w;
    mesh.position.y = -h;
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
    camera.position.z = dist;

    const light = new THREE.PointLight(0x000000);
    light.position.set(400, 400, 400);

    const mesh = createMesh(w, h);

    const scene = new THREE.Scene();
    scene.add(light);
    scene.add(mesh);

    render(renderer, camera, light, mesh, scene);
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
    if (mesh.rotation.x < 0) {
      mesh.position.x += 10;
      mesh.position.y += 3;
      mesh.position.z += 2;
      mesh.rotation.x += Math.PI / 360;
    }
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
