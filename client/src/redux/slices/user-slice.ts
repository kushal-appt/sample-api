import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FriendlyError } from "../../model";
import { ProcessingType } from "../../enums/common-enum";
import {
  TaskPayloadType,
  user,
  userDetailSlice,
  userDetailsType,
} from "../../types";

const initialState: userDetailSlice = {
  data: undefined,
};

const userSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {
    userRegisterStart: (
      state: userDetailSlice,
      action: PayloadAction<userDetailsType>
    ) => {
      return state;
    },
    userRegisterSucceded: (
      state: userDetailSlice,
      action: PayloadAction<string>
    ) => {
      return state;
    },

    userRegisterError: (
      state: userDetailSlice,
      action: PayloadAction<FriendlyError>
    ) => {
      return {
        ...state,
        error: action?.payload,
      };
    },
    userLoginStart: (
      state: userDetailSlice,
      action: PayloadAction<TaskPayloadType<user>>
    ) => {
      return state;
    },
    userLoginSucceded: (
      state: userDetailSlice,
      action: PayloadAction<string>
    ) => {
      return state;
    },
    userLoginError: (
      state: userDetailSlice,
      action: PayloadAction<FriendlyError>
    ) => {
      return {
        ...state,
        error: action?.payload,
      };
    },
  },
});

export const {
  userRegisterStart,
  userRegisterSucceded,
  userRegisterError,
  userLoginStart,
  userLoginSucceded,
  userLoginError,
} = userSlice.actions;

export default userSlice.reducer;
