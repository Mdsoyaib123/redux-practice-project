import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature/count/counterSlice";
import taskReducer from "./feature/tasks/taskSlice";
import userReducer from "./feature/user/userSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    task: taskReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
