import React from 'react';
import Image from 'next/image';

import HeroBannerImg from '@assets/lh-banner-image.svg';
import { store } from '@lendingHat/store';
import Link from 'next/link';
import { getPageProps } from '@lendingHat/store/storeSelectors';
import { IHeaderResponse } from '@lendingHat/api/interface';

/** FirstSection  */
const HeroBanner = () => {
  const headers = store.getState().common.globals
    ?.headers as unknown as IHeaderResponse;
  const currentPageData = getPageProps('/');
  const firstSection = currentPageData?.fields?.first_section;
  return (
    <section className='lh_hero_banner'>
      <div className='container'>
        <div className='lh_hero_banner__content_area wow animate__animated animate__fadeInLeft animate__delay-1s'>
          <h1 className='lh_banner_heading'>{firstSection?.heading}</h1>

          <ul className='lh_banner_check_list'>
            {firstSection?.solutions.map(
              (item: { solution: string }, index: number) => (
                <li key={index}>{item.solution}</li>
              )
            )}
          </ul>

          <div className='lh_banner_btn_group'>
            <a
              href={firstSection?.get_started_link}
              className='lh_banner_btn_group__btn lh_btn_active'
            >
              Get Started
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
            <a
              href={headers?.schedule_demo_link}
              className='lh_banner_btn_group__btn lh_outline_btn'
              target={'_blank'}
            >
              Schedule a Demo
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

        <div className='lh_hero_banner__image wow animate__animated animate__fadeInRight animate__delay-1s'>
          <Image
            src={firstSection?.right_side_image}
            className=''
            alt='Hero Banner Image'
            height={512}
            width={660}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
