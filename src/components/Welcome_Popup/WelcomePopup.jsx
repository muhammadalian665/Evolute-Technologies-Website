import { useEffect, useState } from "react";
import { X } from "lucide-react";

import "./WelcomePopup.css";

function WelcomePopup() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const hasSeenWelcome = sessionStorage.getItem(
            "evolute-welcome-seen"
        );

        if (!hasSeenWelcome) {
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 700);

            return () => clearTimeout(timer);
        }
    }, []);

    const closePopup = () => {
        sessionStorage.setItem(
            "evolute-welcome-seen",
            "true"
        );

        setIsOpen(false);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <div className="welcome-overlay">

            <div className="welcome-popup">

                {/* CLOSE BUTTON */}
                <button
                    className="welcome-close"
                    onClick={closePopup}
                    aria-label="Close welcome popup"
                >
                    <X size={20} />
                </button>

                {/* CONTENT */}
                <div className="welcome-content">

                    <span className="welcome-small-title">
                        WELCOME TO EVOLUTE TECHNOLOGIES
                    </span>

                    <h2>
                        Let's build something
                        <span> remarkable together.</span>
                    </h2>

                    <p>
                        Welcome to Evolute Technologies. We provide
                        <strong> Software Services </strong>
                        including custom software development, AI solutions,
                        web and mobile applications, SaaS and scalable
                        technology solutions. We also offer
                        <strong> Growth Services </strong>
                        including B2B lead generation, LinkedIn outreach,
                        appointment setting, cold email campaigns and
                        sales automation to help businesses grow and scale.
                    </p>

                    <div className="welcome-footer">
                        Your growth starts with the right technology.
                    </div>

                </div>

            </div>

        </div>
    );
}

export default WelcomePopup;