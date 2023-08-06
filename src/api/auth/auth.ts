import { httpPost } from "@/utils/netx/request"
import { SignInRequest, SignInResponse } from "./index.d";

// signInApi
// login or sign-in request api
export const signInApi = async (data: SignInRequest) => {
    return (await httpPost<SignInResponse>("http://127.0.0.1:8080/api/auth/login", data)).data;
};
