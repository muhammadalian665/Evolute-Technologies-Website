import { MessageCircle, Mail } from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa";
import "./FloatingSocials.css";

function FloatingSocials() {
    return (
        <div className="floating-socials">

            {/* LinkedIn */}
            <a
                href="https://www.linkedin.com/company/evolute-technologies/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Evolute Technologies LinkedIn"
                className="floating-social linkedin"
            >
                <FaLinkedinIn size={22} />
            </a>


            {/* WhatsApp */}
            <a
                href="https://wa.me/923344011408"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="floating-social whatsapp"
            >
                <MessageCircle size={22} />
            </a>


            {/* Email */}
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info@evolutetechnologies.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Email"
                className="floating-social email"
            >
                <Mail size={22} />
            </a>

        </div>
    );
}

export default FloatingSocials;