import Image from "next/image";
import Link from "next/link";
import React from "react";
import Testimonial from "@/Components/Testimonial";
import LinkedinSection from "@/Components/LinkedinSection";
import AnimatedSection from "@/Components/AnimatedSection";

import HomeHeader from "@/Components/HomeHeader";
import ComprehensiveSolutions from "@/Components/ComprehensiveSolutions";
import StatBanner from "@/Components/StatBanner";
import {getHomePageData} from "@/sanity/lib/api";


export default async function Home() {

    const homeData = await getHomePageData();
    console.log("--------home data: ", homeData);

    // const heroTitle = homeData.heroTitle ?? "Supply Chains Never Sleep. Neither Do We.";
    // const heroTitleParts = heroTitle.split(" ", 6);
    // const heroTitleFirstPart = heroTitleParts.slice(0, 3).join(" ") || "Supply Chains";
    // const heroTitleSecondPart = heroTitleParts.slice(3).join(" ") || "Never Sleep. Neither Do We.";

    const heroTitle = homeData.heroTitle ?? "Supply Chains Never Sleep. Neither Do We.";
    const heroTitleParts = heroTitle.split(" ", 6); // Split into words
    const heroTitleFirstPart = heroTitleParts.slice(0, 2).join(" ") || "Supply Chains"; // "Supply Chains"
    const heroTitleSecondPart = heroTitleParts.slice(2, 4).join(" ") + "." || "Never Sleep."; // "Never Sleep."
    const heroTitleThirdPart = heroTitleParts.slice(4).join(" ") || "Neither Do We."; // "Neither Do We."
    const heroTitleMobileFirstPart = heroTitleParts.slice(0, 4).join(" ") + "." || "Supply Chains Never Sleep."; // "Supply Chains Never Sleep."
    const heroTitleMobileSecondPart = heroTitleParts.slice(4).join(" ") || "Neither Do We.";

    const heroDesc = homeData.heroDescription ?? "As your agile logistics partner, we operate as an extension of your business, so you enjoy peace of mind, and responsive service.";
    const heroButtonLink = homeData.hero_button_link ?? "/services";
    const heroButtonText = homeData.hero_button_text ?? "Explore More";

    const values = [
        {
            icon: homeData.icon_card_1.card_icon || "/dependability.png",
            title: homeData.icon_card_1.card_title || "DEPENDABILITY",
            subtitle: homeData.icon_card_1.card_description_1 || "You can count on us.",
        },
        {
            icon: homeData.icon_card_2.card_icon || "/accountability.png",
            title: homeData.icon_card_2.card_title || "ACCOUNTABILITY",
            subtitle: `${homeData.icon_card_2.card_description_1} \n${homeData.icon_card_2.card_description_2}` || "We accept responsibility.\nNo Excuses.",
        },
        {
            icon: homeData.icon_card_3.card_icon || "/transparancy.png",
            title: homeData.icon_card_3.card_title || "TRANSPARENCY",
            subtitle: `${homeData.icon_card_3.card_description_1} \n${homeData.icon_card_3.card_description_2}` || "Clear communication.\nNo Surprises.",
        },
        {
            icon: homeData.icon_card_4.card_icon || "/commitment.png",
            title: homeData.icon_card_4.card_title || "COMMITMENT",
            subtitle: homeData.icon_card_4.card_description_1 || "We go the extra mile.",
        },
        {
            icon: homeData.icon_card_5.card_icon || "/care.png",
            title: homeData.icon_card_5.card_title || "CARE",
            subtitle: homeData.icon_card_5.card_description_1 || "Your shipment is our shipment.",
        },
    ];

    const truckImg = homeData.section_2_image;

    const sections = [
        {
            title: homeData.section_5.title || "",
            description:
                `${homeData.section_5.paragraph1
                } \n${homeData.section_5.paragraph2}`,
            imageSrc: homeData.section_5.image || "/home/Nexus-Logix.png",
            imageAlt: homeData.section_5.imageAlt || "Nexus Logix Team",
            reverse: false,
            buttonTitle: homeData.section_5.buttonText || "Explore More",
            buttonLink: homeData.section_5.buttonLink || "/whyNexus",
        },
        {
            title: homeData.section_6.title || "",
            description: `${homeData.section_6.paragraph1
            } \n\n${homeData.section_6.paragraph2}`,
            imageSrc: homeData.section_6.image || "/CargoWise_neo_logo.svg",
            imageAlt: homeData.section_6.imageAlt || "Cargo Tracking",
            reverse: true,
            buttonTitle: homeData.section_6.buttonText || "Learn More",
            buttonLink: homeData.section_6.buttonLink || "/track-and-trace",
        },
    ];

    const services = [
        {
            src: homeData.service_card_1.card_image || "/forwarding_service.png",
            alt: homeData.service_card_1.card_image_alt || "Freight forwarding service",
            label: homeData.service_card_1.card_label || "Air & Sea Freight",
            description: homeData.service_card_1.card_description || `Express shipments or cost-effective bulk transport, we optimise routes, consolidate loads, and secure competitive rates to keep your cargo moving, by air and sea, while avoiding delays and unexpected costs.`,
            link: homeData.service_card_1.card_link || "/air-and-sea-freight",
        },
        {
            src: homeData.service_card_2.card_image || "/home/Customs_Clearance-new.svg",
            alt: homeData.service_card_2.card_image_alt || "Customs Clearance & Compliance",
            label: homeData.service_card_2.card_label || "Customs Clearance & Compliance",
            description: homeData.service_card_2.card_description || `We simplify international and domestic border processes by expertly handling HS classifications, duty optimisation, documentation, and other procedures – including audits – ensuring your goods clear quickly and cost-effectively.`,
            link: homeData.service_card_2.card_link || "/customs",
        },
        {
            src: homeData.service_card_3.card_image || "/warehousing.png",
            alt: homeData.service_card_3.card_image_alt || "3PL, Warehousing & Special Projects",
            label: homeData.service_card_3.card_label || "3PL, Warehousing & Special Projects",
            description: homeData.service_card_3.card_description || `We offer end-to-end supply chain management, including 3PL and Warehousing, Fulfilment and eCommerce, and Inventory Management and Optimisation, all scalable and tailored to your unique requirements.`,
            link: homeData.service_card_3.card_link || "/Integrated-logistics",
        },
        {
            src: homeData.service_card_4.card_image || "/transport.png",
            alt: homeData.service_card_4.card_image_alt || "Road & Rail Transport",
            label: homeData.service_card_4.card_label || "Road & Rail Transport",
            description: homeData.service_card_4.card_description || `Our comprehensive road and rail services, within Australia, cover everything from onsite collection to final delivery, ensuring reliable and cost-effective transport across even the most challenging corridors.`,
            link: homeData.service_card_4.card_link || "/road-and-rail",
        },
    ];

    const serviceTitle: string = homeData.section_4_title;
    const serviceDescription: string = homeData.section_4_description;

    const stats = [
        {value: homeData.section_3_column_1_count, label: homeData.section_3_column_1_text, suffix: "+"},
        {value: homeData.section_3_column_2_count, label: homeData.section_3_column_2_text},
    ];

    const otherStat = {
        value: homeData.section_3_column_3_text_1,
        label: homeData.section_3_column_3_text_2,
    }

    const statTitleFirstPart: string = homeData.section_3_title_line_1;
    const statTitleSecondPart: string = homeData.section_3_title_line_2;

    const testimonialTitle: string = homeData.testimonial_section_title;
    const testimonialDesc: string = homeData.testimonial_section_title_description;

    const testimonials = homeData.testimonial_details_section;

    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">

            <HomeHeader
                heroTitleFirstPart={heroTitleFirstPart}
                heroTitleSecondPart={heroTitleSecondPart}
                heroTitleThirdPart={heroTitleThirdPart}
                heroTitleMobileFirstPart={heroTitleMobileFirstPart}
                heroTitleMobileSecondPart={heroTitleMobileSecondPart}
                heroDesc={heroDesc}
                buttonLabel={heroButtonText}
                buttonLink={heroButtonLink}
                values={values}
            />

            <div className="py-4 sm:py-6 lg:py-8">
                <div className="max-w-7xl mx-auto px-8 lg:px-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
                        <AnimatedSection direction="left" delay={0.2}>
                            <div className="relative">
                                <div
                                    className="relative w-full h-[200px] sm:h-[250px] lg:h-[500px] rounded-xl overflow-hidden">
                                    <Image
                                        src={truckImg || "/truck.png"}
                                        alt="truck in logistics operation"
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                                        priority
                                    />
                                </div>

                                <div
                                    className="absolute text-center rounded-[10px] -bottom-4 sm:-bottom-5 lg:-bottom-6 left-4 sm:left-5 lg:left-6 bg-[#225395] text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 lg:py-3 shadow-lg">
                                    {/* <AnimatedSection direction="left" delay={0.3}> */}
                                    <div className="text-center">
                                        <p className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1">
                                            {homeData.section_2_badge_text_row_1 || "Team with"}
                                        </p>
                                        <p className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                                            {homeData.section_2_badge_text_row_2 || "25"}
                                        </p>
                                        <p className="text-lg sm:text-xl lg:text-3xl font-semibold">
                                            {homeData.section_2_badge_text_row_3 || "Years"}
                                        </p>
                                        <p className="text-xs sm:text-sm lg:text-sm mt-0.5 sm:mt-1">
                                            {homeData.section_2_badge_text_row_4 || "Industry"}
                                            <br/>
                                            {homeData.section_2_badge_text_row_5 || "Experience"}
                                        </p>
                                    </div>
                                    {/* </AnimatedSection> */}
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection direction="right" delay={0.2}>
                            <div className="flex flex-col">
                                <h2 className="text-2xl sm:text-3xl -mt-0 lg:text-[50px] font-bold text-[#162F65] mb-4 sm:mb-6 lg:mb-6 text-left lg:-mt-5">
                                    {homeData.section_2_title || "Why Nexus Logix"}
                                </h2>
                                <div
                                    className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg text-[#676767] font-medium leading-[25px] text-left">
                                    <p>
                                        {homeData.section_2_description || "                                        Established in Australia by a group of logistics\n" +
                                            "                                        professionals, each with over 25+ years of experience across\n" +
                                            "                                        Australia, Oceania, and Asia Pacific, our business is built\n" +
                                            "                                        on a foundation of local expertise and global reach."}

                                    </p>
                                    <p>
                                        {homeData.section_2_description_2 || "                                        We know that we aren&#39;t simply moving your cargo -\n" +
                                            "                                        we&#39;re moving your business, your reputation, and your\n" +
                                            "                                        ambitions. With dependability, accountability, and\n" +
                                            "                                        transparency at our core, we take personal ownership of\n" +
                                            "                                        every shipment and are aligned with your goals, ensuring you\n" +
                                            "                                        have the peace of mind you deserve."}

                                    </p>
                                    <p>
                                        {homeData.section_2_description_3 || "Challenging the present impersonal approach to freight\n" +
                                            "                                        forwarding, our service is driven by genuine commitment and\n" +
                                            "                                        care, putting you first so that your needs shape every\n" +
                                            "                                        decision. As your dedicated logistics team, we deliver\n" +
                                            "                                        value, act with integrity, and provide personalized support\n" +
                                            "                                        at a moment&#39;s notice, functioning as an extension of\n" +
                                            "                                        your office."}

                                    </p>
                                </div>
                                <p className="text-[#225395] text-lg sm:text-xl lg:text-[21px] font-medium mt-4 sm:mt-6 lg:mt-8 text-left">
                                    {homeData.section_2_subtitle || "-This is the Nexus Way"}
                                </p>
                                <Link href={homeData.section_2_button_link || "/whyNexus"}>
                                    <button
                                        className="bg-[#162F65] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium mt-4 sm:mt-6 lg:mt-8  rounded-[10px] hover:bg-blue-950 flex items-left lg:items-center w-fit mx-0 hover:scale-105 transition-all duration-300">
                                        {homeData.section_2_button_text || "Explore More"}
                                    </button>
                                </Link>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </div>

            <StatBanner stats={stats} otherStat={otherStat} statTitleFirstPart={statTitleFirstPart}
                        statTitleSecondPart={statTitleSecondPart}/>

            <ComprehensiveSolutions services={services} serviceTitle={serviceTitle}
                                    serviceDescription={serviceDescription}/>

            <div className="bg-[#F6F6F6] py-6 sm:py-8 poppins">
                <div className="px-4 sm:px-6 lg:px-8">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="relative bg-[#F6F6F6] mb-2 sm:mb-12 last:mb-0"
                        >
                            {index === 0 && (
                                <div
                                    className="absolute inset-0 bg-[url('/x.png')] bg-no-repeat hidden md:block md:w-[400px] md:h-[600px] bg-contain lg:w-[850px] lg:h-[850px] -top-10 lg:-top-44"/>
                            )}

                            {/* Desktop & Tablet layout (md+) */}
                            <div
                                className={`max-w-7xl relative mx-auto items-center hidden md:flex ${
                                    section.reverse ? "flex-row-reverse" : "flex-row"
                                } container mx-auto lg:px-8 gap-16 p-6`}
                            >
                                <div className="w-3/5 flex flex-col justify-between">
                                    <AnimatedSection direction="left" delay={0.2}>
                                        <h2
                                            className={`font-semibold ${
                                                section.reverse
                                                    ? "lg:text-[41px] lg:leading-[56px]"
                                                    : "lg:text-[50px] lg:leading-[72px]"
                                            } text-xl sm:text-2xl text-[#162F65] max-w-3xl text-left`}
                                        >
                                            {section.title}
                                        </h2>
                                        <p
                                            className={`text-sm lg:text-lg font-medium ${
                                                section.reverse ? "mt-2" : "mt-4"
                                            } text-[#676767] max-w-2xl leading-[25px] text-left whitespace-pre-line`}
                                            dangerouslySetInnerHTML={{__html: section.description}}
                                        />
                                        <div className="mt-8 text-left">
                                            <Link href={section.buttonLink}>
                                                <button
                                                    className="bg-[#162F65] cursor-pointer text-white text-base lg:text-lg font-medium px-6 py-3 rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                                                    {section.buttonTitle}
                                                </button>
                                            </Link>
                                        </div>
                                    </AnimatedSection>
                                </div>

                                <div className="w-2/5">
                                    <AnimatedSection direction="right" delay={0.2}>
                                        <Image
                                            src={section.imageSrc}
                                            alt={section.imageAlt}
                                            width={600}
                                            height={800}
                                            className="rounded-lg object-cover w-full h-auto"
                                        />
                                    </AnimatedSection>
                                </div>
                            </div>

                            {/* Mobile layout (below md) */}
                            <AnimatedSection direction="up" delay={0.2}>
                                <div className="max-w-7xl relative mx-auto flex flex-col md:hidden gap-4 p-4 sm:p-6">
                                    <h2
                                        className={`font-semibold text-xl sm:text-2xl text-[#162F65] max-w-full text-center`}
                                    >
                                        {section.title}
                                    </h2>
                                    <div>
                                        <Image
                                            src={section.imageSrc}
                                            alt={section.imageAlt}
                                            width={600}
                                            height={800}
                                            className="rounded-lg object-cover w-full h-auto"
                                        />
                                    </div>
                                    <p
                                        className="text-sm font-medium text-[#676767] leading-[25px] whitespace-pre-line text-center"
                                        dangerouslySetInnerHTML={{__html: section.description}}
                                    />
                                    <div className="text-center mt-4">
                                        <Link href={section.buttonLink}>
                                            <button
                                                className="bg-[#162F65] cursor-pointer text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                                                {section.buttonTitle}
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </AnimatedSection>
                        </div>
                    ))}

                    <hr className="border-[#D9D9D9] container mx-auto border-b-2 max-w-7xl"/>
                </div>
            </div>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="bg-[#F6F6F6] py-2 sm:py-4 lg:py-6">
                    <div className="">
                        <div
                            className="flex flex-col px-4 sm:px-6 mb-2 lg:mb-8 lg:px-8 max-w-7xl mx-auto lg:flex-row justify-between gap-2 lg:gap-8 items-center md:items-start">
                            <h2 className="text-3xl sm:text-3xl lg:text-5xl text-[#0F2043] font-semibold text-center sm:text-left mb-1 leading-[50px] max-w-xl">
                                {testimonialTitle}
                            </h2>
                            <p className="text-[#676767] text-sm sm:text-base lg:text-lg font-medium text-center md:text-left mb-6 sm:mb-8 lg:mb-12 max-w-2xl leading-[25px]">
                                {testimonialDesc}
                            </p>
                        </div>
                        <Testimonial testimonials={testimonials}/>
                    </div>
                </div>
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
                <div className="pb-14">
                    <LinkedinSection/>
                </div>
            </AnimatedSection>
        </div>
    );
}