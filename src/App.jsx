import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import NewList from "./newList";
import ToDoList from "./toDoList";
import List from "./list";

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [filter, setFilter] = useState("all");

  const saveTasksToLocalStorage = (updatedTasks) => {
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setTasks(updatedTasks);
  };

  const addTask = (taskName) => {
    const newTask = { id: Date.now(), name: taskName, completed: false };
    const updatedTasks = [...tasks, newTask];
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    saveTasksToLocalStorage(updatedTasks);
  };

  const toggleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(updatedTasks);
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
    <Box textAlign="center" p={5} bg="#ffcebe" color="white" minH="100vh">
      <Heading width="100%" color="#cd2c6c" mb={6}>
        Todo List
      </Heading>
      <NewList addTask={addTask} />
      <ToDoList setFilter={setFilter} />
      <List
        tasks={filterTasks()}
        toggleTaskCompletion={toggleTaskCompletion}
        toggleDeleteTask={toggleDeleteTask}
      />
    </Box>
  );
}

export default App;

