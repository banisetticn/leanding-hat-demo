import Corevalues from '@lendingHat/sections/coreValues';
import CEOQuote from '@lendingHat/sections/ceoQuote';
import AboutHeroBanner from '@lendingHat/sections/heroBanner/aboutHeroBanner';
import React from 'react';
import Team from '@lendingHat/sections/team';
import JoinTeam from '@lendingHat/sections/joinTeam';
import { store } from '@lendingHat/store';
import { getPages } from '@lendingHat/api';
import { setPages } from '@lendingHat/store/slices/pagesSlice';
import { setCurrentPathname } from '@lendingHat/store/slices/commonSlice';

export default async function About() {
  const pagesData = await getPages({ url: '/about-us/' });
  store.dispatch(setPages(pagesData));
  store.dispatch(setCurrentPathname('/about-us'));
  return (
    <>
      <AboutHeroBanner />
      <Corevalues />
      <CEOQuote />
      <Team />
      <JoinTeam />
    </>
  );
}
