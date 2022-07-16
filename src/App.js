import {
  Badge,
  Box,
  ChakraProvider,
  extendTheme,
  Grid,
  Heading,
  VStack,
} from '@chakra-ui/react';
import AddTodo from 'components/AddTodo';
import { ColorModeSwitcher } from 'components/ColorModeSwitcher';
import CompletedList from 'components/CompletedList';
import ToDoList from 'components/ToDoList';
import { getInitialColorMode } from 'reducers/theme/selectors';
import { connect } from 'react-redux';
import { Fragment, useEffect } from 'react';
import { getTodoError } from 'reducers/todo/selectors';
import { doFetchTodo } from 'reducers/todo';

function App({ error, themeState, onFetch }) {
  useEffect(() => {
    onFetch();
  }, []);

  const config = {
    initialColorMode: getInitialColorMode(themeState),
    useSystemColorMode: false,
  };

  const theme = extendTheme({ config });

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading
              mb={'8'}
              fontWeight={'extrabold'}
              size={'2xl'}
              bgGradient={'linear(to-r, pink.500, pink.300, blue.500)'}
              bgClip={'text'}
            >
              Todo Application
            </Heading>

            {error ? (
              <Badge colorScheme={'red'} p={'4'} borderRadius={'lg'}>
                {error}
              </Badge>
            ) : (
              <Fragment>
                <AddTodo />

                <ToDoList />

                <CompletedList />
              </Fragment>
            )}
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

const mapStateToProps = state => ({
  themeState: state.themeState,
  error: getTodoError(state.todoState),
});

const mapDispatchToProps = {
  onFetch: doFetchTodo,
};

// Original version
// const mapDispatchToProps = dispatch => ({
//   onAddTodo: todo => dispatch(doAddTodo(todo)),
//   onToggleTodo: id => dispatch(doToggleTodo(id)),
//   onDeleteTodo: id => dispatch(doDeleteTodo(id)),
// });

// Another way to get state & dispatch
// useSelector
// useReducer

export default connect(mapStateToProps, mapDispatchToProps)(App);
