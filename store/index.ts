import { combineReducers, configureStore } from '@reduxjs/toolkit';
import commonReducer from './slices/commonSlice';
import pagesReducer from './slices/pagesSlice';
import postsReducer from './slices/blogsSlice';

const combinedReducer = combineReducers({
  common: commonReducer,
  pages: pagesReducer,
  blogs: postsReducer,
});

const rootReducer = (state: any, action: any) => {
  return combinedReducer(state, action as never);
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
