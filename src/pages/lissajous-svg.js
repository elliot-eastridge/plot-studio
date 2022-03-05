import React from "react";
import { getLissajousData } from "../utils/data";
import { getRange } from "../utils/helpers";
import * as d3Shape from "d3-shape";
import { getScale } from "../utils/helpers";
import { range } from "lodash";
import { ThemeContext } from "../context";
import { linearizePath } from "../utils/path-helpers";


// eslint-disable-next-line react/display-name
const Lines = React.forwardRef((props, ref) => {

  const {
    xDim = 1200,
    yDim = 900,
    A,
    B,
    D,
    samples = 50,
    xOffset = 4,
    yOffset = 3,
    basePadding = 40
  } = props;

  const domain = {x: [-1, 1], y: [-1, 1]};
  const xPadding = [basePadding, samples * xOffset + basePadding];
  const yPadding = [basePadding, samples * yOffset + basePadding];
  const svgRange = getRange(xDim, yDim, xPadding, yPadding);
  const theme = React.useContext(ThemeContext);
  const data = getLissajousData({ A, B, D });
  const scale = getScale(domain, svgRange);

  const pathFunction = d3Shape
    .line()
    .curve(d3Shape.curveBasisClosed)
    .x((d) => scale.x(d.x))
    .y((d) => scale.y(d.y));

  const d = linearizePath(pathFunction(data));

  return (
    <div style={{ maxHeight: "100vh"}}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        viewBox={`0 0 ${xDim} ${yDim}`}
        style={{ background: theme.background, maxHeight: "100vh" }}
      >
        {range(0, samples, 1).map((i) => {
          return (
            <path
              key={i}
              d={d}
              transform={`translate(${(i - 1) * xOffset} ${(i - 1) * yOffset })`}
              style={{ stroke: theme.mono, fill: "none" }}
            />
            );
        })}
      </svg>
    </div>
  );
});

export default Lines;
