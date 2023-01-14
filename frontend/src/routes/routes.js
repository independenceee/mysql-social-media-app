import config from "../configs";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import ErrorPage from "../pages/Error";
const publicRoutes = [
    {
        path: config.routes.register,
        components: <Register />,
        errorPages: <ErrorPage/>
    },
    {
        path: config.routes.login,
        components: <Login />,
        errorPages: <ErrorPage/>

    },
];

const privateRoutes = [
    {
        path: config.routes.home,
        components: <Home />,
        errorPages: <ErrorPage/>

    },
];

export { publicRoutes, privateRoutes };
