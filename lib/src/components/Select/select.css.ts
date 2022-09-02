import { createTheme, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { SelectTheme } from "./select.types";

export const [selectClass, selectVars]: SelectTheme = createTheme({
  borderRadius: "0",
  color: "#2F80ED",
  maxDropDownHeight: "auto",
  height: "40px",
  width: "100%",
});

export const selectContainerStyles = style({
  position: "relative",
  width: selectVars.width,
});

export const selectInputRecipe = recipe({
  base: {
    background: "white",
    padding: "10px 16px",
    width: "100%",
    height: selectVars.height,
    border: "1px solid #ced4da ",
    borderRadius: selectVars.borderRadius,
    cursor: "default",
  },
  variants: {
    error: {
      true: {
        border: "1px solid #DA2C2C",
        color: "#DA2C2C",
      },
    },
    disabled: {
      true: {
        background: "#ededed",
        color: "#545454",
        pointerEvents: "none",
      },
    },
  },
});

export const selectListContainerStyle = style({
  overflowX: "hidden",
  overflowY: "auto",
  position: "absolute",
  background: "white",
  marginTop: "8px",
  top: `${calc.subtract(selectVars.height, "5px")}`,
  left: 0,
  width: "100%",
  maxHeight: selectVars.maxDropDownHeight,
  padding: "4px",
  zIndex: "1",
  border: "1px solid #ced4da ",
  borderRadius: selectVars.borderRadius,
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",
  "::-webkit-scrollbar": {
    width: "10px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "#ced4da",
    border: "4px solid rgba(0, 0, 0, 0)",
    borderLeft: "none",
    backgroundClip: "padding-box",
    //   borderRadius: "100px",
  },
});

export const selectListRecipe = recipe({
  base: {
    width: "100%",
    padding: "10px 16px",
    background: "white",
    cursor: "pointer",
    borderRadius: `${calc.subtract(selectVars.borderRadius, "4px")}`,
    ":hover": {
      background: "#ebe8e8",
      color: "black",
    },
  },
  variants: {
    disabled: {
      true: {
        color: "#eee",
        pointerEvents: "none",
      },
    },
    active: {
      true: {
        background: selectVars.color,
        color: "white",
      },
    },
  },
});

export const noDataFoundStyles = style({
  width: "100%",
  padding: "10px 16px",
  background: "white",
  cursor: "not-allowed",
});

export const selectErrorMsg = style({
  fontSize: "12px",
  color: "#DA2C2C",
  margin: "4px 0",
});

export const selectPlaceholderRecipe = recipe({
  base: { color: "#787878" },
  variants: {
    error: {
      true: {
        color: "#DA2C2C",
      },
    },
  },
});

export const selectIconRecipe = recipe({
  base: {
    transition: "0.2s ease",
    cursor: "pointer",
  },
  variants: {
    isDropped: {
      true: {
        transform: "rotate(180deg)",
      },
    },
  },
});

export const inputRecipe = recipe({
  base: {
    width: "100%",
    border: "none",
    outline: "none",
    padding: 0,
    fontSize: "16px",
    background: "transparent",
  },
  variants: {
    error: {
      true: {
        color: "#DA2C2C",
        "::placeholder": { color: "#DA2C2C" },
      },
    },
  },
});

export const inputTextContainer = style({
  width: "85%",
  fontSize: "16px",
  whiteSpace: "nowrap",
  overflow: "hidden",
});
