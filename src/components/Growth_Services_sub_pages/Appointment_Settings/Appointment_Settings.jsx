import { useState } from "react";
import { motion } from "framer-motion";
import {
    ArrowRight,
    ArrowUpRight,
    Bell,
    Calendar,
    Check,
    CheckCircle2,
    ChevronDown,
    Clock3,
    Globe2,
 
    MessageSquare,
    Settings2,
    ShieldCheck,
    Sparkles,
    Users,
    Video,
    Zap,
} from "lucide-react";

import "./Appointment_Settings.css";

/* =====================================================
   ANIMATIONS
===================================================== */

const fadeUp = {
    hidden: {
        opacity: 0,
        y: 35,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
        },
    },
};

/* =====================================================
   FEATURES
===================================================== */

const appointmentFeatures = [
    {
        number: "01",
        icon: Calendar,
        title: "Flexible Scheduling",
        description:
            "Give prospects a simple way to choose a meeting time that fits their availability without unnecessary back-and-forth.",
        points: [
            "Custom availability windows",
            "Multiple time slots",
            "Automatic scheduling",
        ],
    },
    {
        number: "02",
        icon: Clock3,
        title: "Smart Availability",
        description:
            "Keep your calendar organized with clear availability rules that help prevent scheduling conflicts.",
        points: [
            "Working hours control",
            "Buffer time settings",
            "Conflict prevention",
        ],
    },
    {
        number: "03",
        icon: Video,
        title: "Meeting Preferences",
        description:
            "Configure how appointments happen and make every booked meeting ready before the conversation starts.",
        points: [
            "Meeting type selection",
            "Online meeting links",
            "Custom meeting details",
        ],
    },
    {
        number: "04",
        icon: Bell,
        title: "Automated Reminders",
        description:
            "Reduce missed meetings with timely reminders and notifications throughout the appointment journey.",
        points: [
            "Email notifications",
            "Appointment reminders",
            "Status updates",
        ],
    },
    {
        number: "05",
        icon: Globe2,
        title: "Time Zone Support",
        description:
            "Make scheduling easier for global prospects by automatically handling different time zones.",
        points: [
            "Automatic time zones",
            "International scheduling",
            "Localized appointment times",
        ],
    },
    {
        number: "06",
        icon: Settings2,
        title: "Custom Settings",
        description:
            "Control the details of your appointment workflow so the booking experience matches your sales process.",
        points: [
            "Custom booking rules",
            "Appointment preferences",
            "Workflow controls",
        ],
    },
];

/* =====================================================
   BENEFITS
===================================================== */

const benefits = [
    {
        icon: Zap,
        title: "Less Back-and-Forth",
        description:
            "Let prospects select suitable times instead of exchanging multiple emails just to find a meeting slot.",
    },
    {
        icon: Users,
        title: "Better Prospect Experience",
        description:
            "Create a professional booking journey that makes it easy for qualified prospects to take the next step.",
    },
    {
        icon: ShieldCheck,
        title: "Fewer Scheduling Conflicts",
        description:
            "Use availability rules, buffers and calendar controls to keep your meetings organized.",
    },
    {
        icon: MessageSquare,
        title: "More Productive Conversations",
        description:
            "Give your team the structure they need to spend less time coordinating and more time selling.",
    },
];

/* =====================================================
   PROCESS
===================================================== */

const process = [
    {
        number: "01",
        icon: Settings2,
        title: "Configure",
        description:
            "Set your availability, meeting types and booking preferences.",
    },
    {
        number: "02",
        icon: Calendar,
        title: "Publish",
        description:
            "Make your appointment experience available to prospects.",
    },
    {
        number: "03",
        icon: Users,
        title: "Book",
        description:
            "Qualified prospects choose a suitable time from your available slots.",
    },
    {
        number: "04",
        icon: Bell,
        title: "Remind",
        description:
            "Automated notifications keep everyone prepared for the meeting.",
    },
    {
        number: "05",
        icon: Video,
        title: "Meet",
        description:
            "Start the conversation with everything organized and ready.",
    },
];

