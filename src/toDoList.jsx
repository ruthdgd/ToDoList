import React from "react";
import { Select } from "@chakra-ui/react";
import "./App.css";

function ToDoList({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Select
      onChange={handleFilterChange}
      placeholder="Seleccionar"
      bg="#cd2c6c"
      color="white"
      _placeholder={{ color: "white" }}
      focusBorderColor="pink.500"
      _hover={{ bg: "#e63973" }}
    >
      <option style={{ backgroundColor: "#cd2c6c", color: "white" }} value="all">
        Todas
      </option>
      <option style={{ backgroundColor: "#cd2c6c", color: "white" }} value="incomplete">
        Incompletas
      </option>
      <option style={{ backgroundColor: "#cd2c6c", color: "white" }} value="completed">
        Completas
      </option>
    </Select>
  );
}

export default ToDoList;

