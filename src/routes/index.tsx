import React from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, useRoutes } from "react-router-dom";
import RequireAuth from "@/components/RequireAuth";
import { Login, Registration, User, Blog, Block, NotFound } from "@/pages";
import { AppLayout } from "@/layouts/AppLayout";
import Share from "@/pages/share";
import PostDetail from "@/pages/block/detail";

// Default home path
export const defaultHomePath = "/blog";

/**
 * appRouter
 * 
 * provides routing element components.
 */
export const appRouter = createBrowserRouter(
    createRoutesFromElements(
        <React.Fragment>
            {/* Home page */}
            <Route path="/" element={<Navigate to="/blog" replace />} />
            {/* Login page */}
            <Route path="/login" element={<Login />} />
            {/* Registration page */}
            <Route path="/registration" element={<Registration />} />
            {/* App layout routes */}
            <Route element={<AppLayout />}>
                <Route path={defaultHomePath} element={<Blog />} />
                <Route path="/post/:postId" element={<PostDetail />}/>
                <Route path="/block/:blockId" element={<Block />}/>
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

