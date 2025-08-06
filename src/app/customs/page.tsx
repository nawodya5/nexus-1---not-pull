
import React from "react";
// import { ChevronUp, ChevronDown } from "lucide-react";
import Nav from "@/Components/Nav";
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import ServiceCardRow from "@/Components/ServiceCardRow";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import Link from "next/link";
import Accordian from "@/Components/Accordian";
import HeroSection from "@/Components/HeroSection";
import { getCustomsData } from "@/sanity/lib/api";



interface BottomBanner {
  banner_title?: string;
  button_text?: string;
  button_link?: string;
  image?: string;
  imageAlt?: string;
}

interface AccordianItem {
  accordian_title?: string;
  accordian_description?: string;
}

interface HeroSection {
    heroTitle?: string;
    heroImage?: string;
}

interface CustomsData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  accordian_section_title?: string;
  accordian_section_description?: string;
  accordian_section_image?: string;
  accordian_section_image_alt?: string;
  accordian_1?: AccordianItem;
  accordian_2?: AccordianItem;
  accordian_3?: AccordianItem;
  accordian_4?: AccordianItem;
  accordian_5?: AccordianItem;
  accordian_6?: AccordianItem;
  accordian_7?: AccordianItem;
  accordian_8?: AccordianItem;
  accordian_section_subtitle?: string;
  accordian_section_bottom_description?: string;
  accordian_section_button_text?: string;
  card_section?: {
    card_title?: string;
    card_subtitle?: string;
    card_description?: string;
    card_description_2?: string;
    card_button_text?: string;
    card_button_link?: string;
    card_image?: string;
  };
  bottom_banner?: BottomBanner;
}

