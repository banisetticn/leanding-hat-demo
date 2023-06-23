'use client';
import { ITab } from '@lendingHat/interfaces';
import React, { useEffect, useState } from 'react';
import TabContent from './tabContent';

type ITabHeader = {
  fields: any;
};

const TabHeader = ({ fields }: ITabHeader) => {
  const [tabName, setTabName] = useState(
    fields?.third_section?.tabs[0].tab_label
  );

  useEffect(() => {
    setTabName(fields?.third_section?.tabs[0].tab_label);
  }, [fields]);

  const handleTabChange = (tabName: string) => {
    setTabName(tabName);
  };
  return (
    <>
      <div className='lh_tab_section__btn_area wow animate__animated animate__fadeInDown animate__delay-1s'>
        {/* Get Tabs from api */}
        {fields?.third_section?.tabs.map((item: ITab, index: number) => (
          <button
            key={`tab-item-${item.tab_label}`}
            className={`tablink lh-js-open-tab ${
              tabName === item.tab_label && 'active'
            }`}
            data-id={item.tab_label.toLowerCase()}
            onClick={() => handleTabChange(item.tab_label)}
          >
            {item.tab_label}
          </button>
        ))}
      </div>
      <TabContent fields={fields} tabName={tabName} />
    </>
  );
};

export default TabHeader;
