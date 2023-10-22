import { useRouter } from "next/dist/client/router";
import * as React from "react";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  const router = useRouter();

  console.log("About query", router.query);
  return <div>About Page</div>;
}

export function getServerSideProps() {
  return {
    props: {},
  };
}
