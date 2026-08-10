import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/NavBar/Navbar";
import Home from "./components/Home_Page/Home";
import AboutPage from "./components/About_Us_Page/AboutPage";
import ContactUs from "./components/Contact_US_Page/ContactUs";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>

      {/* Global Header */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      {/* Global Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;