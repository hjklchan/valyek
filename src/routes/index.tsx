import React from "react";
import { createBrowserRouter, createRoutesFromElements, Navigate, Route, useRoutes } from "react-router-dom";
import RequireAuth from "@/components/RequireAuth";
import { Login, Registration, User, Blog, SectionDetail, ArticleCreate, ArticleDetail, Share, NotFound, About } from "@/pages";
import { AppLayout } from "@/layouts/AppLayout";
import Home from "@/pages/admin/home";
import AdminLayout from "@/layouts/AdminLayout";

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
                <Route path="/section/:sectionId" element={<SectionDetail />} />
                <Route path="/article/:articleId" element={<ArticleDetail />} />
                <Route path="/article/create" element={<ArticleCreate />} />
                <Route path="/share" element={<Share />} />
                {/* Profile page */}
                <Route path="/user" element={<RequireAuth><User /></RequireAuth>} />
                <Route path="/about" element={<About />} />
                <Route path="/*" element={<NotFound />} />
            </Route>
            {/** Admin Login **/}
            <Route path="/admin/login" element={<>Login</>} />
            {/** Admin **/}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="index" element={<Home />} />
            </Route>
            {/* Not found page */}
            <Route path="/*" element={<>Page Not Found</>} />
        </React.Fragment>
    )
)

