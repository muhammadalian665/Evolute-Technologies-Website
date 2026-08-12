import {
    Children,
    cloneElement,
    createRef,
    forwardRef,
    isValidElement,
    useCallback,
    useEffect,
    useMemo,
    useRef,
} from "react";

import gsap from "gsap";

import "./CardSwap.css";

/* =====================================================
   CARD
===================================================== */

export const Card = forwardRef(
    (
        {
            customClass = "",
            className = "",
            ...rest
        },
        ref
    ) => {
        return (
            <div
                ref={ref}
                {...rest}
                className={`card ${customClass} ${className}`.trim()}
            />
        );
    }
);

Card.displayName = "Card";

/* =====================================================
   CARD SLOT
===================================================== */

const makeSlot = (
    index,
    cardDistance,
    verticalDistance,
    total
) => {
    return {
        x:
            index *
            cardDistance,

        y:
            -index *
            verticalDistance,

        z:
            -index *
            cardDistance *
            1.5,

        zIndex:
            total - index,
    };
};

/* =====================================================
   PLACE CARD
===================================================== */

const placeCard = (
    element,
    slot,
    skewAmount
) => {
    if (!element) {
        return;
    }

    gsap.set(
        element,
        {
            x: slot.x,

            y: slot.y,

            z: slot.z,

            xPercent: -50,

            yPercent: -50,

            skewY: skewAmount,

            transformOrigin:
                "center center",

            zIndex:
                slot.zIndex,

            force3D: true,
        }
    );
};

/* =====================================================
   CARD SWAP
===================================================== */

