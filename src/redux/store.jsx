import { configureStore } from "@reduxjs/toolkit";
import restaReducer from "./featureas/restaSlice";


const myStore = configureStore({
    reducer:{

        restaReducer,


    }
})


export default myStore