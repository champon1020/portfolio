import React, { useCallback, useEffect, useMemo, useState } from "react";
import styled, { keyframes } from "styled-components";
import * as THREE from "three";
import {
  TextGeometry,
  TextGeometryParameters,
} from "three/examples/jsm/geometries/TextGeometry";
import { Font, FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { Text } from "troika-three-text";

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

const S = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890 ";

const Portfolio = () => {
  const createRandomTextGeometry = (
    font: Font,
    fontSize: number,
    nColumns: number,
    nWords: number,
    ratio: number,
    color: Array<number>
  ) => {
    let word = "";
    const rnd = Math.floor(Math.random() * (S.length - 1));

    const start = performance.now();
    /*
    for (let i = 0; i < nColumns; i++) {
      if (i != 0) {
        word += "\n";
      }
      word += Array.from(Array(nWords))
        .map(() => S[rnd])
        .join("");
      word += Array.from(Array(nWords))
        .map(
          () =>
            S[
              Math.floor(
                Math.random() < ratio
                  ? Math.random() * (S.length - 1)
                  : S.length - 1
              )
            ]
        )
        .join("");
    }
    */
    for (let i = 0; i < nWords * 10; i++) {
      word += " " + S.charAt(Math.floor(Math.random() * S.length));
    }
    const end = performance.now();
    console.log(end - start);

    const geometry = new TextGeometry(word, {
      font: font,
      size: fontSize,
      height: 0,
    });

    // Set positions and colors.
    const colorBuff = new THREE.Color();
    const colors = [];
    const positions = geometry.attributes.position.array as Array<number>;
    for (let i = 0; i < positions.length; i += 3) {
      positions[i + 2] -= 1000;
      colorBuff.setRGB(color[0], color[1], color[2]);
      colors.push(colorBuff.r, colorBuff.g, colorBuff.b);
    }
    geometry.setAttribute(
      "color",
      new THREE.BufferAttribute(new Uint8Array(colors), 3, true)
    );

    return geometry;
  };

  const createTextMesh = (w: number, h: number, font: Font) => {
    const geometry = createRandomTextGeometry(
      font,
      40,
      20,
      100,
      0.3,
      [246, 190, 0]
    );
    const material = new THREE.MeshLambertMaterial({
      vertexColors: true,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.set(-w * (3 / 2), h, 0);
    return mesh;
  };

  useEffect(() => {
    const w = window.innerWidth;
    const h = window.innerHeight;

    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(window.devicePixelRatio);
    document
      .getElementById("canvas-container")
      .appendChild(renderer.domElement);

    const fov = 60;
    const fovRad = (fov / 2) * (Math.PI / 180);
    const dist = h / 2 / Math.tan(fovRad);
    const camera = new THREE.PerspectiveCamera(fov, w / h, 1, dist * 5);
    camera.position.set(0, 0, dist);

    const light = new THREE.SpotLight(0xffffff, 2, 0, Math.PI / 3, 5, 1.0);
    light.position.set(0, 0, -10);
    scene.add(light);
    const lightHelper = new THREE.SpotLightHelper(light);
    scene.add(lightHelper);

    /*
    const t = new Text();
    scene.add(t);
    t.text = "Hello World Good!";
    t.font =
      "https://storage.googleapis.com/champon-portfolio/SAO_UI_Regular.json";
    t.fontSize = 20;
    t.anchorX = 100;
    t.anchorY = 100;
    t.color = 0xffffff;
    */

    let mesh = undefined;
    const loader = new FontLoader();
    loader.load(
      "https://storage.googleapis.com/champon-portfolio/SAO_UI_Regular.json",
      (font) => {
        mesh = createTextMesh(w, h, font);
        scene.add(mesh);
        render(0, renderer, camera, light, mesh, scene, font);
      }
    );
  }, []);

  const render = (
    time: number,
    renderer: THREE.Renderer,
    camera: THREE.Camera,
    light: THREE.Light,
    mesh: THREE.Mesh,
    scene: THREE.Scene,
    font: Font
  ) => {
    if (time <= 25) {
      mesh.geometry.dispose();
      scene.remove(mesh);
      const geometry = createRandomTextGeometry(
        font,
        40,
        20,
        100,
        (5 - Math.sqrt(time)) * 0.1,
        [246, 190, 0]
      );
      const material = new THREE.MeshLambertMaterial({
        vertexColors: true,
        side: THREE.DoubleSide,
      });
      const newMesh = new THREE.Mesh(geometry, material);
      newMesh.position.set(-window.innerWidth * (3 / 2), window.innerHeight, 0);
      scene.add(newMesh);
      requestAnimationFrame(() => {
        render(time + 1, renderer, camera, light, newMesh, scene, font);
      });
      renderer.render(scene, camera);
    }
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
