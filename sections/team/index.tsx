import React from 'react';
import Image from 'next/image';

import EllipseImg from '@assets/ellipse-65.png';
import Ellipse2Img from '@assets/ellipse-66.png';
import GroupImg from '@assets/group-3.png';
import Group2Img from '@assets/group-4.png';
import Group3Img from '@assets/group-5.png';
import { getPageProps } from '@lendingHat/store/storeSelectors';

const Team = () => {
  const currentPageData = getPageProps('/about-us/');
  const fifthSection = currentPageData?.fields?.fifth_section;
  return (
    <section className='lh_about_team lh_bg_b_gradient'>
      <div className='container'>
        <div className='lh_about_team_title_area'>
          <h3 className='lh_about_team_heading'>{fifthSection?.heading}</h3>
          <p
            className='lh_about_team_para'
            dangerouslySetInnerHTML={{ __html: fifthSection?.content }}
          />
        </div>

        <div className='lh_team_slider'>
          <div className='slide-track'>
            {fifthSection &&
              fifthSection?.teams.map(
                (
                  team: {
                    member_image: string;
                    member_name: string;
                    member_designation: string;
                  },
                  index: number
                ) => (
                  <div key={`teams-member-${index}`} className='slide'>
                    <Image
                      src={team.member_image}
                      alt='team images'
                      height={247}
                      width={247}
                    />
                    <p className='lh_team_author'>{team.member_name}</p>
                    <p className='lh_team_author_post'>
                      {team.member_designation}
                    </p>
                  </div>
                )
              )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
