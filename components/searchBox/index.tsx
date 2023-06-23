'use client';
import React from 'react';
import Image from 'next/image';

import SearchIcon from '@assets/search.svg';

const SearchBox = () => {
  return (
    <div className='lh_blog_search_area'>
      <input
        type='text'
        id='mySearch'
        placeholder='Search Articles'
        title='Type in a category'
      />
      <button type='submit' className='lh_blog_search_btn'>
        <Image src={SearchIcon} className='lh_blog_search_icon' alt='' />
      </button>
    </div>
  );
};

export default SearchBox;
