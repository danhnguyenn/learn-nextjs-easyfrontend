import { useAuth } from "@/hooks/use-auth";
import { useRouter } from "next/dist/client/router";
import { route } from "next/dist/server/router";
import { ReactNode, useEffect } from "react";

export interface AuthProps {
    children: ReactNode
}

export function Auth({ children }: AuthProps) {
    const router = useRouter()
    const { profile, firstLoading } = useAuth();

    useEffect(() => {
        if (!firstLoading && !profile?.username)
            router.push("/login")
    }, [firstLoading, profile, router])

    if (!profile?.username) {
        return <div>Loading...</div>
    }



    return (
        <div>
            {children}
        </div>
    );
}
