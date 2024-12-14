import React, { useState } from "react";
import { Input, Stack } from "@chakra-ui/react";

function NewList({ addTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Stack spacing={3} direction="row" align="center" justify="center" borderColor="#cd2c6c" paddingBottom="2rem">
      <Input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingresa una tarea"
        _placeholder={{ color: "gray.400" }}
      />
      <button className="boton" onClick={handleAddTask}>Añadir</button>
    </Stack>
  );
}

export default NewList;
