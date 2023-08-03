
export type SignInRequest = {
    username: string;
    password: string;
};

export type SignInResponse = {
    accessToken: string;
    exipreTime: number;
    userProfile: {
        username: string;
        email: string;
        avatar: string;
    };
};