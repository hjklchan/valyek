import React from "react";
import { MegaphoneIcon } from "@heroicons/react/20/solid";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppLayout = () => {
    return <React.Fragment>
        <Header />
        <div className="flex justify-between px-2 mt-2 flex text-xs">
            <div className="flex">
                <div className="lg:text-md mr-3">下午</div>
                <div className="lg:text-md mr-1">☀</div>
                <div className="lg:text-md">
                    <span className="text-green-600">29℃</span>
                    <span className="">~</span>
                    <span className="text-orange-600">35℃</span>
                </div>
            </div>
            <div className="flex items-center">
                <MegaphoneIcon className="h-3 w-3" />
                <span className="ml-2">这是会滚动的公告</span>
            </div>
            <div></div>
        </div>
        <Content><Outlet /></Content>
        <Footer />
    </React.Fragment>
}

export { AppLayout };
