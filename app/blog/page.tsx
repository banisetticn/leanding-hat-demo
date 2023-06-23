import React from 'react';

import Filters from '@lendingHat/sections/filters';
import BlogHeroBanner from '@lendingHat/sections/heroBanner/blogHeroBanner';
import Posts from '@lendingHat/sections/posts';
import Pagination from '@lendingHat/sections/pagination';
import { store } from '@lendingHat/store';
import { ILabel } from '@lendingHat/api/interface';
import { getBlogPosts } from '@lendingHat/api';
import BlogContent from '@lendingHat/sections/blogContent';
import { IPostResponse } from '@lendingHat/interfaces';
import {
  setBlogCategories,
  setBlogPosts,
  setFilters,
} from '@lendingHat/store/slices/blogsSlice';

const Blog = async () => {
  const labels = store.getState().common.globals.label as unknown as ILabel;
  // const postsResponse: IPostsResponse = await getBlogPosts({});
  const postsResponse: IPostResponse = await getBlogPosts({});

  const { posts, categories, ...rest } = postsResponse;
  store.dispatch(setBlogPosts(posts));
  store.dispatch(setBlogCategories(categories));
  store.dispatch(setFilters(rest));

  console.log('BLOG_PAGE_LABELS', labels);
  return (
    <>
      <BlogHeroBanner />
      <BlogContent labels={labels} postsResponse={postsResponse} />
    </>
  );
};

export default Blog;
