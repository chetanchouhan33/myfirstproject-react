import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layouts/Layout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";


const AppRoutes = () => {

    return (

        <Routes>

            <Route
                path="/"
                element={
                    <Layout >
                        <Home />
                    </Layout>
                }
            />

            <Route
                path="/about"
                element={
                    <Layout>
                        <About />
                    </Layout>
                }
            />

            <Route
                path="/contact"
                element={
                    <Layout>
                        <Contact />
                    </Layout>
                }
            />

        </Routes>

    );

};

export default AppRoutes;