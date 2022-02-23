import React from "react";
import styled from "styled-components";
import SaveButton from "../ui/save-button";
import PngSaveButton from "../ui/png-save-button";
import { getLissajousData } from "../utils/data";
import Line from "../primitives/line";
import { getRange } from "../utils/helpers";
import { range } from "lodash";

const Wrapper = styled.div`
  padding: 40px 40px;
`;

const xDim = 1200;
const yDim = 900;
const domain = {x: [-1, 1], y: [-1, 1]};
const D = Math.random() * Math.PI * 2;
const a = Math.random() * 10;
const samples = 50;
const xOffset = 4;
const yOffset = 3;
const basePadding = 40;
const xPadding = [basePadding, samples * xOffset + basePadding];
const yPadding = [basePadding, samples * yOffset + basePadding];

const Test = () => {

  const svgRef = React.useRef();
  const svgRange = getRange(xDim, yDim, xPadding, yPadding);

  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        viewBox={`0 0 ${xDim} ${yDim}`}
        width={xDim}
        height={yDim}
        style={{ background: "white" }}
      >
        {range(0, samples, 1).map((i) => {
          return (
              <Line
                key={i}
                range={svgRange}
                domain={domain}
                data={getLissajousData({ a, D })}
                transform={`translate(${(i - 1) * xOffset} ${(i - 1) * yOffset })`}
              />
            );
        })}
      </svg>
      <SaveButton ref={svgRef} fileName={`lissajous-a${a}-D-${D}-${Date.now()}`}/>
      <PngSaveButton ref={svgRef} fileName={`lissajous-a${a}-D-${D}-${Date.now()}`}/>
    </Wrapper>
  );
};

export default Test;
