import {
    Camera,
    Mesh,
    Plane,
    Program,
    Renderer,
    Texture,
    Transform,
} from "ogl";

import { useEffect, useRef } from "react";

import "./Circular_Gallery.css";

/* =====================================================
   LOCAL GALLERY IMAGES
   ===================================================== */

/*
 * IMPORTANT:
 * Static imports hata diye gaye hain.
 *
 * Is approach ki wajah se agar kisi image ka exact filename
 * thora different ho, Vite import-analysis error nahi dega.
 */

const galleryImages = import.meta.glob(
    "../../../assets/Circular_Gallery_Images/*.{png,jpg,jpeg,webp,avif}",
    {
        eager: true,
        import: "default",
        query: "?url",
    }
);

/* =====================================================
   IMAGE FINDER
   ===================================================== */

function normalizeFileName(value) {
    return value
        .toLowerCase()
        .replace(/[_\-\s&]+/g, "")
        .replace(/\.(png|jpg|jpeg|webp|avif)$/i, "");
}

function findGalleryImage(...possibleNames) {
    const files = Object.entries(galleryImages);

    /* ---------------------------------------------
       1. EXACT MATCH
       --------------------------------------------- */

    for (const name of possibleNames) {
        const normalizedName =
            normalizeFileName(name);

        const exactMatch = files.find(
            ([path]) =>
                normalizeFileName(
                    path.split("/").pop()
                ) === normalizedName
        );

        if (exactMatch) {
            return exactMatch[1];
        }
    }

    /* ---------------------------------------------
       2. PARTIAL MATCH
       --------------------------------------------- */

    for (const name of possibleNames) {
        const normalizedName =
            normalizeFileName(name);

        const partialMatch = files.find(
            ([path]) =>
                normalizeFileName(
                    path.split("/").pop()
                ).includes(normalizedName)
        );

        if (partialMatch) {
            return partialMatch[1];
        }
    }

    /* ---------------------------------------------
       3. KEYWORD MATCH
       --------------------------------------------- */

    const keywords = possibleNames
        .map((name) =>
            normalizeFileName(name)
        )
        .filter(Boolean);

    const keywordMatch = files.find(
        ([path]) => {
            const normalizedPath =
                normalizeFileName(
                    path.split("/").pop()
                );

            return keywords.every(
                (keyword) =>
                    normalizedPath.includes(keyword)
            );
        }
    );

    if (keywordMatch) {
        return keywordMatch[1];
    }

    console.warn(
        `Circular Gallery image not found:`,
        possibleNames
    );

    return null;
}

/* =====================================================
   RESOLVED SERVICE IMAGES
   ===================================================== */

const CustomSoftware = findGalleryImage(
    "Custom_Software.png",
    "Custom Software",
    "CustomSoftware"
);

const SaaSDevelopment = findGalleryImage(
    "SaaS_Development.png",
    "SaaS Development",
    "SaaSDevelopment"
);

const AIIntegration = findGalleryImage(
    "AI_Integration.png",
    "AI Integration",
    "AIIntegration",
    "AI Integration Automation",
    "AI Integration & Automation"
);

const WebMobileApps = findGalleryImage(
    "Web_Mobile_Apps.png",
    "Web Mobile Apps",
    "Web & Mobile Apps",
    "WebMobileApps"
);

const CloudSolutions = findGalleryImage(
    "Cloud_Solutions.png",
    "Cloud Solutions",
    "CloudSolutions"
);

const DevelopmentTeam = findGalleryImage(
    "Development_Team.png",
    "Development Team",
    "Dedicated Teams",
    "DevelopmentTeam"
);

const GameDevelopment = findGalleryImage(
    "Game_Development.png",
    "Game Development",
    "GameDevelopment"
);

const MaintenanceSupport = findGalleryImage(
    "Maintenance_Support.png",
    "Maintenance Support",
    "Maintenance & Support",
    "MaintenanceSupport"
);

const B2BLeadGeneration = findGalleryImage(
    "B2B_Lead_Generation.png",
    "B2B Lead Generation",
    "B2BLeadGeneration"
);

