import { createSlice } from '@reduxjs/toolkit'
import restaurants from './Restaurant';

const initialState = {
  resta_ar: [],
 
}

const restaSlice = createSlice({
  name: "restaurants",
  initialState,
  reducers: { 
    getRestaurants: (state, action) => {
      const resta = localStorage.getItem('resta')
      state.resta_ar = resta ? JSON.parse(resta) : restaurants;
      saveInLocalStorage(state.resta_ar);
    },
    // addTodo: (state, action) => {
    //   const todoObj = action.payload;
    //   todoObj.id = Date.now();
    //   todoObj.isCompleted = false;

    //   console.log(todoObj);
    //   state.todos.push(todoObj);
    //   saveInLocalStorage(state.todos)
    // },
    // deleteTodo: (state, action) => {
     
    //   //TODO: Delete the todo from the list by id
    //   state.todos = state.todos.filter(todo => todo.id !== action.payload)
    //   saveInLocalStorage(state.todos)
    // },
    
  }
})

const saveInLocalStorage = (resta_ar) => {
  localStorage.setItem('resta', JSON.stringify(resta_ar));
}


export const { getRestaurants } = restaSlice.actions;
export default restaSlice.reducer;