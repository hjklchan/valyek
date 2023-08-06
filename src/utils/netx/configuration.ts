import { AxiosError, AxiosResponse } from "axios";
import { ResponseType } from "./index.d";
import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

type errTyp = AxiosError<ResponseType<any>>;
type respTyp = AxiosResponse<ResponseType<any>>;

const handleResponseError = (resp: AxiosResponse<ResponseType<any>>) => {
    toast({
        title: resp.status,
        description: `${resp.data.message} [${resp.data.code}]`,
        duration: 5000,
        status: "error",
        position: "top",
    })
}

export const configureResponseError = (error: AxiosError<ResponseType<any>>) => {
    if (error.response !== undefined) {
        handleResponseError(error.response);
        return
    }
    toast({
        title: error.code,
        description: error.message,
        duration: 5000,
        status: "error",
        position: "top",
    })
    // handing native error
    // handleResponseErrorCode(error);
    // if (error.response && error.status) {
    //     // handing api error (un-native)
    //     handleApiResponseError(error.response);
    //     return;
    // }
    // handing other error...
}