const LinkedInOutreach = findGalleryImage(
    "LinkedIn_Outreach.png",
    "LinkedIn Outreach",
    "LinkedInOutreach"
);

const ColdEmail = findGalleryImage(
    "Cold_Email.png",
    "Cold Email",
    "ColdEmail"
);

const AppointmentSetting = findGalleryImage(
    "Appointment_Setting.png",
    "Appointment Setting",
    "AppointmentSetting"
);

const SalesAutomation = findGalleryImage(
    "Sales_Automation.png",
    "Sales Automation",
    "SalesAutomation"
);

const OutboundGrowth = findGalleryImage(
    "Outbound_Growth.png",
    "Outbound Growth",
    "OutboundGrowth"
);

/* =====================================================
   HELPERS
   ===================================================== */

function debounce(func, wait) {
    let timeout;

    return function (...args) {
        clearTimeout(timeout);

        timeout = setTimeout(() => {
            func.apply(this, args);
        }, wait);
    };
}

function lerp(p1, p2, t) {
    return p1 + (p2 - p1) * t;
}

function autoBind(instance) {
    const proto =
        Object.getPrototypeOf(instance);

    Object.getOwnPropertyNames(proto).forEach(
        (key) => {
            if (
                key !== "constructor" &&
                typeof instance[key] === "function"
            ) {
                instance[key] =
                    instance[key].bind(instance);
            }
        }
    );
}

/* =====================================================
   FONT
   ===================================================== */

const DEFAULT_FONT =
    "bold 30px Figtree";

/* =====================================================
   FONT SIZE
   ===================================================== */

function getFontSize(font) {
    const match =
        font.match(/(\d+)px/);

    return match
        ? parseInt(match[1], 10)
        : 30;
}

/* =====================================================
   TEXT TEXTURE
   ===================================================== */

function createTextTexture(
    gl,
    text,
    font = DEFAULT_FONT,
    color = "#ffffff"
) {
    const canvas =
        document.createElement("canvas");

    const context =
        canvas.getContext("2d");

    context.font = font;

    const metrics =
        context.measureText(text);

    const textWidth =
        Math.ceil(metrics.width);

    const textHeight =
        Math.ceil(
            getFontSize(font) * 1.2
        );

    canvas.width =
        textWidth + 30;

    canvas.height =
        textHeight + 30;

    context.font = font;

    context.fillStyle = color;

    context.textBaseline =
        "middle";

    context.textAlign =
        "center";

    context.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );

    context.fillText(
        text,
        canvas.width / 2,
        canvas.height / 2
    );

    const texture =
        new Texture(gl, {
            generateMipmaps: false,
        });

    texture.image = canvas;

    return {
        texture,
        width: canvas.width,
        height: canvas.height,
    };
}

/* =====================================================
   TITLE
   ===================================================== */

class Title {
    constructor({
        gl,
        plane,
        text,
        textColor = "#ffffff",
        font = DEFAULT_FONT,
    }) {
        autoBind(this);

        this.gl = gl;
        this.plane = plane;
        this.text = text;
        this.textColor = textColor;
        this.font = font;

        this.createMesh();
    }

    createMesh() {
        const {
            texture,
            width,
            height,
        } = createTextTexture(
            this.gl,
            this.text,
            this.font,
            this.textColor
        );

        const geometry =
            new Plane(this.gl);

        const program =
            new Program(this.gl, {
                vertex: `
                    attribute vec3 position;
                    attribute vec2 uv;

                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;

                    varying vec2 vUv;

                    void main() {
                        vUv = uv;

                        gl_Position =
                            projectionMatrix *
                            modelViewMatrix *
                            vec4(position, 1.0);
                    }
                `,

                fragment: `
                    precision highp float;

                    uniform sampler2D tMap;

                    varying vec2 vUv;

                    void main() {
                        vec4 color =
                            texture2D(
                                tMap,
                                vUv
                            );

                        if (color.a < 0.1) {
                            discard;
                        }

                        gl_FragColor =
                            color;
                    }
                `,

                uniforms: {
                    tMap: {
                        value: texture,
                    },
                },

                transparent: true,
            });

        this.mesh =
            new Mesh(this.gl, {
                geometry,
                program,
            });

        const aspect =
            width / height;

        const textHeight =
            this.plane.scale.y * 0.15;

        const textWidth =
            textHeight * aspect;

        this.mesh.scale.set(
            textWidth,
            textHeight,
            1
        );

        this.mesh.position.y =
            -this.plane.scale.y * 0.5 -
            textHeight * 0.5 -
            0.05;

        this.mesh.setParent(
            this.plane
        );
    }
}

