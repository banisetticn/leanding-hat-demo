import { IObject } from '@lendingHat/interfaces';
import { baseURL } from './baseUrl';

export async function getLabels() {
  try {
    const req = await fetch(`${baseURL}/global`);
    return req.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log('There was a SyntaxError', error);
    } else {
      console.log('There was an error', error);
    }
  }
}

export async function getPages(requestBody: IObject) {
  try {
    const req = await fetch(`${baseURL}/pages`, {
      method: 'post',
      body: JSON.stringify(requestBody),
    });
    return req.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log('There was a SyntaxError', error);
    } else {
      console.log('There was an error', error);
    }
  }
}

export async function getBlogPosts(requestBody: IObject) {
  try {
    const req = await fetch(`${baseURL}/blogs`, {
      method: 'post',
      body: JSON.stringify(requestBody),
    });
    return req.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log('There was a SyntaxError', error);
    } else {
      console.log('There was an error', error);
    }
  }
}
export async function getBlogPostsDetails(requestBody: IObject) {
  try {
    const req = await fetch(`${baseURL}/blog_details`, {
      method: 'post',
      body: JSON.stringify(requestBody),
    });
    return req.json();
  } catch (error) {
    if (error instanceof SyntaxError) {
      // Unexpected token < in JSON
      console.log('There was a SyntaxError', error);
    } else {
      console.log('There was an error', error);
    }
  }
}
