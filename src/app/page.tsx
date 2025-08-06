"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Testimonial from "@/Components/Testimonial";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import CountUp from "react-countup";
import Nav from "@/Components/Nav";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { getHomePageData } from '../../src/sanity/lib/api'
// import { home } from "@/sanity/lib/api";
// import { p } from "framer-motion/client";


interface iconCard {
  card_title?: string;
  card_description_1?: string;
  card_description_2?: string;
  card_icon?: string;
}

interface service_card {
  card_label?: string;
  card_description?: string;
  card_image?: string;
  card_image_alt?: string;
  card_link?: string;
}

interface homePageData {
  heroTitle?: string;
  heroDescription?: string;
  hero_button_text?: string;
  hero_button_link?: string;
  icon_card_1?: iconCard;
  icon_card_2?: iconCard;
  icon_card_3?: iconCard;
  icon_card_4?: iconCard;
  icon_card_5?: iconCard;
  section_2_title?: string;
  section_2_image?: string;
  section_2_badge_text_row_1?: string;
  section_2_badge_text_row_2?: string;
  section_2_badge_text_row_3?: string;
  section_2_badge_text_row_4?: string;
  section_2_badge_text_row_5?: string;
  section_2_description?: string;
  section_2_subtitle?: string;
  section_2_button_text?: string;
  section_2_button_link?: string;
  section_3_title_line_1?: string;
  section_3_title_line_2?: string;
  section_3_column_1_count?: number;
  section_3_column_1_text?: string;
  section_3_column_2_count?: number;
  section_3_column_2_text?: string;
  section_3_column_3_text_1?: string;
  section_3_column_3_text_2?: string;
  section_4_title?: string;
  section_4_description?: string;
  service_card_1?: service_card;
  service_card_2?: service_card;
  service_card_3?: service_card;
  service_card_4?: service_card;
  section_5?: {
    title?: string
    paragraph1?: string;
    paragraph2?: string;
    buttonText?: string;
    buttonLink?: string;
    image?: string;
    imageAlt?: string;
  };

  section_6?: {
    title?: string
    paragraph1?: string;
    paragraph2?: string;
    buttonText?: string;
    buttonLink?: string;
    image?: string;
    imageAlt?: string;

  }


  testimonial_section_title?: string;
  testimonial_section_title_description?: string;
  testimonial_details_section?: {
    testimonial_comment?: string;
    person_name?: string;
    person_designation?: string;
    person_image?: string;
  }
}

