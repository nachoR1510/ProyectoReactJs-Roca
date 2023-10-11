import * as React from "react";
import { Select, selectClasses } from "@mui/base/Select";
import { Option, optionClasses } from "@mui/base/Option";
import { Popper } from "@mui/base/Popper";
import { styled } from "@mui/system";
import { Link } from "react-router-dom";

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const slots = {
    root: StyledButton,
    listbox: StyledListbox,
    popper: StyledPopper,
    ...props.slots,
  };

  return <Select {...props} ref={ref} slots={slots} />;
});

const selectCategorias = () => {
  return (
    <CustomSelect
      defaultValue={null}
      renderValue={(option) => {
        if (option == null || option.value === null) {
          return "Categorias";
        }
        return `${option.label}`;
      }}
    >
      <Link
        to="/"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={null}>Sin seleccionar</StyledOption>
      </Link>
      <Link
        to="/category/terror"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={10}>Terror</StyledOption>
      </Link>
      <Link
        to="/category/aventura"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={20}>Aventura</StyledOption>
      </Link>
      <Link
        to="/category/accion"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={30}>Accion</StyledOption>
      </Link>
      <Link
        to="/category/fantasia"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={40}>Fantasia</StyledOption>
      </Link>
      <Link
        to="/category/online"
        style={{
          textDecoration: "none",
          fontSize: "2rem",
          color: "#242423",
        }}
      >
        <StyledOption value={50}>Online</StyledOption>
      </Link>
    </CustomSelect>
  );
};

export default selectCategorias;

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

const grey = {
  50: "#f6f8fa",
  100: "#eaeef2",
  200: "#d0d7de",
  300: "#afb8c1",
  400: "#8c959f",
  500: "#6e7781",
  600: "#57606a",
  700: "#424a53",
  800: "#32383f",
  900: "#24292f",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: "Montserrat", sans-serif;
  font-size: 1.5rem;
  box-sizing: border-box;
  min-width: 200px;
  padding: 8px 12px;
  border-radius: 4px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectClasses.expanded} {
    &{
      background: linear-gradient(
          to right,
          rgba(109, 89, 122, 1) 0%,
          rgba(173, 138, 172, 1) 72%,
          rgb(197, 162, 197) 100%
        );
      color: #f2e9e4;
      box-shadow: 0px 0px 12px 5px #6d597a;
    }
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: "Montserrat", sans-serif;
  font-size: 2rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 320px;
  border-radius: 12px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  box-shadow: 0px 4px 6px ${
    theme.palette.mode === "dark" ? "rgba(0,0,0, 0.50)" : "rgba(0,0,0, 0.05)"
  };
  `
);

const StyledOption = styled(Option)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionClasses.highlighted}.${optionClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(Popper)`
  z-index: 101;
`;