const CustomsPage = async() => {

  const pageData: CustomsData | null = await getCustomsData();
  if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available.</div>
            </div>
        );
    }

  // const [pageData, setPageData] = useState<CustomsData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await customs();

  //       if (data && data.length > 0) {
  //         setPageData(data[0]);
  //       } else {
  //         setPageData(null);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch Customs data:", err);
  //       setError("Failed to load page content.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);


  // if (loading) {
  //   return;
  // }

  // if (error) {
  //   return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  // }

  // if (!pageData) {
  //   return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  // }
  // const [isExpanded, setIsExpanded] = useState(false);
  // const [activeService, setActiveService] = useState<string | null>(null);

  // const services = [
  //   "Technology for Smarter Decisions",
  //   "Pre-Entry/Exit Strategy & Planning",
  //   "Entry/Exit Processing & Documentation",
  //   "HS Classification & Duty Optimization",
  //   "Post-Entry/Exit Compliance & Optimization",
  //   "Duty Drawbacks & Rebates",
  //   "Australian Trusted Trader Support",
  // ];

  // const serviceContents = {
  //   "Technology for Smarter Decisions":
  //     "Our advanced supply chain visibility tools, digital documentation, and emissions transparency empower our customers to make informed decisions.",
  //   "Pre-Entry/Exit Strategy & Planning":
  //     "We work with you to develop tailored import/export plans that maximise duty savings, accurately identify tariff classifications, and proactively address potential clearance issues before they arise.",
  //   "Entry/Exit Processing & Documentation":
  //     "Our team handles the complete lodgement of import and export declarations, electronic documentation, and cargo release coordination, removing the hassle for you.",
  //   "HS Classification & Duty Optimization":
  //     "By applying precise product classification and comprehensive tariff analysis, we minimise your duties and reduce the risk of penalties.",
  //   "Post-Entry/Exit Compliance & Optimization":
  //     "We review and amend declarations as needed, manage refund claims, and ensure your operations remain fully compliant amid changing regulations.",
  //   "Duty Drawbacks & Rebates":
  //     "Recover duties paid on exported goods efficiently through our streamlined drawback claims process, improving your cash flow.",
  //   "Australian Trusted Trader Support":
  //     "Receive expert assistance throughout the accreditation process, compliance checks, and audit preparation, helping your business benefit from faster clearance and reduced border inspections.",
  // };

  // const toggleDropdown = (service: string) => {
  //   setActiveService((prev) => (prev === service ? null : service));
  // };

  const accordionItemsArray: AccordianItem[] = [
    pageData.accordian_1,
    pageData.accordian_2,
    pageData.accordian_3,
    pageData.accordian_4,
    pageData.accordian_5,
    pageData.accordian_6,
    pageData.accordian_7,
    pageData.accordian_8,
  ].filter(Boolean) as AccordianItem[];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        {/* <div id="hero-section"
                     className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/why-nexus/banner.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Why Nexus
                                </h1>

                            </div>
                        </div>
                    </div>
                </div> */}

        <HeroSection
          title={pageData.hero_section?.heroTitle || "Customs Clearance & Compliance"}
          desktopImage={pageData.hero_section?.heroImage || "/customs_hero_banner.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Customs Clearance hero section"
        />
      </div>

      {/* Customs and Border Processing Section */}
      <section className="py-4 bg-[#F6F6F6] poppins relative lg:-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#162F65] mb-6 lg:mb-8 max-w-md">
            {pageData.accordian_section_title || "Customs and Border Processing"}
            {/* Customs and
            <br />
            Border Processing */}
          </h2>

          <Accordian
            image={pageData.accordian_section_image || "/customs_img1.svg"}
            description={
              pageData.accordian_section_description ||
              "Navigating customs regulations and border processes in Australia and abroad can be complex, but it doesn't have to slow your supply chain. Our customs specialists manage every aspect - from HS classification and duty optimisation to documentation and compliance - ensuring your goods move across borders quickly, smoothly, and cost-effectively."
            }
            classname="max-h-[920px]"
            accordionItems={accordionItemsArray}
          />


          {/* Bottom Section - Tight to Image */}
          <div className="mt-6">
            <h3 className="font-poppins font-medium text-[24px] text-[#162F65] mb-4">
              {pageData.accordian_section_subtitle || "Customs doesn't have to be a block..."}
            </h3>
            <p className="font-poppins font-medium text-[18px] sm:text-[14px] md:text-[16px] lg:text-[18px] text-[#676767] leading-relaxed mb-6 text-justify max-w-4xl">
              {pageData.accordian_section_bottom_description || "If you and your goods arrive with a good plan and in compliance with local regulations. We make that happen by simplifying compliance and reducing inspection delays."}
            </p>
            <Link href="/contactUs">
              <button className="bg-[#162F65] text-white rounded-[10px] px-[25.86px] py-[7.89px] font-poppins text-[14px] hover:bg-blue-950 hover:scale-105 transition-all duration-300">
                {pageData.accordian_section_button_text || "Simplify Customs with Us"}
              </button>
            </Link>
          </div>
        </div>

        {/* <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style> */}
      </section>

      {/* Supply Chain Consultancy Section */}
      <section className="py-6 md:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoDescriptionSection
            title={pageData.card_section?.card_title || "Supply Chain Consultancy & Audits"}
            paragraph1={pageData.card_section?.card_description || "Our comprehensive audits uncover inefficiencies across your entire supply chain from procurement to last-mile delivery. We provide actionable insights and customised roadmaps that cut costs and improve service quality. We also guide you through the process of becoming an Australian Trusted Trader (ATT), unlocking benefits such as reduced red tape at the border, priority goods processing, duty deferral options, and a dedicated Australian Border Force account manager."}
            subtitle2={pageData.card_section?.card_subtitle || "Audits are more than box-ticking exercises..."}
            subtitle1=""
            paragraph2={pageData.card_section?.card_description_2 || "We turn audit insights into immediate ROI, delivering cost savings and enhanced performance from day one."}
            paragraph3=""
            buttonText={pageData.card_section?.card_button_text || "Get Started with a Supply Chain Audit"}
            buttonLink={pageData.card_section?.card_button_link || "/contactUs"}
            imageSrc={pageData.card_section?.card_image || "/customs_img2.png"}
            reverse={true}
          />
        </div>
      </section>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceCardRow />
      </div>
      <Quote />

      {/* CTA Section */}
      <section className="relative py-4 lg:py-2">
        <div className="relative h-64 sm:h-80 lg:h-96 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src={pageData.bottom_banner?.image ||"/customs_banner.png"}
              alt={pageData.bottom_banner?.imageAlt || "Airport"}
              width={1000}
              height={400}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/[0.6]"></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight max-w-xl">
              {pageData.bottom_banner?.banner_title || "Australian Expertise, Global Strength"}
              
              {/* Australian Expertise,
              <br />
              Global Strength */}
            </h2>
            <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal max-w">
              {pageData.bottom_banner?.button_text || "Why Nexus"}
            </button>
          </div>

          {/*<div*/}
          {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
          {/*    Sydney Airport*/}
          {/*</div>*/}
        </div>
      </section>

      {/* LinkedIn Section */}
      <div className="py-4">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default CustomsPage;
