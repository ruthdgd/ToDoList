import React, { useState, useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import NewList from "./newList";
import ToDoList from "./toDoList";
import List from "./list";
import Buttom from "./buttom";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filterTasks = () => {
    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);
      case "incomplete":
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  };

  return (
    <Box textAlign="center" p={5} bg="blue.900" color="white" minH="100vh">
      <Heading mb={6}>Todo List</Heading>
      <NewList addTask={addTask} />
      <ToDoList setFilter={setFilter} />
      <List tasks={filterTasks()} toggleTaskCompletion={toggleTaskCompletion} />
      <Buttom />
    </Box>
  );
}

export default App;
