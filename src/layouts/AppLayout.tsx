import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppLayout = () => {
    return <React.Fragment>
        <Header />
        <div className="px-2 mt-2 flex text-xs">
            <div className="lg:text-md mr-3">下午</div>
            <div className="lg:text-md mr-1">☀</div>
            <div className="lg:text-md">
                <span className="text-green-600">29℃</span>
                <span className="">~</span>
                <span className="text-orange-600">35℃</span>
            </div>
        </div>
        <Content><Outlet /></Content>
        <Footer />
    </React.Fragment>
}

export { AppLayout };
