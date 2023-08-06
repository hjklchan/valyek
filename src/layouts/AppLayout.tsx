import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

const AppLayout = () => {
    return <React.Fragment>
        <Header />
        <div><Outlet /></div>
        <div>Footer</div>
    </React.Fragment>
}

export { AppLayout };