const CardSwap = ({
    width = 500,

    height = 400,

    cardDistance = 60,

    verticalDistance = 70,

    pauseOnHover = false,

    onCardClick,

    skewAmount = 6,

    easing = "elastic",

    children,
}) => {

    /* =================================================
       ANIMATION CONFIG
    ================================================= */

    const config =
        useMemo(
            () => {

                if (
                    easing ===
                    "elastic"
                ) {
                    return {
                        ease:
                            "elastic.out(0.6,0.9)",

                        durDrop:
                            1.2,

                        durMove:
                            1.2,

                        durReturn:
                            1.2,

                        promoteOverlap:
                            0.8,

                        returnDelay:
                            0.05,
                    };
                }

                return {
                    ease:
                        "power1.inOut",

                    durDrop:
                        0.8,

                    durMove:
                        0.8,

                    durReturn:
                        0.8,

                    promoteOverlap:
                        0.45,

                    returnDelay:
                        0.2,
                };
            },
            [easing]
        );


    /* =================================================
       CHILDREN
    ================================================= */

    const cardArray =
        useMemo(
            () =>
                Children.toArray(
                    children
                ),
            [children]
        );


    /* =================================================
       CARD COUNT
    ================================================= */

    const cardCount =
        cardArray.length;


    /* =================================================
       CARD REFS

       Refs are created once per card count.

       We NEVER access .current
       during render.
    ================================================= */

    const cardRefs =
        useMemo(
            () =>
                Array.from(
                    {
                        length:
                            cardCount,
                    },
                    () =>
                        createRef()
                ),
            [cardCount]
        );


    /* =================================================
       CARD ORDER
    ================================================= */

    const orderRef =
        useRef([]);


    /* =================================================
       CONTAINER REF
    ================================================= */

    const containerRef =
        useRef(null);


    /* =================================================
       TIMELINE REF
    ================================================= */

    const timelineRef =
        useRef(null);


    /* =================================================
       INITIALIZE CARD ORDER
    ================================================= */

    useEffect(
        () => {

            orderRef.current =
                Array.from(
                    {
                        length:
                            cardCount,
                    },
                    (
                        _,
                        index
                    ) =>
                        index
                );

        },
        [cardCount]
    );


    /* =================================================
       INITIAL CARD POSITIONS
    ================================================= */

    useEffect(
        () => {

            const total =
                cardRefs.length;

            if (
                total === 0
            ) {
                return;
            }


            cardRefs.forEach(
                (
                    cardRef,
                    index
                ) => {

                    const element =
                        cardRef.current;

                    if (
                        !element
                    ) {
                        return;
                    }


                    const slot =
                        makeSlot(
                            index,

                            cardDistance,

                            verticalDistance,

                            total
                        );


                    placeCard(
                        element,

                        slot,

                        skewAmount
                    );

                }
            );


            return () => {

                cardRefs.forEach(
                    (
                        cardRef
                    ) => {

                        const element =
                            cardRef.current;

                        if (
                            element
                        ) {
                            gsap.killTweensOf(
                                element
                            );
                        }

                    }
                );

            };

        },
        [
            cardRefs,
            cardDistance,
            verticalDistance,
            skewAmount,
        ]
    );


    /* =================================================
       SWAP CARDS
    ================================================= */

    const swapCards =
        useCallback(
            () => {

                const currentOrder =
                    orderRef.current;


                if (
                    currentOrder.length <
                    2
                ) {
                    return;
                }


                /* ---------------------------------
                   PREVENT DOUBLE CLICK
                --------------------------------- */

                if (
                    timelineRef.current &&
                    timelineRef.current.isActive()
                ) {
                    return;
                }


                /* ---------------------------------
                   FRONT CARD
                --------------------------------- */

                const [
                    frontIndex,
                    ...remainingIndexes
                ] =
                    currentOrder;


                const frontRef =
                    cardRefs[
                        frontIndex
                    ];


                const frontElement =
                    frontRef?.current;


                if (
                    !frontElement
                ) {
                    return;
                }


                const total =
                    cardRefs.length;


                /* ---------------------------------
                   CREATE TIMELINE
                --------------------------------- */

                const timeline =
                    gsap.timeline();


                timelineRef.current =
                    timeline;


                /* ---------------------------------
                   DROP FRONT CARD
                --------------------------------- */

                timeline.to(
                    frontElement,
                    {
                        y:
                            "+=500",

                        duration:
                            config.durDrop,

                        ease:
                            config.ease,
                    }
                );


                /* ---------------------------------
                   PROMOTE LABEL
                --------------------------------- */

                timeline.addLabel(
                    "promote",

                    `-=${
                        config.durDrop *
                        config.promoteOverlap
                    }`
                );


                /* ---------------------------------
                   PROMOTE REMAINING CARDS
                --------------------------------- */

                remainingIndexes.forEach(
                    (
                        cardIndex,
                        position
                    ) => {

                        const ref =
                            cardRefs[
                                cardIndex
                            ];


                        const element =
                            ref?.current;


                        if (
                            !element
                        ) {
                            return;
                        }


                        const slot =
                            makeSlot(
                                position,

                                cardDistance,

                                verticalDistance,

                                total
                            );


                        /* -------------------------
                           Z INDEX
                        ------------------------- */

                        timeline.set(
                            element,
                            {
                                zIndex:
                                    slot.zIndex,
                            },
                            "promote"
                        );


                        /* -------------------------
                           MOVE CARD
                        ------------------------- */

                        timeline.to(
                            element,
                            {
                                x:
                                    slot.x,

                                y:
                                    slot.y,

                                z:
                                    slot.z,

                                duration:
                                    config.durMove,

                                ease:
                                    config.ease,
                            },

                            `promote+=${position * 0.12}`
                        );

                    }
                );


                /* ---------------------------------
                   BACK SLOT
                --------------------------------- */

                const backSlot =
                    makeSlot(
                        total - 1,

                        cardDistance,

                        verticalDistance,

                        total
                    );


                /* ---------------------------------
                   RETURN LABEL
                --------------------------------- */

                timeline.addLabel(
                    "return",

                    `promote+=${config.durMove * config.returnDelay}`
                );


                /* ---------------------------------
                   UPDATE Z INDEX
                --------------------------------- */

                timeline.call(
                    () => {

                        gsap.set(
                            frontElement,
                            {
                                zIndex:
                                    backSlot.zIndex,
                            }
                        );

                    },

                    undefined,

                    "return"
                );


                /* ---------------------------------
                   MOVE FRONT TO BACK
                --------------------------------- */

                timeline.to(
                    frontElement,
                    {
                        x:
                            backSlot.x,

                        y:
                            backSlot.y,

                        z:
                            backSlot.z,

                        duration:
                            config.durReturn,

                        ease:
                            config.ease,
                    },

                    "return"
                );


                /* ---------------------------------
                   UPDATE ORDER
                --------------------------------- */

                timeline.call(
                    () => {

                        orderRef.current =
                            [
                                ...remainingIndexes,

                                frontIndex,
                            ];

                    }
                );

            },

            [
                cardRefs,
                cardDistance,
                verticalDistance,
                config,
            ]
        );


    /* =================================================
       PAUSE ON HOVER
    ================================================= */

    useEffect(
        () => {

            if (
                !pauseOnHover
            ) {
                return;
            }


            const container =
                containerRef.current;


            if (
                !container
            ) {
                return;
            }


            const handleMouseEnter =
                () => {

                    timelineRef.current?.pause();

                };


            const handleMouseLeave =
                () => {

                    timelineRef.current?.resume();

                };


            container.addEventListener(
                "mouseenter",
                handleMouseEnter
            );


            container.addEventListener(
                "mouseleave",
                handleMouseLeave
            );


            return () => {

                container.removeEventListener(
                    "mouseenter",
                    handleMouseEnter
                );


                container.removeEventListener(
                    "mouseleave",
                    handleMouseLeave
                );

            };

        },
        [pauseOnHover]
    );


    /* =================================================
       CLEANUP
    ================================================= */

    useEffect(
        () => {

            return () => {

                timelineRef.current?.kill();


                cardRefs.forEach(
                    (
                        cardRef
                    ) => {

                        const element =
                            cardRef.current;

                        if (
                            element
                        ) {

                            gsap.killTweensOf(
                                element
                            );

                        }

                    }
                );

            };

        },
        [cardRefs]
    );


    /* =================================================
       RENDER CARDS
    ================================================= */

    const renderedCards =
        cardArray.map(
            (
                child,
                index
            ) => {

                if (
                    !isValidElement(
                        child
                    )
                ) {
                    return child;
                }


                const originalClick =
                    child.props.onClick;


                return (
                    <div
                        key={
                            child.key ??
                            index
                        }

                        ref={
                            cardRefs[
                                index
                            ]
                        }

                        className="card-swap-item"

                        style={{
                            width:
                                `${width}px`,

                            height:
                                `${height}px`,

                            position:
                                "absolute",

                            top:
                                "50%",

                            left:
                                "50%",

                            display:
                                "block",

                            boxSizing:
                                "border-box",

                            cursor:
                                "pointer",

                            transformStyle:
                                "preserve-3d",

                            transformOrigin:
                                "center center",
                        }}

                        onClick={
                            (event) => {

                                originalClick?.(
                                    event
                                );


                                swapCards();


                                onCardClick?.(
                                    index
                                );

                            }
                        }
                    >

                        {cloneElement(
                            child,
                            {
                                style: {
                                    width:
                                        "100%",

                                    height:
                                        "100%",

                                    minWidth:
                                        "100%",

                                    minHeight:
                                        "100%",

                                    boxSizing:
                                        "border-box",

                                    display:
                                        "block",

                                    ...(child
                                        .props
                                        .style ??
                                        {}),
                                },
                            }
                        )}

                    </div>
                );
            }
        );


    /* =================================================
       JSX
    ================================================= */

    return (
        <div
            ref={
                containerRef
            }

            className="card-swap-container"

            style={{
                width:
                    `${width}px`,

                height:
                    `${height}px`,

                position:
                    "relative",

                overflow:
                    "visible",

                perspective:
                    "1200px",

                transformStyle:
                    "preserve-3d",
            }}
        >

            {renderedCards}

        </div>
    );
};

export default CardSwap;