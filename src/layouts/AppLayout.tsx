import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

const AppLayout = () => {
    return <React.Fragment>
        <Header />
        <Content><Outlet /></Content>
        <Footer />
    </React.Fragment>
}

export { AppLayout };
