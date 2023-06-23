import React from 'react';

const ArrowButtons = () => {
  return (
    <div className='lh_blog_info_article_slider_btns'>
      <a
        href=''
        className='lh_blog_info_article_slider_btns__prev lh_arrow_prev'
      >
        <svg
          width='24'
          height='16'
          viewBox='0 0 24 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M0.292893 7.29289C-0.0976311 7.68342 -0.0976311 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538407 7.04738 0.538407 6.65685 0.928932L0.292893 7.29289ZM1 9L24 9L24 7L1 7L1 9Z'
            fill=''
          />
        </svg>
      </a>
      <a
        href=''
        className='lh_blog_info_article_slider_btns__next lh_arrow_next'
      >
        <svg
          width='24'
          height='16'
          viewBox='0 0 24 16'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M23.7071 8.70711C24.0976 8.31658 24.0976 7.68342 23.7071 7.2929L17.3431 0.928934C16.9526 0.538409 16.3195 0.538409 15.9289 0.928934C15.5384 1.31946 15.5384 1.95262 15.9289 2.34315L21.5858 8L15.9289 13.6569C15.5384 14.0474 15.5384 14.6805 15.9289 15.0711C16.3195 15.4616 16.9526 15.4616 17.3431 15.0711L23.7071 8.70711ZM-8.74228e-08 9L23 9L23 7L8.74228e-08 7L-8.74228e-08 9Z'
            fill=''
          />
        </svg>
      </a>
    </div>
  );
};

export default ArrowButtons;
