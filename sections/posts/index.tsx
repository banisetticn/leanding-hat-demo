import PostsCard from '@lendingHat/components/postsCard';
import { ICategory, IPostsPayload } from '@lendingHat/interfaces';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

type IBlogPosts = {
  posts: IPostsPayload[];
};

const BlogPosts = ({ posts }: IBlogPosts) => {
  return (
    <div className='lh_blog_post_section__inner_area__grid lh_blog_post_grid_wrapper'>
      {posts &&
        posts.map((post: IPostsPayload) => (
          <PostsCard key={`posts-item-${post.id}`} post={post} />
        ))}

      {/* <div className='lh_blog_post_data post_long'>
        <img src='assets/lh-blog-img4.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            5 Financially Smart Things You Could Do with Your Tax Refund |
            Lending Hat
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div> */}

      {/* <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img7.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            5 Financially Smart Things You Could Do with Your Tax Refund |
            Lending Hat
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img10.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            Challenges and opportunities for Lenders Financing for Cattle Loan
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img2.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            Challenges and opportunities for Lenders Financing for Cattle Loan
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img5.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            6 Things to Know Before Entering a Small Business Partnership
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data post_short'>
        <img src='assets/lh-blog-img8.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            6 Things to Know Before Entering a Small Business Partnership
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data post_long'>
        <img src='assets/lh-blog-img11.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            5 Financially Smart Things You Could Do with Your Tax Refund |
            Lending Hat
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img3.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            5 Financially Smart Things You Could Do with Your Tax Refund |
            Lending Hat
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img6.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            Challenges and opportunities for Lenders Financing for Cattle Loan
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img9.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            Challenges and opportunities for Lenders Financing for Cattle Loan
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div>

      <div className='lh_blog_post_data'>
        <img src='assets/lh-blog-img12.svg' className='lh_blog_img' />
        <div className='lh_blog_post_card'>
          <div className='lh_blog_post_cat_title'>
            <span>Platform</span>
            <span>API</span>
            <span>Small business Loan</span>
          </div>
          <h3 className='lh_blog_post_title'>
            6 Things to Know Before Entering a Small Business Partnership
          </h3>
          <p className='lh_blog_post_date'>March 28, 2023</p>
        </div>
      </div> */}
    </div>
  );
};

export default BlogPosts;