/* =====================================================
   FAQ
===================================================== */

const faqs = [
    {
        question:
            "Can appointment settings support different meeting types?",
        answer:
            "Yes. You can structure different appointment types based on your sales process, meeting purpose, duration and preferred meeting method.",
    },
    {
        question: "Can I control when prospects can book meetings?",
        answer:
            "Yes. Availability settings can be structured around working hours, selected days, time slots and buffer periods.",
    },
    {
        question:
            "Can appointments work across different time zones?",
        answer:
            "Yes. Time-zone aware scheduling makes it easier for prospects and teams working across different regions to coordinate meetings.",
    },
    {
        question: "Can automated reminders be included?",
        answer:
            "Yes. Appointment workflows can include reminder and notification touchpoints to reduce missed meetings and keep prospects informed.",
    },
    {
        question: "Can the booking experience be customized?",
        answer:
            "Yes. Appointment preferences, meeting details, availability rules and other booking settings can be adapted to your workflow.",
    },
];

/* =====================================================
   SECTION HEADING
===================================================== */

function SectionHeading({
    eyebrow,
    title,
    description,
    align = "center",
}) {
    return (
        <motion.div
            className={`appointment-section-heading appointment-align-${align}`}
            variants={fadeUp}
        >
            <div className="appointment-eyebrow">
                <span className="appointment-eyebrow-dot" />
                {eyebrow}
            </div>

            <h2>{title}</h2>

            {description && <p>{description}</p>}
        </motion.div>
    );
}

/* =====================================================
   MAIN COMPONENT
===================================================== */

