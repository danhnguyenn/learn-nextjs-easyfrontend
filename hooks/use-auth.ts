import useSWR from "swr";
import { PublicConfiguration } from "swr/_internal";
import { authApi } from "../api-client";

export function useAuth(options?: Partial<PublicConfiguration>) {
  const {
    data: profile,
    error,
    mutate,
  } = useSWR("/profile", {
    dedupingInterval: 60 * 60 * 1000,
    revalidateOnFocus: false,
    ...options,
  });

  console.log({ profile, error });

  const firstLoading = profile === undefined && error === undefined;

  async function login() {
    await authApi.login({
      username: "test1",
      password: "123123",
    });

    await mutate();
  }

  async function logout() {
    await authApi.logout();
    mutate({}, false);
  }

  return {
    profile,
    error,
    login,
    logout,
    firstLoading,
  };
}
