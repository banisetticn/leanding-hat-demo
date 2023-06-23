import { getPageProps } from '@lendingHat/store/storeSelectors';
import React from 'react';

const Corevalues = () => {
  const currentPageData = getPageProps('/about-us/');
  const thirdSection = currentPageData?.fields?.third_section;
  return (
    <section className='lh_core_value_section wow animate__animated animate__fadeInLeft animate__delay-1s'>
      <div className='container'>
        <div className='core_value_heading_area'>
          <h3 className='core_value_heading'>{thirdSection?.heading}</h3>
          <p
            className='core_value_para'
            dangerouslySetInnerHTML={{ __html: thirdSection?.content }}
          />
        </div>
        <div className='core_value_content_area lh_num_card_wrapper'>
          {thirdSection?.box_content.map(
            (
              boxContent: { heading: string; content: string },
              index: number
            ) => {
              let padNumber = (index + 1).toString().padStart(2, '0');
              return (
                <div
                  key={`box-content-item-${index}`}
                  className='core_value_content lh_num_card'
                >
                  <p className='core_value_num lh_num_card_num'>{padNumber}</p>
                  <p className='core_value_title lh_num_card_title'>
                    {boxContent.heading}
                  </p>
                  <p className='core_value_para lh_num_card_para'>
                    {boxContent.content}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default Corevalues;