function Appointment_Settings() {
    const [activeFaq, setActiveFaq] = useState(0);

    return (
        <main className="appointment-page">

            {/* =====================================================
                HERO
            ===================================================== */}

            <section className="appointment-hero">

                <div className="appointment-hero-grid" />
                <div className="appointment-hero-glow appointment-glow-one" />
                <div className="appointment-hero-glow appointment-glow-two" />

                <div className="appointment-container appointment-hero-container">

                    <motion.div
                        className="appointment-hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={stagger}
                    >

                        <motion.div
                            className="appointment-hero-badge"
                            variants={fadeUp}
                        >
                            <span className="appointment-badge-icon">
                                <Calendar size={15} />
                            </span>

                            APPOINTMENT SETTINGS
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            Turn booked interest into
                            <span> productive conversations.</span>
                        </motion.h1>

                        <motion.p
                            className="appointment-hero-description"
                            variants={fadeUp}
                        >
                            Make it easy for prospects to schedule meetings,
                            configure availability and create a professional
                            booking experience without the usual scheduling
                            friction.
                        </motion.p>

                        <motion.div
                            className="appointment-hero-actions"
                            variants={fadeUp}
                        >

                            {/* CTA → CONTACT US */}
                            <a
                                href="/contact-us"
                                className="appointment-primary-btn"
                            >
                                Configure Your Workflow
                                <ArrowRight size={17} />
                            </a>

                            <a
                                href="#features"
                                className="appointment-secondary-btn"
                            >
                                Explore Features
                                <ArrowUpRight size={16} />
                            </a>

                        </motion.div>

                        <motion.div
                            className="appointment-hero-proof"
                            variants={fadeUp}
                        >
                            <div>
                                <CheckCircle2 size={15} />
                                Flexible availability
                            </div>

                            <div>
                                <CheckCircle2 size={15} />
                                Automated reminders
                            </div>

                            <div>
                                <CheckCircle2 size={15} />
                                Time-zone friendly
                            </div>
                        </motion.div>

                    </motion.div>

                    {/* =================================================
                        HERO VISUAL
                    ================================================= */}

                    <motion.div
                        className="appointment-hero-visual"
                        initial={{
                            opacity: 0,
                            scale: 0.92,
                            x: 30,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.9,
                            delay: 0.15,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >

                        <div className="appointment-orbit appointment-orbit-one" />
                        <div className="appointment-orbit appointment-orbit-two" />

                        <div className="appointment-floating-node appointment-node-one">
                            <Calendar size={15} />
                            <span>New Appointment</span>
                        </div>

                        <div className="appointment-floating-node appointment-node-two">
                            <CheckCircle2 size={15} />
                            <span>Confirmed</span>
                        </div>

                        <div className="appointment-floating-node appointment-node-three">
                            <Bell size={15} />
                            <span>Reminder Sent</span>
                        </div>

                        <motion.div
                            className="appointment-dashboard"
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >

                            <div className="appointment-dashboard-top">

                                <div className="appointment-dashboard-brand">

                                    <div className="appointment-mini-logo">
                                        <Calendar size={18} />
                                    </div>

                                    <div>
                                        <strong>Appointments</strong>
                                        <span>Scheduling workspace</span>
                                    </div>

                                </div>

                                <div className="appointment-live">
                                    <span />
                                    Live
                                </div>

                            </div>

                            <div className="appointment-dashboard-main">

                                <div className="appointment-calendar-card">

                                    <div className="appointment-calendar-header">

                                        <div>
                                            <strong>August 2026</strong>
                                            <small>Choose a meeting time</small>
                                        </div>

                                        <Calendar size={17} />

                                    </div>

                                    <div className="appointment-calendar-days">
                                        <span>MON</span>
                                        <span>TUE</span>
                                        <span>WED</span>
                                        <span>THU</span>
                                        <span>FRI</span>
                                    </div>

                                    <div className="appointment-calendar-dates">
                                        <span>17</span>
                                        <span>18</span>
                                        <span className="active">19</span>
                                        <span>20</span>
                                        <span>21</span>
                                    </div>

                                </div>

                                <div className="appointment-time-card">

                                    <div className="appointment-time-header">

                                        <div>
                                            <strong>Available times</strong>
                                            <small>Wednesday, Aug 19</small>
                                        </div>

                                        <Clock3 size={15} />

                                    </div>

                                    <div className="appointment-time-slots">
                                        <span>09:00 AM</span>

                                        <span className="selected">
                                            10:30 AM
                                        </span>

                                        <span>12:00 PM</span>
                                        <span>02:00 PM</span>
                                        <span>03:30 PM</span>
                                        <span>05:00 PM</span>
                                    </div>

                                </div>

                                <div className="appointment-dashboard-stats">

                                    <div>
                                        <span>Booked</span>
                                        <strong>24</strong>
                                        <small>
                                            <ArrowUpRight size={10} />
                                            18%
                                        </small>
                                    </div>

                                    <div>
                                        <span>Available</span>
                                        <strong>18</strong>
                                        <small>
                                            <Check size={10} />
                                            Open
                                        </small>
                                    </div>

                                    <div>
                                        <span>Show rate</span>
                                        <strong>94%</strong>
                                        <small>
                                            <ArrowUpRight size={10} />
                                            6%
                                        </small>
                                    </div>

                                </div>

                                <div className="appointment-confirmed">

                                    <div className="appointment-confirmed-icon">
                                        <CheckCircle2 size={17} />
                                    </div>

                                    <div>
                                        <strong>
                                            Appointment confirmed
                                        </strong>

                                        <span>
                                            Strategy call · 30 minutes
                                        </span>
                                    </div>

                                    <ArrowRight size={15} />

                                </div>

                            </div>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                INTRO
            ===================================================== */}

            <section className="appointment-intro">

                <div className="appointment-container appointment-intro-grid">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={fadeUp}
                    >

                        <span className="appointment-small-label">
                            THE EXPERIENCE
                        </span>

                        <h2>
                            Scheduling should feel
                            <span> effortless.</span>
                        </h2>

                    </motion.div>

                    <motion.div
                        className="appointment-intro-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={fadeUp}
                    >

                        <p>
                            When a prospect is ready to talk, unnecessary
                            scheduling friction can slow down momentum.
                        </p>

                        <p>
                            A well-designed appointment workflow gives buyers
                            a clear path from interest to conversation while
                            keeping your team's calendar organized.
                        </p>

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                FEATURES
            ===================================================== */}

            <section
                className="appointment-features"
                id="features"
            >

                <div className="appointment-container">

                    <SectionHeading
                        eyebrow="APPOINTMENT EXPERIENCE"
                        title="Everything needed to make scheduling work better."
                        description="Build a structured appointment experience around availability, meeting preferences, reminders and the needs of your prospects."
                    />

                    <motion.div
                        className="appointment-features-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        {appointmentFeatures.map((feature) => {

                            const Icon = feature.icon;

                            return (
                                <motion.article
                                    className="appointment-feature-card"
                                    key={feature.number}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                    }}
                                >

                                    <div className="appointment-feature-top">

                                        <div className="appointment-feature-icon">
                                            <Icon size={21} />
                                        </div>

                                        <span>
                                            {feature.number}
                                        </span>

                                    </div>

                                    <h3>{feature.title}</h3>

                                    <p>
                                        {feature.description}
                                    </p>

                                    <ul>
                                        {feature.points.map((point) => (
                                            <li key={point}>
                                                <Check size={14} />
                                                {point}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="appointment-card-arrow">
                                        <ArrowUpRight size={17} />
                                    </div>

                                </motion.article>
                            );

                        })}

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                WHY
            ===================================================== */}

            <section className="appointment-why">

                <div className="appointment-container appointment-why-grid">

                    <motion.div
                        className="appointment-why-visual"
                        initial={{
                            opacity: 0,
                            x: -35,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        transition={{
                            duration: 0.7,
                        }}
                    >

                        <div className="appointment-scheduler-visual">

                            <div className="appointment-scheduler-ring ring-one" />
                            <div className="appointment-scheduler-ring ring-two" />
                            <div className="appointment-scheduler-ring ring-three" />

                            <div className="appointment-scheduler-line horizontal" />
                            <div className="appointment-scheduler-line vertical" />

                            <div className="appointment-scheduler-center">
                                <Calendar size={28} />
                            </div>

                            <div className="appointment-scheduler-point point-a">
                                <Clock3 size={13} />
                            </div>

                            <div className="appointment-scheduler-point point-b">
                                <Users size={13} />
                            </div>

                            <div className="appointment-scheduler-point point-c">
                                <Check size={13} />
                            </div>

                        </div>

                    </motion.div>

                    <motion.div
                        className="appointment-why-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.span
                            className="appointment-small-label"
                            variants={fadeUp}
                        >
                            WHY IT MATTERS
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            Make every booked meeting
                            <span> count.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Appointment settings are more than calendar
                            controls. They shape the experience between a
                            prospect showing interest and actually having a
                            conversation with your team.
                        </motion.p>

                        <motion.div
                            className="appointment-why-points"
                            variants={stagger}
                        >

                            <motion.div
                                className="appointment-why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <Sparkles size={18} />
                                </div>

                                <section>
                                    <h4>
                                        Remove scheduling friction
                                    </h4>

                                    <p>
                                        Give prospects a clear and convenient
                                        way to find the right time.
                                    </p>
                                </section>

                            </motion.div>

                            <motion.div
                                className="appointment-why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <Clock3 size={18} />
                                </div>

                                <section>
                                    <h4>
                                        Protect your team's time
                                    </h4>

                                    <p>
                                        Use availability rules and buffers to
                                        keep calendars predictable.
                                    </p>
                                </section>

                            </motion.div>

                            <motion.div
                                className="appointment-why-point"
                                variants={fadeUp}
                            >

                                <div>
                                    <Bell size={18} />
                                </div>

                                <section>
                                    <h4>
                                        Keep prospects engaged
                                    </h4>

                                    <p>
                                        Use reminders and notifications to
                                        maintain momentum before the meeting.
                                    </p>
                                </section>

                            </motion.div>

                        </motion.div>

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                PROCESS
            ===================================================== */}

            <section className="appointment-process">

                <div className="appointment-container">

                    <SectionHeading
                        eyebrow="HOW IT WORKS"
                        title="A smoother path from booking to conversation."
                        description="Create an appointment workflow that keeps the entire scheduling journey simple and organized."
                    />

                    <motion.div
                        className="appointment-process-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.1,
                        }}
                        variants={stagger}
                    >

                        <div className="appointment-process-line" />

                        {process.map((item) => {

                            const Icon = item.icon;

                            return (
                                <motion.div
                                    className="appointment-process-item"
                                    key={item.number}
                                    variants={fadeUp}
                                >

                                    <div className="appointment-process-number">
                                        {item.number}
                                    </div>

                                    <div className="appointment-process-icon">
                                        <Icon size={18} />
                                    </div>

                                    <h3>{item.title}</h3>

                                    <p>
                                        {item.description}
                                    </p>

                                </motion.div>
                            );

                        })}

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                BENEFITS
            ===================================================== */}

            <section className="appointment-benefits">

                <div className="appointment-container">

                    <SectionHeading
                        eyebrow="BUSINESS IMPACT"
                        title="Better scheduling creates better sales conversations."
                        description="Give prospects an easier path to your team while creating a more predictable appointment workflow."
                    />

                    <motion.div
                        className="appointment-benefits-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={stagger}
                    >

                        {benefits.map((benefit) => {

                            const Icon = benefit.icon;

                            return (
                                <motion.article
                                    className="appointment-benefit-card"
                                    key={benefit.title}
                                    variants={fadeUp}
                                    whileHover={{
                                        y: -8,
                                    }}
                                >

                                    <div className="appointment-benefit-icon">
                                        <Icon size={20} />
                                    </div>

                                    <h3>{benefit.title}</h3>

                                    <p>
                                        {benefit.description}
                                    </p>

                                </motion.article>
                            );

                        })}

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                SETTINGS STACK
            ===================================================== */}

            <section className="appointment-stack">

                <div className="appointment-container">

                    <div className="appointment-stack-box">

                        <motion.div
                            className="appointment-stack-content"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            variants={stagger}
                        >

                            <motion.span
                                className="appointment-small-label"
                                variants={fadeUp}
                            >
                                CONTROL CENTER
                            </motion.span>

                            <motion.h2 variants={fadeUp}>
                                Build your appointment
                                <span>
                                    {" "}
                                    system around your workflow.
                                </span>
                            </motion.h2>

                            <motion.p variants={fadeUp}>
                                Configure the individual pieces of your
                                scheduling experience without making the
                                process complicated for prospects.
                            </motion.p>

                            <motion.div
                                className="appointment-stack-list"
                                variants={stagger}
                            >

                                <motion.div variants={fadeUp}>
                                    <span>01</span>
                                    <strong>Availability</strong>
                                    <small>
                                        Working hours & buffers
                                    </small>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <span>02</span>
                                    <strong>Meeting Types</strong>
                                    <small>
                                        Duration & format
                                    </small>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <span>03</span>
                                    <strong>Notifications</strong>
                                    <small>
                                        Reminders & updates
                                    </small>
                                </motion.div>

                                <motion.div variants={fadeUp}>
                                    <span>04</span>
                                    <strong>Time Zones</strong>
                                    <small>
                                        Global scheduling
                                    </small>
                                </motion.div>

                            </motion.div>

                        </motion.div>

                        <motion.div
                            className="appointment-stack-visual"
                            initial={{
                                opacity: 0,
                                scale: 0.9,
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                            }}
                            viewport={{
                                once: true,
                                amount: 0.2,
                            }}
                            transition={{
                                duration: 0.8,
                            }}
                        >

                            <div className="appointment-stack-center">
                                <Settings2 size={30} />
                            </div>

                            <div className="appointment-stack-node appointment-stack-node-one">
                                <Calendar size={15} />
                                Availability
                            </div>

                            <div className="appointment-stack-node appointment-stack-node-two">
                                <Video size={15} />
                                Meeting Type
                            </div>

                            <div className="appointment-stack-node appointment-stack-node-three">
                                <Bell size={15} />
                                Reminders
                            </div>

                            <div className="appointment-stack-node appointment-stack-node-four">
                                <Globe2 size={15} />
                                Time Zones
                            </div>

                            <div className="appointment-stack-line stack-line-one" />
                            <div className="appointment-stack-line stack-line-two" />
                            <div className="appointment-stack-line stack-line-three" />
                            <div className="appointment-stack-line stack-line-four" />

                        </motion.div>

                    </div>

                </div>

            </section>

            {/* =====================================================
                FAQ
            ===================================================== */}

            <section className="appointment-faq">

                <div className="appointment-container appointment-faq-grid">

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.2,
                        }}
                        variants={stagger}
                    >

                        <motion.span
                            className="appointment-small-label"
                            variants={fadeUp}
                        >
                            FAQ
                        </motion.span>

                        <motion.h2 variants={fadeUp}>
                            Questions about
                            <span> appointment settings?</span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Here are some of the common questions businesses
                            have when building a structured scheduling
                            workflow.
                        </motion.p>

                        {/* CTA → CONTACT US */}
                        <motion.a
                            href="/contact-us"
                            className="appointment-faq-contact"
                            variants={fadeUp}
                        >
                            Talk to our team
                            <ArrowRight size={15} />
                        </motion.a>

                    </motion.div>

                    <motion.div
                        className="appointment-faq-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.15,
                        }}
                        variants={stagger}
                    >

                        {faqs.map((faq, index) => {

                            const active = activeFaq === index;

                            return (
                                <motion.div
                                    className={`appointment-faq-item ${
                                        active ? "active" : ""
                                    }`}
                                    key={faq.question}
                                    variants={fadeUp}
                                >

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setActiveFaq(
                                                active ? -1 : index
                                            )
                                        }
                                    >

                                        <span>
                                            {faq.question}
                                        </span>

                                        <ChevronDown size={18} />

                                    </button>

                                    <div
                                        className="appointment-faq-answer"
                                        style={{
                                            maxHeight: active
                                                ? "300px"
                                                : "0px",
                                            opacity: active ? 1 : 0,
                                            transition:
                                                "max-height 0.35s ease, opacity 0.25s ease",
                                        }}
                                    >

                                        <p>
                                            {faq.answer}
                                        </p>

                                    </div>

                                </motion.div>
                            );

                        })}

                    </motion.div>

                </div>

            </section>

            {/* =====================================================
                FINAL CTA
            ===================================================== */}

            <section className="appointment-final-cta">

                <div className="appointment-final-grid" />
                <div className="appointment-final-glow" />

                <div className="appointment-container">

                    <motion.div
                        className="appointment-cta-content"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{
                            once: true,
                            amount: 0.25,
                        }}
                        variants={stagger}
                    >

                        <motion.div
                            className="appointment-cta-badge"
                            variants={fadeUp}
                        >
                            <Sparkles size={14} />
                            READY TO IMPROVE YOUR BOOKING FLOW?
                        </motion.div>

                        <motion.h2 variants={fadeUp}>
                            Make scheduling the easiest
                            <span> part of the sale.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            Build a professional appointment experience that
                            reduces friction, protects your team's time and
                            turns more interested prospects into real
                            conversations.
                        </motion.p>

                        <motion.div
                            className="appointment-cta-actions"
                            variants={fadeUp}
                        >

                            {/* CTA → CONTACT US */}
                            <a
                                href="/contact-us"
                                className="appointment-primary-btn appointment-cta-btn"
                            >
                                Get Started
                                <ArrowRight size={17} />
                            </a>

                          
                        </motion.div>

                    </motion.div>

                </div>

            </section>

        </main>
    );
}

export default Appointment_Settings;