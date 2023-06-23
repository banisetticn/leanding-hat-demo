import Image from 'next/image';

import HeadQuarterImg from '@assets/lh_headquarter.svg';
import LocationImg from '@assets/location-bg.jpg';
import LocationIcon from '@assets/location-icon.svg';
import PhoneIcon from '@assets/phone-icon.svg';
import EmailIcon from '@assets/email_icon.svg';

export default function Page() {
  return (
    <>
      <section className='lh_solution_hero_section'>
        <div className='container'>
          <div className='lh_solution_hero_section__content_area wow animate__animated animate__fadeInLeft animate__delay-100'>
            <h1 className='lh_solution_banner_heading'>Solutions</h1>
            <p className='lh_solution_hero_section__content_area__sub_heading'>
              Empowering Financial Institutions: Tailored Solutions for Success
            </p>
            <p className='lh_solution_hero_section__content_area__para'>
              Lending Hat offers tailored solutions that empower financial
              institutions to overcome challenges. Using data resources and
              technology, we help lenders achieve their strategic goals, reduce
              costs, and increase profitability. Our expertise and innovation
              address common industry obstacles, ensuring success in lending
              operations.
            </p>
          </div>

          <div className='lh_solution_hero_section__image'>
            <div className='lh_solution_img_icon_group'>
              <img
                src='assets/lh_solution_group_img_icon1.svg'
                className='lh_solution_group_icon1 wow animate__animated animate__fadeInDown animate__delay-1s'
              />
              <img
                src='assets/lh_solution_group_img_icon2.svg'
                className='lh_solution_group_icon2 wow animate__animated animate__fadeInLeft animate__delay-1s'
              />
              <img
                src='assets/lh_solution_group_img_icon3.svg'
                className='lh_solution_group_icon3 wow animate__animated animate__fadeInUp animate__delay-1s'
              />
              <img
                src='assets/lh_solution_group_img_icon4.svg'
                className='lh_solution_group_icon4 wow animate__animated animate__fadeInUp animate__delay-1s'
              />
              <img
                src='assets/lh_solution_group_img_icon5.svg'
                className='lh_solution_group_icon5 wow animate__animated animate__fadeInRight animate__delay-1s'
              />
            </div>
            <img
              src='assets/solution-banner-img.svg'
              className='wow animate__animated animate__fadeInRight animate__delay-100'
            />
            <img
              src='assets/solution-banner-icon.png'
              className='lh_solution_hero_icon wow animate__animated animate__fadeInLeft animate__delay-100'
            />
          </div>
        </div>
      </section>
      <section className='lh_setup_solution_section lh_icon_bg_top'>
        <div className='container'>
          <h2 className='lh_setup_solution_section__heading'>
            Take Your Lending Game a Step Up
            <br />
            with Our Suite of Solutions
          </h2>
          <img
            src='assets/lh_setup_solution_img.svg'
            className='lh_setup_solution_section__icon'
          />
        </div>
      </section>
      <section className='lh_hidden_opportunities lh_tab_content_wrapper'>
        <div className='container'>
          <div className='lh_hidden_opportunities__img'>
            <h3 className='lh_hidden_opportunities__img__heading'>
              Discover Hidden Opportunities through Comprehensive Sales Report
              Analysis
            </h3>
            <div className='lh_hidden_opp_img_icon_group'>
              <img
                src='assets/hidden_opp_icon1.svg'
                className='lh_hidden_opp_img_icon1 wow animate__animated animate__fadeInLeft animate__delay-100 lh_shadow_light'
              />
              <img
                src='assets/hidden_opp_icon2.svg'
                className='lh_hidden_opp_img_icon2 wow animate__animated animate__fadeInRight animate__delay-100 lh_shadow_light'
              />
            </div>
            <img
              src='assets/hidden_opportunities_bg.png'
              className='wow animate__animated animate__fadeInUp animate__delay-100 lh_opp_shadow'
            />
          </div>
          <div className='lh_hidden_opportunities__text_content tab_text_area lh_mr_none'>
            <h3 className='lh_tab_content_heading'>
              Comprehensive Sales Reports: Informed Decision-making with
              Detailed Income and Expense Analysis
            </h3>
            <p className='lh_tab_content_para'>
              At Lending Hat, we use our internal proprietary tools to address
              lenders hurdles in lending operations. Our AI/ML models provide
              personalized offers, recommendations for suitable applications,
              and comprehensive sales reports with income and expense details,
              assisting lenders in making informed decisions.
            </p>
            <div className='lh_check_list_col'>
              <li>Thoroughly review credit history and statements</li>
              <li>Analyze stability and repayment capacity</li>
              <li>Assess market conditions for risk and opportunities</li>
              <li>Determine the loan security level</li>
              <li>Diversify loan portfolio and identify potential risks</li>
            </div>
          </div>
        </div>
      </section>
      <section className='lh_hidden_opportunities lh_risk_evaluation lh_tab_content_wrapper'>
        <div className='lh_hidden_opp_gap container'>
          <div className='lh_hidden_opportunities__text_content risk_text_content tab_text_area lh_mr_none'>
            <h3 className='lh_tab_content_heading'>
              Maximize Loan Security with Comprehensive Risk Evaluation
            </h3>
            <p className='lh_tab_content_para'>
              Lending Hat is a state-of-the-art platform providing lenders
              cutting-edge tools to identify and manage risks effectively. With
              a wealth of in-depth information and relevant data, our platform
              equips lenders with the necessary resources for conducting
              comprehensive risk analysis. Our automated underwriter evaluates
              the entire portfolio of lenders, enabling accurate and reliable
              risk assessment. Moreover, we diligently monitor the portfolios of
              merchants, promptly alerting lenders to any potential issues that
              may arise. 
            </p>
            <p className='lh_tab_content_para'>
              Lending Hat offers lenders comprehensive risk analysis tools,
              empowering them to make well-informed and prudent lending
              decisions. By leveraging our platform, lenders can effectively
              mitigate potential risks and ensure the stability and growth of
              their lending operations. 
            </p>
          </div>
          <div className='lh_hidden_opportunities__img risk_img'>
            <div className='lh_hidden_opp_img_icon_group'>
              <img
                src='assets/risk_evaluation_icon.svg'
                className='lh_hidden_opp_img_icon3 wow animate__animated animate__fadeInLeft animate__delay-100 lh_shadow_light'
              />
            </div>
            <img
              src='assets/risk_evaluation_bg.svg'
              className='lh_risk_bg wow animate__animated animate__fadeInDown animate__delay-100 lh_shadow_light'
            />
          </div>
        </div>
      </section>
      <section className='lh_bank_statement_solution_section'>
        <div className='container'>
          <div className='lh_bank_statement_solution_img'>
            <img
              src='assets/bank_statement_solution_img.svg'
              className='lh_statement_shadow'
            />
          </div>
          <div className='lh_bank_statement_solution_content'>
            <h3 className='lh_bank_statement_solution_heading'>
              Simplify Your Bank Statement
              <br />
              Analysis with Our Technology
              <br />
              and Solutions
            </h3>
            <p className='lh_bank_statement_solution_para'>
              Lending Hat uses advanced tools and technology to help lenders
              with bank statements and other related details. Our platform
              ensures lenders have all the necessary information to make
              informed lending decisions. With cutting-edge technology, it
              streamlines financial data analysis, providing accurate insights
              into borrowers financial health. Our standout features include AI
              underwriting, risk analysis, fraud detection, loan origination, a
              management system, 360-degree loan view, automated matching, CRM
              integration, and a brokers dashboard. Our platform eliminates
              manual work, enables digital signatures, and makes lending
              efficient and convenient.
            </p>
          </div>
        </div>
      </section>
      <section className='lh_hidden_opportunities lh_loan_app lh_tab_content_wrapper'>
        <div className='container'>
          <div className='lh_hidden_opportunities__text_content tab_text_area loan_text_content lh_mr_none'>
            <h3 className='lh_tab_content_heading'>
              Applicable Industries: Assisting Various Sectors in Their Loan
              Applications
            </h3>
            <p className='lh_tab_content_para'>
              Lending Hat caters to various industries, including full-service
              restaurants, limited-service restaurants, dentists, general
              freight trucking, hotels and motels, fitness, recreational sports,
              general automotive repair, landscaping services, and more. We
              understand each industrys unique needs and challenges, and our
              tailored solutions are designed to help businesses thrive. 
            </p>
            <p className='lh_tab_content_para'>
              Whether its financing for equipment purchases, expansion plans, or
              working capital, Lending Hat provides industry-specific expertise
              and innovative lending solutions. Our platform ensures that
              businesses in diverse sectors have access to the necessary
              financial resources, empowering them to grow and succeed in their
              respective industries.
            </p>
          </div>

          <div className='lh_hidden_opportunities__img loan_img'>
            <div className='lh_hidden_opp_img_icon_group'>
              <img
                src='assets/lh_loan_applications_icon.svg'
                className='lh_hidden_opp_img_icon4 wow animate__animated animate__fadeInLeft animate__delay-100 lh_shadow_light'
              />
            </div>
            <img
              src='assets/lh_loan_applications_bg.svg'
              className='loan_applications_bg wow animate__animated animate__fadeInRight animate__delay-100 lh_shadow_light'
            />
          </div>
        </div>
      </section>
      <section className='lh-c__kickstart'>
        <div className='container'>
          <div className='lh-c__kickstar-main'>
            <div className='lh-c__kickstar-heading'>
              <h2 className='lh-c__kickstar-heading-text'>
                Step up your lending game and <br />
                experience unprecedented growth and success
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
                  ></path>
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
