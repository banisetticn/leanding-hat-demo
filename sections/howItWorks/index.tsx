import React from 'react';
import Image from 'next/image';

import AnimationBarImg from '../../public/assets/animation-bar.png';
import { store } from '@lendingHat/store';
import { ILabel } from '@lendingHat/api/interface';
import { getPageProps } from '@lendingHat/store/storeSelectors';
import Link from 'next/link';

// FourthSection
const HowItWorks = () => {
  const labels = store.getState().common.globals.label as unknown as ILabel;
  const currentPageData = getPageProps('/');
  const fourthSection = currentPageData?.fields?.fourth_section;
  return (
    <section className='lh_how_work_section wow animate__animated animate__fadeIn animate__delay-1s'>
      <div className='container'>
        <div className='lh_how_work_section__heading_area'>
          <h3 className='lh_how_work_heading'>{fourthSection?.heading}</h3>
          <p
            className='lh_how_work_para'
            // dangerouslySetInnerHTML={{ __html: fourthSection?.paragraph }}
          />
        </div>
        <Image
          src={fourthSection?.image}
          className='lh_how_work_section__img'
          alt='lh animation bar'
          height={414}
          width={1060}
        />
        <a
          href={fourthSection?.get_started_now_link}
          className='lh_how_work_btn lh_btn_active'
        >
          {labels?.get_started_now}
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
    </section>
  );
};

export default HowItWorks;
