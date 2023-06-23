import Image from 'next/image';
import React from 'react';

import CategoryListIcon from '@assets/cat-list-icon.svg';

const CategoryBox = () => {
  return (
    <div className='lh_blog_info_details_right_catagories_area__cat lh_asidebar'>
      <h4 className='lh_right_catagories_cat_title lh_asidebar_title'>
        Categories
      </h4>
      <ul className='lh_blog_info_details_right_cat_list lh_asidebar_cat_list'>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            Platform
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            API
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            CRM
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            AI Technology
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            LMS
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            Member Management
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
        <li className='lh_blog_info_details_right_cat_list__item lh_asidebar_cat_list_item'>
          <p className='lh_blog_info_details_right_cat_list__para lh_asidebar_cat_list_item_para'>
            Fraud Detection
          </p>
          <Image
            src={CategoryListIcon}
            className='lh_blog_info_details_right_cat_list__item__icon'
            alt=''
          />
        </li>
      </ul>
    </div>
  );
};

export default CategoryBox;
