import { BASE_URL } from "./baseUrl";

export type Post = {
  id: string;
  title: string;
  body: string;
  userId: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch(`${BASE_URL}/posts`);
  return res.json();
};

export const fetchPostById = async (
  id: string | string[] | undefined
): Promise<Post> => {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : fetch(`${BASE_URL}/posts/${id}`).then((res) => res.json());
};

type Author = {
  email: string;
  name: string;
};

export const fetchAuthorById = async (
  id: string | string[] | undefined
): Promise<Author> => {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : fetch(`${BASE_URL}/users/${id}`).then((res) => res.json());
};

type Comment = {
  id: string;
  email: string;
  name: string;
  body: string;
};

export const fetchCommentsByPostId = async (
  id: string | string[] | undefined
): Promise<Comment[]> => {
  return typeof id === "undefined"
    ? Promise.reject(new Error("Invalid id"))
    : fetch(`${BASE_URL}/posts/${id}/comments`).then((res) => res.json());
};
