import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todosData: [{
    "id": 0,
    "createdAt": 1605148012345,
    "memo": "Finish interview quiz"
  },
  {
    "id": 1,
    "createdAt": 1605312012345,
    "memo": "Go k8s workshop at 10:00 trm",
    "address": "Taipei 101"
  },
  {
    "id": 2,
    "createdAt": 1605657612345,
    "memo": "Follow up interview process"
  }
],
  },
  reducers: {
    addTodo: (state, action) => {
      const { id, content, createdAt } = action.payload
      state.todosData.push({
        id,
        createdAt,
        memo: content,
      })
    },
    deleteTodo: (state, action) => {
      const id = action.payload
      state.todosData = state.todosData.filter(todo => todo.id !== id)
    },
  },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export const selectTodos = state => state.todos.todosData;

export default todoSlice.reducer;
