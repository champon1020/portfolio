declare module "troika-three-text" {
  type Mesh = import("three").Mesh;

  export class Text extends Mesh {
    text?: string | undefined;
    anchorX?: number | string | undefined;
    anchorY?: number | string | undefined;
    curveRadius?: number | undefined;
    direction?: string | undefined;
    font?: string | undefined;
    fontSize?: number | undefined;
    letterSpacing?: number | undefined;
    lineHeight?: number | string | undefined;
    maxWidth?: number | undefined;
    overflowWrap?: string | undefined;
    textAlign?: string | undefined;
    textIndent?: number | undefined;
    whiteSpace?: string | undefined;
    material?: object;
    color?: string | number | object | undefined;
    colorRanges?: object | undefined;
    outlineWidth?: number | string | undefined;
    outlineColor?: string | number | object | undefined;
    outlineOpacity?: number | undefined;
    outlineBlur?: number | string | undefined;
    outlineOffsetX?: number | string | undefined;
    outlineOffsetY?: number | string | undefined;
    strokeWidth?: number | string | undefined;
    strokeColor?: number | string | object | undefined;
    strokeOpacity?: number | undefined;
    fillOpacity?: number | undefined;
    depthOffset?: number | undefined;
    clipRect?: Array<number> | undefined;
    orientation?: string | undefined;
    glyphGeometryDetail?: number | undefined;
    sdfGlyphSize?: number | undefined;
  }
}
