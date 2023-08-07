import { SignInRequest, SignInResponse } from "@/api/auth";
import { signInApi } from "@/api/auth/auth";
import { removeToken, setToken } from "@/utils/tokenx";
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
    reducers: {
        signOut: (state) => {
            state.authenticated = false;
            removeToken();
        }
    },
    extraReducers(builder) {
        // sign-in request flow
        builder.addCase(signIn.pending, (state, action) => {
            // set loading status
            state.loading = true;
        }).addCase(signIn.fulfilled, (state, action) => { // request start
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
            // set token in localStorage
            setToken(accessToken);
        }).addCase(signIn.rejected, (state, action) => { // request successful
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
