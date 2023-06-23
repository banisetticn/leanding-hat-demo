import Image from 'next/image';

import HeadQuarterImg from '@assets/lh_headquarter.svg';
import LocationImg from '@assets/location-bg.jpg';
import LocationIcon from '@assets/location-icon.svg';
import PhoneIcon from '@assets/phone-icon.svg';
import EmailIcon from '@assets/email_icon.svg';
import RecaptchaIcon from '@assets/recaptcha-icon.png';

export default function Page() {
  return (
    <>
      <section className='lh_contact_form_section lh_icon_bg_top'>
        <div className='container'>
          <div className='lh_contact_form_section__heading'>
            <h1 className='lh_contact_form_section_title'>
              Let us lend a hand. Contact us today
            </h1>
            <p className='lh_contact_form_para'>
              We value your feedback and are here to assist you with any
              questions or concerns you may
              <br /> have. Please feel free to reach out to us by filling out
              the form below
            </p>
          </div>

          <form className='lh_contact_form lh_shadow_medium form' action=''>
            <h3 className='lh_form_title'>We wold love to hear from you!</h3>
            <div className='form_group'>
              <div className='form_name_filed'>
                <label htmlFor='contact_name'>
                  Name<span className='form_required'>*</span>
                </label>
                <input
                  type='text'
                  className='name'
                  id='contact_name'
                  required
                />
              </div>
              <div className='form_company_filed'>
                <label htmlFor='company_name'>
                  Company Name<span className='form_required'>*</span>
                </label>
                <input
                  type='text'
                  className='company'
                  id='company_name'
                  required
                />
              </div>
              <div className='form_email_filed'>
                <label htmlFor='email'>
                  Email Address<span className='form_required'>*</span>
                </label>
                <input type='email' className='gmail' id='email' required />
              </div>
              <div className='form_num_filed'>
                <label htmlFor='tel'>Phone Number</label>
                <input type='email' className='phone_num' id='tel' />
              </div>

              <div className='form_message_filed'>
                <label htmlFor='message'>Message</label>
                <textarea className='message_box' id='message'></textarea>
              </div>
              <div className='form_submit_btn_area'>
                <div className='form_captcha_btn'>
                  <input type='checkbox' className='captcha_btn' />
                  <p>Im not a robot</p>
                  <Image src={RecaptchaIcon} className='captcha_icon' alt='' />
                </div>
                <button
                  type='submit'
                  value='Submit'
                  className='lh_btn_active form_submit'
                >
                  Submit{' '}
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
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      <section className='lh_branch_section'>
        <div className='container'>
          <div className='lh_branch_section__heading'>
            <h2 className='lh_branch_section_title'>
              Explore Lending Excellence at Our Headquarter
            </h2>
            <p className='lh_branch_section_para'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non
              ligula feugiat.
            </p>
          </div>
          <Image src={HeadQuarterImg} className='lh_branch_bg' alt='' />
        </div>
      </section>
      <section className='lh_location'>
        <div className='container'>
          <div className='lh_location__img'>
            <Image src={LocationImg} className='lh_location_bg' alt='' />
          </div>
          <div className='lh_location_data'>
            <h3 className='lh_location__title'>Office Location</h3>
            <ul className='lh_location__address_list lh_address_list'>
              <li className='lh_location__address_item lh_address_item'>
                <Image
                  src={LocationIcon}
                  className='lh_address_item_icon'
                  alt=''
                />
                <p>
                  330 E Camp Wisdom Rd
                  <br /> Dallas, Texas(TX), 75241
                </p>
              </li>
              <li className='lh_location__address_item lh_address_item'>
                <Image
                  src={PhoneIcon}
                  className='lh_address_item_icon'
                  alt=''
                />
                <p>
                  <a href='tel:782-9543'> 782-9543</a>
                </p>
              </li>
              <li className='lh_location__address_item lh_address_item'>
                <Image
                  src={EmailIcon}
                  className='lh_address_item_icon'
                  alt=''
                />
                <p>
                  <a href='mailto:Info@lendinghat.com'>Info@lendinghat.com</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
