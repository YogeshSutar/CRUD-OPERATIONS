import { configureStore } from "@reduxjs/toolkit";

const Store = configureStore({
    reducer:{
        API:ApiRedux
    }
})

export default Store