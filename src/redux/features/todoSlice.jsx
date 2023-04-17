import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  todos: [],
  toggle: false
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: { 
    getTodos: (state, action) => {
      const todos = localStorage.getItem('todos')
      state.todos = todos ? JSON.parse(todos) : [];
    },
    toggleAction: (state, action) => {
      state.toggle = !state.toggle;
    },
    addTodo: (state, action) => {
      const todoObj = action.payload;
      todoObj.id = Date.now();
      todoObj.isCompleted = false;

      console.log(todoObj);
      state.todos.push(todoObj);
      saveInLocalStorage(state.todos)
    },
    deleteTodo: (state, action) => {
     
      //TODO: Delete the todo from the list by id
      state.todos = state.todos.filter(todo => todo.id !== action.payload)
      saveInLocalStorage(state.todos)
    },
    isCompletedToggle: (state, action) => { 
      //TODO: Toggle the isCompleted property of the todo (((TRUE/FALSE))) by id
      //? find() => Return object from array by condition (Return Reference!!!!)
      //?action.payload == id
      const todo = state.todos.find(todo => todo.id === action.payload)
      todo.isCompleted = !todo.isCompleted
      //? Arrays of objects::->> [@fasfsdsa,@fasfsa,@faskfhas,@fbsajlfa]
      saveInLocalStorage(state.todos)
    }
  }
})

const saveInLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
}


export const { toggleAction, addTodo, getTodos, deleteTodo, isCompletedToggle } = todoSlice.actions;
export default todoSlice.reducer;