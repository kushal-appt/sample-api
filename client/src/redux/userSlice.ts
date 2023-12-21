import { createSlice ,PayloadAction} from "@reduxjs/toolkit";
import { userDetailSlice, userDetailsType } from "../types";

const initialState : userDetailSlice = {
   data : undefined
}

const userSlice = createSlice({
    name : "userDetails",
    initialState ,
    reducers : {
        addUser : (state,action:PayloadAction<userDetailsType>)=>{
            state.data = action.payload;
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer