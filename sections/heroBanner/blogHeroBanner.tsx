import React from 'react';
import Image from 'next/image';

import BlogBannerImg from '@assets/lh-blog-img.svg';
import { store } from '@lendingHat/store';
import { ILabel } from '@lendingHat/api/interface';

const BlogHeroBanner = () => {
  const labels = store.getState().common.globals.label as unknown as ILabel;
  return (
    <section className='lh_blog_banner'>
      <div className='container'>
        <div className='lh_blog_banner__content_area wow animate__animated animate__fadeInLeft animate__delay-1s'>
          <h1 className='lh_blog_banner_title'>{labels?.our_blogs}</h1>
          <p className='lh_blog_banner_sub_catagory'>
            <span>Platform</span> <span>API</span>
            <span>Small business Loan</span>
          </p>

          <h2 className='lh_blog_banner_heading'>
            6 Things to Know Before Entering a Small Business Partnership
          </h2>
          <p className='lh_blog_banner_post_date'>March 28, 2023</p>

          <div className='lh_blog_banner_btn_group'>
            <a
              href='#'
              className='lh_blog_banner_btn_group__btn--active lh_btn_active'
            >
              {labels?.see_more}
              <svg
                width='17'
                height='12'
                viewBox='0 0 17 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M16.5303 6.53033C16.8232 6.23744 16.8232 5.76256 16.5303 5.46967L11.7574 0.6967C11.4645 0.403807 10.9896 0.403807 10.6967 0.6967C10.4038 0.989593 10.4038 1.46447 10.6967 1.75736L14.9393 6L10.6967 10.2426C10.4038 10.5355 10.4038 11.0104 10.6967 11.3033C10.9896 11.5962 11.4645 11.5962 11.7574 11.3033L16.5303 6.53033ZM-6.55671e-08 6.75L16 6.75L16 5.25L6.55671e-08 5.25L-6.55671e-08 6.75Z'
                  fill=''
                />
              </svg>
            </a>
          </div>
        </div>

        <div className='lh_blog_banner__image wow animate__animated animate__fadeInRight animate__delay-1s'>
          <Image src={BlogBannerImg} className='' alt='' />
        </div>
      </div>
    </section>
  );
};

export default BlogHeroBanner;
