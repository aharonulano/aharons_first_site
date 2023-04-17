import { configureStore } from "@reduxjs/toolkit";
import restaReducer from "./features/restaSlice";


const myStore = configureStore({
    reducer:{

        restaReducer,


    }
})


export default myStore