import { LoginBasicSchemaType, ProfileResponse, TokenResponse } from "@/types";
import { axiosGet, axiosPost } from "./service";

export async function loginBasic(params: LoginBasicSchemaType) {
    return await axiosPost<TokenResponse>("/api/auth/login-basic", params);
}

export async function getProfile() {
    return await axiosGet<ProfileResponse>("/api/auth/profile");
}