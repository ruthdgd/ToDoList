import React from "react";
import { Box, IconButton, Text } from "@chakra-ui/react";
import { CheckIcon, DeleteIcon } from "@chakra-ui/icons";

function List({ tasks, toggleTaskCompletion }) {
  return (
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
              onClick={() => toggleTaskCompletion(task.id)}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default List;
