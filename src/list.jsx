/* eslint-disable react/prop-types */
import React, { useState } from "react";
import {
  Box,
  IconButton,
  Text,
  AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  Button,
} from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

function List({ tasks, toggleTaskCompletion, toggleDeleteTask }) {
  const [isOpen, setIsOpen] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const cancelRef = React.useRef();

  const onClose = () => {
    setIsOpen(false);
    setTaskToDelete(null);
  };

  const handleDeleteTask = () => {
    if (taskToDelete) {
      toggleDeleteTask(taskToDelete.id);
    }
    onClose();
  };

  return (
    <>
      <Box mt={5}>
        {tasks.map((task) => (
          <Box
            key={task.id}
            p={3}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            bg="gray.700"
            borderRadius="md"
            mb={2}
          >
            <Text
              as={task.completed ? "s" : undefined}
              color={task.completed ? "gray.500" : "white"}
            >
              {task.name}
            </Text>
            <Box>
              <IconButton
                icon={<CheckIcon />}
                onClick={() => toggleTaskCompletion(task.id)}
                colorScheme={task.completed ? "gray" : "teal"}
                mr={2}
              />
              <IconButton
                icon={<DeleteIcon />}
                colorScheme="red"
                onClick={() => {
                  setTaskToDelete(task);
                  setIsOpen(true);
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Eliminar Tarea
            </AlertDialogHeader>

            <AlertDialogBody>
              ¿Estás seguro de que deseas eliminar esta tarea? Esta acción no se
              puede deshacer.
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleDeleteTask} ml={3}>
                Eliminar
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default List;

