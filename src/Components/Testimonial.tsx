"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { PropsWithChildren } from "react";
import { getHomePageData } from '../../src/sanity/lib/api';

interface TestimonialProps {
    quote: string;
    name: string;
    title: string;
    avatar: string;
}

interface TranslateWrapperProps extends PropsWithChildren {
    duration?: number;
}

// Fetch testimonials from homepage data
// const getTestimonials = async (): Promise<any[]> => {
//     try {
//         const homePageData = await homePage();
        
//         // Extract testimonials from homepage data
//         if (homePageData && homePageData.length > 0) {
//             const firstPage = homePageData[0];
//             return firstPage?.testimonial_details_section || [];
//         }
        
//         return [];
//     } catch (error) {
//         console.error("Failed to fetch testimonials from Sanity:", error);
//         return [];
//     }
// };

const TestimonialCard = ({ testimonial }: { testimonial: TestimonialProps }) => (
    <motion.div
        className="bg-[#EAEAEA] justify-center px-6 py-1 rounded-[20px] shadow-sm flex flex-col items-center text-center w-[280px] sm:w-[450px] h-[200px] shrink-0 mx-2 sm:mx-4"
        whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
    >
        <p className="text-[#676767] text-left max-w-5xl text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed">
            {testimonial.quote}
        </p>
        <div className="justify-between w-full items-center gap-8 flex flex-row">
            <div className="text-left">
                <p className="text-[#302C2C] font-semibold text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-[#676767] font-medium text-xs">{testimonial.title}</p>
            </div>
            <Image
                src={testimonial.avatar}
                alt={`Avatar of ${testimonial.name}`}
                width={48}
                height={48}
                className="w-12 h-12 rounded-full mb-2 sm:mb-3"
            />
        </div>
    </motion.div>
);

const TranslateWrapper = ({ children, duration = 30 }: TranslateWrapperProps) => {
    const controls = useAnimation();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scrollWidth = container.scrollWidth / 2;

        const animate = async () => {
            await controls.start({
                x: -scrollWidth,
                transition: {
                    x: {
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: duration,
                        ease: "linear",
                    },
                },
            });
        };

        animate();

        return () => controls.stop();
    }, [controls, duration]);

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                ref={containerRef}
                animate={controls}
                className="flex gap-4"
                style={{ width: "fit-content" }}
            >
                {children}
                {children}
            </motion.div>
        </div>
    );
};

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState<TestimonialProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Hardcoded fallback data
    const fallbackTestimonials: TestimonialProps[] = [
        {
            quote: "Working with Nexus Logix has really eased the stress off of our supply chain. Their team handles everything and keeps us in the loop, which makes a huge difference.",
            name: "Rachel Silva",
            title: "Supply Chain Manager",
            avatar: "/avatar-woman.png",
        },
        {
            quote: "Nexus Logix listened to our needs and helped simplify a complicated shipping process. It feels good to know we have a partner that truly understands our business.",
            name: "Daniel Brooks",
            title: "Logistics Director",
            avatar: "/avatar-men.png",
        },
        {
            quote: "I appreciate how reliable Nexus Logix is. With them on board, our timelines are met without surprises, and that personal touch means a lot.",
            name: "Priya Nair",
            title: "Operations Manager",
            avatar: "/avatar-woman.png",
        },
        {
            quote: "We've worked with larger freight companies before, but Nexus Logix delivers the kind of personal service that's hard to find. They keep things simple, clear, and on time.",
            name: "Michael Chen",
            title: "Procurement Head",
            avatar: "/avatar-men.png",
        },
    ];

    // useEffect(() => {
    //     const fetchTestimonials = async () => {
    //         try {
    //             setLoading(true);
    //             setError(null);
                
    //             const data = await getTestimonials();
                
    //             if (data && data.length > 0) {
    //                 // Map Sanity data to your testimonial structure
    //                 const mappedTestimonials = data.map((item: any) => ({
    //                     quote: item?.testimonial_comment || item?.quote || "",
    //                     name: item?.person_name || item?.name || "",
    //                     title: item?.person_designation || item?.title || "",
    //                     avatar: item?.person_image || item?.avatar || "/default-avatar.png",
    //                 })).filter((testimonial: TestimonialProps) => 
    //                     testimonial.quote && testimonial.name
    //                 );
                    
    //                 if (mappedTestimonials.length > 0) {
    //                     setTestimonials(mappedTestimonials);
    //                 } else {
    //                     // Use fallback if no valid testimonials found
    //                     console.warn("No valid testimonials found in Sanity, using fallback data");
    //                     setTestimonials(fallbackTestimonials);
    //                 }
    //             } else {
    //                 // Use fallback if no data from Sanity
    //                 console.warn("No testimonials data from Sanity, using fallback data");
    //                 setTestimonials(fallbackTestimonials);
    //             }
    //         } catch (err) {
    //             console.error("Failed to fetch testimonials:", err);
    //             setError("Failed to load testimonials");
    //             // Use fallback data on error
    //             setTestimonials(fallbackTestimonials);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchTestimonials();
    // }, []);

    // Show loading state
    if (loading) {
        return (
            <section className="py-1 sm:py-2 bg-[#F6F6F6]">
                <div className="w-full mx-auto flex justify-center items-center h-[200px]">
                    <div className="text-[#676767]">Loading testimonials...</div>
                </div>
            </section>
        );
    }

    return (
        <section className="py-1 sm:py-2 bg-[#F6F6F6]">
            <div className="w-full mx-auto">
                {error && (
                    <div className="text-red-500 text-center mb-4 text-sm">
                        {error} (Showing fallback content)
                    </div>
                )}
                
                <TranslateWrapper duration={25}>
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={`${testimonial.name}-${index}`} testimonial={testimonial} />
                    ))}
                </TranslateWrapper>
            </div>
        </section>
    );
};

export default Testimonial;