import React, {
    Children,
    cloneElement,
    forwardRef,
    isValidElement,
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
    ({ customClass, ...rest }, ref) => (
        <div
            ref={ref}
            {...rest}
            className={`card ${customClass ?? ""} ${
                rest.className ?? ""
            }`.trim()}
        />
    )
);

Card.displayName = "Card";

/* =====================================================
   CARD SLOT
===================================================== */

const makeSlot = (
    i,
    distX,
    distY,
    total
) => ({
    x: i * distX,
    y: -i * distY,
    z: -i * distX * 1.5,
    zIndex: total - i,
});

/* =====================================================
   INITIAL CARD POSITION
===================================================== */

const placeNow = (
    el,
    slot,
    skew
) =>
    gsap.set(el, {
        x: slot.x,
        y: slot.y,
        z: slot.z,

        xPercent: -50,
        yPercent: -50,

        skewY: skew,

        transformOrigin:
            "center center",

        zIndex:
            slot.zIndex,

        force3D: true,
    });

/* =====================================================
   CARD SWAP
===================================================== */

const CardSwap = ({
    width = 500,
    height = 400,

    cardDistance = 60,
    verticalDistance = 70,

    delay = 5000,

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
        easing === "elastic"
            ? {
                  ease:
                      "elastic.out(0.6,0.9)",

                  durDrop: 2,

                  durMove: 2,

                  durReturn: 2,

                  promoteOverlap: 0.9,

                  returnDelay: 0.05,
              }
            : {
                  ease:
                      "power1.inOut",

                  durDrop: 0.8,

                  durMove: 0.8,

                  durReturn: 0.8,

                  promoteOverlap: 0.45,

                  returnDelay: 0.2,
              };

    /* =================================================
       CHILDREN
    ================================================= */

    const childArr = useMemo(
        () =>
            Children.toArray(
                children
            ),
        [children]
    );

    /* =================================================
       REFS
    ================================================= */

    const refs = useMemo(
        () =>
            childArr.map(() =>
                React.createRef()
            ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [childArr.length]
    );

    /* =================================================
       ORDER
    ================================================= */

    const order = useRef(
        Array.from(
            {
                length:
                    childArr.length,
            },
            (_, i) => i
        )
    );

    const tlRef = useRef(null);

    const intervalRef =
        useRef(null);

    const container =
        useRef(null);

    /* =================================================
       SWAP EFFECT
    ================================================= */

    useEffect(() => {
        const total = refs.length;

        if (total === 0) {
            return;
        }

        /* ---------------------------------------------
           INITIAL POSITIONS
        --------------------------------------------- */

        refs.forEach(
            (ref, index) => {
                if (!ref.current) {
                    return;
                }

                placeNow(
                    ref.current,
                    makeSlot(
                        index,
                        cardDistance,
                        verticalDistance,
                        total
                    ),
                    skewAmount
                );
            }
        );

        /* ---------------------------------------------
           SWAP FUNCTION
        --------------------------------------------- */

        const swap = () => {
            if (
                order.current.length <
                2
            ) {
                return;
            }

            const [
                front,
                ...rest
            ] = order.current;

            const elFront =
                refs[front].current;

            if (!elFront) {
                return;
            }

            const tl =
                gsap.timeline();

            tlRef.current = tl;

            /* -----------------------------------------
               DROP FRONT CARD
            ----------------------------------------- */

            tl.to(elFront, {
                y: "+=500",

                duration:
                    config.durDrop,

                ease:
                    config.ease,
            });

            /* -----------------------------------------
               PROMOTE CARDS
            ----------------------------------------- */

            tl.addLabel(
                "promote",
                `-=${
                    config.durDrop *
                    config.promoteOverlap
                }`
            );

            rest.forEach(
                (index, i) => {
                    const el =
                        refs[index]
                            .current;

                    if (!el) {
                        return;
                    }

                    const slot =
                        makeSlot(
                            i,
                            cardDistance,
                            verticalDistance,
                            total
                        );

                    tl.set(
                        el,
                        {
                            zIndex:
                                slot.zIndex,
                        },
                        "promote"
                    );

                    tl.to(
                        el,
                        {
                            x: slot.x,
                            y: slot.y,
                            z: slot.z,

                            duration:
                                config.durMove,

                            ease:
                                config.ease,
                        },
                        `promote+=${i * 0.15}`
                    );
                }
            );

            /* -----------------------------------------
               RETURN FRONT CARD TO BACK
            ----------------------------------------- */

            const backSlot =
                makeSlot(
                    total - 1,
                    cardDistance,
                    verticalDistance,
                    total
                );

            tl.addLabel(
                "return",
                `promote+=${config.durMove * config.returnDelay}`
            );

            tl.call(
                () => {
                    gsap.set(
                        elFront,
                        {
                            zIndex:
                                backSlot.zIndex,
                        }
                    );
                },
                undefined,
                "return"
            );

            tl.to(
                elFront,
                {
                    x: backSlot.x,

                    y: backSlot.y,

                    z: backSlot.z,

                    duration:
                        config.durReturn,

                    ease:
                        config.ease,
                },
                "return"
            );

            /* -----------------------------------------
               UPDATE ORDER
            ----------------------------------------- */

            tl.call(() => {
                order.current = [
                    ...rest,
                    front,
                ];
            });
        };

        /* =================================================
           FIRST SWAP
        ================================================= */

        swap();

        /* =================================================
           AUTO SWAP
        ================================================= */

        intervalRef.current =
            window.setInterval(
                swap,
                delay
            );

        /* =================================================
           PAUSE ON HOVER
        ================================================= */

        if (pauseOnHover) {
            const node =
                container.current;

            const pause = () => {
                tlRef.current?.pause();

                clearInterval(
                    intervalRef.current
                );
            };

            const resume = () => {
                tlRef.current?.play();

                intervalRef.current =
                    window.setInterval(
                        swap,
                        delay
                    );
            };

            node?.addEventListener(
                "mouseenter",
                pause
            );

            node?.addEventListener(
                "mouseleave",
                resume
            );

            return () => {
                node?.removeEventListener(
                    "mouseenter",
                    pause
                );

                node?.removeEventListener(
                    "mouseleave",
                    resume
                );

                clearInterval(
                    intervalRef.current
                );

                tlRef.current?.kill();
            };
        }

        return () => {
            clearInterval(
                intervalRef.current
            );

            tlRef.current?.kill();
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        cardDistance,
        verticalDistance,
        delay,
        pauseOnHover,
        skewAmount,
        easing,
    ]);

    /* =================================================
       RENDER CARDS
    ================================================= */

    const rendered =
        childArr.map(
            (child, index) =>
                isValidElement(child)
                    ? cloneElement(
                          child,
                          {
                              key: index,

                              ref:
                                  refs[
                                      index
                                  ],

                              style: {
                                  width,
                                  height,

                                  ...(
                                      child
                                          .props
                                          .style ??
                                      {}
                                  ),
                              },

                              onClick: (e) => {
                                  child.props.onClick?.(
                                      e
                                  );

                                  onCardClick?.(
                                      index
                                  );
                              },
                          }
                      )
                    : child
        );

    /* =================================================
       JSX
    ================================================= */

    return (
        <div
            ref={container}
            className="card-swap-container"
            style={{
                width,
                height,
            }}
        >
            {rendered}
        </div>
    );
};

export default CardSwap;