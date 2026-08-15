import { useEffect, useState } from "react";
import "./CEO_Message.css";
import CEOImage from "../../../assets/About_Us_Images/CEO_Evolute_Technologies.png";

/* =====================================================
   CEO MESSAGE
===================================================== */

const fullMessage = `Hey Everyone,

Welcome to Evolute Technologies, where we help businesses turn ideas into powerful digital solutions. Our goal is to combine technology, innovation, and growth to create solutions that make a real business impact.

From custom software and SaaS products to AI integration, web and mobile applications, and scalable cloud solutions, our team works closely with clients to bring their vision to life.

Beyond technology, we also help businesses generate opportunities, automate sales processes, reach the right audience, and build sustainable outbound growth.

At Evolute Technologies, we believe in transparency, quality, and long-term partnerships. We don't just deliver projects; we become trusted technology and growth partners for the businesses we work with.

Let's build something meaningful, scalable, and impactful together.`;


/* =====================================================
   CEO MESSAGE COMPONENT
===================================================== */

function CEOMessage() {
  const [displayedText, setDisplayedText] = useState("");

  /* =====================================================
     TYPING EFFECT
  ===================================================== */

  useEffect(() => {
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index < fullMessage.length) {
        setDisplayedText(fullMessage.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 18);

    return () => clearInterval(typingInterval);
  }, []);

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <section className="ceo-message">
      <div className="ceo-message-container">

        {/* =================================================
           LEFT COLUMN
        ================================================= */}

        <div className="ceo-message-text">

          <span className="ceo-message-label">
            Message From The CEO
          </span>

          <h2>
            Building Technology That Moves Businesses Forward
          </h2>

          <div className="ceo-typing-text">
            {displayedText.split("\n").map((line, index, lines) => (
              <span key={index}>
                {line}

                {index < lines.length - 1 && <br />}
              </span>
            ))}

            <span className="typing-cursor"></span>
          </div>

        </div>


        {/* =================================================
           RIGHT COLUMN
        ================================================= */}

        <div className="ceo-profile-column">

          <div className="ceo-profile-card">

            {/* CEO IMAGE */}
            <div className="ceo-profile-image">
              <img
                src={CEOImage}
                alt="Founder and CEO of Evolute Technologies"
              />
            </div>


            {/* CEO DETAILS */}
            <h3>
              Muhammad Umar
            </h3>

            <p>
              Founder
            </p>

            <span>
              Evolute Technologies
            </span>


            {/* =================================================
               SOCIAL LINKS
            ================================================= */}

            <div className="ceo-socials">

              <a
                href="#"
                className="ceo-social linkedin"
                aria-label="LinkedIn"
              >
                in
              </a>

              <a
                href="#"
                className="ceo-social email"
                aria-label="Email"
              >
                @
              </a>

              <a
                href="#"
                className="ceo-social x"
                aria-label="X"
              >
                X
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default CEOMessage;