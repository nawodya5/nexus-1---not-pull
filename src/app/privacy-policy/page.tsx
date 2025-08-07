
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import { getPrivacyPolicyData } from "@/sanity/lib/api";
import { PortableText } from "@portabletext/react";
import { Metadata } from "next";
import { urlFor } from "../../../client";


interface HeroSection {
  heroTitle?: string;
  heroImage?: string;
}


const PrivacyPolicy = async () => {
  const pageData = await getPrivacyPolicyData();

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }
  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        <HeroSection
          title={pageData.hero_section?.heroTitle || "Privacy Policy"}
          desktopImage={pageData.hero_section?.heroImage || "/privacy-policy-header.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Track and trace hero section"
        />
      </div>
      <div id="member-section" className="relative">
        <div className="">
          <div className="max-w-7xl mx-auto px-8 sm:px-8 lg:px-8">
            <section className="font-poppins whitespace-normal font-medium text-xs sm:text-sm lg:text-base text-[#676767] mb-4 leading-relaxed text-justify md:text-left space-y-4">
              <h1 className="text-[#162F65] text-3xl md:text-4xl lg:text-[50px] py-4 font-bold">
                {pageData.hero_section?.heroTitle || "Privacy Policy"}
              </h1>

              <PortableText value={pageData.privacy_policy ?? []} />



            </section>
          </div>
        </div>
      </div>

      <div className="py-6 lg:py-12">
        <LinkedinSection />
      </div>
    </div>
  );
};

export default PrivacyPolicy;

export async function generateMetadata(): Promise<Metadata> {
  const pageData = await getPrivacyPolicyData();

  // Set SEO data and fallback values
  const seoData = pageData?.seo;
  const defaultTitle = "Privacy Policy - Nexus Logix";
  const defaultDescription = "Read the official privacy policy of Nexus Logix to understand how we collect, use, and protect your personal information on our website and through our services.";
  const defaultKeywords = ["privacy policy", "data protection", "privacy statement", "Nexus Logix privacy", "user data", "website privacy"];
  const defaultOgImage = pageData?.hero_section?.heroImage || "/privacy-policy-header.svg";
  const defaultCanonicalUrl = "https://nexuslogix.com.au/privacy-policy";

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
