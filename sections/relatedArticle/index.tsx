import PostsCard from '@lendingHat/components/postsCard';
import { IPostsPayload } from '@lendingHat/interfaces';
import React from 'react';

type IRelatedArticle = {
  postDetails: any;
  children: React.ReactNode;
};

const RelatedArticle = ({ postDetails, children }: IRelatedArticle) => {
  return (
    <section className='lh_blog_info_article_section'>
      <div className='container'>
        <div className='lh_blog_info_article_slider_wrapper'>
          <div className='lh_blog_info_article_heading_area'>
            <h3 className='lh_blog_info_article_heading'>
              Articles you also may like
            </h3>

            {children}
          </div>

          <ul className='lh_blog_info_article_slider'>
            {postDetails.related_posts.map(
              (post: IPostsPayload, index: number) => (
                <li
                  key={`related-posts-${post.id}-${index}`}
                  className='lh_blog_info_article_slider__list lh_blog_post_data'
                >
                  <PostsCard
                    key={`posts-item-${post.id}`}
                    post={post}
                    imageSize={{ height: 191, width: 393 }}
                  />
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticle;
