import React from "react";
import { Select } from "@chakra-ui/react";

function ToDoList({ setFilter }) {
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <Select onChange={handleFilterChange} placeholder="Seleccionar">
      <option value="all">Todas</option>
      <option value="incomplete">Incompletas</option>
      <option value="completed">Completas</option>
    </Select>
  );
}

export default ToDoList;
