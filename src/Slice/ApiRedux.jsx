import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const ApiRedux = createSlice({
    name:"API",
    initialState:{
        value:0,
        emptyArray:[]
    },
    reducers:{
        getData:async(state)=>{
            try{
                const getRes = await axios.get("http://localhost:5000/cards")
                console.log(`this is json formated get data : ${getRes}`)
                state.getRes
            }
            catch(error){
                console.log(`This is GET API Error : ${error}`)
            }
        }
    }
})

export const {getData} = ApiRedux.actions;

export default ApiRedux.reducer