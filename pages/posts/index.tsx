import { GetStaticProps, GetStaticPropsContext } from "next";
import * as React from "react";

export interface PostListPageProps {
  posts: any[];
}

export default function PostListPage({ posts }: PostListPageProps) {
  console.log("post", posts);
  return (
    <>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}

export const getStaticProps: GetStaticProps<PostListPageProps> = async (
  context: GetStaticPropsContext
) => {
  console.log("Get static props");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  //console.log("data", data);
  return {
    props: {
      posts: data.data.map((data: any) => ({ title: data.title, id: data.id })),
    },
  };
};
