
// sign-in request structure
export type SignInRequest = {
    email: string;
    password: string;
};

// sign-in response structure
export type SignInResponse = {
    accessToken: string;
    exipreTime: number;
    userProfile: {
        username: string;
        email: string;
        avatar: string;
    };
};
