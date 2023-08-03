import { httpPost } from "@/utils/netx/request"
import { SignInRequest, SignInResponse } from "./index.d";

// signInApi
// login or sign-in request api
export const signInApi = async (data: SignInRequest) => {
    return await httpPost<SignInResponse>("http://localhost:8080/api/auth/login", data);
};