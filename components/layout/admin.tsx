import { LayoutProps } from "@/models/index";
import Link from "next/link";
import * as React from "react";
import { Auth } from "../common";
import { useAuth } from "@/hooks/use-auth";

export function AdminLayout({ children }: LayoutProps) {
  const { logout } = useAuth()


  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <Auth>
      <h1>Admin Layout</h1>
      <div>Sidebar</div>

      <button onClick={handleLogout}>Logout</button>
      <br />

      <Link href="/">Home</Link>
      <Link href="/about">About US</Link>

      {children}
    </Auth>
  );
}
