import { Link } from "react-router-dom";
import "./Custom_Hero.css";

/* =====================================================
   RUBIK'S CUBE DATA
===================================================== */

const cubePositions = [
    [-1, -1, -1],
    [0, -1, -1],
    [1, -1, -1],

    [-1, 0, -1],
    [0, 0, -1],
    [1, 0, -1],

    [-1, 1, -1],
    [0, 1, -1],
    [1, 1, -1],

    [-1, -1, 0],
    [0, -1, 0],
    [1, -1, 0],

    [-1, 0, 0],
    [0, 0, 0],
    [1, 0, 0],

    [-1, 1, 0],
    [0, 1, 0],
    [1, 1, 0],

    [-1, -1, 1],
    [0, -1, 1],
    [1, -1, 1],

    [-1, 0, 1],
    [0, 0, 1],
    [1, 0, 1],

    [-1, 1, 1],
    [0, 1, 1],
    [1, 1, 1],
];


/* =====================================================
   INDIVIDUAL CUBIE
===================================================== */

function RubikCubie({ position, index }) {

    const [x, y, z] = position;

    const entryDirections = [
        [-460, -330, 380],
        [320, -450, -300],
        [-390, 410, 360],

        [470, 250, -420],
        [-260, -500, 280],
        [420, -360, -350],

        [-520, 180, 420],
        [280, 470, -380],
        [-430, -220, -460],

        [510, -300, 300],
        [-350, 430, -320],
        [380, 350, 450],

        [-470, 330, -350],
        [0, 0, 0],
        [460, -340, -280],

        [-330, -420, 430],
        [500, 180, -360],
        [-440, 390, 300],

        [350, -470, 340],
        [-510, -160, -420],
        [390, 430, -300],

        [-300, 500, 380],
        [480, -280, 430],
        [-470, 350, -400],

        [330, 460, 320],
        [-420, -390, -350],
        [450, 300, -420],
    ];

    const [entryX, entryY, entryZ] =
        entryDirections[index];

    return (
        <div
            className={`rubik-cubie rubik-cubie-${index + 1}`}
            style={{
                "--x": x,
                "--y": y,
                "--z": z,

                "--entry-x": `${entryX}px`,
                "--entry-y": `${entryY}px`,
                "--entry-z": `${entryZ}px`,

                "--entry-delay": `${index * 0.045}s`,
            }}
        >

            {/* FRONT */}
            <div className="rubik-sticker rubik-front">
                {z === 1 && <span />}
            </div>


            {/* BACK */}
            <div className="rubik-sticker rubik-back">
                {z === -1 && <span />}
            </div>


            {/* RIGHT */}
            <div className="rubik-sticker rubik-right">
                {x === 1 && <span />}
            </div>


            {/* LEFT */}
            <div className="rubik-sticker rubik-left">
                {x === -1 && <span />}
            </div>


            {/* TOP */}
            <div className="rubik-sticker rubik-top">
                {y === -1 && <span />}
            </div>


            {/* BOTTOM */}
            <div className="rubik-sticker rubik-bottom">
                {y === 1 && <span />}
            </div>


            {/* INTERNAL BLACK BODY */}
            <div className="rubik-core" />

        </div>
    );
}


/* =====================================================
   FLOATING MINI CUBES
===================================================== */

const floatingCubes = [
    {
        id: 1,
        size: 42,
        left: "5%",
        top: "13%",
        rotate: "rotateX(28deg) rotateY(35deg) rotateZ(-18deg)",
        delay: "-1s",
    },

    {
        id: 2,
        size: 28,
        left: "18%",
        top: "4%",
        rotate: "rotateX(40deg) rotateY(-30deg) rotateZ(15deg)",
        delay: "-3s",
    },

    {
        id: 3,
        size: 52,
        left: "88%",
        top: "12%",
        rotate: "rotateX(35deg) rotateY(45deg) rotateZ(20deg)",
        delay: "-2s",
    },

    {
        id: 4,
        size: 34,
        left: "95%",
        top: "43%",
        rotate: "rotateX(50deg) rotateY(-35deg) rotateZ(-20deg)",
        delay: "-4s",
    },

    {
        id: 5,
        size: 38,
        left: "5%",
        top: "62%",
        rotate: "rotateX(35deg) rotateY(55deg) rotateZ(10deg)",
        delay: "-2.5s",
    },

    {
        id: 6,
        size: 25,
        left: "22%",
        top: "86%",
        rotate: "rotateX(45deg) rotateY(-25deg) rotateZ(25deg)",
        delay: "-4.5s",
    },

    {
        id: 7,
        size: 45,
        left: "82%",
        top: "78%",
        rotate: "rotateX(25deg) rotateY(50deg) rotateZ(-15deg)",
        delay: "-1.5s",
    },

    {
        id: 8,
        size: 24,
        left: "67%",
        top: "1%",
        rotate: "rotateX(40deg) rotateY(-45deg) rotateZ(18deg)",
        delay: "-3.5s",
    },
];


