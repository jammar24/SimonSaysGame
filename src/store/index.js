import { configureStore } from "@reduxjs/toolkit";
import namePlayer from '../store/slices/playerName.Slice'

const  store = configureStore({
    reducer: {
     namePlayer
    }
})
export default store 