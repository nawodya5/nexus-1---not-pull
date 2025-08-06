
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
// import Link from "next/link";
import Nav from "@/Components/Nav";
import PhotoDescriptionSection from "@/Components/PhotoDescriptionSection";
import HeroTitleAndParagraph from "@/Components/HeroTitleAndParagraph";
import ServiceCardRow from "@/Components/ServiceCardRow";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import { getIntergratedLogistics } from "@/sanity/lib/api";



interface HeroSection {
    heroTitle?: string;
    heroImage?: string;
}

interface IntegratedLogisticsData {
  hero_section?: HeroSection;
  heading_title?: string;
  heading_description?: string;
  card_1_section?: {
    card_1_title?: string;
    card_1_subtitle?: string;
    card_1_description?: string;
    card_1_description_2?: string;
    card_1_button_text?: string;
    card_1_button_link?: string;
    card_1_image?: string;
  },



  card_2_section?: {
    card_2_title?: string;
    card_2_subtitle?: string;
    card_2_description?: string;
    card_2_description_2?: string;
    card_2_button_text?: string;
    card_2_button_link?: string;
    card_2_image?: string;
  },

  card_3_section?: {
    card_3_title?: string;
    card_3_subtitle?: string;
    card_3_description?: string;
    card_3_description_2?: string;
    card_3_button_text?: string;
    card_3_button_link?: string;
    card_3_image?: string;
  },

  card_4_section?: {
    card_4_title?: string;
    card_4_subtitle?: string;
    card_4_description?: string;
    card_4_description_2?: string;
    card_4_button_text?: string;
    card_4_button_link?: string;
    card_4_image?: string;
  }

  bottom_banner?: {
    banner_title?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  }
}


