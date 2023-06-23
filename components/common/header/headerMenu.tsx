import React from 'react';
import { IMenuItem } from '@lendingHat/api/interface';
import Link from 'next/link';

type IHeaderMenu = {
  menuLinks: IMenuItem[];
};

const HeaderMenu = ({ menuLinks }: IHeaderMenu) => {
  return (
    <>
      {menuLinks &&
        menuLinks.map((item: IMenuItem) => {
          return item.children.length > 0 ? (
            <HeaderMenu menuLinks={item.children} />
          ) : (
            <li className='lh-c-nav_item'>
              <a href={item?.url} className='lh-c-nav_link'>
                {item.title}
              </a>
            </li>
          );
        })}
    </>
  );
};

export default HeaderMenu;
