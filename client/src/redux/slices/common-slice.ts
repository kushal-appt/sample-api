import { CommonStateType, TaskPayloadType, userDetailSlice } from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getDefaultProcessingState } from "../../utilis/helper-utilis";
import { ProcessingType } from "../../enums/common-enum";

const initialState: CommonStateType = {
  error: undefined,
  tracking: {},
};

const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    trackingStart(state: CommonStateType, action: PayloadAction<string>) {
      return {
        ...state,
        tracking: action.payload
          ? { ...state.tracking, [action.payload]: getDefaultProcessingState() }
          : { ...state.tracking },
      };
    },

    trackingSuccess(state: CommonStateType, action: PayloadAction<any>) {
      const { taskId, ...restOfData } = action.payload;
      return {
        ...state,
        error: undefined,
        tracking: taskId
          ? {
              ...state.tracking,
              [taskId]: {
                status: ProcessingType.Success,
                ...action.payload,
                //result: restOfData,
              },
            }
          : { ...state.tracking },
      };
    },

    trackingError(
      state: CommonStateType,
      action: PayloadAction<TaskPayloadType<string>>
    ) {
      const taskId = action.payload.id;
      return {
        ...state,
        error: action.payload.data,
        tracking: taskId
          ? {
              ...state.tracking,
              [taskId]: {
                status: ProcessingType.Failure,
                message: action.payload?.data,
              },
            }
          : { ...state.tracking },
      };
    },

    removeTrackingStart(state: CommonStateType, action: PayloadAction<string>) {
      const taskId = action.payload;
      const { [taskId]: processingState, ...restOfTracking } = state.tracking;
      return { ...state, tracking: restOfTracking };
    },
  },
});

export const { trackingStart, trackingSuccess, trackingError } =
  commonSlice.actions;

export default commonSlice.reducer;
