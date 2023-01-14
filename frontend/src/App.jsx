import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import { publicRoutes, privateRoutes } from "./routes";
import Layout from "./layouts";
import ErrorPage from "./pages/Error";
import {
    createBrowserRouter,
    Navigate,
    RouterProvider,
} from "react-router-dom";

const App = function () {
    const { currentUser } = useContext(AuthContext);

    const ProtectedRoute = function ({ children }) {
        if (!currentUser) {
            return <Navigate to="/login" />;
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
            // errorElement: <ErrorPage />,
            children: [
                privateRoutes.map(function (route, index) {
                    return {
                        path: route.path,
                        element: route.components,
                    };
                }),
            ],
        },

        publicRoutes.map(function (route, index) {
            let { path, components } = route;

            return {
                path,
                components,
            };
        }),
    ]);
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
