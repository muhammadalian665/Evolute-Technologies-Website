import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home_Page/Home";
import AboutPage from "./components/About_Us_Page/AboutPage";
import ContactUs from "./components/Contact_US_Page/ContactUs";
import Software_Services from "./components/Software_Services_Page/Software_Services";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <BrowserRouter>

            {/* Global Header */}
            <Navbar />


            {/* Pages */}
            <Routes>

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/about"
                    element={<AboutPage />}
                />

                <Route
                    path="/contact-us"
                    element={<ContactUs />}
                />

                <Route
                    path="/software-services"
                    element={<Software_Services />}
                />

            </Routes>


            {/* Global Footer */}
            <Footer />

        </BrowserRouter>
    );
}

export default App;