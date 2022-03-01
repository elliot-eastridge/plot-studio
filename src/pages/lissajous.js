import React from "react";
import { Box, Sidebar, RangeInput, Heading, Button } from "grommet";
import { random } from "lodash";
import SaveButton from "../ui/save-button";
import Lines from "./lissajous-svg";

// currently provided as defaults
// const xDim = 1200;
// const yDim = 900;
// const samples = 50;
// const xOffset = 4;
// const yOffset = 3;
// const basePadding = 40;




const Lissajous= () => {

  const svgRef = React.useRef();

  const [A, setA] = React.useState(2);
  const [B, setB] = React.useState(5);
  const [D, setD] = React.useState(Math.PI);
  const [samples, setSamples] = React.useState(50);
  const [xOffset, setXOffset] = React.useState(4);
  const [yOffset, setYOffset] = React.useState(3);

  const randomize = () => {
    setA(random(1, 10, true));
    setB(random(1, 10, true));
    setD(random(0, Math.PI * 2, true));
  }


  return (
    <Box direction="row" fill flex={false}>
      <Sidebar
        background="dark-2"
        pad={{ left: 'large', right: 'large', vertical: 'medium' }}
        basis="medium"
        responsive={false}
      >
        <Box
          flex={false}
          align="center"
          gap="xsmall"
          pad={{ vertical: "small" }}
        >
          <Heading level="3" size="medium">Controls</Heading>
          <Button label="Randomize!" size="medium" onClick={randomize}/>
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            A value
          </Heading>
          <RangeInput
            value={A}
            min={1}
            max={10}
            step={0.01}
            onChange={event => setA(+event.target.value)}
          />
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            B value
          </Heading>
          <RangeInput
            value={B}
            min={1}
            max={10}
            step={0.01}
            onChange={event => setB(+event.target.value)}
          />
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            D value
          </Heading>
          <RangeInput
            value={D}
            min={0}
            max={Math.PI * 2}
            step={0.01}
            onChange={event => setD(+event.target.value)}
          />
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            Samples
          </Heading>
          <RangeInput
            value={samples}
            min={1}
            max={100}
            step={1}
            onChange={event => setSamples(+event.target.value)}
          />
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            x offset
          </Heading>
          <RangeInput
            value={xOffset}
            min={0}
            max={15}
            step={1}
            onChange={event => setXOffset(+event.target.value)}
          />
          <Heading level="5" size="small" alignSelf="start" margin={{bottom: "none"}}>
            y offset
          </Heading>
          <RangeInput
            value={yOffset}
            min={0}
            max={15}
            step={1}
            onChange={event => setYOffset(+event.target.value)}
          />
          <SaveButton ref={svgRef} fileName={`lissajous-${Date.now()}`}/>
        </Box>
      </Sidebar>
      <Box align="right" pad={{ top: "large", horizontal: "small" }} fill>
        <Box flex align="right" overflow="scroll">
        <Lines ref={svgRef} A={A} B={B} D={D} samples={samples} xOffset={xOffset} yOffset={yOffset} />
        </Box>
      </Box>
    </Box>
  );
};

export default Lissajous;
