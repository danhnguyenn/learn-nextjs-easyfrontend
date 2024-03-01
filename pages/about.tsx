import { Header } from "@/components/common";
import { AdminLayout, MainLayout } from "@/components/layout";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });

export interface IAboutProps { }

export default function AboutPage(props: IAboutProps) {
  const router = useRouter();
  const [postList, setPostList] = useState([]);

  console.log("About query", router.query);

  const page = router.query?.page;

  useEffect(() => {
    if (!page) return;

    (async () => {
      const response = await fetch(
        `https://js-post-api.herokuapp.com/api/posts?_page=${page}`
      );
      const data = await response.json();

      setPostList(data.data);
    })();
  }, [page]);

  function handleNextClick() {
    router.push(
      {
        pathname: "about",
        query: {
          page: (Number(page) || 1) + 1,
        },
      },
      undefined,
      { shallow: true }
    );
  }

  return (
    <>
      <h1> About Page</h1>
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </>
  );
}

AboutPage.Layout = AdminLayout;

export async function getStaticProps() {
  console.log("Get static Props");
  return {
    props: {},
  };
}
