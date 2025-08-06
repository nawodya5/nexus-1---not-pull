
import Image from "next/image";
import LinkedinSection from "@/Components/LinkedinSection";
import Quote from "@/Components/Quote";
import React from "react"; // Import useEffect and useState
import Nav from "@/Components/Nav";
import Link from "next/link";
import HeroSection from "@/Components/HeroSection";

import { getLeadershipData } from "@/sanity/lib/api";

interface HeroSection {
  heroTitle?: string;
  heroImage?: string;
}


interface TeamMemberSanity {
  person_name?: string;
  person_designation?: string;
  person_photo?: string;
  person_background_image?: string; // Used for flipBg
  imageAlt?: string;
  link_text?: string;
  link?: string;
  description?: string;
}
interface LeadershipPageData {
  hero_section?: HeroSection;
  Page_subtitle?: string;
  terms_member_1?: TeamMemberSanity;
  terms_member_2?: TeamMemberSanity;
  terms_member_3?: TeamMemberSanity;
  terms_member_4?: TeamMemberSanity;
  terms_member_5?: TeamMemberSanity;
  terms_member_6?: TeamMemberSanity;
  terms_member_7?: TeamMemberSanity;
  terms_member_8?: TeamMemberSanity;
  terms_member_9?: TeamMemberSanity;
}

// Unified Team Member type for easy mapping
interface TeamMember {
  id: number;
  name: string;
  title: string;
  flipBg: string;
  descriptionMain: string;
  linkText: string;
  linkUrl: string;
  image: string;
  imageAlt?: string;
}
// --- End Type Definitions ---


const LeadershipPage = async () => {


  const pageData = await getLeadershipData();

  if (!pageData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        No leadership content available.
      </div>
    );
  }


  const teamMembersArray: TeamMemberSanity[] = [
    pageData.terms_member_1,
    pageData.terms_member_2,
    pageData.terms_member_3,
    pageData.terms_member_4,
    pageData.terms_member_5,
    pageData.terms_member_6,
    pageData.terms_member_7,
    pageData.terms_member_8,
    pageData.terms_member_9,
  ].filter(Boolean) as TeamMemberSanity[];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />
        <HeroSection
          title={pageData.hero_section?.heroTitle || "TEAM NEXUS"}
          desktopImage={pageData.hero_section?.heroImage || "/leadership.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Leadership hero section"
        />
      </div>
      <div
        id="member-section"
        className="relative container max-w-7xl mx-auto -top-22 lg:-top-50"
      >
        <div className="">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mb-4">
              <div className="flex items-center space-x-4">
                <div className="w-3 bg-[#E7E6DD] rounded-[9px] h-25 mt-1"></div>
                <p className="text-[#0F2043] font-medium text-sm z-50 md:text-base lg:text-[24px] leading-relaxed">
                  {pageData.Page_subtitle || "Like a finely tuned F1 pit crew, our team is always on standby – ready to keep your supply chain racing ahead at peak performance."}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 max-w-7xl mx-auto">
              {/* Use teamMembersArray here */}
              {teamMembersArray.map((member, index) => { // Added index for key if no unique ID from Sanity
                return (
                  <div
                    key={index} // Consider using a unique ID from Sanity if available (e.g., member._id)
                    className="relative w-full max-w-86 mx-auto sm:max-w-full h-80 sm:h-96 lg:h-[416px] flip-card-container"
                    style={{ boxSizing: "border-box" }}
                  >
                    <div className="flip-card-inner rounded-md shadow-lg w-full h-full">
                      <div className="flip-card-front bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden w-full h-full">
                        {member.person_photo && (
                          <Image
                            src={member.person_photo}
                            alt={member.imageAlt || member.person_name || "Team Member"}
                            layout="fill"
                            objectFit="cover"
                            quality={80}
                            className="absolute inset-0 z-0"
                          />
                        )}
                        <div className="absolute inset-0 text-start z-10 flex flex-col justify-end p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                          <h3 className="text-white text-lg sm:text-xl font-bold mb-0.5">
                            {member.person_name}
                          </h3>
                          <p className="text-gray-300 text-xs sm:text-sm font-medium">
                            {member.person_designation}
                          </p>
                        </div>
                      </div>

                      <div
                        className={`flip-card-back relative bg-[#D5D4CC] border border-[#ABABA5] overflow-hidden flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 bg-no-repeat bg-cover bg-center w-full h-full`}
                        style={{ backgroundImage: member.person_background_image ? `url(${member.person_background_image})` : 'none' }} // Corrected to use person_background_image
                      >
                        {/* Display the main description part */}
                        {member.description && ( // Changed to member.description
                          <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left mb-3 whitespace-pre-line">
                            {member.description}
                          </p>
                        )}
                        {/* Display the link text if available */}
                        {member.link_text && member.link && ( // Changed to member.link_text and member.link
                          <Link href={member.link} passHref>
                            <p className="text-[#464646] text-xs sm:text-xs lg:text-sm leading-tight text-left underline mb-2 cursor-pointer">
                              {member.link_text}
                            </p>
                          </Link>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <Quote />
        </div>
      </div>

      <div className="relative h-64 sm:h-80 lg:h-96 lg:-mt-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/leader-banner.png" // You might want to get this from Sanity too
            alt="Commitment to Personalised Service banner"
            width={1000}
            height={400}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/[0.8]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center">
          <h2 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-medium text-white mb-4 sm:mb-6 lg:mb-8 leading-tight">
            Commitment to
            <br />
            Personalised Service
          </h2>
          <Link href="/services">
            <button className="bg-[#E8AF30] text-[#282828] px-6 hover:text-white cursor-pointer duration-300 transition sm:px-8 py-1 sm:py-2 text-sm sm:text-base lg:text-base rounded-lg font-normal">
              View Services
            </button>
          </Link>
        </div>
      </div>

      <div className="py-6 lg:py-2">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default LeadershipPage;