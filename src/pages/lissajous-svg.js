import React from "react";
import styled from "styled-components";
import { getLissajousData } from "../utils/data";
import Line from "../primitives/line";
import { getRange } from "../utils/helpers";
import { range } from "lodash";

const Wrapper = styled.div`
  padding: 40px 40px;
`;

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

  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        viewBox={`0 0 ${xDim} ${yDim}`}
        style={{ background: "white" }}
      >
        {range(0, samples, 1).map((i) => {
          return (
              <Line
                key={i}
                range={svgRange}
                domain={domain}
                data={getLissajousData({ A, B, D })}
                transform={`translate(${(i - 1) * xOffset} ${(i - 1) * yOffset })`}
              />
            );
        })}
      </svg>
    </Wrapper>
  );
});

export default Lines;
