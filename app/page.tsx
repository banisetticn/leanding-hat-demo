import HeroBanner from '@lendingHat/sections/heroBanner';
import ClientLogo from '@lendingHat/sections/clientLogo';
import Features from '@lendingHat/sections/features';
import HowItWorks from '@lendingHat/sections/howItWorks';
import Solutions from '@lendingHat/sections/solutions';
import Faq from '@lendingHat/sections/faq';
import GetStarted from '@lendingHat/sections/getStarted';

import { store } from '@lendingHat/store';
import { getPages } from '@lendingHat/api';
import { setPages } from '@lendingHat/store/slices/pagesSlice';
import { setCurrentPathname } from '@lendingHat/store/slices/commonSlice';
import { Suspense } from 'react';

export default async function Home() {
  const pagesData = await getPages({ url: '/' });
  store.dispatch(setPages(pagesData));
  store.dispatch(setCurrentPathname('/'));
  return (
    <>
      {/* FirstSection */}
      <HeroBanner />
      {/* SecondSection */}
      <ClientLogo />
      {/* ThirdSection */}
      <Suspense
        fallback={
          <div className='flex items-center justify-center'>
            <h4>Loading...</h4>
          </div>
        }
      >
        <Features />
      </Suspense>
      {/* FourthSection */}
      <HowItWorks />
      {/* FifthSection */}
      <Solutions />
      {/* SixthSection */}
      <Faq />
      {/* SeventhSection */}
      <GetStarted />
    </>
  );
}
