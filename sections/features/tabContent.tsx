'use client';
import React from 'react';
import Image from 'next/image';

import { ITab } from '@lendingHat/interfaces';

import HomeFeatureTabImg from '@assets/home-feature-tab-icon2.svg';
import HomeFeatureTab2Img from '@assets/home-feature-tab-icon1.svg';
import HomeFeatureTab3Img from '@assets/home-feature-tab-icon3.svg';

type ITabContent = {
  fields: any;
  tabName: string;
};
const TabContent = ({ fields, tabName }: ITabContent) => {
  return (
    <>
      {/* Render Content based on tab click */}
      {fields?.third_section?.tabs.map((item: ITab, index: number) => {
        return (
          <>
            {tabName === item.tab_label && (
              <div
                key={`tab-content=${item.tab_label}`}
                id={item.tab_label.toLowerCase()}
                className='tab_content'
              >
                <div className='tab_content__text wow animate__animated animate__fadeInLeft'>
                  <h2
                    className='tab_content_heading'
                    dangerouslySetInnerHTML={{
                      __html: item.tab_content_heading,
                    }}
                  />
                  <div
                    className='tab_content_para'
                    dangerouslySetInnerHTML={{ __html: item.tab_content }}
                  />

                  <ul className='tab_content__list lh_check_list_col'>
                    {item.tab_content_list.map(
                      (listItem: { content_list: string }, index: number) => (
                        <li key={`tab-content-list-${index}`}>
                          {listItem.content_list}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className='tab_content__img'>
                  <Image
                    key={`tab-image-${index}`}
                    src={item.tab_images[0].image}
                    className='teb-content-img lh_tab_content_icon wow animate__animated animate__fadeInDown animate__delay-1.2s'
                    alt={''}
                    height={308}
                    width={483}
                  />
                  <Image
                    src={item.tab_images[1].image}
                    className='teb-content-img lh_tab_content_icon wow animate__animated animate__fadeInRight animate__delay-1s'
                    alt={''}
                    height={128}
                    width={178}
                  />
                  <Image
                    src={item.tab_images[2].image}
                    className='teb-content-img lh_tab_content_icon wow animate__animated animate__fadeInLeft animate__delay-1s'
                    alt={''}
                    height={111}
                    width={226}
                  />
                </div>
              </div>
            )}
          </>
        );
      })}
    </>
  );
};

export default TabContent;
