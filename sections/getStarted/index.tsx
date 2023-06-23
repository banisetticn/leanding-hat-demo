import React from 'react';
import Image from 'next/image';

import ArrowImg from '@assets/Arrow-2.svg';
import { getPageProps } from '@lendingHat/store/storeSelectors';
import { store } from '@lendingHat/store';
import { IHeaderResponse } from '@lendingHat/api/interface';
import Link from 'next/link';

const GetStarted = () => {
  const headers = store.getState().common.globals
    ?.headers as unknown as IHeaderResponse;
  const currentPageData = getPageProps('/');
  const seventhSection = currentPageData?.fields?.seventh_section;
  const firstSection = currentPageData?.fields?.first_section;
  return (
    <section className='lh-c__kickstart'>
      <div className='container'>
        <div className='lh-c__kickstar-main'>
          <div className='lh-c__kickstar-heading'>
            <h2 className='lh-c__kickstar-heading-text'>
              {seventhSection?.heading}
            </h2>
          </div>
          <div className='lh-c__btn-white'>
            <a href={firstSection?.get_started_link}>
              <button className='lh-c__btn-white-text-btn lh_white_fill_btn'>
                Get Started Now <Image src={ArrowImg} alt='' />
              </button>
            </a>
            <p className='lh-c__getstarted'>
              Want to learn more?
              <a
                href={headers?.schedule_demo_link}
                className='lh-c__getstarted-link'
                target={'_blank'}
              >
                Schedule A Demo
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
