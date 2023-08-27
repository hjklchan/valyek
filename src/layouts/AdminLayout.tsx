
import React from "react";
import { Outlet } from "react-router-dom";
const AdminLayout = () => {
    return <>
        <div>Header</div>
        <div><Outlet /></div>
        <div>Footer</div>
    </>
}

export default AdminLayout;

