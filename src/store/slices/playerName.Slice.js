import { createSlice } from "@reduxjs/toolkit";


 const  namePlayerSlice  = createSlice ({
     name:'namePlayer',
     initialState:'',
     reducers: {
        setNamePlayer: (state , action )  => action.payload   
     }
 });
 export const { setNamePlayer } = namePlayerSlice.actions

 export default namePlayerSlice.reducer