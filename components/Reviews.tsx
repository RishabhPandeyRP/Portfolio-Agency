"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const reviews = [
    { id: 1, name: "Alice", feedback: "Great service, loved the experience!", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 2, name: "Bob", feedback: "Fast delivery and quality product.", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 3, name: "Charlie", feedback: "Support team was super helpful!", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 4, name: "Daisy", feedback: "Highly recommend this company.", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 5, name: "Ethan", feedback: "Five stars from me!", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 6, name: "Fiona", feedback: "Amazing attention to detail.", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 7, name: "George", feedback: "Very reliable and professional.", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
    { id: 8, name: "Hannah", feedback: "Outstanding quality and service!", imageLink: "https://res.cloudinary.com/dq8mearha/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1744001271/portfolioRishabh_xsvmtu.jpg" },
];

export default function Reviews() {
    const duplicatedReviews = [...reviews, ...reviews]; // For seamless scroll

    return (
        <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
            {/* Fade overlays - commented out in original */}
            {/* <div className="pointer-events-none absolute top-0 h-32 w-full bg-gradient-to-b from-[#121212]/90 to-transparent z-10" />
            <div className="pointer-events-none absolute bottom-0 h-32 w-full bg-gradient-to-t from-transparent via-[#121212]/30 to-transparent z-10" /> */}

            {/* Scrolling content container */}
            <motion.div
                className="absolute inset-0"
                animate={{ y: ["0%", "-50%"] }}
                transition={{
                    repeat: Infinity,
                    duration: 12,
                    ease: "linear",
                }}
            >
                {/* Grid container with duplicated content */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 lg:gap-7 w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl mx-auto px-4 sm:px-6">
                    {duplicatedReviews.map((review, index) => (
                        <div
                            key={index}
                            className="p-3 sm:p-4 py-6 sm:py-8 md:py-10 rounded-xl border shadow-md bg-white dark:bg-[#070707] border-neutral-800 min-h-[120px] sm:min-h-[140px] md:min-h-[150px] h-fit"
                            style={{ boxShadow: "#0000003d 0px 3px 8px" }}
                        >
                            <div className="flex items-center gap-2 sm:gap-[10px]">
                                <Image
                                    height={70}
                                    width={70}
                                    src={review.imageLink}
                                    alt={review.name}
                                    className="relative !m-0 h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
                                />
                                <h3 className="font-semibold text-base sm:text-lg mb-1 sm:mb-2 text-neutral-300">{review.name}</h3>
                            </div>
                            <p className="text-sm sm:text-base text-neutral-400 my-2 sm:my-[10px]">{review.feedback}</p>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}