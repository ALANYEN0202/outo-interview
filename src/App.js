import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { selectTodos, deleteTodo } from './features/counter/todoSlice'
import styled from 'styled-components';
import Addtodo from './component/Addtodo';
import Todo from './component/Todo';

const TodoListWrapper = styled.div`
  text-align: center;
  background: rgba(255, 255, 0, 0.6);
  width: 50vw;
  margin: 0 auto;
  border-radius: 50px;
  padding: 20px 0px;
`

function App() {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  const handleDelete = id => {
    dispatch(deleteTodo(id))
  }

  return (
    <div className="App">
      <TodoListWrapper>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} deleteTodo={handleDelete}/>
        ))}
        <Addtodo />
      </TodoListWrapper>
    </div>
  );
}

export default App;
