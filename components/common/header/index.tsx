import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { store } from '@lendingHat/store';
import { IHeaderResponse, ILabel } from '@lendingHat/api/interface';
import HeaderMenu from './headerMenu';

const Header = () => {
  const labels = store.getState().common.globals?.label as unknown as ILabel;
  const headers = store.getState().common.globals
    ?.headers as unknown as IHeaderResponse;

  return (
    <header className='lh-c-header'>
      <div className='container mx-auto'>
        <div className='row lh-c-header__row'>
          <div className='lh-c-logo'>
            <Link href='/'>
              <span className='sr-only'>Lending Hat</span>
              <Image
                src={headers?.header_logo}
                alt='logo'
                height={55.45}
                width={202}
              />
            </Link>
          </div>
          <nav className='lh-c-nav'>
            <ul className='lh-c-nav__list'>
              {/* <HeaderMenu menuLinks={headers?.header_menu} /> */}
              <li className='lh-c-nav_item'>
                <Link href={'/blog'} className='lh-c-nav_link'>
                  Blog
                </Link>
              </li>
              <li className='lh-c-nav_item'>
                <Link href={'/platforms'} className='lh-c-nav_link'>
                  Platforms
                </Link>
              </li>
              <li className='lh-c-nav_item'>
                <Link href={'/solutions'} className='lh-c-nav_link'>
                  Solutions
                </Link>
              </li>
              <li className='lh-c-nav_item'>
                <Link href={'/contact-us'} className='lh-c-nav_link'>
                  Contact US
                </Link>
              </li>
              <div className='lh-c-cta'>
                <a
                  href={headers?.signin_link}
                  className='lh-u-btn lh-u-btn--simple'
                >
                  {labels?.sign_in}
                </a>
                <a
                  href={headers?.schedule_demo_link}
                  className='lh-u-btn lh-u-btn--solid lh-u-btn--solid--icon lh-u-btn--rounded'
                >
                  {labels?.schedule_a_demo}
                </a>
              </div>
            </ul>
          </nav>
          <div className='lh-c-cta'>
            <a
              href={headers?.signin_link}
              className='lh-u-btn lh-u-btn--simple'
            >
              {labels?.sign_in}
            </a>
            <a
              href={headers?.schedule_demo_link}
              className='lh-u-btn lh-u-btn--solid lh-u-btn--solid--icon lh-u-btn--rounded'
            >
              {labels?.schedule_a_demo}
            </a>
          </div>

          <div id='hamburger_menu' className='lh-js-open-menu'>
            <div className='bar' id='bar1'></div>
            <div className='bar' id='bar2'></div>
            <div className='bar' id='bar3'></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
