import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import FooterLogoImg from '@assets/footer-logo.svg';
import SendIconImg from '@assets/send-icon.svg';
import LinkedInImg from '@assets/linkedin.svg';
import InstagramImg from '@assets/instagram.svg';
import TwitterImg from '@assets/twitter.svg';
import FacebookImg from '@assets/facebook.svg';
import { store } from '@lendingHat/store';
import { IFooterResponse, ILabel, IMenuItem } from '@lendingHat/api/interface';
import FooterMenu from './footerMenu';

const Footer = () => {
  const labels = store.getState().common.globals.label as unknown as ILabel;
  const footers = store.getState().common.globals
    .footers as unknown as IFooterResponse;
  return (
    <footer className='lh-c__footer'>
      <div className='container'>
        <div className='lh-c__footer-main'>
          {/* <!--lh footer logo--> */}
          <div className='lh-c__footer-brand'>
            <Image
              src={footers?.footer_logo}
              alt='footer logo'
              className='lh-c__footer-brand__icon'
              height={56}
              width={202}
            />
            <p className='lh-c__subscribe-text'>Subscribe For Newsletter</p>
            <div className='lh-c__newsletter'>
              <input
                type='text'
                placeholder='Your email address'
                className='lh-c__newsletter-input'
              />
              <button className='lh-c__newsletter-btn'>
                <Image src={SendIconImg} alt='send newslatter icon' />
              </button>
            </div>
            <div className='lh-c__footer-social'>
              <p className='lh-c__footer-social-text'>Follow Us on:</p>
              <a
                href={footers?.social_links.linkedin_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={LinkedInImg} alt='LinkedIn Logo' />
              </a>
              <a
                href={footers?.social_links.instagram_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={InstagramImg} alt='Instagram Logo' />
              </a>
              <a
                href={footers?.social_links.twitter_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={TwitterImg} alt='Twitter Logo' />
              </a>

              <a
                href={footers?.social_links.facebook_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={FacebookImg} alt='Facebook Logo' />
              </a>
            </div>
          </div>
          {/* <!--lh footer nav list--> */}
          <div className='lh-c__footer-nav-list'>
            <div className='lh-c__footer-item'>
              <h5 className='lh-c__footer-item-heading'>Quick Links</h5>
              <FooterMenu menuLinks={footers?.quick_links_menu} />
            </div>
            <div className='lh-c__footer-item'>
              <h5 className='lh-c__footer-item-heading'>Company</h5>
              <FooterMenu menuLinks={footers?.company_menu} />
            </div>
            <div className='lh-c__footer-item'>
              <h5 className='lh-c__footer-item-heading'>Resources</h5>
              <FooterMenu menuLinks={footers?.resources_menu} />
            </div>
          </div>
          {/* <div className='lh-c__footer-item-first'>
            <Image
              src={footers?.footer_logo}
              alt='Lending Hat Footer Logo'
              className='lh-c__footer-item-first__icon'
              height={55.45}
              width={202}
            />
            <p className='lh-c__subscribe-text'>
              {labels?.subscribe_to_our_newsletter}
            </p>
            <div className='lh-c__newsletter'>
              <input
                type='text'
                placeholder={labels?.your_email_address}
                className='lh-c__newsletter-input'
              />
              <button className='lh-c__newsletter-btn'>
                <Image src={SendIconImg} alt='' />
              </button>
            </div>
            <div className='lh-c__footer-social'>
              <p className='lh-c__footer-social-text'>
                {labels?.follow_us_on}:
              </p>
              <a
                href={footers?.social_links?.linkedin_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={LinkedInImg} alt='LinkedIn Logo' />
              </a>
              <a
                href={footers?.social_links?.instagram_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={InstagramImg} alt='Instagram Logo' />
              </a>
              <a
                href={footers?.social_links?.twitter_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={TwitterImg} alt='Twitter Logo' />
              </a>

              <a
                href={footers?.social_links?.facebook_url}
                className='lh-c__footer-social-icon'
              >
                <Image src={FacebookImg} alt='Facebook Logo' />
              </a>
            </div>
          </div>
          <div className='lh-c__footer-item'>
            <h5 className='lh-c__footer-item-heading'>Quick Links</h5>
            <FooterMenu menuLinks={footers?.quick_links_menu} />
          </div>
          <div className='lh-c__footer-item'>
            <h5 className='lh-c__footer-item-heading'>Company</h5>
            <FooterMenu menuLinks={footers?.company_menu} />
          </div>
          <div className='lh-c__footer-item'>
            <h5 className='lh-c__footer-item-heading'>Resources</h5>
            <FooterMenu menuLinks={footers?.resources_menu} />
          </div> */}
        </div>
        <div className='lh-c__copyrights'>
          <p className='lh-c__copyrights-text'>{labels?.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
