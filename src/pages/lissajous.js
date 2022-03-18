import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Heading, Button } from "grommet";
import { Range } from "../components/slider";
import { PadBox, Split, Stack } from "@bedrock-layout/primitives";
import { random } from "lodash";
import SaveButton from "../components/save-button";
import Lines from "./lissajous-svg";
import { ThemeContext } from "../context";

// currently provided as defaults
// const xDim = 1200;
// const yDim = 900;
// const samples = 50;
// const xOffset = 4;
// const yOffset = 3;
// const basePadding = 40;

const CustomRange = props => {
  const { title, ...rest } = props;
  return (
    <div>
    <Heading level="5" size="small" alignSelf="center" margin={{bottom: "none"}}>
      {title}
    </Heading>
    <Range {...rest} />
    </div>

  );
}

const BackgroundButton = () => {
  const {setBackground} = React.useContext(ThemeContext);

  const changeColor = () => {
    const colors = ["orange", "tomato", "gold", "deepSkyBlue", "YellowGreen", "hotPink", "lightSeaGreen", "orchid", "salmon", "yellow"];
    const newColor = colors[random(colors.length - 1)];
    document.documentElement.style.setProperty(
      '--background',
      newColor
    );
    setBackground(newColor);
  }

  return (
     <Button label="Background!" size="medium" onClick={changeColor}/>
  )
}

const MonoButton = () => {
  const {setMono} = React.useContext(ThemeContext);

  const changeColor = () => {
    const colors = ["cyan", "grey", "pink", "black"];
    const newColor = colors[random(colors.length - 1)];
    document.documentElement.style.setProperty(
      '--mono',
      newColor
    );
    setMono(newColor);
  }

  return (
     <Button label="Color!" size="medium" onClick={changeColor}/>
  )
}

const SidebarBox = styled(PadBox)`
  border-right: 4px solid var(--mono);
  height: 100vh;
  min-width: 20rem;
`;

const Lissajous= () => {

  const svgRef = useRef();

  const [A, setA] = useState(2);
  const [B, setB] = useState(5);
  const [D, setD] = useState(Math.PI);
  const [samples, setSamples] = useState(50);
  const [xOffset, setXOffset] = useState(4);
  const [yOffset, setYOffset] = useState(3);
  const [playing, setPlaying] = useState(false);
  const [count, setCount] = useState(0);


  const togglePlaying = () => {
    setPlaying(!playing);
  }

  const update = () => {
    console.log("UPDATE", playing)

  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (playing) {
        setA(() => A + 0.01)
        setCount(() => count + 1);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [playing, count, A]);

  const randomize = () => {
    setA(random(1, 10, true));
    setB(random(1, 10, true));
    setD(random(0, Math.PI * 2, true));
  }

  return (
    <main style={{ height: "100vh" }}>
      <Split
        gutter="none" fraction="auto-start"
      >
        <SidebarBox padding="xl">
          <Heading level="3" size="medium">Controls</Heading>
          <Stack gutter="lg">
            <Button label="Randomize!" size="medium" onClick={randomize}/>
            <BackgroundButton />
            <Button label={playing ? "Pause!" : "Play!"} size="medium" onClick={togglePlaying}/>
            {/* <MonoButton /> */}
          </Stack>

          <CustomRange
            title="A Value"
            value={A}
            min={1}
            max={10}
            step={0.01}
            onChange={setA}
          />
          <CustomRange
            title="B Value"
            value={B}
            min={1}
            max={10}
            step={0.01}
            onChange={setB}
          />
          <CustomRange
            title="D value"
            value={D}
            min={0}
            max={Math.PI * 2}
            step={0.01}
            onChange={setD}
          />
          <CustomRange
            title="samples"
            value={samples}
            min={1}
            max={100}
            step={1}
            onChange={setSamples}
          />
          <CustomRange
            title="x offset"
            value={xOffset}
            min={0}
            max={15}
            step={0.1}
            onChange={setXOffset}
          />
          <CustomRange
            title="y offset"
            value={yOffset}
            min={0}
            max={15}
            step={0.1}
            onChange={setYOffset}
          />
          <Stack style={{ marginTop: "20px" }}>
            <SaveButton ref={svgRef} fileName={`lissajous-${Date.now()}`}/>
          </Stack>
        </SidebarBox>
        <PadBox padding="xl" style={{ height: "100vh", overflow: "scroll"}}>
          <Lines ref={svgRef} A={A} B={B} D={D} samples={samples} xOffset={xOffset} yOffset={yOffset} />
        </PadBox>
      </Split>
    </main>
  );
};

export default Lissajous;
