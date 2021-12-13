precision mediump float;

uniform float uTime;

void main() {
  vec3 pos = position;

  gl_Position = vec4(pos, 1.0);
}