import React from 'react';
import Image from 'next/image';

import CustomerRelationImg from '@assets/customer-relationship.svg';
import LearningMgmtImg from '@assets/learning-management.svg';
import AiBaseImg from '@assets/ai-base.svg';
import FraudDetectionImg from '@assets/fraud-detection.svg';
import { store } from '@lendingHat/store';
import { IHeaderResponse, ILabel } from '@lendingHat/api/interface';
import { getPageProps } from '@lendingHat/store/storeSelectors';
import Link from 'next/link';
import { IBox } from '@lendingHat/interfaces';

// FifthSection
const Solutions = () => {
  const headers = store.getState().common.globals
    ?.headers as unknown as IHeaderResponse;
  const labels = store.getState().common.globals.label as unknown as ILabel;
  const currentPageData = getPageProps('/');
  const fifthSection = currentPageData?.fields?.fifth_section;
  return (
    <section className='lh-c__solutions'>
      <div className='container mx-auto'>
        <div className='lh-u-common-heading'>
          <h2>{fifthSection?.heading}</h2>
          <p>{fifthSection?.sub_heading}</p>
        </div>
        <div className='lh-c__solutions-main lh_card_wrapper'>
          {fifthSection &&
            fifthSection.boxes.map((item: IBox) => (
              <div
                key={`boxes-item-${item.box_heading}`}
                className='lh-c-card lh_card_inline_icon_para wow animate__animated animate__fadeInLeft animate__delay-1.1s'
              >
                <Image
                  src={item.box_image}
                  alt=''
                  className='lh-c-card-img lh_card_inline_icon'
                  height={48}
                  width={42}
                />
                <div className='lh-c-card_content card_content'>
                  <h5 className='lh-c-card_heading card_heading'>
                    {item.box_heading}
                  </h5>
                  <p className='lh-c-card_pahragraph card_pahragraph'>
                    {item.box_content}
                  </p>
                </div>
              </div>
            ))}
        </div>

        <Link href={'/'} className='lh_solution_btn lh_btn_active'>
          {labels?.explore_our_platform}
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
        </Link>
        <p className='lh_sedule_para_dark'>
          {labels?.excited_to_learn_more}
          <a
            href={headers?.schedule_demo_link}
            className='lh_sedule_link'
            target={'_blank'}
          >
            Schedule A Demo
          </a>
        </p>
      </div>
    </section>
  );
};

export default Solutions;
