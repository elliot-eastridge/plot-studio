import { range, sortBy } from "lodash";
import seedrandom from "seedrandom";

const getData = (num, seed, max = 100) => {
  seed = seed || "getData";
  const baseSeed = seedrandom(seed);
  const rand = () => baseSeed.quick() * max;
  return range(num).map((v) => ({ x: v + 1, y: rand() }));
};

const getLissajousData = (options = {}) => {
  const { A = 2, B = 3, D = Math.PI, samples = 2 * Math.PI, step = 0.1} = options;
  const data = range(0, samples, step).map((t) => ({
    t,
    x: Math.sin(A * t + D),
    y: Math.sin(B * t)
  }));
  return sortBy(data, "t");
}

export { getData, getLissajousData };
