import React from 'react';
import Filters from '../filters';
import Pagination from '../pagination';
import Posts from '../posts';
import { ILabel } from '@lendingHat/api/interface';
import { getBlogPosts } from '@lendingHat/api';
import { IPostResponse } from '@lendingHat/interfaces';
import { store } from '@lendingHat/store';
import {
  setBlogCategories,
  setBlogPosts,
  setFilters,
} from '@lendingHat/store/slices/blogsSlice';

type IBlogContent = {
  labels: ILabel;
  postsResponse: IPostResponse;
};

const BlogContent = async ({ labels, postsResponse }: IBlogContent) => {
  const { posts, categories, ...rest } = postsResponse;

  return (
    <>
      <Filters
        labels={labels}
        filters={rest}
        categories={postsResponse?.categories}
      >
        <Posts posts={postsResponse?.posts} />
      </Filters>
      <Pagination />
    </>
  );
};

export default BlogContent;
