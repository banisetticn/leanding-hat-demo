import React from 'react';
import Image from 'next/image';

import PersonalLoanImg from '@assets/26-262308_personal-loan-lendingpoint 1.svg';
import GroupImg from '@assets/Group 1094.svg';
import Group2Img from '@assets/Group 1092.svg';
import Group3Img from '@assets/Group 1093.svg';
import Group4Img from '@assets/Group 1365.svg';
import Group5Img from '@assets/Group 1091.svg';
import Group6Img from '@assets/Group 1096.svg';
import { getPageProps } from '@lendingHat/store/storeSelectors';

type IBrandLogo = {
  brand_logo: string;
};

// SecondSection
const ClientLogo = () => {
  const currentPageData = getPageProps('/');
  const secondSection = currentPageData?.fields?.second_section;
  return (
    <section className='lh_client_logo_section wow animate__animated animate__fadeInUp animate__delay-1s'>
      <div className='container'>
        <h2 className='lh_client_logo_section__heading'>
          {secondSection?.heading}
        </h2>
        <div className='lh_client_logo_section__area'>
          <div className='lh_client_logo_section__area__data'>
            <Image
              src={PersonalLoanImg}
              className='lh_client_logo_img'
              alt=''
            />
          </div>
          {secondSection?.brand_logos.map(
            (brandLogo: { brand_logo: string }, index: number) => (
              <div
                key={`brand-logo-item-${index}`}
                className='lh_client_logo_section__area__data'
              >
                <Image
                  src={brandLogo.brand_logo}
                  className='lh_client_logo_img'
                  alt='client logo'
                  height={76}
                  width={190}
                />
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientLogo;
