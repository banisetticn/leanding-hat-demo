import React from 'react';
import { IMenuItem } from '@lendingHat/api/interface';

type IFooterMenu = {
  menuLinks: IMenuItem[];
};

const FooterMenu = ({ menuLinks }: IFooterMenu) => {
  return (
    <ul className='lh-c__footer-item-list'>
      {menuLinks &&
        menuLinks.map((item: IMenuItem) => {
          return item.children.length > 0 ? (
            <FooterMenu menuLinks={item.children} />
          ) : (
            <li
              key={`resource-menu-item-${item.ID}`}
              className='lh-c__footer-item-list-item'
            >
              <a href={item.url} className='lh-c__footer-list-item-link'>
                {item.title}
              </a>
            </li>
          );
        })}
    </ul>
  );
};

export default FooterMenu;
