import { createSlice } from '@reduxjs/toolkit'
const Rootslice= createSlice({
    name:"root",
    initialState:{
         loading:false,
         portfoliodata:null
    },
    reducers:{
         Showloading:(state,action)=>{
                    state.loading=true
            },
         Hideloading:(state,action)=>{
                   state.loading=false
         },
         Setportfoliodata:(state,action)=>{
                  state.portfoliodata=action.payload
         }
        
}
    
});

export default Rootslice.reducer;

export const{ Showloading,Hideloading,Setportfoliodata } = Rootslice.actions;