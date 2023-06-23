import React from 'react';

import HomeFeatureTabImg from '@assets/home-feature-tab-icon2.svg';
import HomeFeatureTab2Img from '@assets/home-feature-tab-icon1.svg';
import HomeFeatureTab3Img from '@assets/home-feature-tab-icon3.svg';

import AlmlTabImg from '@assets/ai-ml-tab-icon1.svg';
import AlmlTab2Img from '@assets/ai-ml-tab-icon2.svg';
import AlmlTab3Img from '@assets/ai-ml-tab-icon3.svg';

import FinanceTabImg from '@assets/finance-tab-icon1.svg';
import FinanceTab2Img from '@assets/finance-tab-icon2.svg';
import FinanceTab3Img from '@assets/finance-tab-icon3.svg';
import FinanceTab4Img from '@assets/finance-tab-icon4.svg';

import { useAppSelector } from '@lendingHat/store/hooks';
import { IPages, ITab } from '@lendingHat/interfaces';
import TabHeader from './tabHeader';
import { store } from '@lendingHat/store';

// ThirdSection
const Features = () => {
  const currentPageData = store.getState().pages.pages as any;
  const currentPath = store.getState().common.currentPath as any;
  const thirdSection = currentPageData[currentPath] as unknown as IPages;
  const fields = thirdSection?.fields as any;

  return (
    <section className='lh_tab_section'>
      <div className='container'>
        <h3 className='lh_tab_section__heading wow animate__animated animate__fadeInDown animate__delay-1s'>
          {fields?.third_section?.heading}
        </h3>

        <TabHeader fields={fields} />
      </div>
    </section>
  );
};

export default Features;
