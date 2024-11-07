import { ProfileResponse } from "./profile";

export interface AuthData {
    profile: ProfileResponse;
    token: string;
    authScheme: string;
}