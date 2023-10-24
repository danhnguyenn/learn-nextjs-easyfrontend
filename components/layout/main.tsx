import { LayoutProps } from "@/models/index";
import Link from "next/link";
import React, { useEffect } from "react";

export function MainLayout({ children }: LayoutProps) {
  useEffect(() => {
    console.log("Mainlayout mounting");

    return () => {
      console.log("Mainlayout unmounting");
    };
  }, []);

  return (
    <>
      <h1>Main Layout</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About US</Link>
      {children}
    </>
  );
}
