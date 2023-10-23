import Header from "@/components/common/header";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// const Header = dynamic(() => import("@/components/common/header"), {
//   ssr: false,
// });

export interface IAboutProps {}

export default function About(props: IAboutProps) {
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
    <div>
      <Header />
      About Page
      <ul>
        {postList.map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
      <button onClick={handleNextClick}>Next Page</button>
    </div>
  );
}

export async function getStaticProps() {
  console.log("Get static Props");
  return {
    props: {},
  };
}
