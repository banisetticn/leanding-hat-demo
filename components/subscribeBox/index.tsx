import React from 'react';
import Image from 'next/image';

import SendIconImg from '@assets/send-icon.svg';

const SubscribeBox = () => {
  return (
    <div className='lh_blog_info_details_right_subscribe'>
      <h4 className='lh_blog_info_details_right_subscribe__heading'>
        Subscribe to our blog
      </h4>
      <p className='lh_blog_info_details_right_subscribe__para'>
        Receive the latest newsletter updates.
      </p>
      <form className='lh_blog_info_details_right_subscribe__form' action=''>
        <input
          type='email'
          placeholder='Your email address'
          className='lh_blog_info_subscribe_mail'
        />
        <button className='lh_blog_info_subscribe_form_submit'>
          <Image src={SendIconImg} className='' alt='subscribe button icon' />
        </button>
      </form>
    </div>
  );
};

export default SubscribeBox;
