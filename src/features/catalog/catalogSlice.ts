import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../model/IBook";
import { RootState } from "../../store";

const initialState = {
  catalog: [] as IBook[],
  isLoading: false
};

export const catalogSlice = createSlice({
  name: "catalog",
  initialState,
  reducers: {
    setCatalog: (state, action: PayloadAction<IBook[]>) => {
      state.catalog = action.payload;
    },
    loadingOn: (state) => {
      state.isLoading = true;
    },
    loadingOff: (state) => {
      state.isLoading = false;
    }
  }
});

export const { setCatalog, loadingOff, loadingOn } = catalogSlice.actions;
export const selectCatalog = (state: RootState) => state.catalog;
export default catalogSlice.reducer;
