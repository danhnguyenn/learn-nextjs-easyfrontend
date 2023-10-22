import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const Home: NextPage = () => {
  const router = useRouter();

  function goToDetailPage() {
    router.push({
      pathname: "/posts/[postId]",
      query: {
        postId: 123,
        ref: "social",
      },
    });
  }

  return (
    <>
      {/* <div
        style={{
          marginTop: "2000px",
        }}
      ></div> */}
      <Link href="/about">
        <a>About US</a>
      </Link>
      <br />

      <button onClick={goToDetailPage}>Go to detail Page</button>
    </>
  );
};

export default Home;
