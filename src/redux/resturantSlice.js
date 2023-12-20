import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// api call usinh Thunks

 export const fetchResturant=createAsyncThunk('resturantList/fetchResturant',()=>{
     const result = axios.get('/restaurant.json').then(response=>response.data.restaurants)
    console.log(result);
    return result
})

const resturantSlice=createSlice({
    name:'resturantList',
    initialState:{
        loading:false,//pending
        allResturant:[],//resolving
        searchResturant:[],
        error:""// reject
},
extraReducers:(builder)=>{           /// builder holds the value  response from the thunks 
     builder.addCase(fetchResturant.pending,(state)=>{
        state.loading=true
     })
     builder.addCase(fetchResturant.fulfilled,(state,action)=>{
        state.loading=false
        state.allResturant=action.payload
        state.searchResturant=action.payload
        state.error = ""

     })
     builder.addCase(fetchResturant.rejected,(state,action)=>{
        state.loading=false
        state.allResturant= ""
        state.error=action.error.message
     }
     )
}, 
reducers:{
   search:(state,action)=>{
      state.allResturant=state.searchResturant.filter(item=>item.neighborhood.toLowerCase().includes(action.payload))
   }
}



})
export const {search}=resturantSlice.actions
export default resturantSlice.reducer