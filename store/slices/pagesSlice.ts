import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IObject } from '@lendingHat/interfaces';

export interface PagesState {
  pages: { [key: string]: IObject[] };
}

const initialState: PagesState = {
  pages: {},
};

const pagesSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPages: (state, { payload }: PayloadAction<IObject>) => {
      const { permalink } = payload;
      state.pages[permalink as unknown as any] = payload as any;
    },
    // [permalink as unknown as any] = payload as any
    setPagesHydration: (state, { payload }: PayloadAction<any>) => {
      state.pages = { ...state.pages, ...payload.pages };
    },
  },
});

export const { setPages, setPagesHydration } = pagesSlice.actions;

export default pagesSlice.reducer;
