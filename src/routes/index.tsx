import React from "react";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { Login, Registration, User } from "@/pages";
import { AppLayout } from "@/layouts/AppLayout";

/**
 * appRouter
 * 
 * provides routing element components.
 */
export const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <React.Fragment>
            {/* Home page */}
            <Route path="/" element={<>Home</>} />
            {/* Login page */}
            <Route path="/login" element={<Login />} />
            {/* Registration page */}
            <Route path="/registration" element={<Registration />} />
            {/* App layout routes */}
            <Route element={<AppLayout />}>
                {/* Profile page */}
                <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
            </Route>
            {/* Not found page */}
            <Route path="/*" element={<>Page Not Found</>} />
        </React.Fragment>
    )
)