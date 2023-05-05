// root redux store
import { configureStore } from "@reduxjs/toolkit";
import stateReducer from "./stateSlice";

const store = configureStore({
  reducer: {
    stateValues: stateReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

// define the type of useDispatch()
export type AppDispatch = typeof store.dispatch;

export interface isStore {
  stateValues: object;
}
