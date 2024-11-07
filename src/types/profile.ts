import { AccountResponse } from "./account";
import { UserResponse } from "./user";

export interface ProfileResponse {
    account: AccountResponse;
    user: UserResponse;
}