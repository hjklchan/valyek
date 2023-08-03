import React from "react";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
    return <React.Fragment>
        <div>Header</div>
        <div><Outlet /></div>
        <div>Footer</div>
    </React.Fragment>
}

export { AppLayout };
