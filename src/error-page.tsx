import { AxiosError } from "axios";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError() as any;

    if (isRouteErrorResponse(error) || error instanceof Response) {
        return (
            <div>
                {error.status} {error.statusText}
            </div>
        );
    }

    if (error instanceof AxiosError) {
        return (
            <div>
                {error.response?.status} {error.response?.statusText}
            </div>
        );
    }

    console.log(error);
    
    return (
        <div>
            Unknown Error!
        </div>
    );
}