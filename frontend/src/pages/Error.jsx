import { useRouteError } from "react-router-dom";
const ErrorPage = function () {
    const error = useRouteError();

    return <div>Error</div>;
};

export default ErrorPage;
