
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import { getTermsAndConditionsData } from "@/sanity/lib/api";
import { PortableText, PortableTextBlock } from "@portabletext/react";
import { Metadata } from "next";
import { urlFor } from "../../../client";



interface HeroSection {
  heroTitle?: string;
  heroImage?: string;
}
interface TermsAndConditionsData {
  hero_section?: HeroSection;
  terms_and_conditions?: PortableTextBlock[];
}

const TermsAndConditions = async () => {


  const pageData = await getTermsAndConditionsData();

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />



        <HeroSection
          title={pageData.hero_section?.heroTitle || "Terms and Conditions"}
          desktopImage={pageData.hero_section?.heroImage || "/terms-heeader.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Terms and Conditions hero section"
        />
      </div>

      {/* <div className="cros-x-hero flex relative">
                <div className="relative w-[70%] h-[200px] flex x-content-div">
                    <div className="clip-path "></div>
                    <Image src="/X-hero-new.png" alt="X" className="x1" height={500} width={500} />
                </div>
                <div className="absolute top-0 right-0 w-[100%] h-[200px] flex justify-end items-center clip-path-2-div">
                    <div className="w-[35%] h-[200px] right-image-div relative">
                        
                        <div className="clip-path-2"></div>
                    </div>
                </div>




                
                <div className="absolute top-0 left-0 w-full">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[8rem] sm:h-[10rem] md:h-[12.5rem] lg:h-[14rem] xl:h-[16rem] flex flex-col justify-center">
                        <h2 className="hero-title-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                            INTEGRATED LOGISTICS
                        </h2>
                        <h2 className="hero-title-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                            & SPECIAL PROJECTS
                        </h2>
                    </div>
                </div>


            </div> */}

      <div className="relative ">
        <div className="">
          <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <h1 className="text-[#162F65] text-3xl md:text-4xl lg:text-[50px] py-4 font-bold mb-6">
              {pageData.hero_section?.heroTitle || "Terms and Conditions"}
            </h1>

            {/* This is the other key fix! It correctly renders your Portable Text. */}
            {pageData.terms_and_conditions && pageData.terms_and_conditions.length > 0 ? (
              <div className="text-[#676767] text-base leading-relaxed space-y-4">
                <PortableText value={pageData.terms_and_conditions} />
              </div>
            ) : (
              <p className="text-[#676767] text-base leading-relaxed">No terms and conditions available.</p>
            )}

          </div>
        </div>
      </div>

      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default TermsAndConditions;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getTermsAndConditionsData();

  // Set SEO data and fallback values
  const seoData = pageData?.seo;
  const defaultTitle = "Terms and Conditions - Nexus Logix";
  const defaultDescription = "Read the terms and conditions for using the Nexus Logix website and our logistics services. This document outlines your rights and obligations as a user or customer.";
  const defaultKeywords = ["terms and conditions", "terms of service", "legal policy", "Nexus Logix terms", "website terms", "service agreement"];
  const defaultOgImage = pageData?.hero_section?.heroImage || "/terms-heeader.svg";
  const defaultCanonicalUrl = "https://nexuslogix.com.au/terms-and-conditions";

  return {
    title: seoData?.title || defaultTitle,
    description: seoData?.description || defaultDescription,
    keywords: seoData?.keywords || defaultKeywords,
    openGraph: {
      title: seoData?.openGraph?.ogTitle || seoData?.title || defaultTitle,
      description: seoData?.openGraph?.ogDescription || seoData?.description || defaultDescription,
      images: seoData?.openGraph?.ogImage ? [urlFor(seoData.openGraph?.ogImage).url()] : [defaultOgImage],
      url: seoData?.canonicalUrl || defaultCanonicalUrl,
      type: "website",
    },
    alternates: {
      canonical: seoData?.canonicalUrl || defaultCanonicalUrl,
    },
  }
}