/* =====================================================
   MEDIA
   ===================================================== */

class Media {
    constructor({
        geometry,
        gl,
        image,
        index,
        length,
        scene,
        screen,
        text,
        viewport,
        bend,
        textColor,
        borderRadius,
        font,
    }) {
        this.extra = 0;

        this.geometry = geometry;
        this.gl = gl;
        this.image = image;
        this.index = index;
        this.length = length;
        this.scene = scene;
        this.screen = screen;
        this.text = text;
        this.viewport = viewport;
        this.bend = bend;
        this.textColor = textColor;
        this.borderRadius = borderRadius;
        this.font = font;

        this.createShader();
        this.createMesh();
        this.createTitle();

        this.onResize();
    }

    /* =================================================
       SHADER
       ================================================= */

    createShader() {
        const texture =
            new Texture(this.gl, {
                generateMipmaps: true,
            });

        this.texture = texture;

        this.program =
            new Program(this.gl, {
                depthTest: false,
                depthWrite: false,

                vertex: `
                    precision highp float;

                    attribute vec3 position;
                    attribute vec2 uv;

                    uniform mat4 modelViewMatrix;
                    uniform mat4 projectionMatrix;

                    uniform float uTime;
                    uniform float uSpeed;

                    varying vec2 vUv;

                    void main() {
                        vUv = uv;

                        vec3 p = position;

                        p.z =
                            (
                                sin(
                                    p.x * 4.0 +
                                    uTime
                                ) * 1.5

                                +

                                cos(
                                    p.y * 2.0 +
                                    uTime
                                ) * 1.5
                            )
                            *
                            (
                                0.1 +
                                abs(uSpeed) * 0.5
                            );

                        gl_Position =
                            projectionMatrix *
                            modelViewMatrix *
                            vec4(p, 1.0);
                    }
                `,

                fragment: `
                    precision highp float;

                    uniform vec2 uImageSizes;
                    uniform vec2 uPlaneSizes;

                    uniform sampler2D tMap;

                    uniform float uBorderRadius;

                    varying vec2 vUv;

                    float roundedBoxSDF(
                        vec2 p,
                        vec2 b,
                        float r
                    ) {
                        vec2 d =
                            abs(p) - b;

                        return
                            length(
                                max(
                                    d,
                                    vec2(0.0)
                                )
                            )
                            +
                            min(
                                max(
                                    d.x,
                                    d.y
                                ),
                                0.0
                            )
                            - r;
                    }

                    void main() {

                        float imageAspect =
                            uImageSizes.x /
                            max(
                                uImageSizes.y,
                                0.001
                            );

                        float planeAspect =
                            uPlaneSizes.x /
                            max(
                                uPlaneSizes.y,
                                0.001
                            );

                        vec2 ratio =
                            vec2(
                                min(
                                    planeAspect /
                                    imageAspect,
                                    1.0
                                ),

                                min(
                                    imageAspect /
                                    planeAspect,
                                    1.0
                                )
                            );

                        vec2 uv =
                            vec2(
                                vUv.x *
                                ratio.x
                                +
                                (
                                    1.0 -
                                    ratio.x
                                ) *
                                0.5,

                                vUv.y *
                                ratio.y
                                +
                                (
                                    1.0 -
                                    ratio.y
                                ) *
                                0.5
                            );

                        vec4 color =
                            texture2D(
                                tMap,
                                uv
                            );

                        float d =
                            roundedBoxSDF(
                                vUv - 0.5,

                                vec2(
                                    0.5 -
                                    uBorderRadius
                                ),

                                uBorderRadius
                            );

                        float edgeSmooth =
                            0.002;

                        float alpha =
                            1.0 -
                            smoothstep(
                                -edgeSmooth,
                                edgeSmooth,
                                d
                            );

                        gl_FragColor =
                            vec4(
                                color.rgb,
                                color.a *
                                alpha
                            );
                    }
                `,

                uniforms: {
                    tMap: {
                        value: texture,
                    },

                    uPlaneSizes: {
                        value: [1, 1],
                    },

                    uImageSizes: {
                        value: [1000, 750],
                    },

                    uSpeed: {
                        value: 0,
                    },

                    uTime: {
                        value:
                            100 *
                            Math.random(),
                    },

                    uBorderRadius: {
                        value:
                            this.borderRadius,
                    },
                },

                transparent: true,
            });

        /* ---------------------------------------------
           IMAGE LOADING
           --------------------------------------------- */

        if (!this.image) {
            console.warn(
                `Circular Gallery: Image missing for "${this.text}"`
            );

            return;
        }

        const img =
            new Image();

        img.onload = () => {
            texture.image = img;

            this.program.uniforms
                .uImageSizes.value = [
                    img.naturalWidth ||
                        1000,

                    img.naturalHeight ||
                        750,
                ];
        };

        img.onerror = () => {
            console.error(
                "Circular Gallery image failed:",
                this.image
            );
        };

        img.src = this.image;
    }

