import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";

import Home from "./components/Home_Page/Home";

import AboutPage from "./components/About_Us_Page/AboutPage";

import ContactUs from "./components/Contact_US_Page/ContactUs";

import Software_Services
    from "./components/Software_Services_Page/Software_Services";

import Growth_Services
    from "./components/Growth_Services_Page/Growth_Services";

import Custom_Software_Development
    from "./components/Software_Services_Sub_Pages/Custom_Software_Development/Custom_software_development";

import Footer from "./components/Footer/Footer";


function App() {

    return (

        <BrowserRouter>

            {/* =====================================================
                GLOBAL HEADER
            ===================================================== */}

            <Navbar />


            {/* =====================================================
                PAGES
            ===================================================== */}

            <Routes>

                {/* =================================================
                    HOME
                ================================================= */}

                <Route
                    path="/"
                    element={<Home />}
                />


                {/* =================================================
                    ABOUT
                ================================================= */}

                <Route
                    path="/about"
                    element={<AboutPage />}
                />


                {/* =================================================
                    CONTACT
                ================================================= */}

                <Route
                    path="/contact-us"
                    element={<ContactUs />}
                />


                {/* =================================================
                    SOFTWARE SERVICES
                ================================================= */}

                <Route
                    path="/software-services"
                    element={<Software_Services />}
                />


                {/* =================================================
                    GROWTH SERVICES
                ================================================= */}

                <Route
                    path="/growth-services"
                    element={<Growth_Services />}
                />


                {/* =================================================
                    CUSTOM SOFTWARE DEVELOPMENT
                ================================================= */}

                <Route
                    path="/custom-software-development"
                    element={<Custom_Software_Development />}
                />

            </Routes>


            {/* =====================================================
                GLOBAL FOOTER
            ===================================================== */}

            <Footer />

        </BrowserRouter>

    );

}


export default App;