import {
  Divider,
  Flex,
  HStack,
  IconButton,
  Spacer,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaTrash, FaUndo } from 'react-icons/fa';
import { getCompletedList } from 'reducers/todo/selectors';
import { connect } from 'react-redux';
import { doDeleteTodo, doToggleTodo } from 'reducers/todo';

const CompletedList = ({ data, onUndo, onDelete }) => {
  if (!data.length) return null;

  return (
    <VStack spacing={8} w={'100%'}>
      <Flex align="center" w={'100%'}>
        <Divider />
        <Text whiteSpace={'nowrap'} paddingLeft={'4'} paddingRight={'4'}>
          Completed Tasks
        </Text>
        <Divider />
      </Flex>

      <VStack
        divider={<StackDivider />}
        borderColor={'gray.100'}
        borderWidth={'2px'}
        borderRadius={'lg'}
        p={'4'}
        w={'100%'}
        maxW={{ base: '90vw', sm: '80vw', lg: '50vw', xl: '40vw' }}
        alignItems={'stretch'}
      >
        {data.map(todo => (
          <HStack key={todo.id}>
            <Text textDecoration={'line-through'}>{todo.content}</Text>
            <Spacer />
            <IconButton
              icon={<FaUndo />}
              isRound={true}
              aria-label="Undo"
              title="Undo"
              onClick={() => onUndo(todo.id)}
            ></IconButton>
            <IconButton
              icon={<FaTrash />}
              isRound={true}
              aria-label="Delete"
              title="Delete"
              onClick={() => onDelete(todo.id)}
            ></IconButton>
          </HStack>
        ))}
      </VStack>
    </VStack>
  );
};

const mapStateToProps = state => ({
  data: getCompletedList(state.todoState),
});

const mapDispatchToProps = {
  onUndo: doToggleTodo,
  onDelete: doDeleteTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletedList);
