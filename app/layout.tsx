import './styles/globals.scss';
import 'animate.css';
import Header from '@lendingHat/components/common/header';
import Footer from '@lendingHat/components/common/footer';
import { getLabels } from '@lendingHat/api';
import { setCommonLabels } from '@lendingHat/store/slices/commonSlice';
import { store } from '@lendingHat/store';
import { Providers } from '@lendingHat/store/provider';
import Preloader from '@lendingHat/store/preloader';

export const metadata = {
  title: 'Welcome to the Lending Hat | Home',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const labels = await getLabels();
  store.dispatch(setCommonLabels(labels));

  const common = store.getState().common;
  const pages = store.getState().pages;
  const blogs = store.getState().blogs;

  // console.log('GETSTATE', JSON.stringify(common));
  console.log('GETSTATE_PAGES', JSON.stringify(blogs));

  return (
    <>
      <html lang='en'>
        <body>
          <Preloader common={common} pages={pages} blogs={blogs} />
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </body>
      </html>
    </>
  );
}
