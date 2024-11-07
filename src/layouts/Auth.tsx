import { getProfile } from "@/services/auth.service";
import { AuthData } from "@/types";
import { Outlet, redirect, useLoaderData } from "react-router-dom";

export async function loader() {
    const token = localStorage.getItem("token");
    const authScheme = localStorage.getItem("authScheme");
    if (!token || !authScheme) return redirect("/login");
    const profile = await getProfile();
    const authData: AuthData = {
        authScheme: authScheme,
        token: token,
        profile: profile,
    }
    return authData;
}

export default function Auth() {
    const authData = useLoaderData() as AuthData;
    
    return (
        <>
            <Outlet context={authData} />
        </>
    );
}