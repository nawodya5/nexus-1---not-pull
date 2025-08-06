
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
import { getRoadAndRailData } from "@/sanity/lib/api";


interface HeroSection {
    heroTitle?: string;
    heroImage?: string;
}

interface roadAndRailData {
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

  bottom_banner?: {
    banner_title?: string;
    button_text?: string;
    button_link?: string;
    image?: string;
    imageAlt?: string;
  }
}

const RoadAndRail = async() => {
  const pageData = await getRoadAndRailData();

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }

  // const [isMenuOpen, setIsMenuOpen] = useState(false);


  // const [pageData, setPageData] = useState<roadAndRailData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await roadAndRail();

  //       if (data && data.length > 0) {
  //         setPageData(data[0]);
  //       } else {
  //         setPageData(null);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch RoadAndRail data:", err);
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
          title={pageData.hero_section?.heroTitle || "ROAD & RAIL TRANSPORT"}
          desktopImage={pageData.hero_section?.heroImage || "/roadAndRail_hero_banner.svg"}
          mobileImage="/hero_arrow.svg"
          altText="road and rail hero section"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:-mt-28">
        <HeroTitleAndParagraph
          title={pageData.heading_title || "Road & Rail Transport"}
          paragraph1={pageData.heading_description || "Wheels and tracks alone aren't enough to successfully navigate Australia's scale - you'll need strategy, strong partnerships, on-ground expertise, and industry experience. Our experts build road and rail services that provide reliable coverage across every corridor, from regional pickups to metro deliveries and everything in between. With over 25 years of experience, our teams match every job to the right provider and mode, so that your freight arrives safely, on-timeee."}
          paragraph2=""
        />

        {/* first card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData.card_1_section?.card_1_title || "Road Transport"}
            paragraph1={pageData.card_1_section?.card_1_description ||"From origin, where our agents secure sharp ex works rates, to port handover, to cross-country highways via hand-picked carriers, and all the way through to final-mile delivery - we manage it all and coordinate the entire journey with precision. "}
            paragraph3={pageData.card_1_section?.card_1_description_3 || "Whether it's a 100 km hop or a 1,000 km haul, we assign the right operator for each shipment, ensuring reliable transit and competitive pricing every step of the way."}
            subtitle2={pageData.card_1_section?.card_1_subtitle || "Think only global players can offer true end-to-end logistics?"}
            subtitle1=""
            paragraph2={pageData.card_1_section?.card_1_description_2 || "Think again. Our global agent network and route-specialist carriers deliver unified origin, domestic, and final-mile service - without the 'global' price tag."}
            buttonText={pageData.card_1_section?.card_1_button_text || "Book Road Transport"}
            buttonLink={pageData.card_1_section?.card_1_button_link || "/air-freight-quote"}
            imageSrc={pageData.card_1_section?.card_1_image || "/road-and-rail-img1.svg"}
            reverse={false}
          />
        </div>

        {/* second card */}
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 ">
          <PhotoDescriptionSection
            title={pageData.card_2_section?.card_2_title || "Rail (and Road) Freight"}
            paragraph1={pageData.card_2_section?.card_2_description || "For high-volume domestic moves, rail freight offers unbeatable efficiency, especially when paired with our last-mile delivery options. Whether you're transporting containerised freight, pallets, or bulk commodities, we leverage Australia's major rail corridors to keep your costs low and your operations moving."}
            subtitle2={pageData.card_2_section?.card_2_subtitle || "Rail doesn't have to be slow or rigid..."}
            subtitle1=""
            paragraph2={pageData.card_2_section?.card_2_description_2 || "You just need to plan it right, and that's where we shine. Our intermodal planning blends rail's long-haul efficiency with the flexibility of on-road delivery - giving you predictable transit times, scalable capacity, and a serious cost advantage."}
            paragraph3=""
            buttonText={pageData.card_2_section?.card_2_button_text || "Explore Rail Options"}
            buttonLink={pageData.card_2_section?.card_2_button_link || "/sea-freight-quote"}
            imageSrc={pageData.card_2_section?.card_2_image || "/road-and-rail-img2.png"}
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
            src={pageData.bottom_banner?.image || "/roadAndRail_banner.png"}
            alt={pageData.bottom_banner?.imageAlt || "Airport"}
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.6]"></div>
        </div>
        <Quote />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight max-w-xl">
            {pageData.bottom_banner?.banner_title || "Global Reach Australian Expertise"}
            {/* Global Reach
            <br />
            Australian Expertise */}
          </h2>
          <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
            {pageData.bottom_banner?.button_text || "Why Nexus"}
          </button>
        </div>

        {/*<div*/}
        {/*    className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 text-white text-sm sm:text-base lg:text-lg font-light">*/}
        {/*    Sydney Airport*/}
        {/*</div>*/}
      </div>

      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default RoadAndRail;
