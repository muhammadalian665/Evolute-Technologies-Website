import "./Hero.css";
import heroImage from "../assets/hero-img.webp";

function Hero() {
  return (
    <section className="hero">

      <img
        className="hero-image"
        src={heroImage}
        alt="Digital Solutions"
      />

      <div className="hero-overlay"></div>


      <div className="hero-content">

        <h1>
          Empowering Businesses Through AI, Software & Digital Innovation


        </h1>


        <p>
       We design scalable software solutions and growth systems that help companies innovate, automate, and scale globally.
        </p>


        <div className="hero-buttons">

          <button className="primary-btn">
            Get a Free Consultation
          </button>


          <button className="secondary-btn">
            View Our Work
          </button>

        </div>


      </div>

    </section>
  );
}

export default Hero;