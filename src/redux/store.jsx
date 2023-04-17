import {configureStore} from '@reduxjs/toolkit'
import todoReducer from './features/todoSlice'
const myStore = configureStore({
    reducer:{
       todoReducer
    }
})

export default myStore