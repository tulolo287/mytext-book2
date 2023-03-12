import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

const initialState = {
  isLogin: false
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    }
  }
});

export const { login, logout } = userSlice.actions;
export const selectUser = (state:RootState) => state.user;
export default userSlice.reducer;
