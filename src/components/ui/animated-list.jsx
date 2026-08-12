import {
    Children,
    cloneElement,
    useEffect,
    useMemo,
    useState,
} from "react";

import "./animated-list.css";


export function AnimatedList({
    children,
    delay = 1000,
    className = "",
}) {

    /* =====================================================
       CONVERT CHILDREN INTO STABLE ARRAY
    ===================================================== */

    const items = useMemo(
        () => Children.toArray(children),
        [children]
    );


    /* =====================================================
       VISIBLE ITEMS
    ===================================================== */

    const [visibleItems, setVisibleItems] = useState(() => {

        if (items.length === 0) {
            return [];
        }

        return [items[0]];
    });


    /* =====================================================
       ANIMATION LOOP
    ===================================================== */

    useEffect(() => {

        if (items.length <= 1) {
            return;
        }


        let currentIndex = 1;


        const interval = setInterval(() => {

            setVisibleItems((currentItems) => {

                const nextItem =
                    items[currentIndex];


                currentIndex =
                    (currentIndex + 1) %
                    items.length;


                const updatedItems = [
                    ...currentItems,
                    nextItem,
                ];


                /* =========================================
                   KEEP ONLY LAST 4 NOTIFICATIONS
                ========================================= */

                if (updatedItems.length > 4) {
                    updatedItems.shift();
                }


                return updatedItems;

            });

        }, delay);


        /* ================================================
           CLEANUP
        ================================================ */

        return () => {
            clearInterval(interval);
        };

    }, [delay, items]);


    /* =====================================================
       RENDER
    ===================================================== */

    return (

        <div
            className={`animated-list ${className}`}
        >

            {visibleItems.map((item, index) => (

                <div
                    key={`${index}-${item.key ?? index}`}
                    className="animated-list-item"
                >

                    {cloneElement(item)}

                </div>

            ))}

        </div>

    );
}