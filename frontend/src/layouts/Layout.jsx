import React from "react";
import { Outlet } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Navbar from "./Navbar";
import LeftBar from "./LeftBar";
import RightBar from "./RightBar";
const Layout = function () {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div>
                <Navbar />
                <div>
                    <LeftBar />
                    <div>
                        <Outlet />
                    </div>
                    <RightBar />
                </div>
            </div>
        </QueryClientProvider>
    );
};

export default Layout;
