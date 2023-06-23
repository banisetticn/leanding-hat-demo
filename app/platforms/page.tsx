import Image from 'next/image';

import HeadQuarterImg from '@assets/lh_headquarter.svg';
import LocationImg from '@assets/location-bg.jpg';
import LocationIcon from '@assets/location-icon.svg';
import PhoneIcon from '@assets/phone-icon.svg';
import EmailIcon from '@assets/email_icon.svg';

export default function Page() {
  return (
    <>
      <section className='lh_platform_banner'>
        <div className='container'>
          <div className='lh_platform_banner__content_area wow animate__animated animate__fadeInLeft animate__delay-1s'>
            <h1 className='lh_platform_banner__heading'>Features</h1>
            <p className='lh_platform_banner__sub_heading'>
              Saddle up for a Seamless Loan Origination Experience with Lending
              Hat
            </p>
            <p className='lh_platform_banner__para'>
              Welcome to Lending Hat, the top-notch lending platform crafted to
              revolutionize your lending operations. Join us today and dive into
              a world of distinctive features and functionalities that will
              streamline and enhance your lending experience.
            </p>
          </div>
          <div className='lh_platform_banner__img wow animate__animated animate__fadeInRight animate__delay-1s'>
            <div className='platform_banner_icon'>
              <img
                src='assets/platform_hero_bg.svg'
                className='platform_banner_icon_img'
                alt='platform banner icon'
              />
            </div>
            <img src='assets/platform_hero_img.svg' className='platform_img' />
          </div>
        </div>
      </section>

      <section className='lh_key_hightlight lh_icon_bg_top'>
        <div className='container'>
          <div className='lh_key_hightlight__heading_area wow animate__animated animate__fadeInDown animate__delay-100'>
            <h2 className='lh_key_hightlight__heading'>
              Key Highlights of Lending Hats
            </h2>
            <p className='lh_key_hightlight__para'>
              Your financial well-being is our priority. Unlock the superpower
              of the platform that empowers you to streamline
              <br /> your lending operations, minimize risk, and reach
              unprecedented success.
            </p>
          </div>
          <img
            src='assets/key_hightlight_bg.svg'
            className='lh_key_hightlight__img lh_shadow_medium wow animate__animated animate__fadeInUp animate__delay-100'
            alt='key hightlight img'
          />
        </div>
      </section>

      <section className='lh_two_column_top_align lh_platform_ai_driven_section'>
        <div className='container'>
          <div className='lh_two_column__content ai_driven_content wow animate__animated animate__fadeInLeft animate__delay-100'>
            <h3 className='lh_two_column_heading ai_driven_heading'>
              Streamlined Lending Practices Through
              <br /> AI-Driven Systems
            </h3>
            <p className='lh_two_column_para ai_driven_para'>
              We use powerful AI-powered underwriting systems, top-notch risk
              analysis tools, and fraud detection systems to transform the
              lending process. Our AI Underwriter removes old-fashioned manual
              underwriting, accurately assesses creditworthiness by scrutinizing
              borrower data, and ensures quick and reliable decision-making. Our
              platform helps streamline lending practices, significantly
              minimizing risks. Our proprietary Risk Analysis and Fraud
              Detection algorithms identify and thwart potential risks and
              fraudulent activities, effectively protecting your lending
              portfolio.
            </p>
          </div>
          <div className='lh_two_column__img ai_driven_img'>
            <div className='lh_two_column_icon'>
              <img
                src='assets/ai-driven-icon1.svg'
                className='lh_two_column_icon1 wow animate__animated animate__fadeInDown animate__delay-1s'
              />
              <img
                src='assets/ai-driven-icon2.svg'
                className='lh_two_column_icon2 wow animate__animated animate__fadeInUp animate__delay-1s'
              />
            </div>
            <img
              src='assets/ai-driven-bg.svg'
              className='platform_ai_driven_img wow animate__animated animate__fadeInRight animate__delay-100'
              alt='AI Driven img'
            />
          </div>
        </div>
      </section>

      <section className='lh_two_column_top_align lh_loan_origination_management_section lh_dark_blue'>
        <div className='container'>
          <div className='lh_two_column__img loan_origination_m_img'>
            <div className='lh_two_column_icon'>
              <img
                src='assets/loan-origination-management-icon1.svg'
                className='lh_two_column_icon3 wow animate__animated animate__fadeInDown animate__delay-1s'
              />
              <img
                src='assets/loan-origination-management-icon2.svg'
                className='lh_two_column_icon4 wow animate__animated animate__fadeInUp animate__delay-1s'
              />
            </div>
            <img
              src='assets/loan_origination_management-bg.svg'
              className='loan_origination_management_report_img wow animate__animated animate__fadeInLeft animate__delay-100'
              alt='loan origination management report img'
            />
          </div>

          <div className='lh_two_column__content loan_origination_m_content wow animate__animated animate__fadeInRight animate__delay-100'>
            <h3 className='lh_two_column_heading loan_origination_management_heading'>
              Maximize Efficiency in Loan Origination and Management
            </h3>
            <p className='lh_two_column_para loan_origination_management_para'>
              We offer a comprehensive solution for loan origination and
              management. Our smooth process allows effortless creation and
              handling of loan applications, saving time and effort. With
              efficient borrower information gathering and documentation
              verification, approval is accelerated. Our full-fledged loan
              management system simplifies the journey, enabling seamless
              distribution, repayment tracking, reporting, and collection
              management. Fine-tune loan portfolio management with Lending Hat.
            </p>
          </div>
        </div>
      </section>

      <section className='lh_two_column_top_align lh_data_driven_loan_management_setion'>
        <div className='container'>
          <div className='lh_two_column__content data_driven_loan_m_content wow animate__animated animate__fadeInLeft animate__delay-100'>
            <h3 className='lh_two_column_heading data-driven_loan_management_heading'>
              Boost Financial outcomes through
              <br /> Data-driven Loan Management
            </h3>
            <p className='lh_two_column_para ai_driven_para'>
              We offer a comprehensive loan management solution that provides a
              360-degree view, enabling users to track loan statistics, monitor
              performance, and access real-time analytics. Our primary focus is
              to assist lenders in making informed decisions based on data,
              ultimately enhancing their financial outcomes. With our advanced
              algorithms, we automate the matching process between borrowers and
              lenders, ensuring ideal loan matches and optimizing efficiency.
              Our objective is to streamline the lending process through
              automated matching capabilities.
            </p>
          </div>
          <div className='lh_two_column__img data_driven_loan_m_img'>
            <div className='lh_two_column_icon'>
              <img
                src='assets/data-driven_loan_management_icon1.svg'
                className='lh_two_column_icon5 wow animate__animated animate__fadeInDown animate__delay-1s'
              />
              <img
                src='assets/data-driven_loan_management_icon2.svg'
                className='lh_two_column_icon6 wow animate__animated animate__fadeInUp animate__delay-1s'
              />
            </div>
            <img
              src='assets/data-driven_loan_management_bg.svg'
              className='data-driven_loan_management_img wow animate__animated animate__fadeInRight animate__delay-100'
              alt='AI Driven img'
            />
          </div>
        </div>
      </section>

      <section className='lh_two_column_top_align lh_data_driven_loan_management_setion lh_digital_revolution lh_light_blue500'>
        <div className='container'>
          <div className='lh_two_column__img'>
            <div className='lh_two_column_icon'>
              <img
                src='assets/lh-Digital Revolution-icon1.svg'
                className='lh_two_column_icon7 wow animate__animated animate__fadeInRight animate__delay-1s'
              />
            </div>
            <img
              src='assets/lh-Digital Revolution-bg.svg'
              className='data-driven_loan_management_img digital_revolution_img wow animate__animated animate__fadeInLeft animate__delay-100'
              alt='Digital Revolution img'
            />
          </div>

          <div className='lh_two_column__content digital_revolution_content wow animate__animated animate__fadeInRight animate__delay-100'>
            <h3 className='lh_two_column_heading data-driven_loan_management_heading'>
              Boost Financial outcomes through
              <br /> Data-driven Loan Management
            </h3>
            <p className='lh_two_column_para ai_driven_para'>
              We offer a comprehensive loan management solution that provides a
              360-degree view, enabling users to track loan statistics, monitor
              performance, and access real-time analytics. Our primary focus is
              to assist lenders in making informed decisions based on data,
              ultimately enhancing their financial outcomes. With our advanced
              algorithms, we automate the matching process between borrowers and
              lenders, ensuring ideal loan matches and optimizing efficiency.
              Our objective is to streamline the lending process through
              automated matching capabilities.
            </p>
          </div>
        </div>
      </section>

      <section className='lh-c__kickstart'>
        <div className='container'>
          <div className='lh-c__kickstar-main'>
            <div className='lh-c__kickstar-heading'>
              <h2 className='lh-c__kickstar-heading-text'>
                Join Lending Hat today and <br /> Transform Your Lending
                Business. 
              </h2>
            </div>
            <div className='lh-c__btn-white'>
              <button className='lh-c__btn-white-text-btn lh_white_fill_btn'>
                Get Started Now
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
                  />
                </svg>
              </button>
              <p className='lh-c__getstarted'>
                Want to learn more?
                <a href='' className='lh-c__getstarted-link'>
                  Schedule A Demo
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
