import React from 'react';
import Image from 'next/image';

import AboutImg from '@assets/about-img1.jpg';
import About2Img from '@assets/about-img2.jpg';
import { store } from '@lendingHat/store';
import { ILabel } from '@lendingHat/api/interface';
import { getPageProps } from '@lendingHat/store/storeSelectors';

const AboutHeroBanner = () => {
  const labels = store.getState().common.globals.label as unknown as ILabel;
  const currentPageData = getPageProps('/about-us/');
  const title = currentPageData?.title;
  const content = currentPageData?.content;
  const firstSection = currentPageData?.fields?.first_section;
  const secondSection = currentPageData?.fields?.second_section;

  return (
    <section className='lh_about_hero'>
      <div className='container'>
        <div className='lh_about_hero__text_area wow animate__animated animate__fadeInDown animate__delay-1s'>
          <h1 className='lh_about_hero_heading'>{title}</h1>
          <p
            className='lh_about_hero_para'
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>

        <div className='lh_about_hero__img_area'>
          <Image
            src={firstSection?.images[0].image}
            className='mob_mb_gap wow animate__animated animate__fadeInLeft animate__delay-1s'
            alt='About us image'
            height={718}
            width={520}
          />
          <Image
            src={firstSection?.images[1].image}
            className='wow animate__animated animate__fadeInRight animate__delay-1s'
            alt='About us image 2'
            height={588}
            width={520}
          />
        </div>

        <div className='lh_what_we_do wow animate__animated animate__fadeInDown animate__delay-1s'>
          <div className='lh_what_we_do__heading'>
            <h3>{secondSection?.heading}</h3>
          </div>
          <div className='lh_what_we_do__content'>
            <p dangerouslySetInnerHTML={{ __html: secondSection?.content }} />

            <div className='lh_what_we_do_sub_content'>
              <div className='lh_what_we_do_inner'>
                <p
                  className='lh_what_we_do_inner__para'
                  dangerouslySetInnerHTML={{
                    __html: secondSection?.box_content[0].content,
                  }}
                />
              </div>
              <div className='lh_what_we_do_inner'>
                <p
                  className='lh_what_we_do_inner__para'
                  dangerouslySetInnerHTML={{
                    __html: secondSection?.box_content[1].content,
                  }}
                />
              </div>
            </div>

            <a
              href={secondSection?.how_it_works_url}
              className='lh_about_btn lh_btn_active'
            >
              {labels?.learn_how_it_works}
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
      </div>
    </section>
  );
};

export default AboutHeroBanner;
