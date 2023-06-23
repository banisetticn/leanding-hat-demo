export interface Ifaq {
  question: string;
  answer: string;
}
export interface IObject {
  [key: string]: unknown;
}

export interface IServerConfiguration {
  defaultTimeout: number;
  /**
   * Content type should be application json for object e.g Content-Type in headers
   */
  contentType: string;
  /** Additional header for the request. */
  headers?: { [key: string]: unknown };

  /** Pass url of the request */
  url: string;
  /**
   * Pass data as json format to communicate between server and client.
   */
  data?: any;
}

export interface IRequestOptions extends Partial<IServerConfiguration> {
  /**
   * Signifies whether the server communicator should use the FormData class
   * to prepare the payload.
   */
  useFormData?: boolean;
}

export type RequestPayloadType = { [key: string]: unknown } | FormData | null;

export interface FetchResponse<T = any> {
  data: T;
  status: number;
  statusText: string;
  headers: any;
  config: IServerConfiguration;
  request?: any;
}

export interface FetchError<T = any> extends Error {
  config: IServerConfiguration;
  code?: string;
  request?: any;
  response?: FetchResponse<T>;
  isFetchError: boolean;
  toJSON: () => object;
}

export interface FetchPromise<T = any> extends Promise<FetchResponse<T>> {}

export interface IPages {
  title: string;
  content: string;
  permalink: string;
  fields: IObject;
}

export interface ITab {
  tab_label: string;
  tab_content_heading: string;
  tab_content: string;
  tab_content_list: { content_list: string }[];
  tab_images: { image: string }[];
}
export interface IBox {
  box_heading: string;
  box_content: string;
  box_image: string;
}

export interface ICategory {
  ID: number;
  name: string;
  slug: string;
  post_count: number;
}

export interface IPostsPayload {
  id: number;
  title: string;
  slug: string;
  published_date: string;
  thumbnail: string;
  category: Exclude<ICategory, 'post_count'>[];
}

export interface IPostResponse {
  current_page: number;
  total_posts: number;
  total_pages: number;
  filter_by: string;
  posts: IPostsPayload[];
  categories: ICategory[];
}
