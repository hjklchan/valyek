import { SignInRequest, SignInResponse } from "@/api/auth";
import { signInApi } from "@/api/auth/auth";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type AuthState = {
    username: string;
    email: string;
    avatar: string;
    token: string;
    authenticated: boolean;
    loading: boolean;
}

const initialState: AuthState = {
    username: "unknown",
    email: "",
    avatar: "",
    token: "",
    authenticated: false,
    loading: false,
}

const signIn = createAsyncThunk(
    "auth/signIn",
    async (data: SignInRequest) => {
        return (await signInApi(data)).data;
    }
)

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers(builder) {
        // sign-in request flow
        builder.addCase(signIn.pending, (state, action) => {
            // set loading status
            state.loading = true;
            // request start
        }).addCase(signIn.fulfilled, (state, action) => {
            let { userProfile, accessToken } = action.payload;
            // set user profile
            state.username = userProfile.username;
            state.email = userProfile.email;
            state.avatar = userProfile.avatar;
            // set token
            state.token = accessToken;
            // set auth status
            state.authenticated = true;
            // set loading status
            state.loading = false;
            // request successful
        }).addCase(signIn.rejected, (state, action) => {
            // request failed
            state.loading = false;
        });
    },
})

// export actions
export const { } = authSlice.actions;
// export async actions
export { signIn };
// export reducer
export default authSlice.reducer;
