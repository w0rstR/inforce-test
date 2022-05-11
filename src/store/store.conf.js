import {configureStore} from "@reduxjs/toolkit";
import productReducer from "./products/Products.slice";


const store = configureStore({
    reducer:{
        productReducer: productReducer
    }
})

export default store