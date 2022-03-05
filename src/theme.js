import { css } from 'styled-components';

const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item);

const deepFreeze = obj => {
  Object.keys(obj).forEach(
    key => key && isObject(obj[key]) && Object.freeze(obj[key]),
  );
  return Object.freeze(obj);
};

export const theme = deepFreeze({
  global: {
    colors: {
      background: "var(--background)",
      border: "var(--mono)",
      brand: "var(--mono)",
      control: "var(--mono)",
      focus: "var(--mono)",
      placeholder: "var(--mono)",
      text: "var(--mono)"
    },
    focus: {
      border: {
        color: "var(--mono)"
      },
      shadow: {
        size: "0px"
      }
    },
    font: {
      family: "Arial, Helvetica, sans-serif",
      face: undefined,
    },
  },
  anchor: {
    color: "var(--mono)",
  },
  heading: {
    color: "var(--mono)"
  },
  paragraph: {
    extend: css`
      color: var(--mono);
    `
  },
  text: {
    extend: css`
      color: var(--mono);
    `
  },
  button: {
    extend: css`
      ${props => !props.plain && `
        font-weight: bold;
        border-radius: 0;
        border-width: 4px;
        border-color: var(--mono);
        background-color: transparent;
        color: var(--mono);
      `}
    `,
  },
  rangeInput: {
    disabled: {
      opacity: 1
    },
    extend: css`
      &:active::-webkit-slider-thumb {
        outline: 2px solid var(--mono)
      }
    `,
    thumb: {
      color: "var(--mono)",
      extend: css`
        background-color: var(--mono);
        border: 3px solid var(--background);
        border-radius: 25;
        &:hover {
          outline: 2px solid var(--mono);
        }
        &:active {
          outline: 2px solid var(--mono);
        }
      `,
    },
    track: {
      height: "4px",
      extend: css`
        background-color: var(--mono);
      `,
    },
  }
});

