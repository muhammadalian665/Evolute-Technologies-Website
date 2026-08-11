import "./Custom_software_development.css";

import Custom_Hero
    from "./Custom_software_components/Custom_hero";


function Custom_software_development() {

    return (

        <main className="custom-software-development-page">

            {/* =====================================================
                CUSTOM SOFTWARE DEVELOPMENT HERO
            ===================================================== */}

            <Custom_Hero />


            {/* =====================================================
                FUTURE SECTIONS
            ===================================================== */}

            {/* 
                Yahan future mein components add kar sakte ho:

                <Custom_Software_Introduction />
                <Custom_Software_Features />
                <Custom_Software_Process />
                <Custom_Software_Technologies />
                <Custom_Software_CTA />
            */}

        </main>

    );

}


export default Custom_software_development;