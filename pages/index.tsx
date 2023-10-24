import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { MainLayout } from "@/components/layout";
import { NextPageWithLayout } from "../models";

const Home: NextPageWithLayout = () => {
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
      <button onClick={goToDetailPage}>Go to detail Page</button>
    </>
  );
};

Home.Layout = MainLayout;

export default Home;
