import { ICategory, IPostsPayload } from '@lendingHat/interfaces';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react';

type IPostsCard = {
  post: IPostsPayload;
  imageSize?: { height: number; width: number };
};

const PostsCard = ({ post, imageSize }: IPostsCard) => {
  return (
    <Link href={`/blog/${post.slug}`}>
      <div className='lh_blog_post_data post_short'>
        <Image
          src={post.thumbnail}
          className='lh_blog_img'
          alt='blog posts'
          height={imageSize?.height ?? 224}
          width={imageSize?.width ?? 363}
        />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            {post.category.map((category: ICategory, index: number) => (
              <span key={`category-${category.ID}-${index}`}>
                {category.name}
              </span>
            ))}
          </div>
          <h3 className='lh_blog_post_title'>{post.title}</h3>
          <p className='lh_blog_post_date'>{post.published_date}</p>
        </div>
      </div>
    </Link>
  );
};

export default PostsCard;