    /* =================================================
       MESH
       ================================================= */

    createMesh() {
        this.plane =
            new Mesh(this.gl, {
                geometry:
                    this.geometry,

                program:
                    this.program,
            });

        this.plane.setParent(
            this.scene
        );
    }

    /* =================================================
       TITLE
       ================================================= */

    createTitle() {
        this.title =
            new Title({
                gl: this.gl,

                plane:
                    this.plane,

                text:
                    this.text,

                textColor:
                    this.textColor,

                font:
                    this.font,
            });
    }

    /* =================================================
       UPDATE
       ================================================= */

    update(scroll, direction) {
        this.plane.position.x =
            this.x -
            scroll.current -
            this.extra;

        const x =
            this.plane.position.x;

        const H =
            this.viewport.width / 2;

        if (this.bend === 0) {
            this.plane.position.y = 0;

            this.plane.rotation.z = 0;
        } else {
            const B_abs =
                Math.abs(this.bend);

            const R =
                (
                    H * H +
                    B_abs * B_abs
                ) /
                (
                    2 *
                    B_abs
                );

            const effectiveX =
                Math.min(
                    Math.abs(x),
                    H
                );

            const arc =
                R -
                Math.sqrt(
                    Math.max(
                        R * R -
                        effectiveX *
                        effectiveX,
                        0
                    )
                );

            const angle =
                Math.asin(
                    Math.min(
                        effectiveX / R,
                        1
                    )
                );

            if (this.bend > 0) {
                this.plane.position.y =
                    -arc;

                this.plane.rotation.z =
                    -Math.sign(x) *
                    angle;
            } else {
                this.plane.position.y =
                    arc;

                this.plane.rotation.z =
                    Math.sign(x) *
                    angle;
            }
        }

        this.speed =
            scroll.current -
            scroll.last;

        this.program.uniforms
            .uTime.value += 0.04;

        this.program.uniforms
            .uSpeed.value =
            this.speed;

        const planeOffset =
            this.plane.scale.x / 2;

        const viewportOffset =
            this.viewport.width / 2;

        this.isBefore =
            this.plane.position.x +
            planeOffset <
            -viewportOffset;

        this.isAfter =
            this.plane.position.x -
            planeOffset >
            viewportOffset;

        if (
            direction === "right" &&
            this.isBefore
        ) {
            this.extra -=
                this.widthTotal;

            this.isBefore =
                this.isAfter =
                    false;
        }

        if (
            direction === "left" &&
            this.isAfter
        ) {
            this.extra +=
                this.widthTotal;

            this.isBefore =
                this.isAfter =
                    false;
        }
    }

    /* =================================================
       RESIZE
       ================================================= */

