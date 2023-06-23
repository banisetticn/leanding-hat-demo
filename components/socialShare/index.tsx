import React from 'react';

import LinkedInImg from '@assets/linkedin.svg';
import InstagramImg from '@assets/instagram.svg';
import TwitterImg from '@assets/twitter.svg';
import FacebookImg from '@assets/facebook.svg';
import Image from 'next/image';

const SocialShare = () => {
  return (
    <div className='lh_blog_info_details_left_area__social'>
      <p className='lh_blog_info_details_left_area__social__para'>
        Social Share:
      </p>
      <ul className='lh_blog_info_left_social_list'>
        <li className='lh_blog_info_left_social_item'>
          <Image
            src={LinkedInImg}
            className='lh_blog_info_left_social_icon'
            alt='linkedIn Logo'
          />
        </li>
        <li className='lh_blog_info_left_social_item'>
          <Image
            src={InstagramImg}
            className='lh_blog_info_left_social_icon'
            alt='instagram Logo'
          />
        </li>
        <li className='lh_blog_info_left_social_item'>
          <Image
            src={TwitterImg}
            className='lh_blog_info_left_social_icon'
            alt='twitter Logo'
          />
        </li>
        <li className='lh_blog_info_left_social_item'>
          <Image
            src={FacebookImg}
            className='lh_blog_info_left_social_icon'
            alt='facebook Logo'
          />
        </li>
      </ul>
    </div>
  );
};

export default SocialShare;
