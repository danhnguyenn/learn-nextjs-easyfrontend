import * as React from "react";
import { authApi } from "@/api/index";
import { useAuth } from "../hooks";

export interface ILoginPageProps { }

export default function LoginPage(props: ILoginPageProps) {
  const { profile, login, logout } = useAuth({ revalidateOnMount: false })

  async function handleLogin() {
    try {
      await login();
      console.log("Redirect to dashboard");
    } catch (error) {
      console.log("error", error);
    }
  }

  async function handleLogout() {
    try {
      await logout()
    } catch (error) {
      console.log("error", error);
    }
  }
  return (
    <div>
      <h1>Login Page</h1>

      <p>Profile: {JSON.stringify(profile || {}, null)}</p>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
