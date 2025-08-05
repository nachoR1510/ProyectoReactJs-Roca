import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MenuItem, Select } from "@mui/material";

const categorias = [
  { label: "Generos", path: "/" },
  { label: "Terror", path: "/category/terror" },
  { label: "Aventura", path: "/category/aventura" },
  { label: "Acción", path: "/category/acción" },
  { label: "Fantasía", path: "/category/fantasia" },
  { label: "Online", path: "/category/online" },
  { label: "RPG", path: "/category/rpg" },
];

const SelectCategorias = () => {
  const [value, setValue] = useState("Generos");
  const navigate = useNavigate();
  const location = useLocation();

  // 🔄 Actualiza el valor del select si cambia la URL
  useEffect(() => {
    const current = categorias.find((c) => c.path === location.pathname);
    setValue(current ? current.label : "Generos");
  }, [location.pathname]);

  const handleChange = (event) => {
    const selectedLabel = event.target.value;
    setValue(selectedLabel);
    const categoria = categorias.find((c) => c.label === selectedLabel);
    if (categoria) {
      navigate(categoria.path);
    }
  };

  return (
    <Select
      labelId="categoria-label"
      value={value}
      onChange={handleChange}
      size="small"
      sx={{
        fontFamily: "Montserrat, sans-serif",
        fontSize: "0.9rem",
        backgroundColor: "#fff",
        borderRadius: 2,
        height: 38,
        width: 150,
        border: "none",
        boxShadow: "none",
        "& fieldset": {
          border: "none",
        },
        "&.Mui-focused": {
          backgroundColor: "#FFD60A",
          boxShadow: "none",
        },
        "&.Mui-expanded": {
          backgroundColor: "#FFD60A",
          boxShadow: "none",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            backgroundColor: "#14161a73",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            borderRadius: 2,
            border: "none",
            color: "#fff",
          },
        },
      }}
    >
      {categorias.map((cat) => (
        <MenuItem
          key={cat.label}
          value={cat.label}
          sx={{
            color: "#fff",
            borderBottom: "1px solid #fff3f31f",
            "&.Mui-selected": {
              backgroundColor: "#FFD60A",
              color: "#000000",
            },
            "&:hover": {
              backgroundColor: "#FFD60A",
              color: "#000000",
            },
          }}
        >
          {cat.label}
        </MenuItem>
      ))}
    </Select>
  );
};

export default SelectCategorias;
