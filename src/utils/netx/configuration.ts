import { AxiosError } from "axios";
import { ResponseType } from "./index.d"

export const configureResponseError = (error: AxiosError<ResponseType<any>>) => {
    // TODO handle response error logic...
}