    onResize({
        screen,
        viewport,
    } = {}) {
        if (screen) {
            this.screen = screen;
        }

        if (viewport) {
            this.viewport = viewport;
        }

        if (
            !this.screen ||
            !this.viewport
        ) {
            return;
        }

        this.scale =
            this.screen.height / 1500;

        this.plane.scale.y =
            (
                this.viewport.height *
                (
                    900 *
                    this.scale
                )
            ) /
            this.screen.height;

        this.plane.scale.x =
            (
                this.viewport.width *
                (
                    700 *
                    this.scale
                )
            ) /
            this.screen.width;

        this.plane.program
            .uniforms
            .uPlaneSizes
            .value = [
                this.plane.scale.x,
                this.plane.scale.y,
            ];

        this.padding = 2;

        this.width =
            this.plane.scale.x +
            this.padding;

        this.widthTotal =
            this.width *
            this.length;

        this.x =
            this.width *
            this.index;
    }
}

/* =====================================================
   OGL APP
   ===================================================== */

class App {
    constructor(
        container,
        {
            items,
            bend,
            textColor,
            borderRadius,
            font,
            scrollSpeed,
            scrollEase,
        }
    ) {
        this.container =
            container;

        this.scrollSpeed =
            scrollSpeed;

        this.scroll = {
            ease: scrollEase,

            current: 0,

            target: 0,

            last: 0,
        };

        this.onCheckDebounce =
            debounce(
                this.onCheck,
                200
            );

        this.createRenderer();

        this.createCamera();

        this.createScene();

        this.onResize();

        this.createGeometry();

        this.createMedias(
            items,
            bend,
            textColor,
            borderRadius,
            font
        );

        this.update();

        this.addEventListeners();
    }

    /* =================================================
       RENDERER
       ================================================= */

    createRenderer() {
        this.renderer =
            new Renderer({
                alpha: true,

                antialias: true,

                dpr:
                    Math.min(
                        window.devicePixelRatio ||
                            1,
                        2
                    ),
            });

        this.gl =
            this.renderer.gl;

        this.gl.clearColor(
            0,
            0,
            0,
            0
        );

        this.gl.canvas.style.display =
            "block";

        this.gl.canvas.style.width =
            "100%";

        this.gl.canvas.style.height =
            "100%";

        this.container.appendChild(
            this.gl.canvas
        );
    }

    /* =================================================
       CAMERA
       ================================================= */

    createCamera() {
        this.camera =
            new Camera(this.gl);

        this.camera.fov = 45;

        this.camera.position.z = 20;
    }

    /* =================================================
       SCENE
       ================================================= */

    createScene() {
        this.scene =
            new Transform();
    }

    /* =================================================
       GEOMETRY
       ================================================= */

    createGeometry() {
        this.planeGeometry =
            new Plane(this.gl, {
                heightSegments: 50,

                widthSegments: 100,
            });
    }

    /* =================================================
       SERVICES
       ================================================= */

    createMedias(
        items,
        bend = 1,
        textColor,
        borderRadius,
        font
    ) {
        const defaultItems = [
            {
                image: CustomSoftware,
                text: "Custom Software",
            },

            {
                image: SaaSDevelopment,
                text: "SaaS Development",
            },

            {
                image: AIIntegration,
                text: "AI Integration",
            },

            {
                image: WebMobileApps,
                text: "Web & Mobile Apps",
            },

            {
                image: CloudSolutions,
                text: "Cloud Solutions",
            },

            {
                image: DevelopmentTeam,
                text: "Dedicated Teams",
            },

            {
                image: GameDevelopment,
                text: "Game Development",
            },

            {
                image: MaintenanceSupport,
                text: "Maintenance & Support",
            },

            {
                image: B2BLeadGeneration,
                text: "B2B Lead Generation",
            },

            {
                image: LinkedInOutreach,
                text: "LinkedIn Outreach",
            },

            {
                image: ColdEmail,
                text: "Cold Email Campaigns",
            },

            {
                image: AppointmentSetting,
                text: "Appointment Setting",
            },

            {
                image: SalesAutomation,
                text: "Sales Automation",
            },

            {
                image: OutboundGrowth,
                text: "Outbound Growth",
            },
        ];

        const galleryItems =
            items &&
            items.length
                ? items
                : defaultItems;

        /*
         * Filter out completely missing images.
         * This prevents broken WebGL textures.
         */

        const validGalleryItems =
            galleryItems.filter(
                (item) => {
                    if (!item.image) {
                        console.warn(
                            `Circular Gallery: Skipping "${item.text}" because image was not found.`
                        );

                        return false;
                    }

                    return true;
                }
            );

        this.mediasImages =
            validGalleryItems.concat(
                validGalleryItems
            );

        this.medias =
            this.mediasImages.map(
                (data, index) => {
                    return new Media({
                        geometry:
                            this.planeGeometry,

                        gl:
                            this.gl,

                        image:
                            data.image,

                        index,

                        length:
                            this.mediasImages
                                .length,

                        scene:
                            this.scene,

                        screen:
                            this.screen,

                        text:
                            data.text,

                        viewport:
                            this.viewport,

                        bend,

                        textColor,

                        borderRadius,

                        font,
                    });
                }
            );
    }

