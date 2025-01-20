/* eslint-disable react/prop-types */
import { useState } from "react";
import { Input, Stack, Button } from "@chakra-ui/react";

function NewList({ addTask }) {
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <Stack
      spacing={3}
      direction="row"
      align="center"
      justify="center"
      borderColor="#cd2c6c"
      paddingBottom="2rem"
    >
      <Input
        value={task}
        color={"#cd2c6c"}
        fontWeight={"bold"}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Ingresa una tarea"
        _placeholder={{ color: "gray.400" }}
      />
      <Button
        onClick={handleAddTask}
        bg="#cd2c6c"
        color="white"
        padding="8px 16px"
        borderRadius="5px"
        _hover={{ bg: "#b0225a" }}
        _active={{ bg: "#a01d4f" }}
      >
        Añadir
      </Button>
    </Stack>
  );
}

export default NewList;