/* =====================================================
   MINI FLOATING CUBE
===================================================== */

function FloatingCube({ cube }) {

    return (
        <div
            className="floating-rubik"
            style={{
                "--floating-size": `${cube.size}px`,
                "--floating-left": cube.left,
                "--floating-top": cube.top,
                "--floating-rotate": cube.rotate,
                "--floating-delay": cube.delay,
            }}
        >

            <div className="floating-face floating-face-front" />
            <div className="floating-face floating-face-back" />
            <div className="floating-face floating-face-right" />
            <div className="floating-face floating-face-left" />
            <div className="floating-face floating-face-top" />
            <div className="floating-face floating-face-bottom" />

        </div>
    );
}


/* =====================================================
   MAIN HERO
===================================================== */

function CustomHero() {

    return (
        <section className="custom-hero">


            {/* =================================================
                BACKGROUND GLOWS
            ================================================= */}

            <div
                className="custom-hero-glow custom-hero-glow-one"
                aria-hidden="true"
            />

            <div
                className="custom-hero-glow custom-hero-glow-two"
                aria-hidden="true"
            />


            {/* =================================================
                MAIN CONTAINER
            ================================================= */}

            <div className="custom-hero-container">


                {/* =================================================
                    LEFT CONTENT
                ================================================= */}

                <div className="custom-hero-content">

                    <span className="custom-hero-eyebrow">
                        CUSTOM SOFTWARE DEVELOPMENT SERVICES
                    </span>


                    <h1 className="custom-hero-title">

                        Custom Software Solutions For Your

                        <br />

                        Exact Business Needs

                    </h1>


                    <p className="custom-hero-description">

                        Your business has specific workflows, specific
                        teams, and specific problems. Your software should
                        too. Our software development builds tools that
                        match exactly how you work, eliminating the
                        friction of rigid off-the-shelf software.

                    </p>


                    {/* =================================================
                        CTA BUTTONS
                    ================================================= */}

                    <div className="custom-hero-actions">


                        {/* PRIMARY BUTTON */}

                        <Link
                            to="/contact-us"
                            className="
                                custom-hero-button
                                custom-hero-button-primary
                            "
                        >

                            <span>
                                Start My Project
                            </span>

                            <span className="custom-hero-button-arrow">
                                ↗
                            </span>

                        </Link>


                        {/* SECONDARY BUTTON */}

                        <Link
                            to="/contact-us"
                            className="
                                custom-hero-button
                                custom-hero-button-secondary
                            "
                        >

                            <span>
                                Book a Call
                            </span>

                            <span className="custom-hero-button-arrow">
                                ↗
                            </span>

                        </Link>

                    </div>

                </div>


                {/* =================================================
                    RIGHT 3D RUBIK'S CUBE
                ================================================= */}

                <div
                    className="custom-hero-visual"
                    aria-hidden="true"
                >

                    <div className="rubik-scene">


                        {/* =================================================
                            FLOATING CUBES
                        ================================================= */}

                        <div className="floating-rubiks-layer">

                            {floatingCubes.map((cube) => (

                                <FloatingCube
                                    key={cube.id}
                                    cube={cube}
                                />

                            ))}

                        </div>


                        {/* =================================================
                            MAIN RUBIK CUBE
                        ================================================= */}

                        <div className="rubik-entry-animation">

                            <div className="rubik-cube-wrapper">

                                <div className="rubik-cube">

                                    {cubePositions.map(
                                        (position, index) => (

                                            <RubikCubie
                                                key={index}
                                                position={position}
                                                index={index}
                                            />

                                        )
                                    )}

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}


export default CustomHero;