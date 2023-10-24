import * as React from "react";

export interface IParamsPageProps {}

export default function ParamsPage(props: IParamsPageProps) {
  return <div>ParamsPage</div>;
}

export async function getServerSideProps() {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return { props: {} };
}
