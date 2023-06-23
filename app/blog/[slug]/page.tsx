import { getBlogPosts, getBlogPostsDetails } from '@lendingHat/api';
import CategoryBox from '@lendingHat/components/categoryBox';
import PostsCard from '@lendingHat/components/postsCard';
import SearchBox from '@lendingHat/components/searchBox';
import SocialShare from '@lendingHat/components/socialShare';
import SubscribeBox from '@lendingHat/components/subscribeBox';
import { ICategory, IPostsPayload } from '@lendingHat/interfaces';
import RelatedArticle from '@lendingHat/sections/relatedArticle';
import ArrowButtons from '@lendingHat/sections/relatedArticle/ArrowButtons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export async function generateStaticParams() {
  const posts = await getBlogPosts({});

  return posts.posts.map((post: IPostsPayload) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const postDetail = await getBlogPostsDetails({ url: params.slug });

  return {
    title: postDetail.title,
    description: postDetail.content,
  };
}

const Page = async ({ params }: { params: { slug: string } }) => {
  const postDetails = await getBlogPostsDetails({ url: params.slug });

  console.log('postdetails', postDetails);

  return (
    <>
      <section className='lh_blog_info_banner'>
        <div className='container'>
          <div className='lh_blog_info_banner__inner'>
            <p className='lh_blog_info_banner__inner__nesting_slug lh_breadcrumbs'>
              <Link href={'/'}>
                <span className='parent_slug_mark lh_breadcrumbs_links'>
                  Home
                </span>
              </Link>
              <Link href={'/blog'}>
                <span className='parent_slug_mark lh_breadcrumbs_links'>
                  Blog
                </span>
              </Link>
              {postDetails?.permalink ?? params.slug}
            </p>
            <h1 className='lh_blog_info_banner__inner__heading'>
              {postDetails.title}
            </h1>
            <p className='lh_blog_info_banner__inner__cat_date'>
              {/* <span className='parent_slug_mark'>Platform</span> */}
              {postDetails.category.map(
                (category: ICategory, index: number) => (
                  <span
                    key={`category-${category.ID}-${index}`}
                    className='parent_slug_mark'
                  >
                    {category.name}
                  </span>
                )
              )}
              {postDetails.published_date}
            </p>
            <Image
              src={postDetails.thumbnail}
              className='lh_blog_info_banner_img'
              alt='lh blog info banner'
              height={464}
              width={1007}
            />
          </div>
        </div>
      </section>
      <section className='lh_blog_info_details_banner'>
        <div className='container'>
          {/* Left Sidebar */}
          <div className='lh_blog_info_details_left_area'>
            <div dangerouslySetInnerHTML={{ __html: postDetails.content }} />
            <SocialShare />
          </div>
          {/* Right Sidebar */}
          <div className='lh_blog_info_details_right_catagories_area'>
            <SearchBox />
            <CategoryBox />
            <SubscribeBox />
          </div>
        </div>
      </section>
      <RelatedArticle postDetails={postDetails}>
        <ArrowButtons />
      </RelatedArticle>
    </>
  );
};

export default Page;
