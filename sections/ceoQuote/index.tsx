import React from 'react';
import Image from 'next/image';

import AboutGalleryImg from '@assets/about-gallery.jpg';
import { getPageProps } from '@lendingHat/store/storeSelectors';

const CEOQuote = () => {
  const currentPageData = getPageProps('/about-us/');
  const fourthSection = currentPageData?.fields?.fourth_section;
  return (
    <>
      <section className='lh_about_gallery_block wow animate__animated animate__fadeInRight animate__delay-1s'>
        <Image
          src={fourthSection?.image}
          className=''
          alt='employees working in an office img'
          height={637}
          width={1281}
        />
      </section>
      <section className='lh_about_co_spaech'>
        <div className='container'>
          <div className='lh_about_co_spaech_content'>
            <h4 className='lh_about_co_spaech_content__info'>
              {fourthSection?.owner_say}
            </h4>
            <p className='lh_about_co_spaech_content__author'>
              {fourthSection?.owner_name_designation}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CEOQuote;
