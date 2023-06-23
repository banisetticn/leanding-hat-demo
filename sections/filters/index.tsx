'use client';
import React from 'react';
import Image from 'next/image';

import SearchImg from '@assets/search.svg';
import { ILabel } from '@lendingHat/api/interface';
import { ICategory, IObject } from '@lendingHat/interfaces';

type IFilters = {
  children: React.ReactNode;
  labels: ILabel;
  filters: IObject;
  categories: ICategory[];
};

const Filters = ({ children, labels, filters, categories }: IFilters) => {
  return (
    <section className='lh_blog_post_section'>
      <div className='container'>
        <div className='lh_blog_post_section__inner_area'>
          <form className='lh_blog_post_section__inner_area__form'>
            <div className='lh_blog_post_section__inner_area__form__left'>
              <label htmlFor='lh_blog_dropdown'>{labels?.categories}:</label>
              <select
                className='lh_blog_form_dropdown'
                id='lh_blog_form_dropdown__all'
              >
                <option value='red'>All</option>
                {categories.map((category: ICategory) => (
                  <option key={category.ID} value={category.slug}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>

            <div className='lh_blog_post_section__inner_area__form__right'>
              <div className='lh_blog_search_area'>
                <input
                  type='text'
                  id='mySearch'
                  // onKeyUp=""
                  placeholder={labels?.search_topic_here}
                  title='Type in a category'
                />
                <button type='submit' className='lh_blog_search_btn'>
                  <Image
                    src={SearchImg}
                    className='lh_blog_search_icon'
                    alt='search icon'
                  />
                </button>
              </div>
              <div className='lh_blog_post_section__inner_area__form__right__toggle'>
                <input type='radio' id='toggle-1' name='tabs' checked />
                <label className='toggle_tab' htmlFor='toggle-1'>
                  RECENT
                </label>
                <input type='radio' id='toggle-2' name='tabs' />
                <label className='toggle_tab' htmlFor='toggle-2'>
                  POPULAR
                </label>
                <span className='toggle_bg'></span>
              </div>
            </div>
          </form>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Filters;
