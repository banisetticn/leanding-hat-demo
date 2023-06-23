import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IObject } from '@lendingHat/interfaces';

export interface CommonState {
  globals: IObject;
  currentPath: string;
}

const initialState: CommonState = {
  globals: {},
  currentPath: '',
};

const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCommonLabels: (state, action: PayloadAction<IObject>) => {
      state.globals = action.payload;
    },
    setCurrentPathname: (state, { payload }: PayloadAction<string>) => {
      state.currentPath = payload;
    },
    setCommonHydration: (state, { payload }: PayloadAction<any>) => {
      state.globals = { ...state.globals, ...payload.globals };
      state.currentPath = payload.currentPath;
    },
  },
});

export const { setCommonLabels, setCurrentPathname, setCommonHydration } =
  commonSlice.actions;

export default commonSlice.reducer;
