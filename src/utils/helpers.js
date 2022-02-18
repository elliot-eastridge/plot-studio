import { maxBy, minBy } from "lodash";
import { scaleLinear as scale } from "d3-scale";

const getRange = (xDim, yDim, xPadding, yPadding) => {
  const x = [xPadding[0], xDim - xPadding[1]];
  const y = [yPadding[0], yDim - yPadding[1]];
  return { x, y };
}

const getDomainFromData = (data = []) => {
  return {
    x: [minBy(data, "x"), maxBy(data, "x")],
    y: [minBy(data, "y"), maxBy(data, "y")]
  }
};

const getScale = (domain, range) => {
  const x = scale()
    .range([range.x[0], range.x[1]])
    .domain([domain.x[0], domain.x[1]]);
  const y = scale()
    .range([range.y[0], range.y[1]])
    .domain([domain.y[0], domain.y[1]]);
  return { x, y };
}


export { getDomainFromData, getScale, getRange };