    /* =================================================
       TOUCH / DRAG
       ================================================= */

    onTouchDown(e) {
        this.isDown = true;

        this.scroll.position =
            this.scroll.current;

        this.start =
            e.touches
                ? e.touches[0].clientX
                : e.clientX;
    }

    onTouchMove(e) {
        if (!this.isDown) {
            return;
        }

        const x =
            e.touches
                ? e.touches[0].clientX
                : e.clientX;

        const distance =
            (
                this.start -
                x
            ) *
            (
                this.scrollSpeed *
                0.025
            );

        this.scroll.target =
            this.scroll.position +
            distance;
    }

    onTouchUp() {
        this.isDown = false;

        this.onCheck();
    }

    /* =================================================
       WHEEL
       ================================================= */

    onWheel(e) {
        const delta =
            e.deltaY ||
            e.wheelDelta ||
            e.detail;

        this.scroll.target +=
            (
                delta > 0
                    ? this.scrollSpeed
                    : -this.scrollSpeed
            ) *
            0.2;

        this.onCheckDebounce();
    }

    /* =================================================
       KEYBOARD
       ================================================= */

    onKeyDown(e) {
        switch (e.key) {
            case "ArrowRight":
                e.preventDefault();

                this.scroll.target +=
                    this.scrollSpeed * 5;

                this.onCheckDebounce();

                break;

            case "ArrowLeft":
                e.preventDefault();

                this.scroll.target -=
                    this.scrollSpeed * 5;

                this.onCheckDebounce();

                break;

            case "Home":
                e.preventDefault();

                this.scroll.target = 0;

                this.onCheckDebounce();

                break;

            default:
                break;
        }
    }

    /* =================================================
       SNAP
       ================================================= */

    onCheck() {
        if (
            !this.medias ||
            !this.medias[0]
        ) {
            return;
        }

        const width =
            this.medias[0].width;

        if (!width) {
            return;
        }

        const itemIndex =
            Math.round(
                Math.abs(
                    this.scroll.target
                ) /
                width
            );

        const item =
            width * itemIndex;

        this.scroll.target =
            this.scroll.target < 0
                ? -item
                : item;
    }

    /* =================================================
       RESIZE
       ================================================= */

    onResize() {
        this.screen = {
            width:
                this.container
                    .clientWidth,

            height:
                this.container
                    .clientHeight,
        };

        if (
            this.screen.width === 0 ||
            this.screen.height === 0
        ) {
            return;
        }

        this.renderer.setSize(
            this.screen.width,
            this.screen.height
        );

        this.camera.perspective({
            aspect:
                this.screen.width /
                this.screen.height,
        });

        const fov =
            (
                this.camera.fov *
                Math.PI
            ) /
            180;

        const height =
            2 *
            Math.tan(fov / 2) *
            this.camera.position.z;

        const width =
            height *
            this.camera.aspect;

        this.viewport = {
            width,
            height,
        };

        if (this.medias) {
            this.medias.forEach(
                (media) => {
                    media.onResize({
                        screen:
                            this.screen,

                        viewport:
                            this.viewport,
                    });
                }
            );
        }
    }

