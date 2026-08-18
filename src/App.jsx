import { BrowserRouter, Routes, Route } from "react-router-dom"; 
 
import Navbar 
    from "./components/NavBar/Navbar"; 
 
import Home 
    from "./components/Home_Page/Home"; 
 
import AboutPage 
    from "./components/About_Us_Page/AboutPage"; 
 
import ContactUs 
    from "./components/Contact_US_Page/ContactUs"; 
 
import Software_Services 
    from "./components/Software_Services_Page/Software_Services"; 
 
import Growth_Services 
    from "./components/Growth_Services_Page/Growth_Services"; 
 
 
/* ===================================================== 
   SOFTWARE & TECH CASE STUDIES 
===================================================== */ 
 
import Software_Case_Studies 
    from "./components/Software_Tech_Case_Studies/Software_Case_Studies"; 
 
 
/* ===================================================== 
   GROWTH TECH CASE STUDIES 
===================================================== */ 
 
import Growth_Case_Study 
    from "./components/Growth_Tech_Case_Studies/Growth_Case_Study"; 
 
 
/* ===================================================== 
   SOFTWARE SERVICES SUB PAGES 
===================================================== */ 
 
import Custom_Software_Development 
    from "./components/Software_Services_Sub_Pages/Custom_Software_Development/Custom_software_development"; 
 
import SAAS_Product_Development 
    from "./components/Software_Services_Sub_Pages/SAAS_Product_Development/SAAS_product_development"; 
 
import AI_Integration_and_Automation 
    from "./components/Software_Services_Sub_Pages/AI_Integration_and_automation/AI_Integration_and_automation"; 
 
import Web_AND_Mobile_Applications 
    from "./components/Software_Services_Sub_Pages/Web_AND_Mobile_Applications/Web_AND_Mobile_Applications"; 
 
import Dedicated_Development_Teams 
    from "./components/Software_Services_Sub_Pages/Dedicated_Development_Teams/Dedicated_Development_Teams"; 
 
import Game_Development 
    from "./components/Software_Services_Sub_Pages/Game_Development/Game_Development"; 
 
import Maintainance_and_support 
    from "./components/Software_Services_Sub_Pages/Maintainance_and_support/Maintainance_and_support"; 
 
import Scalable_Cloud_Solution 
    from "./components/Software_Services_Sub_Pages/Scalable_Cloud_Solution/Scalable_Cloud_Solution"; 
 
import Technology_Consultation 
    from "./components/Software_Services_Sub_Pages/Technology_Consultation/Technology_Consultation"; 
 
 
/* ===================================================== 
   GROWTH SERVICES SUB PAGES 
===================================================== */ 
 
import Appointment_Settings 
    from "./components/Growth_Services_sub_pages/Appointment_Settings/Appointment_Settings"; 
 
import B2B_Lead_Generation 
    from "./components/Growth_Services_sub_pages/B2B_Lead_Generation/B2B_Lead_Generation"; 
 
import Cold_email_campaigns 
    from "./components/Growth_Services_sub_pages/Cold_email_campaigns/Cold_email_campaigns"; 
 
import Linkedin_Outreach 
    from "./components/Growth_Services_sub_pages/Linkedin_Outreach/Linkedin_Outreach"; 
 
import Out_Bound_Growth_Strategy 
    from "./components/Growth_Services_sub_pages/Out_Bound_Growth_Strategy/Out_Bound_Growth_Strategy"; 
 
import Sales_automation_Systems 
    from "./components/Growth_Services_sub_pages/Sales_automation_Systems/Sales_automation_Systems"; 
 
 
import Footer 
    from "./components/Footer/Footer"; 
 
 
function App() { 
 
    return ( 
 
        <BrowserRouter> 
 
            {/* ===================================================== 
                GLOBAL HEADER 
            ===================================================== */} 
 
            <Navbar /> 
 
 
            {/* ===================================================== 
                ALL PAGES 
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
                    SOFTWARE & TECH CASE STUDIES 
                ================================================= */} 
 
                <Route 
                    path="/case-studies/software-tech" 
                    element={<Software_Case_Studies />} 
                /> 
 
 
                {/* ================================================= 
                    GROWTH TECH CASE STUDIES 
                ================================================= */} 
 
                <Route 
                    path="/case-studies/growth" 
                    element={<Growth_Case_Study />} 
                /> 
 
 
                {/* ================================================= 
                    SOFTWARE SERVICE SUB PAGES 
                ================================================= */} 
 
                <Route 
                    path="/custom-software-development" 
                    element={<Custom_Software_Development />} 
                /> 
 
                <Route 
                    path="/saas-product-development" 
                    element={<SAAS_Product_Development />} 
                /> 
 
                <Route 
                    path="/ai-integration-and-automation" 
                    element={<AI_Integration_and_Automation />} 
                /> 
 
                <Route 
                    path="/web-and-mobile-applications" 
                    element={<Web_AND_Mobile_Applications />} 
                /> 
 
                <Route 
                    path="/dedicated-development-teams" 
                    element={<Dedicated_Development_Teams />} 
                /> 
 
                <Route 
                    path="/game-development" 
                    element={<Game_Development />} 
                /> 
 
                <Route 
                    path="/maintenance-and-support" 
                    element={<Maintainance_and_support />} 
                /> 
 
                <Route 
                    path="/scalable-cloud-solutions" 
                    element={<Scalable_Cloud_Solution />} 
                /> 
 
                <Route 
                    path="/technology-consultation" 
                    element={<Technology_Consultation />} 
                /> 
 
 
                {/* ================================================= 
                    GROWTH SERVICE SUB PAGES 
                ================================================= */} 
 
                <Route 
                    path="/appointment-settings" 
                    element={<Appointment_Settings />} 
                /> 
 
                <Route 
                    path="/b2b-lead-generation" 
                    element={<B2B_Lead_Generation />} 
                /> 
 
                <Route 
                    path="/cold-email-campaigns" 
                    element={<Cold_email_campaigns />} 
                /> 
 
                <Route 
                    path="/linkedin-outreach" 
                    element={<Linkedin_Outreach />} 
                /> 
 
                <Route 
                    path="/outbound-growth-strategy" 
                    element={<Out_Bound_Growth_Strategy />} 
                /> 
 
                <Route 
                    path="/sales-automation-systems" 
                    element={<Sales_automation_Systems />} 
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