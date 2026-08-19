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
   CASE STUDIES CALLING PAGE
===================================================== */

import Case_Studies_Calling_Page
    from "./components/Case_Studies_Calling_Page/Case_Studies_Calling_Page";


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
   SOFTWARE CASE STUDY SUB PAGES
===================================================== */

import Bavari
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Bavari/Bavari";

import Caire_Compressors
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Caire_Compressors/Caire_Compressors";

import Charlotte
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Charlotte/Charlotte";

import Checkmate
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Checkmate/Checkmate";

import Election_Campaign_Management
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Election_Campaign_Management/Election_Campaign_Management";

import Elite_Class
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Elite_Class_LMS/Elite_Class";

import Fluvana
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/FLuvana/Fluvana";

import Fitnessway
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Fitnessway_Q8/Fitnessway";

import GTA_Properties
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/GTA_properties/GTA-properties";

import HealthMed
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/HealthMed/HealthMed";

import JacketMaker
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/JacketMaker/JacketMaker";

import LiveStream_Trivia_App
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/LiveStream_Trivia_App/LiveStream_Trivia_App";

import NetBeatLive
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/NetBeatLive/NetBeatLive";

import Scalable_OTT_Platform
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Scalable_OTT_Platform/OTT";

import Seeker_Mobile_App
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Seeker_Mobile_App/Seeker";

import Soap
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Soap & Slave/Soap";

import TapVax
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/TapVax/TapVax";

import Tipsy_Scoop
    from "./components/Software_Tech_Case_Studies/Software_Tech_Case_Studies_Sub_Pages/Tipsy_Scoop/Tipsy_Scoop";


/* =====================================================
   GROWTH TECH CASE STUDY SUB PAGES
===================================================== */

import Executive_Keynote_Bookings
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS1/Executive_Keynote_Bookings";

import High_Ticket_B2B_Services
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS2/High_Ticket_B2B_Services";

import Shopify_eCommerce_Growth
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS3/Shopify_eCommerce_Growth";

import Multi_Channel_Clinic_Outreach
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS4/Multi_Channel_Clinic_Outreach";

import Codergize
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS5/Codergize";

import NGL_LU
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS6/NGL_LU";

import Be_Top_Local
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS7/Be_Top_Local";

import AtoZ_Solutions
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS8/AtoZ_Solutions";

import Alisa_Watlington
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS9/Alisa_Watlington";

import SMB_Cybersecurity_Initiative
    from "./components/Growth_Tech_Case_Studies/Growth_Tech_Case_Study_Sub_Pages/CS10/SMB_Cybersecurity_Initiative";


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


/* =====================================================
   FOOTER
===================================================== */

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
                ALL ROUTES
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
                    CASE STUDIES CALLING PAGE
                ================================================= */}

                <Route
                    path="/case-studies"
                    element={<Case_Studies_Calling_Page />}
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
                    SOFTWARE CASE STUDY SUB PAGES
                ================================================= */}

                <Route
                    path="/case-studies/software-tech/bavari"
                    element={<Bavari />}
                />

                <Route
                    path="/case-studies/software-tech/caire-compressors"
                    element={<Caire_Compressors />}
                />

                <Route
                    path="/case-studies/software-tech/charlotte"
                    element={<Charlotte />}
                />

                <Route
                    path="/case-studies/software-tech/checkmate"
                    element={<Checkmate />}
                />

                <Route
                    path="/case-studies/software-tech/election-campaign-management"
                    element={<Election_Campaign_Management />}
                />

                <Route
                    path="/case-studies/software-tech/elite-class-lms"
                    element={<Elite_Class />}
                />

                <Route
                    path="/case-studies/software-tech/fluvanna"
                    element={<Fluvana />}
                />

                <Route
                    path="/case-studies/software-tech/fitnessway-q8"
                    element={<Fitnessway />}
                />

                <Route
                    path="/case-studies/software-tech/gta-properties"
                    element={<GTA_Properties />}
                />

                <Route
                    path="/case-studies/software-tech/healthmed"
                    element={<HealthMed />}
                />

                <Route
                    path="/case-studies/software-tech/jacketmaker"
                    element={<JacketMaker />}
                />

                <Route
                    path="/case-studies/software-tech/livestream-trivia-app"
                    element={<LiveStream_Trivia_App />}
                />

                <Route
                    path="/case-studies/software-tech/netbeat-live"
                    element={<NetBeatLive />}
                />

                <Route
                    path="/case-studies/software-tech/scalable-ott-platform"
                    element={<Scalable_OTT_Platform />}
                />

                <Route
                    path="/case-studies/software-tech/seeker-mobile-app"
                    element={<Seeker_Mobile_App />}
                />

                <Route
                    path="/case-studies/software-tech/soap-and-slave"
                    element={<Soap />}
                />

                <Route
                    path="/case-studies/software-tech/tapvax"
                    element={<TapVax />}
                />

                <Route
                    path="/case-studies/software-tech/tipsy-scoop"
                    element={<Tipsy_Scoop />}
                />


                {/* =================================================
                    GROWTH TECH CASE STUDY SUB PAGES
                ================================================= */}

                <Route
                    path="/case-studies/growth-tech/cs1"
                    element={<Executive_Keynote_Bookings />}
                />

                <Route
                    path="/case-studies/growth-tech/cs2"
                    element={<High_Ticket_B2B_Services />}
                />

                <Route
                    path="/case-studies/growth-tech/cs3"
                    element={<Shopify_eCommerce_Growth />}
                />

                <Route
                    path="/case-studies/growth-tech/cs4"
                    element={<Multi_Channel_Clinic_Outreach />}
                />

                <Route
                    path="/case-studies/growth-tech/cs5"
                    element={<Codergize />}
                />

                <Route
                    path="/case-studies/growth-tech/cs6"
                    element={<NGL_LU />}
                />

                <Route
                    path="/case-studies/growth-tech/cs7"
                    element={<Be_Top_Local />}
                />

                <Route
                    path="/case-studies/growth-tech/cs8"
                    element={<AtoZ_Solutions />}
                />

                <Route
                    path="/case-studies/growth-tech/cs9"
                    element={<Alisa_Watlington />}
                />

                <Route
                    path="/case-studies/growth-tech/cs10"
                    element={<SMB_Cybersecurity_Initiative />}
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