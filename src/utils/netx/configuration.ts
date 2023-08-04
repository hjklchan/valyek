import { AxiosError, AxiosResponse } from "axios";
import { ResponseType } from "./index.d"

const handleResponseError = (code: string) => {
    // TODO here is handle response error
    if (code == AxiosError.ERR_NETWORK) {
        // TODO pop-up warning...
    }
}

export const configureResponseError = (error: AxiosError<ResponseType<any>>) => {
    if (error.response) {
        handleResponseError(error.response.code);
        return;
    }
}


