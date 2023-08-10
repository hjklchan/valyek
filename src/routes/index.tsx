import React from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, useRoutes } from "react-router-dom";
import RequireAuth from "@/components/RequireAuth";
import { Login, Registration, User, Home, NotFound } from "@/pages";
import { AppLayout } from "@/layouts/AppLayout";
import Post from "@/pages/post";
import Share from "@/pages/share";

// Default home path
export const defaultHomePath = "/home";

/**
 * appRouter
 * 
 * provides routing element components.
 */
export const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <React.Fragment>
            {/* Home page */}
            <Route path="/" element={<Navigate to="/home" replace />} />
            {/* Login page */}
            <Route path="/login" element={<Login />} />
            {/* Registration page */}
            <Route path="/registration" element={<Registration />} />
            {/* App layout routes */}
            <Route element={<AppLayout />}>
                <Route path={defaultHomePath} element={<Home />} />
                <Route path="/post" element={<Post />} />
                <Route path="/share" element={<Share />} />
                {/* Profile page */}
                <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
                <Route path="/*" element={<NotFound />} />
            </Route>
            {/* Not found page */}
            <Route path="/*" element={<>Page Not Found</>} />
        </React.Fragment>
    )
)

