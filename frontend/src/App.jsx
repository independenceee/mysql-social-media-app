import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import Layout from "./layouts";
import ErrorPage from "./pages/Error";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";

const App = function () {
    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = function ({ children }) {
        if (!currentUser) {
            return <Navigate to="/register" />;
        }

        return children;
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: (
                <ProtectedRoute>
                    <Layout />
                </ProtectedRoute>
            ),
            errorElement: <ErrorPage />,
            // children: [
            // privateRoutes.map(function (route, index) {
            //     return {
            //         path: route.path,
            //         element: route.components,
            //     };
            //     }),
            // ]
            // children: privateRoutes.map(function (route) {
            //     return {
            //         path: route.path,
            //         element: route.components,
            //         errorElement: route.errorPages,
            //     };
            // }),
            children: [
                {
                    path: "/",
                    element: <Home />,
                },
            ],
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/register",
            element: <Register />,
        },
        // publicRoutes.map(function (route, index) {
        //     return {
        //         path: route.path,
        //         element: route.components,
        //         errorElement: route.errorPages,
        //     };
        // }),
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
