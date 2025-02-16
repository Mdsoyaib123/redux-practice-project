import { RootState } from "@/redux/store";
import { IUser } from "@/types";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

type TInitialState = {
  users: IUser[];
};
const initialState: TInitialState = {
  users: [],
};
const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<IUser>) => {
      const id = nanoid();
      const userData = {
        ...action.payload,
        id,
      };
      state.users.push(userData);
    },

    removeUser: (state, action: PayloadAction<string>) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

export const selectUser = (state: RootState) => {
  return state.user.users;
};

export const { addUser, removeUser } = UserSlice.actions;
export default UserSlice.reducer;