const IntegratedLogistics = async() => {

  const pageData: IntegratedLogisticsData | null = await getIntergratedLogistics();

  if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available.</div>
            </div>
        );
    }
  // const [pageData, setPageData] = useState<IntegratedLogisticsData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await integratedLogistics();

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
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        <HeroSection
          title={pageData.hero_section?.heroTitle || "INTEGRATED LOGISTICS & SPECIAL PROJECTS"}
          desktopImage={pageData.hero_section?.heroImage || "/hero-images/intergrated-logi.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Track and trace hero section"
        />

        {/* <div id="hero-section"
                    className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/lead-banner.png"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl max-w-[200px] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                   Integrated Logistics
                                </h1>
                            </div>
                        </div>
                    </div>
                </div> */}
      </div>

      <div className="relative top-[-100px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeroTitleAndParagraph
          title={pageData.heading_title || "Integrated Logistics & Special Projects"}
          paragraph1={pageData.heading_description || "Seamlessly manage your entire supply chain with integrated logistics designed for Australia's unique challenges. Our scalable solutions bring together warehousing, fulfilment, and specialised transport - giving you full visibility, tighter control, and cost efficiency in one streamlined service."}
          paragraph2=""
        />

        {/* first card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 whitespace-pre-line">
          <PhotoDescriptionSection
            title={pageData.card_1_section?.card_1_title ||"3PL & Warehousing"}
            paragraph1={pageData.card_1_section?.card_1_description ||"Scalable, secure, and strategically positioned, our warehousing network is designed to flex with your business. From pallet storage to bonded facilities, our third-party logistics solutions ensure your goods are always accessible, protected, and ready to move."
            
              
            }
            subtitle2={pageData.card_1_section?.card_1_subtitle ||"Think flexible warehousing is only for enterprise giants?"}
            subtitle1=""
            paragraph2={pageData.card_1_section?.card_1_description_2 ||"Not at all. Our local presence and global reach mean you can access enterprise-grade service without the bloated overhead."}
            paragraph3=""
            buttonText={pageData.card_1_section?.card_1_button_text || "Explore Contract Logistics"}
            buttonLink={pageData.card_1_section?.card_1_button_link || "/air-freight-quote"}
            imageSrc={pageData.card_1_section?.card_1_image || "/services/3pl.png"}
            reverse={false}
          />
        </div>

        {/* second card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData.card_2_section?.card_2_title || "Fulfilment & E-Commerce Services"}
            paragraph1={pageData.card_2_section?.card_2_description || "We power fulfilment for brands that can't afford to miss a beat. Whether you're managing a multichannel retail operation or shipping direct-to-consumer, we handle pick-pack, kitting, labelling, and returns with speed and precision."}
            subtitle2={pageData.card_2_section?.card_2_subtitle || "Outsourced fulfilment won't cost you control..."}
            subtitle1=""
            paragraph2={pageData.card_2_section?.card_2_description_2 || "If you choose the right logistics provider. Our partner centers use advanced tech and SLA-driven systems to give you real-time visibility and seamless performance for an in-house-like experience."}
            paragraph3=""
            buttonText={pageData.card_2_section?.card_2_button_text || "Get a tailored Assessment and Quote"}
            buttonLink={pageData.card_2_section?.card_2_button_link || "/sea-freight-quote"}
            imageSrc={pageData.card_2_section?.card_2_image || "/services/fullfillment.png"}
            reverse={true}
          />
        </div>

        {/* third card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData.card_3_section?.card_3_title || "Inventory Management & Optimization"}
            paragraph1={pageData.card_3_section?.card_3_description || "Carrying too much stock can tie up your capital, but carrying too little puts order fulfilment at risk. We can help you strike the perfect balance, using advanced WMS platforms and demand forecasting. You'll enjoy reduced storage costs, avoid stockouts, and keep your supply chain agile."}
            subtitle2={pageData.card_3_section?.card_3_subtitle || "You don't need large stocks to minimize disruptions..."}
            subtitle1=""
            paragraph2={pageData.card_3_section?.card_3_description_2 || "You need a reliable, agile logistics partner. Our lean, data-led strategies ensure you only carry what you need - nothing more, nothing less - all while being responsive to shifting demand."}
            paragraph3=""
            buttonText={pageData.card_3_section?.card_3_button_text || "Optimize Your Inventory with Us"}
            buttonLink={pageData.card_3_section?.card_3_button_link || "/air-freight-quote"}
            imageSrc={pageData.card_3_section?.card_3_image || "/services/inventory-management.png"}
            reverse={false}
          />
        </div>

        {/* fourth card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData.card_4_section?.card_4_title||"Special Project Transport"}
            paragraph1={pageData.card_4_section?.card_4_description || "From heavy-lift to out-of-gauge, we're always up for the toughest transport challenges. Our team manages permits, escorts, route planning, and intermodal transfers, so your cargo moves smoothly, safely, and on schedule."}
            subtitle2={pageData.card_4_section?.card_4_subtitle || "Project cargo doesn't need to be an endless logistics headache..."}
            subtitle1=""
            paragraph2={pageData.card_4_section?.card_4_description_2 || "Our in-house consultants plan every move from start to finish, taking complexity off your plate, and serving peace of mind instead."}
            paragraph3=""
            buttonText={pageData.card_4_section?.card_4_button_text || "Book an Unusual Move"}
            buttonLink={pageData.card_4_section?.card_4_button_link || "/air-freight-quote"}
            imageSrc={pageData.card_4_section?.card_4_image || "/services/special-project.png"}
            reverse={true}
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceCardRow />
      </div>

      <div
        className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden"
        style={{ marginTop: "100px" }}
      >
        <div className="absolute inset-0">
          <Image
            src="/services/integrt-banner.svg"
            alt="Airport"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight max-w-xl">
            {pageData.bottom_banner?.banner_title || "Commitment to Personalized Service"}
            {/* Commitment to
            <br />
            Personalized Service */}
          </h2>
          <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
            {pageData.bottom_banner?.button_text || "Why Nexus"}
            {/* Why Nexus */}
          </button>
        </div>
      </div>
      <Quote />
      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default IntegratedLogistics;