    /* =================================================
       UPDATE
       ================================================= */

    update() {
        this.scroll.current =
            lerp(
                this.scroll.current,
                this.scroll.target,
                this.scroll.ease
            );

        const direction =
            this.scroll.current >
            this.scroll.last
                ? "right"
                : "left";

        if (this.medias) {
            this.medias.forEach(
                (media) => {
                    media.update(
                        this.scroll,
                        direction
                    );
                }
            );
        }

        this.renderer.render({
            scene:
                this.scene,

            camera:
                this.camera,
        });

        this.scroll.last =
            this.scroll.current;

        this.raf =
            window.requestAnimationFrame(
                this.update.bind(this)
            );
    }

    /* =================================================
       EVENTS
       ================================================= */

    addEventListeners() {
        this.boundOnResize =
            this.onResize.bind(this);

        this.boundOnWheel =
            this.onWheel.bind(this);

        this.boundOnTouchDown =
            this.onTouchDown.bind(this);

        this.boundOnTouchMove =
            this.onTouchMove.bind(this);

        this.boundOnTouchUp =
            this.onTouchUp.bind(this);

        this.boundOnKeyDown =
            this.onKeyDown.bind(this);

        window.addEventListener(
            "resize",
            this.boundOnResize
        );

        window.addEventListener(
            "wheel",
            this.boundOnWheel,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "mousedown",
            this.boundOnTouchDown
        );

        window.addEventListener(
            "mousemove",
            this.boundOnTouchMove
        );

        window.addEventListener(
            "mouseup",
            this.boundOnTouchUp
        );

        window.addEventListener(
            "touchstart",
            this.boundOnTouchDown,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "touchmove",
            this.boundOnTouchMove,
            {
                passive: true,
            }
        );

        window.addEventListener(
            "touchend",
            this.boundOnTouchUp
        );

        this.container.addEventListener(
            "keydown",
            this.boundOnKeyDown
        );
    }

    /* =================================================
       DESTROY
       ================================================= */

    destroy() {
        window.cancelAnimationFrame(
            this.raf
        );

        window.removeEventListener(
            "resize",
            this.boundOnResize
        );

        window.removeEventListener(
            "wheel",
            this.boundOnWheel
        );

        window.removeEventListener(
            "mousedown",
            this.boundOnTouchDown
        );

        window.removeEventListener(
            "mousemove",
            this.boundOnTouchMove
        );

        window.removeEventListener(
            "mouseup",
            this.boundOnTouchUp
        );

        window.removeEventListener(
            "touchstart",
            this.boundOnTouchDown
        );

        window.removeEventListener(
            "touchmove",
            this.boundOnTouchMove
        );

        window.removeEventListener(
            "touchend",
            this.boundOnTouchUp
        );

        this.container.removeEventListener(
            "keydown",
            this.boundOnKeyDown
        );

        if (
            this.renderer &&
            this.renderer.gl &&
            this.renderer.gl.canvas
        ) {
            const canvas =
                this.renderer.gl.canvas;

            if (canvas.parentNode) {
                canvas.parentNode.removeChild(
                    canvas
                );
            }
        }

        this.medias = [];
    }
}

/* =====================================================
   REACT COMPONENT
   ===================================================== */

export default function CircularGallery({
    items,

    bend = 1,

    textColor = "#ffffff",

    borderRadius = 0.05,

    font = "bold 30px Figtree",

    scrollSpeed = 2,

    scrollEase = 0.05,
}) {
    const containerRef =
        useRef(null);

    useEffect(() => {
        if (!containerRef.current) {
            return;
        }

        const app =
            new App(
                containerRef.current,
                {
                    items,

                    bend,

                    textColor,

                    borderRadius,

                    font,

                    scrollSpeed,

                    scrollEase,
                }
            );

        return () => {
            app.destroy();
        };
    }, [
        items,
        bend,
        textColor,
        borderRadius,
        font,
        scrollSpeed,
        scrollEase,
    ]);

    return (
        <div
            className="circular-gallery"
            ref={containerRef}
            tabIndex={0}
            role="region"
            aria-label="Evolute Technologies services gallery"
        />
    );
}