export const home = async function Home() {
  const images = [
    "/plane1.png",
    "/slid1.png",
    "/slid2.png",
    "/slid3.png",
    "/slid4.png",
    "/slid5.png",
  ];
  const mobileImages = [
    "/home/mobile-slide-1.svg",
    "/home/mobile-slide-2.svg",
    "/home/mobile-slide-3.svg",
    "/home/mobile-slide-4.svg",
    "/home/mobile-slide-5.svg",
    "/home/mobile-slide-6.svg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [currentMobileImageIndex, setCurrentMobileImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // const [pageData, setPageData] = useState<homePageData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await homePage();

  //       if (data && data.length > 0) {
  //         setPageData(data[0]);
  //       } else {
  //         setPageData(null);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch homePage data:", err);
  //       setError("Failed to load page content.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const pageData = await getHomePageData();
  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % images.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Start fading out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false); // Start fading in
      }, 500); // This duration should match your CSS transition duration
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMobileImageIndex(
        (prevIndex) => (prevIndex + 1) % mobileImages.length
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [mobileImages.length]);


  interface photoSectionDescriptionItem {
    title: string;
    paragraph_1: string;
    paragraph_2: string;
    imageSrc: string;
    imageAlt: string;
    reverse: boolean;
    buttonTitle: string;
    buttonLink: string;
  }

  const sections: photoSectionDescriptionItem[] = [
    {
      title: pageData?.section_5?.title || "Who is Nexus Logix",
      paragraph_1:
        pageData?.section_5?.paragraph1 ||
        "Homegrown in Australia and backed by global expertise, we strive to be your responsive, agile freight and logistics partner.",
      paragraph_2:
        pageData?.section_5?.paragraph2 ||
        "As a player in a global supply chain, you are like an F1 race driver, which means every second counts. That's why we're your dedicated pit crew, ever ready to support your cargo in motion.",
      imageSrc: pageData?.section_5?.image || "/home/Nexus-Logix.png",
      imageAlt: pageData?.section_5?.imageAlt || "Nexus Logix Team",
      reverse: false,
      buttonTitle: pageData?.section_5?.buttonText || "Explore More",
      buttonLink: pageData?.section_5?.buttonLink || "/whyNexus",
    },
    {
      title: pageData?.section_6?.title || "Your Supply Chain is Now Visible, Measurable, and Transparent",
      paragraph_1:
        pageData?.section_6?.paragraph1 ||
        "50% of customers track their shipments - You can too! \n\n",
      paragraph_2:
        pageData?.section_6?.paragraph2 ||
        "Powered by Neo, Nexus Logix delivers live tracking that shows your shipment's exact location on an interactive world map in real time. Get automated milestone alerts, 12-month performance stats, financial summaries, and detailed <span class='co2-highlight'>CO₂</span> emission data for every shipment all accessible on any device, right at your fingertips.",
      imageSrc: pageData?.section_6?.image || "/CargoWise_neo_logo.svg",
      imageAlt: pageData?.section_6?.imageAlt || "Cargo Tracking",
      reverse: true,
      buttonTitle: pageData?.section_6?.buttonText || "Learn More",
      buttonLink: pageData?.section_6?.buttonLink || "/track-and-trace",
    },
  ].filter(Boolean);

  interface StatsItem {
    value: number;
    label: string;
    suffix?: string;
  }

  const stats: StatsItem[] = [
    {
      value: pageData?.section_3_column_1_count || 39,
      label: pageData?.section_3_column_1_text || "Countries",
      suffix: "+"
    },
    {
      value: pageData?.section_3_column_2_count || 76,
      label: pageData?.section_3_column_2_text || "Global Partner Offices"
    },
  ].filter(Boolean);

  interface ValueItem {
    icon: string;
    title: string;
    subtitle: string;
    subtitle_2?: string;
  }

  const values: ValueItem[] = [
    {
      icon: pageData?.icon_card_1?.card_icon || "/dependability.png",
      title: pageData?.icon_card_1?.card_title || "DEPENDABILITY",
      subtitle: pageData?.icon_card_1?.card_description_1 || "You can count on us.",
      subtitle_2: pageData?.icon_card_1?.card_description_2 || "",
    },
    {
      icon: pageData?.icon_card_2?.card_icon || "/accountability.png",
      title: pageData?.icon_card_2?.card_title || "ACCOUNTABILITY",
      subtitle: pageData?.icon_card_2?.card_description_1 || "We accept responsibility.\nNo Excuses.",
      subtitle_2: pageData?.icon_card_2?.card_description_2 || "No Excuses.",
    },
    {
      icon: pageData?.icon_card_3?.card_icon || "/transparancy.png",
      title: pageData?.icon_card_3?.card_title || "TRANSPARENCY",
      subtitle: pageData?.icon_card_3?.card_description_1 || "Clear communication.\nNo Surprises.",
      subtitle_2: pageData?.icon_card_3?.card_description_2 || "No Surprises.",
    },
    {
      icon: pageData?.icon_card_4?.card_icon || "/commitment.png",
      title: pageData?.icon_card_4?.card_title || "COMMITMENT",
      subtitle: pageData?.icon_card_4?.card_description_1 || "We go the extra mile.",
      subtitle_2: pageData?.icon_card_4?.card_description_2 || "",
    },
    {
      icon: pageData?.icon_card_5?.card_icon || "/care.png",
      title: pageData?.icon_card_5?.card_title || "CARE",
      subtitle: pageData?.icon_card_5?.card_description_1 || "Your shipment is our shipment.",
      subtitle_2: pageData?.icon_card_5?.card_description_2 || "",
    },
  ].filter(Boolean);

  // const services = [
  //     {
  //         src: "/forwarding_service.png",
  //         alt: "Freight forwarding service",
  //         label: "Air & Sea Freight",
  //         description: `Be it express air shipments for urgent deliveries or cost-effective sea freight solutions for bulk transport we optimise routes, consolidate loads, and secure competitive rates to keep your cargo moving without unexpected costs or challenges, while avoiding delays.`,
  //     },
  //     {
  //         src: "/Customs_Clearance.png",
  //         alt: "Customs Clearance & Compliance",
  //         label: "Customs Clearance & Compliance",
  //         description: `Navigating Australia’s vast distances often requires more than one mode of transport, with local expertise at every stage. Our comprehensive road and rail services cover everything from onsite collection to final delivery, ensuring reliable and cost-effective transport.`,
  //     },
  //     {
  //         src: "/warehousing.png",
  //         alt: "3PL, Warehousing & Special Projects",
  //         label: "3PL, Warehousing & Special Projects",
  //         description: `From end-to-end supply chain management to specialised project transport for heavy-lift or out-of-gauge cargo, our integrated solutions and experienced consultants streamline warehousing, fulfilment, and special moves – providing a unique personalised approach for each client.`,
  //     },
  //     {
  //         src: "/transport.png",
  //         alt: "Road & Rail Transport",
  //         label: "Road & Rail Transport",
  //         description: `Customs and compliance doesn’t have to be a bottleneck. We simplify international and domestic border processes by expertly handling HS classifications, duty optimisation, documentation, and other procedures, including audits – ensuring your goods clear swiftly and cost-effectively.`,
  //     },
  // ];

  interface serviceCardItem {
    src: string;
    alt: string;
    label: string;
    description: string;
    link: string;
  }

  const services: serviceCardItem[] = [
    {
      src: pageData?.service_card_1?.card_image || "/forwarding_service.png",
      alt: pageData?.service_card_1?.card_image_alt || "Freight forwarding service",
      label: pageData?.service_card_1?.card_label || "Air & Sea Freight",
      description: pageData?.service_card_1?.card_description || `Express shipments or cost-effective bulk transport, we optimise routes, consolidate loads, and secure competitive rates to keep your cargo moving, by air and sea, while avoiding delays and unexpected costs.`,
      link: pageData?.service_card_1?.card_link || "/air-and-sea-freight"
    },
    {
      src: pageData?.service_card_2?.card_image || "/home/Customs_Clearance-new.svg",
      alt: pageData?.service_card_2?.card_image_alt || "Customs Clearance & Compliance",
      label: pageData?.service_card_2?.card_label || "Customs Clearance & Compliance",
      description: pageData?.service_card_2?.card_description || `We simplify international and domestic border processes by expertly handling HS classifications, duty optimisation, documentation, and other procedures – including audits – ensuring your goods clear quickly and cost-effectively.`,
      link: pageData?.service_card_2?.card_link || "/customs",
    },
    {
      src: pageData?.service_card_3?.card_image || "/warehousing.png",
      alt: pageData?.service_card_3?.card_image_alt || "Integrated Logistics & Special Projects",
      label: pageData?.service_card_3?.card_label || "Integrated Logistics & Special Projects",
      description: pageData?.service_card_3?.card_description || `We offer end-to-end supply chain management, including 3PL and Warehousing, Fulfilment and eCommerce, and Inventory Management and Optimisation, all scalable and tailored to your unique requirements.`,
      link: pageData?.service_card_3?.card_link || "/Integrated-logistics",
    },
    {
      src: pageData?.service_card_4?.card_image || "/transport.png",
      alt: pageData?.service_card_4?.card_image_alt || "Road & Rail Transport",
      label: pageData?.service_card_4?.card_label || "Road & Rail Transport",
      description: pageData?.service_card_4?.card_description || `Our comprehensive road and rail services, within Australia, cover everything from onsite collection to final delivery, ensuring reliable and cost-effective transport across even the most challenging corridors.`,
      link: pageData?.service_card_4?.card_link || "/road-and-rail",
    },
  ].filter(Boolean);

  const [activeService, setActiveService] = useState(services[0]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    arrows: false,
    beforeChange: (current: number, next: number) =>
      setActiveService(services[next]),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "200px",
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "120px",
          dots: false,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerPadding: "35px",
          dots: false,
        },
      },
    ],
  };

  if (loading) {
    return;
  }

  if (error) {
    return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  }

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      {/*<section className="relative mx-auto min-h-[70vh] sm:min-h-[80vh] lg:min-h-[100vh] overflow-hidden max-w-[2400px]">*/}
      <section className="relative mx-auto overflow-hidden max-w-[1800px]">
        {/*<div className="absolute hidden lg:block inset-0">*/}
        {/*    <div className="absolute flex flex-row justify-end right-0 w-full h-full">*/}
        {/*        <Image*/}
        {/*            key={images[currentMobileImageIndex]}*/}
        {/*            src={images[currentMobileImageIndex]}*/}
        {/*            alt="Airplane"*/}
        {/*            width={400}*/}
        {/*            height={1200}*/}
        {/*            className="w-full xl:w-auto lg:-top-20 xl:-top-0 sm:w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[620px] object-contain relative z-40"*/}
        {/*        />*/}
        {/*    </div>*/}

        {/*    /!*<div className="absolute flex flex-row justify-end right-0 w-full h-full">*!/*/}
        {/*    /!*    <Image*!/*/}
        {/*    /!*        key={images[currentMobileImageIndex]}*!/*/}
        {/*    /!*        src={images[currentMobileImageIndex]}*!/*/}
        {/*    /!*        alt="Airplane"*!/*/}
        {/*    /!*        width={400}*!/*/}
        {/*    /!*        height={1200}*!/*/}
        {/*    /!*        className="w-full sm:w-[300px] md:w-[350px] lg:w-[600px] xl:w-[900px] h-[400px] sm:h-[500px] lg:h-[700px] xl:h-[620px] object-contain relative z-40 lg:-top-20 xl:-top-0"*!/*/}
        {/*    /!*    />*!/*/}
        {/*    /!*</div>*!/*/}

        {/*    /!*<div className="absolute flex flex-row justify-end right-0 w-full h-full">*!/*/}
        {/*    /!*    <Image*!/*/}
        {/*    /!*        key={images[currentMobileImageIndex]}*!/*/}
        {/*    /!*        src={images[currentMobileImageIndex]}*!/*/}
        {/*    /!*        alt="Airplane"*!/*/}
        {/*    /!*        width={400}*!/*/}
        {/*    /!*        height={1200}*!/*/}
        {/*    /!*        className="w-full sm:w-[300px] md:w-[450px] lg:w-[680px] xl:w-[850px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[600px] xl:h-[720px] object-contain relative z-40 lg:-top-20 xl:-top-10"*!/*/}
        {/*    /!*    />*!/*/}
        {/*    /!*</div>*!/*/}

        {/*    <div className="absolute -left-50 lg:-top-35 xl:-top-10 inset-0 flex items-center">*/}
        {/*        <div className="w-full h-full flex justify-center">*/}
        {/*            <Image*/}
        {/*                src="/x1.png"*/}
        {/*                alt="Nexus X Logo"*/}
        {/*                width={600}*/}
        {/*                height={600}*/}
        {/*                className="lg:w-[800px] xl:w-full sm:w-auto h-[600px] sm:h-[800px] lg:h-[970px] object-contain z-30"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        {/*<div className="absolute hidden lg:block inset-0">*/}
        {/*    <div className="absolute flex flex-row justify-end right-0 w-full hero-image h-full">*/}
        {/*        <Image*/}
        {/*            key={images[currentMobileImageIndex]}*/}
        {/*            src={images[currentMobileImageIndex]}*/}
        {/*            alt="Airplane"*/}
        {/*            width={400}*/}
        {/*            height={1200}*/}
        {/*            className="w-full xl:w-auto lg:-top-20 xl:-top-0 sm:w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[620px] object-contain relative z-40"*/}
        {/*        />*/}
        {/*    </div>*/}

        {/*    <div className="absolute xl:-left-[100px] left-20 lg:-top-35 xl:-top-10 inset-0 flex items-center logo-image">*/}
        {/*        <div className="w-full h-full flex justify-center">*/}
        {/*            <Image*/}
        {/*                src="/x1.png"*/}
        {/*                alt="Nexus X Logo"*/}
        {/*                width={600}*/}
        {/*                height={600}*/}
        {/*                className="lg:w-[800px] xl:w-full sm:w-auto h-[600px] sm:h-[800px] lg:h-[970px] object-contain z-30"*/}
        {/*            />*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</div>*/}

        <div className="absolute hidden lg:block inset-0">
          <div className="absolute flex flex-row justify-end right-0 w-full h-full hero-image">
            <Image
              key={images[currentImageIndex]}
              src={images[currentImageIndex]}
              alt="Airplane"
              width={1200}
              height={1600}
              // className="w-full xl:w-auto lg:-top-0 sm:w-auto h-[400px] sm:h-[500px] lg:h-[600px] xl:h-[620px] object-contain relative z-40"
              className={`w-full xl:w-auto h-full object-contain relative z-40 duration-500 ease-in-out ${isFading ? "opacity-0" : "opacity-100"
                }`}
              sizes="(max-width: 2560px) 750px, 900px"
            />
          </div>

          <div className="absolute -left-50 lg:-top-5 xl:-top-10 inset-0 flex items-center logo-image">
            <div className="w-full h-full flex justify-center">
              <Image
                src="/x1.png"
                alt="Nexus X Logo"
                width={1600}
                height={1600}
                // className="lg:w-[800px] xl:w-full sm:w-auto h-[600px] sm:h-[800px] lg:h-[980px] object-contain z-30 logo-images"
                className="w-full h-full object-contain z-30 logo-images"
                sizes="(max-width: 2560px) 1000px, 1200px"
              />
            </div>
          </div>
        </div>

        <Nav />

        <div
          id="hero-background-image"
          className="relative w-full h-[400px] mobile:h-[500px] sm:h-[600px] md:h-[800px] -mt-20 lg:hidden overflow-hidden"
        >
          <Image
            key={mobileImages[currentMobileImageIndex]}
            src={mobileImages[currentMobileImageIndex]}
            // src="/insights/Group72.png"
            alt="Airplane"
            width={1000}
            height={400}
            className="w-full h-full object-cover absolute inset-0"
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 100vw"
          />
        </div>

        <div
          id="mobile-hero-content"
          className="relative flex flex-col border-[#D9D9D9] container mx-auto border-b-2 pb-4 mt-4 justify-center items-center text-center
                            w-full px-4 sm:px-6 lg:hidden z-10"
        >
          <div className="w-full max-w-lg mx-auto">
            <h1 className="text-2xl mobile:text-3xl sm:text-4xl font-bold text-[#114284] leading-tight mb-4 sm:mb-6">
              {pageData?.heroTitle || "Supply Chains Never Sleep."}
              {/* {dataTest?.heroTitle} */}
              <br className="sm:hidden" />
              {/* Neither Do We. */}
            </h1>
            <p className="text-sm mobile:text-base sm:text-lg text-[#676767] font-medium mb-6 sm:mb-8 leading-relaxed">
              {pageData?.heroDescription || " As your agile logistics partner, we operate as an extension of your business, so you enjoy peace of mind, and responsive service."}
            </p>
            <Link href={pageData?.hero_button_link || "/services"} className="inline-block">
              <button
                className="bg-[#162F65] text-white
                                   px-6 py-2 mobile:px-8 mobile:py-3 text-sm font-medium  rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300"
              >
                {pageData?.hero_button_text || " Explore More"}
              </button>
            </Link>
          </div>
        </div>

        <div className="relative hidden lg:block z-50 mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-24">
          <div className="w-full sm:w-3/4 lg:w-1/2 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[45px] font-bold text-[#114284] leading-[54px] mb-4 sm:mb-6 head-title max-w-md">
              {/* Supply Chains
              <br />
              Never Sleep.
              <br />
              Neither Do We. */}
              {pageData?.heroTitle}
            </h1>
            <p className="text-sm sm:text-base lg:text-base xl:text-lg text-[#676767] font-medium mb-6 sm:mb-8 max-w-60 xl:max-w-md leading-[25px] head-para">
              {pageData?.heroDescription || " As your agile logistics partner, we operate as an extension of your business, so you enjoy peace of mind, and responsive service."}
            </p>
            <Link href={pageData?.hero_button_link || "/services"} className="inline-block">
              <button
                className="bg-[#162F65] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-xl font-medium rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300 head-button"
              >
                {pageData.hero_button_text || " Explore More"}
              </button>
            </Link>
          </div>
        </div>

        <Quote />

        <section className="relative py-6 lg:-top-0 z-40 sm:py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            {/*<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 sm:gap-3">*/}
            {/*    {values.map((value, index) => (*/}
            {/*        <div*/}
            {/*            key={index}*/}
            {/*            className="flex flex-col items-center sm:items-start text-center sm:text-left"*/}
            {/*        >*/}
            {/*            <div className="mb-4 sm:mb-6">*/}
            {/*                <Image*/}
            {/*                    src={value.icon}*/}
            {/*                    alt={`${value.title} icon`}*/}
            {/*                    width={48}*/}
            {/*                    height={48}*/}
            {/*                    className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*            <h3 className="text-[#225395] font-semibold text-base sm:text-lg lg:text-xl italic mb-2">*/}
            {/*                {value.title}*/}
            {/*            </h3>*/}
            {/*            <p className="text-[#0C2D59] font-medium text-xs sm:text-sm lg:text-sm whitespace-pre-line">*/}
            {/*                {value.subtitle}*/}
            {/*            </p>*/}
            {/*        </div>*/}
            {/*    ))}*/}
            {/*</div>*/}

            <div className="flex overflow-x-auto lg:mx-auto lg:grid lg:grid-cols-5 gap-4 lg:gap-1 pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide touch-pan-x lg:justify-items-center">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left min-w-[150px] lg:min-w-0 snap-center px-2"
                >
                  <div className="mb-0.5 sm:mb-1 lg:mb-2">
                    <Image
                      src={value.icon}
                      alt={`${value.title} icon`}
                      width={48}
                      height={48}
                      className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"
                    />
                  </div>
                  <h3 className="text-[#225395] font-semibold text-base sm:text-lg lg:text-xl italic">
                    {value.title}
                  </h3>
                  <p className="text-[#0C2D59] font-medium text-[10px] lg:text-xs leading-4 whitespace-pre-line max-w-none lg:max-w-xs ">
                    {value.subtitle}
                  </p>
                  <p className="text-[#0C2D59] font-medium text-[10px] lg:text-xs leading-4 whitespace-pre-line max-w-none lg:max-w-xs ">
                    {value.subtitle_2}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      <div className="py-4 sm:py-6 lg:py-8">
        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            <div className="relative">
              <div className="relative w-full h-[200px] sm:h-[250px] lg:h-[500px] rounded-xl overflow-hidden">
                <Image
                  src={pageData?.section_2_image || "/truck.png"}
                  alt="truck in logistics operation"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="absolute text-center rounded-[10px] -bottom-4 sm:-bottom-5 lg:-bottom-6 left-4 sm:left-5 lg:left-6 bg-[#225395] text-white px-6 sm:px-8 lg:px-10 py-2 sm:py-2.5 lg:py-3 shadow-lg">
                <div className="text-center">
                  <p className="text-sm sm:text-base lg:text-lg font-semibold mb-0.5 sm:mb-1">
                    {pageData?.section_2_badge_text_row_1 || "Team with"}
                  </p>
                  <p className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    {pageData?.section_2_badge_text_row_2 || "25"}
                  </p>
                  <p className="text-lg sm:text-xl lg:text-3xl font-semibold">
                    {pageData?.section_2_badge_text_row_3 || "Years"}
                  </p>
                  <p className="text-xs sm:text-sm lg:text-sm mt-0.5 sm:mt-1">
                    {pageData?.section_2_badge_text_row_4 || "Industry"}
                    <br />
                    {pageData?.section_2_badge_text_row_5 || "Experience"}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <h2 className="text-2xl sm:text-3xl -mt-0 lg:text-[50px] font-bold text-[#162F65] mb-4 sm:mb-6 lg:mb-6 text-left lg:-mt-5">
                {pageData?.section_2_title || "Why Nexus Logix"}
              </h2>
              <div className="space-y-4 sm:space-y-5 lg:space-y-6 text-sm sm:text-base lg:text-lg text-[#676767] font-medium leading-[25px] text-left">

                <p className="whitespace-pre-line">
                  {pageData.section_2_description || ""}
                </p>
                {/* <p>
                  Established in Australia by a group of logistics
                  professionals, each with over 25+ years of experience across
                  Australia, Oceania, and Asia Pacific, our business is built on
                  a foundation of local expertise and global reach.
                </p>
                <p>
                  We know that we aren&#39;t simply moving your cargo -
                  we&#39;re moving your business, your reputation, and your
                  ambitions. With dependability, accountability, and
                  transparency at our core, we take personal ownership of every
                  shipment and are aligned with your goals, ensuring you have
                  the peace of mind you deserve.
                </p>
                <p>
                  Challenging the present impersonal approach to freight
                  forwarding, our service is driven by genuine commitment and
                  care, putting you first so that your needs shape every
                  decision. As your dedicated logistics team, we deliver value,
                  act with integrity, and provide personalized support at a
                  moment&#39;s notice, functioning as an extension of your
                  office.
                </p> */}
              </div>
              <p className="text-[#225395] text-lg sm:text-xl lg:text-[21px] font-medium mt-4 sm:mt-6 lg:mt-8 text-left">
                {pageData?.section_2_subtitle || "- This is the Nexus Way"}
              </p>
              <Link href={pageData?.section_2_button_link || "/whyNexus"}>
                <button className="bg-[#162F65] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-medium mt-4 sm:mt-6 lg:mt-8  rounded-[10px] hover:bg-blue-950 flex items-left lg:items-center w-fit mx-0 hover:scale-105 transition-all duration-300">
                  {pageData?.section_2_button_text || "Explore More"}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="relative bg-[#0F2043] text-white py-6 sm:py-8 lg:py-16">
        {/* Background image */}
        <div className="absolute bg-[url('/x.png')] h-[200px] sm:h-[300px] md:h-[500px] md:-top-25 -top-5 bg-no-repeat bg-contain inset-0 w-full sm:w-1/3 lg:w-[400px] lg:h-[400px] lg:-top-15 opacity-5" />

        <div className="relative max-w-7xl mx-0 lg:mx-auto px-8 lg:px-12">
          <div className="flex flex-col items-start md:items-center gap-6 lg:gap-8 md:flex-row md:justify-between">
            {/* Title */}
            <h2 className="text-xl sm:text-2xl lg:text-5xl font-semibold text-[#FFFFFF] text-left leading-tight sm:leading-[48px] lg:leading-[57px]">
              {pageData?.section_3_title_line_1 || "Connecting"}
              <br className="hidden lg:block" /> {pageData?.section_3_title_line_2 || "you worldwide..."}
            </h2>

            {/* Stats */}
            <div className="flex flex-col md:flex-row md:justify-between md:gap-6 lg:gap-12 text-left">
              {/* Mobile View: stacked with inline layout */}
              <div className="flex flex-col md:hidden gap-y-3">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex justify-start items-center gap-2"
                  >
                    <div className="w-16">
                      {" "}
                      {/* Set fixed width to align all numbers */}
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={0}
                        suffix={stat.suffix || ""}
                        enableScrollSpy={false}
                        redraw={false}
                        startOnMount={true}
                      >
                        {({ countUpRef }) => (
                          <p
                            ref={countUpRef as React.Ref<HTMLParagraphElement>}
                            className="text-xl font-semibold text-white"
                          />
                        )}
                      </CountUp>
                    </div>
                    <p className="text-sm text-white">{stat.label}</p>
                  </div>
                ))}

                {/* CO₂ row */}
                <div className="flex justify-start items-center gap-2">
                  <div className="w-16">
                    <p className="text-xl font-semibold text-[#559000]">{pageData.section_3_column_3_text_1 || "CO₂"}</p>
                  </div>
                  <p className="text-sm text-[#559000]">{pageData.section_3_column_3_text_2 || "Track & Trace"}</p>
                </div>
              </div>

              {/* Tablet/Desktop View: original layout preserved */}
              <div className="hidden md:flex flex-row justify-between gap-6 lg:gap-12">
                {stats.map((stat, index) => (
                  <div key={index} className="group text-left">
                    <p className="text-2xl lg:text-6xl font-semibold text-white mb-2 group-hover:scale-105 transition-transform duration-300">
                      <CountUp
                        start={0}
                        end={stat.value}
                        duration={2.5}
                        delay={0}
                        suffix={stat.suffix || ""}
                        enableScrollSpy={false}
                        redraw={false}
                        startOnMount={false}
                        onStart={() => { }}
                        onEnd={() => { }}
                      >
                        {({ countUpRef }) => <span ref={countUpRef} />}
                      </CountUp>
                    </p>
                    <p className="text-sm lg:text-xl text-white">
                      {stat.label}
                    </p>
                  </div>
                ))}
                <div className="group text-left">
                  <p className="text-2xl lg:text-6xl font-semibold text-[#559000] mb-2 group-hover:scale-105 transition-transform duration-300">
                    {pageData?.section_3_column_3_text_1 || "CO₂"}
                  </p>
                  <p className="text-sm lg:text-xl text-[#559000]">
                    {pageData?.section_3_column_3_text_2 || "Track & Trace"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*<div className="bg-[#F6F6F6] relative z-10 py-6 sm:py-8 lg:py-16 poppins">*/}
      {/*    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">*/}
      {/*        <div*/}
      {/*            className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">*/}
      {/*            <h2 className="text-2xl sm:text-3xl lg:text-6xl font-semibold text-[#162F65] text-center mb-4 sm:mb-0 leading-tight mx-auto sm:mx-0">*/}
      {/*                Comprehensive*/}
      {/*                <br className="hidden sm:block"/> Solutions*/}
      {/*            </h2>*/}
      {/*            <p className="text-[#676767] font-medium text-xs sm:text-sm lg:text-xl leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left">*/}
      {/*                Whether it&#39;s retail, manufacturing, mining, automotive, or any other*/}
      {/*                industry, our specialists understand each one&#39;s unique challenges,*/}
      {/*                constraints, and regulations. In particular, we understand the value*/}
      {/*                of proactive, swift communication, and we strive to keep our customers*/}
      {/*                in the loop at all times - you&#39;ll notice this difference immediately*/}
      {/*                and we&#39;ll earn your trust within the first month. Our dedicated teams*/}
      {/*                work with you, as an extension of your office, to deliver compliant,*/}
      {/*                tailored solutions that scale with your business.*/}
      {/*            </p>*/}
      {/*        </div>*/}

      {/*        <div className="flex flex-col lg:flex-row gap-4 sm:gap-6 lg:gap-10">*/}
      {/*            <div id="main-card"*/}
      {/*                className="bg-[#002453] relative w-full lg:w-2/3 rounded-lg text-center transition-colors duration-300">*/}
      {/*                <div*/}
      {/*                    className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat bg-cover bottom-0 inset-0 items-center h-full"/>*/}
      {/*                <div*/}
      {/*                    className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between h-full">*/}
      {/*                    <div>*/}
      {/*                        <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-[22px] text-[#FFFFFF] leading-[30px] whitespace-pre-line">*/}
      {/*                            {activeService.description}*/}
      {/*                        </p>*/}
      {/*                    </div>*/}

      {/*                    <div className="flex flex-row gap-2 group items-center pt-4 sm:pt-6 lg:pt-8">*/}
      {/*                        <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out" width="81"*/}
      {/*                             height="82" viewBox="0 0 81 82" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
      {/*                            <circle cx="40.5" cy="41" r="37.7635" stroke="white" strokeWidth="5.47297"/>*/}
      {/*                            <path*/}
      {/*                                className="origin-center group-hover:rotate-45 transition-transform duration-300 ease-in-out"*/}
      {/*                                d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"*/}
      {/*                                fill="white"/>*/}
      {/*                        </svg>*/}

      {/*                        <h3 className="text-sm sm:text-base lg:text-[36px] text-white font-medium">*/}
      {/*                            {activeService.label}*/}
      {/*                        </h3>*/}
      {/*                    </div>*/}

      {/*                </div>*/}
      {/*            </div>*/}

      {/*            <div*/}
      {/*                className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">*/}
      {/*                {services.map((item, index) => (*/}
      {/*                    <div*/}
      {/*                        key={index}*/}
      {/*                        className="relative group cursor-pointer"*/}
      {/*                        onMouseEnter={() => setActiveService(item)}*/}
      {/*                        onClick={() => setActiveService(item)}*/}
      {/*                    >*/}
      {/*                        <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden">*/}
      {/*                            <Image*/}
      {/*                                src={item.src}*/}
      {/*                                alt={item.alt}*/}
      {/*                                fill*/}
      {/*                                className="object-cover transition-transform duration-300 group-hover:scale-105"*/}
      {/*                            />*/}
      {/*                            <div*/}
      {/*                                className={`absolute inset-0 transition-all duration-300 ${activeService.label === item.label ? 'bg-[#002B64]/70' : 'bg-gradient-to-t from-[#002B64]/40 to-[#00255700]/10'}`}*/}
      {/*                            />*/}
      {/*                            <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-xs sm:text-sm lg:text-lg">*/}
      {/*                                {item.label}*/}
      {/*                            </p>*/}
      {/*                        </div>*/}
      {/*                    </div>*/}
      {/*                ))}*/}
      {/*            </div>*/}
      {/*        </div>*/}
      {/*    </div>*/}
      {/*</div>*/}

      <div className="bg-[#F6F6F6] relative z-10 py-4 sm:py-8 lg:py-16 poppins">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 sm:gap-6 lg:gap-10 mb-6 sm:mb-8 lg:mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-[50px] font-semibold text-[#162F65] text-center lg:text-left mb-1 sm:mb-0 lg:leading-[72px] mx-auto sm:mx-0">
              {pageData.section_4_title || "Comprehensive"}
              {/* <br className="hidden sm:block" /> Solutions */}
            </h2>
            <p className="text-[#676767] font-medium text-sm sm:text-base lg:text-lg leading-[25px] max-w-lg sm:max-w-xl text-center sm:text-left">
              {pageData?.section_4_description || "Whether it&#39;s retail, manufacturing, mining, automotive, or any other industry, our specialists understand each one&#39;s unique challenges, constraints, and regulations. In particular, we understand the value of proactive, swift communication, and we strive to keep our customers in the loop at all times - you&#39;ll notice this difference immediately and we&#x27;ll earn your trust within the first month. Our dedicated teams work with you, as an extension of your office, to deliver compliant, tailored solutions that scale with your business."}
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="flex flex-row gap-4 sm:gap-6 lg:gap-10">
              <div
                id="main-card"
                className="bg-[#002453] relative w-full lg:w-2/3 rounded-lg text-center transition-colors duration-300"
              >
                <div className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat -top-30 -mr-20 bg-contain inset-0 w-[600px] h-[800px]" />
                <div className="relative p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-between h-full">
                  <div>
                    <p className="text-left font-medium pt-2 lg:pt-10 px-6 text-sm sm:text-base lg:text-xl text-[#FFFFFF] leading-[30px] whitespace-pre-line">
                      {activeService.description}
                    </p>
                  </div>

                  <div className="flex flex-row gap-2 group justify-start items-center pt-4 sm:pt-6 lg:pt-8 w-full">
                    <svg
                      className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 mb-2 flex-shrink-0 transition-transform duration-300 ease-in-out"
                      width="81"
                      height="82"
                      viewBox="0 0 81 82"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="40.5"
                        cy="41"
                        r="37.7635"
                        stroke="white"
                        strokeWidth="5.47297"
                      />
                      <path
                        className="origin-center transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover:rotate-45" // Added scale-110 for a more pronounced effect without layout shift
                        d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"
                        fill="white"
                      />
                    </svg>

                    <h3 className="text-sm sm:text-base text-left leading-[35px] lg:text-[36px] text-white font-medium">
                      {activeService.label}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                {services.map((item, index) => (
                  <Link key={index} href={item.link}>
                    <div
                      className="relative group cursor-pointer"
                      onMouseEnter={() => setActiveService(item)}
                      onClick={() => setActiveService(item)}
                    >
                      <div className="relative w-full h-40 sm:h-48 lg:h-56 rounded-lg overflow-hidden">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                          className={`absolute inset-0 transition-all duration-300 ${activeService.label === item.label
                            ? "bg-[#002B64]/70"
                            : "bg-gradient-to-t from-[#002B64]/0 to-[#00255700]/0"
                            }`}
                        />
                        <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-normal text-xs sm:text-sm lg:text-lg">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

            </div>
          </div>

          <div className="lg:hidden w-full">
            <Slider {...settings}>
              {services.map((item, index) => (
                <div
                  key={index}
                  className="px-2 py-4 flex flex-col items-center"
                >
                  <div
                    className={`relative group cursor-pointer rounded-lg overflow-hidden transition-all duration-300
                                            ${activeService.label === item.label
                        ? "scale-[1.05] bg-[#002453] shadow-lg"
                        : "scale-[0.9]"
                      }`}
                    style={{
                      height:
                        activeService.label === item.label ? "280px" : "270px",
                      width: "100%",
                    }}
                  >
                    {activeService.label !== item.label && (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}

                    <div
                      className={`absolute inset-0 transition-all duration-300
                                            ${activeService.label === item.label
                          ? "bg-[#002B64]/10"
                          : "bg-gradient-to-t from-[#002B64]/40 to-[#00255700]/10"
                        }`}
                    />

                    {activeService.label === item.label ? (
                      <>
                        <div className="absolute bg-[url('/x.png')] opacity-5 bg-no-repeat bg-contain inset-0 items-center -top-20 w-[400px] h-[800px]" />
                        <div className="relative p-2 sm:p-4 flex flex-col items-center justify-between h-full">
                          <p className="text-left font-medium pt-2 px-6 text-xs text-[#FFFFFF] leading-[20px] whitespace-pre-line">
                            {item.description}
                          </p>
                          <div className="flex flex-row gap-2 group justify-start items-center pt-4 sm:pt-6 w-full px-6">
                            <svg
                              className="w-8 h-8 text-left flex-shrink-0"
                              width="81"
                              height="82"
                              viewBox="0 0 81 82"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <circle
                                cx="40.5"
                                cy="41"
                                r="37.7635"
                                stroke="white"
                                strokeWidth="5.47297"
                              />
                              <path
                                d="M50.7383 33.4925C50.7693 32.847 50.5433 32.2156 50.1099 31.7363C49.6764 31.257 49.0708 30.9689 48.4254 30.935L34.6517 30.2429C34.3319 30.2269 34.0121 30.274 33.7105 30.3815C33.4089 30.489 33.1314 30.6549 32.894 30.8697C32.4143 31.3034 32.1266 31.9099 32.0942 32.5558C32.0617 33.2016 32.2872 33.8339 32.7209 34.3136C33.1547 34.7932 33.7612 35.0809 34.4070 35.1133L42.3021 35.51L29.3090 47.26C28.8294 47.6937 28.5418 48.3001 28.5093 48.9459C28.4769 49.5916 28.7023 50.2238 29.1360 50.7034C29.5697 51.183 30.1761 51.4706 30.8219 51.5031C31.4676 51.5355 32.0998 51.3101 32.5794 50.8764L45.5725 39.1264L45.1759 47.0215C45.1598 47.3413 45.2069 47.6612 45.3144 47.9628C45.4220 48.2644 45.5878 48.5418 45.8026 48.7793C46.0174 49.0168 46.2768 49.2097 46.5661 49.3469C46.8554 49.4841 47.1689 49.5630 47.4887 49.5791C47.8085 49.5952 48.1283 49.5481 48.4299 49.4405C48.7315 49.3330 49.0090 49.1671 49.2465 48.9523C49.4840 48.7376 49.6768 48.4781 49.8141 48.1888C49.9513 47.8995 50.0302 47.5860 50.0463 47.2662L50.7383 33.4925Z"
                                fill="white"
                              />
                            </svg>
                            <h3 className="text-sm sm:text-base text-left leading-[20px] text-white font-medium">
                              {item.label}
                            </h3>
                          </div>
                        </div>
                      </>
                    ) : (
                      <p className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white font-medium text-xs sm:text-sm">
                        {item.label}
                      </p>
                    )}
                  </div>
                  <p className="mt-4 text-center font-medium text-base text-[#002453] whitespace-nowrap">
                    {item.label}
                  </p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-[#F6F6F6] py-6 sm:py-8 poppins">
        <div className="px-4 sm:px-6 lg:px-8">
          {sections.map((section, index) => (
            <div
              key={index}
              className="relative bg-[#F6F6F6] mb-2 sm:mb-12 last:mb-0"
            >
              {index === 0 && (
                <div className="absolute inset-0 bg-[url('/x.png')] bg-no-repeat hidden md:block md:w-[400px] md:h-[600px] bg-contain lg:w-[850px] lg:h-[850px] -top-10 lg:-top-44" />
              )}

              {/* Desktop & Tablet layout (md+) */}
              <div
                className={`max-w-7xl relative mx-auto items-center hidden md:flex ${section.reverse ? "flex-row-reverse" : "flex-row"
                  } container mx-auto lg:px-8 gap-16 p-6`}
              >
                <div className="w-3/5 flex flex-col justify-between">
                  <h2
                    className={`font-semibold ${section.reverse
                      ? "lg:text-[41px] lg:leading-[56px]"
                      : "lg:text-[50px] lg:leading-[72px]"
                      } text-xl sm:text-2xl text-[#162F65] max-w-3xl text-left`}
                  >
                    {section.title}
                  </h2>
                  <p
                    className={`text-sm lg:text-lg font-medium ${section.reverse ? "mt-2" : "mt-4"
                      } text-[#676767] max-w-2xl leading-[25px] text-left whitespace-pre-line`}
                    // dangerouslySetInnerHTML={{ __html: section.description }}
                  >
                    {section.paragraph_1 || ""}
                  </p>
                  <p
                    className={`text-sm lg:text-lg font-medium ${section.reverse ? "mt-2" : "mt-4"
                      } text-[#676767] max-w-2xl leading-[25px] text-left whitespace-pre-line`}
                    // dangerouslySetInnerHTML={{ __html: section.description }}
                  >
                    {section.paragraph_2 || ""}
                  </p>
                  <div className="mt-8 text-left">
                    <Link href={section.buttonLink || "/whyNexus"}>
                      <button className="bg-[#162F65] cursor-pointer text-white text-base lg:text-lg font-medium px-6 py-3 rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                        {section.buttonTitle}
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="w-2/5">
                  <Image
                    src={section.imageSrc}
                    alt={section.imageAlt}
                    width={600}
                    height={800}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
              </div>

              {/* Mobile layout (below md) */}
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
                // dangerouslySetInnerHTML={{ __html: section.description }}
                >
                  {section.paragraph_1 || ""}
                </p>
                <p
                  className="text-sm font-medium text-[#676767] leading-[25px] whitespace-pre-line text-center"
                // dangerouslySetInnerHTML={{ __html: section.description }}
                >
                  {section.paragraph_2 || ""}
                </p>
                <div className="text-center mt-4">
                  <Link href={section.buttonLink || "/whyNexus"}>
                    <button className="bg-[#162F65] cursor-pointer text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 sm:py-3 rounded-[10px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                      {section.buttonTitle}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          <hr className="border-[#D9D9D9] container mx-auto border-b-2 max-w-7xl" />
        </div>
      </div>

      <div className="bg-[#F6F6F6] py-2 sm:py-4 lg:py-6">
        <div className="">
          <div className="flex flex-col px-4 sm:px-6 mb-2 lg:mb-8 lg:px-8 max-w-7xl mx-auto lg:flex-row justify-between gap-2 lg:gap-8 items-center md:items-start">
            <h2 className="text-3xl sm:text-3xl lg:text-5xl text-[#0F2043] font-semibold text-center sm:text-left mb-1 leading-[50px] max-w-xl">
              {pageData.testimonial_section_title || "Success Stories from Our Clients"}
            </h2>
            <p className="text-[#676767] text-sm sm:text-base lg:text-lg font-medium text-center md:text-left mb-6 sm:mb-8 lg:mb-12 max-w-2xl leading-[25px]">
              {pageData.testimonial_section_title_description || "For over 25+ years, we&#39;ve moved cargo (and some mountains) to achieve outstanding successes for our customers."}
            </p>
          </div>
          <Testimonial />
        </div>
      </div>

      <div className="pb-14">
        <LinkedinSection />
      </div>
    </div>
  );
}
