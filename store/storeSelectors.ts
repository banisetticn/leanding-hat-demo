import { store } from '.';

export function getPageProps(permalink: string) {
  const allPages = store.getState().pages.pages as any;
  return allPages[permalink];
}
