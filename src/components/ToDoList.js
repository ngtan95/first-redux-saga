import {
  Badge,
  HStack,
  IconButton,
  Spacer,
  Spinner,
  StackDivider,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { getLoadingTodoList, getTodosList } from 'reducers/todo/selectors';
import { connect } from 'react-redux';
import { doToggleTodo } from 'reducers/todo';

const ToDoList = ({ loading, data, onComplete }) => {
  if (loading) {
    return <Spinner />;
  }

  if (!data.length) {
    return (
      <Badge colorScheme={'green'} p={'4'} borderRadius={'lg'}>
        No Todos, huray!!!
      </Badge>
    );
  }

  return (
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
          <Text>{todo.content}</Text>
          <Spacer />
          <IconButton
            icon={<FaCheck />}
            isRound={true}
            aria-label="Complete"
            title="Complete"
            onClick={() => onComplete(todo.id)}
          ></IconButton>
        </HStack>
      ))}
    </VStack>
  );
};

const mapStateToProps = state => ({
  data: getTodosList(state.todoState),
  loading: getLoadingTodoList(state.todoState),
});

const mapDispatchToProps = {
  onComplete: doToggleTodo,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
