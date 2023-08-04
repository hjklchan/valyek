import { AxiosError, AxiosResponse } from "axios";
import { ResponseType } from "./index.d";
import { createStandaloneToast, UseToastOptions } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

type errTyp = AxiosError<ResponseType<any>>;
type respTyp = AxiosResponse<ResponseType<any>>;

// handleResponseErrorCode
// to handle native errors like codes 502 or 504
const handleResponseErrorCode = (error: errTyp) => {
    let title: string = "";
    let description: string = "";
    if (error.code == AxiosError.ERR_NETWORK || error.code == AxiosError.ETIMEDOUT) {
        title = "Server Error";
        description = "Please contact the developer";
    }
    if (error.code == AxiosError.ECONNABORTED) {
        title = "Request Timeout";
    }
    let options: UseToastOptions = {
        title,
        status: "error",
        duration: 8000,
        position: "top-right",
    };
    if (description.length > 0) options.description = description;
    toast(options);
    return;
}

// handleApiResponseError
const handleApiResponseError = (response: respTyp) => {
    const { data, status } = response;
    toast({
        title: status,
        description: `${data.message} [${data.code}]`,
        status: "error",
        duration: 8000,
        isClosable: true,
    });
    return;
}

export const configureResponseError = (error: AxiosError<ResponseType<any>>) => {
    // handing native error
    handleResponseErrorCode(error);
    if (error.response && error.status) {
        // handing api error (un-native)
        handleApiResponseError(error.response);
        return;
    }
    // handing other error...
}
