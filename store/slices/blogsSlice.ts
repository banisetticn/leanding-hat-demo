import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ICategory, IObject, IPostsPayload } from '@lendingHat/interfaces';

export interface BlogsState {
  posts: IPostsPayload[];
  filters: IObject;
  categories: ICategory[];
}

const initialState: BlogsState = {
  posts: [],
  filters: {},
  categories: [],
};

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {
    setBlogCategories: (state, action: PayloadAction<ICategory[]>) => {
      state.categories = action.payload;
    },
    setFilters: (state, { payload }: PayloadAction<IObject>) => {
      state.filters = payload;
    },
    setBlogPosts: (state, { payload }: PayloadAction<IPostsPayload[]>) => {
      state.posts = payload;
    },
    setPostsHydration: (state, { payload }: PayloadAction<any>) => {
      state.posts = { ...state.posts, ...payload.posts };
      state.filters = payload.filters;
      state.categories = payload.categories;
    },
  },
});

export const {
  setBlogCategories,
  setFilters,
  setBlogPosts,
  setPostsHydration,
} = blogsSlice.actions;

export default blogsSlice.reducer;
