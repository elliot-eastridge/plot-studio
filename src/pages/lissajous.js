import React from "react";
import styled from "styled-components";
import SaveButton from "../ui/save-button";
import PngSaveButton from "../ui/png-save-button";
import { getLissajousData } from "../utils/data";
import Line from "../primitives/line";
import { getRange } from "../utils/helpers";
import { range, random } from "lodash";

const Wrapper = styled.div`
  padding: 40px 40px;
`;

const xDim = 960;
const yDim = 720;
const xPadding = 65;
const yPadding = 150

const Lines = () => {

  const svgRef = React.useRef();
  const svgRange = getRange(xDim, yDim, xPadding, yPadding);
  const domain = {x: [-1, 1], y: [-1, 1]};
  const D = Math.random() * Math.PI * 2;
  const a = Math.random() * 10;
  return (
    <Wrapper>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        viewBox={`0 0 ${xDim} ${yDim}`}
        width={xDim}
        height={xDim}
        style={{ width: "100%", background: "white" }}
      >
      <g transform="translate(-120 -100)">
        {range(0, 50, 1).map((i) => {
          return (
              <Line
                key={i}
                range={svgRange}
                domain={domain}
                data={getLissajousData({ a, D })}
                transform={`translate(${i * 5} ${i * 4 })`}
              />
            );
        })}
      </g>
      </svg>
      <SaveButton ref={svgRef} fileName={`lissajous-a${a}-D-${D}-${Date.now()}`}/>
      <PngSaveButton ref={svgRef} fileName={`lissajous-a${a}-D-${D}-${Date.now()}`}/>
    </Wrapper>
  );
};

export default Lines;
