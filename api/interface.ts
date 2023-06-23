import { IObject } from '@lendingHat/interfaces';

export interface ILabel {
  sign_in: string;
  schedule_a_demo: string;
  subscribe_to_our_newsletter: string;
  your_email_address: string;
  follow_us_on: string;
  quick_links: string;
  company: string;
  resources: string;
  copyright: string;
  get_started: string;
  get_started_now: string;
  explore_our_platform: string;
  excited_to_learn_more: string;
  see_all_faqs: string;
  learn_how_it_works: string;
  join_the_team: string;
  see_more: string;
  our_blogs: string;
  categories: string;
  search_topic_here: string;
  recent: string;
  popular: string;
}

export interface IHeaderResponse {
  header_logo: string;
  signin_link: string;
  schedule_demo_link: string;
  header_menu: IMenuItem[];
}
export interface IFooterResponse {
  footer_logo: string;
  social_links: ISocialLinks;
  quick_links_menu: IMenuItem[];
  company_menu: IMenuItem[];
  resources_menu: IMenuItem[];
}

export interface ISocialLinks {
  linkedin_url: string;
  instagram_url: string;
  twitter_url: string;
  facebook_url: string;
}

export interface IMenuItem {
  ID: number;
  title: string;
  url: string;
  children: IMenuItem[];
}
