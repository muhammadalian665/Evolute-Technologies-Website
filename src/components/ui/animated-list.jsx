import {
    Children,
    cloneElement,
    useEffect,
    useMemo,
    useState,
} from "react";

import "./animated-list.css";


/* =====================================================
   ANIMATED LIST
===================================================== */

export function AnimatedList({
    children,
    delay = 2500,
    className = "",
}) {

    /* =================================================
       CONVERT CHILDREN INTO ARRAY
    ================================================= */

    const items = useMemo(
        () => Children.toArray(children),
        [children]
    );


    /* =================================================
       VISIBLE ITEMS
       
       Notifications stay visible once added.
    ================================================= */

    const [visibleItems, setVisibleItems] = useState(
        () => {
            if (items.length === 0) {
                return [];
            }

            return [items[0]];
        }
    );


    /* =================================================
       ADD NOTIFICATIONS ONE BY ONE
    ================================================= */

    useEffect(() => {

        if (items.length <= 1) {
            return;
        }


        let currentIndex = 1;


        const interval = setInterval(() => {

            if (currentIndex >= items.length) {
                clearInterval(interval);
                return;
            }


            const nextItem =
                items[currentIndex];


            setVisibleItems(
                (currentItems) => [
                    ...currentItems,
                    nextItem,
                ]
            );


            currentIndex += 1;

        }, delay);


        /* =================================================
           CLEANUP
        ================================================= */

        return () => {
            clearInterval(interval);
        };

    }, [delay, items]);


    /* =================================================
       RENDER
    ================================================= */

    return (

        <div
            className={`animated-list ${className}`}
        >

            {visibleItems.map(
                (item, index) => (

                    <div
                        key={
                            `${index}-${item.key ?? index}`
                        }
                        className="animated-list-item"
                    >

                        {cloneElement(item)}

                    </div>

                )
            )}

        </div>
    );
}