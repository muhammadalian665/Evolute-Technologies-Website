import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactUs.css";

function ContactUs() {
    const [formData, setFormData] = useState({
        fullName: "",
        contactNumber: "",
        email: "",
        techStack: "",
        projectDetails: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus("Sending...");

        try {
            const response = await emailjs.send(
                "service_3hb6cxo",
                "template_40248mb",
                {
                    full_name: formData.fullName,
                    contact_number: formData.contactNumber,
                    email: formData.email,
                    tech_stack: formData.techStack,
                    project_details: formData.projectDetails,
                },
                "HHRtlnRN3izeMhl2Y"
            );

            console.log("EmailJS Success:", response);

            setStatus("Message sent successfully!");

            setFormData({
                fullName: "",
                contactNumber: "",
                email: "",
                techStack: "",
                projectDetails: "",
            });
        } catch (error) {
            console.error("EmailJS Error:", error);
            console.error("Error Status:", error?.status);
            console.error("Error Text:", error?.text);

            alert(
                `EmailJS Error\n\nStatus: ${
                    error?.status || "Unknown"
                }\nMessage: ${
                    error?.text || "Unknown error"
                }`
            );

            setStatus(
                "Something went wrong while sending your message. Please try again."
            );
        }
    };

    return (
        <section className="contact-us">

            {/* ================================
                CONTACT HERO
            ================================= */}

            <div className="contact-us-hero">

                <span className="contact-us-label">
                    Contact Us
                </span>

                <h1>
                    Let’s build something together.
                </h1>

                <p>
                    Have an idea, project, or business challenge?
                    Let’s talk about how we can help.
                </p>

                <a
                    href="https://calendly.com/muhammadalian"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="schedule-call-button"
                >
                    Schedule a Call
                    <span>→</span>
                </a>

            </div>


            {/* ================================
                CONTACT FORM
            ================================= */}

            <div className="contact-form-wrapper">

                <div className="contact-form-header">

                    <span>
                        Start a conversation
                    </span>

                    <h2>
                        Let’s Discuss Your Needs
                    </h2>

                    <p>
                        Tell us about your project. We'll take it from there.
                    </p>

                </div>


                <form
                    className="contact-form"
                    onSubmit={handleSubmit}
                >

                    {/* FULL NAME */}

                    <div className="form-group">

                        <label htmlFor="fullName">
                            Full name
                        </label>

                        <input
                            type="text"
                            id="fullName"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* CONTACT NUMBER */}

                    <div className="form-group">

                        <label htmlFor="contactNumber">
                            Contact number
                        </label>

                        <input
                            type="tel"
                            id="contactNumber"
                            name="contactNumber"
                            placeholder="Enter your contact number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* EMAIL */}

                    <div className="form-group">

                        <label htmlFor="email">
                            Email address
                        </label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter your email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* SERVICE */}

                    <div className="form-group">

                        <label htmlFor="techStack">
                            Choose your service
                        </label>

                        <select
                            id="techStack"
                            name="techStack"
                            value={formData.techStack}
                            onChange={handleChange}
                            required
                        >

                            <option value="">
                                Choose Your Service
                            </option>

                            {/* TECHNOLOGY & PRODUCT DEVELOPMENT */}

                            <option value="Custom Software Development">
                                Custom Software Development
                            </option>

                            <option value="SaaS Product Development">
                                SaaS Product Development
                            </option>

                            <option value="AI Integration & Automation">
                                AI Integration & Automation
                            </option>

                            <option value="Web & Mobile Applications">
                                Web & Mobile Applications
                            </option>

                            <option value="Scalable Cloud Solutions">
                                Scalable Cloud Solutions
                            </option>

                            <option value="Dedicated Development Teams">
                                Dedicated Development Teams
                            </option>

                            <option value="Game Development">
                                Game Development
                            </option>

                            <option value="Maintenance">
                                Maintenance
                            </option>


                            {/* GROWTH & SALES ENABLEMENT */}

                            <option value="B2B Lead Generation">
                                B2B Lead Generation
                            </option>

                            <option value="LinkedIn Prospecting & Outreach">
                                LinkedIn Prospecting & Outreach
                            </option>

                            <option value="Cold Email Campaigns">
                                Cold Email Campaigns
                            </option>

                            <option value="Appointment Setting">
                                Appointment Setting
                            </option>

                            <option value="Sales Automation Systems">
                                Sales Automation Systems
                            </option>

                            <option value="Outbound Growth Strategies">
                                Outbound Growth Strategies
                            </option>

                            <option value="Consultation">
                                Consultation
                            </option>


                            {/* OTHER */}

                            <option value="Other">
                                Other
                            </option>

                        </select>

                    </div>


                    {/* PROJECT DETAILS */}

                    <div className="form-group full-width">

                        <label htmlFor="projectDetails">
                            Project details
                        </label>

                        <textarea
                            id="projectDetails"
                            name="projectDetails"
                            placeholder="Tell us about your project..."
                            rows="6"
                            value={formData.projectDetails}
                            onChange={handleChange}
                            required
                        />

                    </div>


                    {/* TERMS */}

                    <div className="terms-checkbox">

                        <input
                            type="checkbox"
                            id="terms"
                            required
                        />

                        <label htmlFor="terms">

                            I understand and agree to{" "}

                            <a
                                href="/terms"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                terms & conditions
                            </a>

                            .

                        </label>

                    </div>


                    {/* SUBMIT */}

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={status === "Sending..."}
                    >

                        {status === "Sending..."
                            ? "Sending..."
                            : "Submit Now"}

                        <span>→</span>

                    </button>


                    {/* STATUS */}

                    {status && (
                        <p
                            className={
                                status.includes("successfully")
                                    ? "form-success"
                                    : "form-status"
                            }
                        >
                            {status}
                        </p>
                    )}

                </form>

            </div>

        </section>
    );
}

export default ContactUs;