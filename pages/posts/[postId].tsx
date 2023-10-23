import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";
import { useRouter } from "next/dist/client/router";
import * as React from "react";
import Image from "next/image";

export interface PostDetailPageProps {
  post: any;
}

export default function PostDetailPage({ post }: PostDetailPageProps) {
  const router = useRouter();
  if (!post) return null;
  return (
    <div>
      <h1>Post Detail Page</h1>
      <Image alt={post.title} src={post.imageUrl} width={200} height={200} />
      <p>
        {post.title} - {post.author}
      </p>
      <p>{post.description}</p>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  console.log("Get static paths");
  const response = await fetch(
    "https://js-post-api.herokuapp.com/api/posts?_page=1"
  );
  const data = await response.json();

  return {
    paths: data.data.map((post: any) => ({
      params: { postId: post.id },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<PostDetailPageProps> = async (
  context: GetStaticPropsContext
) => {
  const postId = context.params?.postId;
  if (!postId) return { notFound: true };
  console.log("Get static props", context.params?.postId);
  const response = await fetch(
    `https://js-post-api.herokuapp.com/api/posts/${postId}`
  );
  const data = await response.json();

  return {
    props: {
      post: data,
    },
  };
};
