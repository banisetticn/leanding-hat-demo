'use client';

import { useEffect } from 'react';
import { store } from '.';
import { PagesState, setPagesHydration } from './slices/pagesSlice';
import { CommonState, setCommonHydration } from './slices/commonSlice';
import { BlogsState, setPostsHydration } from './slices/blogsSlice';

type IPreloader = {
  common?: CommonState;
  pages?: PagesState;
  blogs?: BlogsState;
};

function Preloader({ pages, common, blogs }: IPreloader) {
  useEffect(() => {
    common && store.dispatch(setCommonHydration(common));
    pages && store.dispatch(setPagesHydration(pages));
    blogs && store.dispatch(setPostsHydration(blogs));
  }, [pages, common, blogs]);

  return null;
}

export default Preloader;
