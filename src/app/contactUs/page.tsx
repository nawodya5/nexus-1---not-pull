"use client";

import React, { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { ChevronDown, Send } from "lucide-react";
import Image from "next/image";
import Nav from "@/Components/Nav";
import Quote from "@/Components/Quote";
import HeroSection from "@/Components/HeroSection";
import { getContactUsData } from "@/sanity/lib/api";
// Import the Sanity client from your client file
import client from "../../../client";
import { Metadata } from "next";
import imageUrlBuilder from '@sanity/image-url';

interface contactItem {
  icon?: string;
  title?: string;
  contact_info?: string;
}

interface SeoData {
  title?: string;
  description?: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: { asset: { _ref: string } }; // Sanity image format
  canonicalUrl?: string;
}
interface HeroSection {
  heroTitle?: string;
  heroImage?: string;
}

interface pageData {
  hero_section?: HeroSection;
  contact_form_title: string;
  contact_form_description_1: string;
  contact_form_description_2: string;
  contact_item_1: contactItem;
  contact_item_2: contactItem;
  contact_item_3: contactItem;
  x_link?: string;
  linkedin_link?: string;
  facebook_link?: string;
  instagram_link?: string;
  map_link?: string;
}

interface FormData {
  privacyPolicyAccepted: boolean;
  firstName: string;
  lastName: string;
  companyEmail: string;
  phone: string;
  companyName: string;
  website: string;
  address: string;
  city: string;
  province: string;
  topic: string;
  message: string;
}

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const [formData, setFormData] = useState<FormData>({
    privacyPolicyAccepted: false,
    firstName: "",
    lastName: "",
    companyEmail: "",
    phone: "",
    companyName: "",
    website: "",
    address: "",
    city: "",
    province: "",
    topic: "HS Classifications & Duty Optimisation",
    message: "",
  });

  const [isTopicOpen, setIsTopicOpen] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error on input change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };


  const handlePrivacyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      privacyPolicyAccepted: checked,
    }));
    setErrors((prev) => ({
      ...prev,
      privacyPolicyAccepted: "",
    }));
  };



  const [pageData, setPageData] = useState<pageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await contactUs();

  //       if (data && data.length > 0) {
  //         setPageData(data[0]);
  //       } else {
  //         setPageData(null);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch contactUs data:", err);
  //       setError("Failed to load page content.");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  // }

  // if (error) {
  //   return <div className="min-h-screen flex items-center justify-center text-red-600">{error}</div>;
  // }

  // if (!pageData) {
  //   return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  // }

  
  if (!pageData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">No content available.</div>
            </div>
        );
    }
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required.";
    }

    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required.";
    }

    if (!formData.privacyPolicyAccepted) {
      newErrors.privacyPolicyAccepted = "You must accept the privacy policy.";
    }

    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Company email is required.";
    } else if (
      !/^[a-z][a-z0-9._%+-]*@[a-z0-9.-]+\.[a-z]{2,}$/.test(
        formData.companyEmail.trim()
      )
    ) {
      newErrors.companyEmail =
        "Company email is invalid or must be all lowercase and start with a lowercase letter.";
    } else if (
      formData.companyEmail.trim().length < 6 ||
      formData.companyEmail.trim().length > 254
    ) {
      newErrors.companyEmail =
        "Company email must be between 6 and 254 characters.";
    }

    // if (!formData.phone.trim()) {
    //   newErrors.phone = "Phone number is required.";
    // } else if (!/^\+\d{1,4}(?:\s\d{1,4}){1,4}$/.test(formData.phone)) {
    //   newErrors.phone =
    //     "Phone number must start with + and be in a valid format (e.g., +61 X XXXX XXXX).";
    // }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required.";
    }

    // if (
    //   formData.website.trim() &&
    //   !/^https?:\/\/\S+\.\S+$/.test(formData.website)
    // ) {
    //   newErrors.website = "Invalid website URL.";
    // }

    if (formData.city.trim() && !/^[a-zA-Z\s'-]+$/.test(formData.city)) {
      newErrors.city = "City must contain only letters.";
    }

    if (
      formData.province.trim() &&
      !/^[a-zA-Z\s'-]+$/.test(formData.province)
    ) {
      newErrors.province = "State must contain only letters.";
    }



    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Updated handleSubmit to use the imported client
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmissionStatus("submitting");
      try {

        const result = await client.create({
          _type: "contactSubmission",
          firstName: formData.firstName,
          lastName: formData.lastName,
          companyEmail: formData.companyEmail,
          phone: formData.phone,
          companyName: formData.companyName,
          website: formData.website,
          address: formData.address,
          city: formData.city,
          province: formData.province,
          topic: formData.topic,
          message: formData.message,
          privacyPolicyAccepted: formData.privacyPolicyAccepted,
          submittedAt: new Date().toISOString(),
        });

        console.log("Form submitted to Sanity:", result);
        setSubmissionStatus("success");
        // Reset form after successful submission
        setFormData({
          privacyPolicyAccepted: false,
          firstName: "",
          lastName: "",
          companyEmail: "",
          phone: "",
          companyName: "",
          website: "",
          address: "",
          city: "",
          province: "",
          topic: "HS Classifications & Duty Optimisation",
          message: "",
        });
      } catch (err) {
        console.error("Failed to submit form to Sanity:", err);
        setSubmissionStatus("error");
      }
    } else {
      console.log("Validation failed!");
      setSubmissionStatus("idle");
    }
  };

  const topics = [
    "HS Classifications & Duty Optimisation",
    "Manage refund claims",
    "Duty Drawbacks and Rebates",
    "Australian Trusted Trader Application",
    "Get Started with a supply chain Audit",
    "Customs and Border Processing ",
    "Supply Chain Consultancy & Audits",
    "3PL & Warehousing",
    "Fullment & E-Commerce Services",
    "Inventory Management & Optimisation",
    "Special Project Transport",
    "Other",
  ];

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />
        <HeroSection
          title={pageData?.hero_section?.heroTitle || "DON'T HESITATE TO CONTACT US"}
          desktopImage={pageData?.hero_section?.heroImage || "/contactUs_hero_banner.svg"}
          mobileImage="/hero_arrow.svg"
          altText="Contact us hero section"
        />
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-16 lg:-mt-28 poppins">
        {/* Top Section - Contact Form */}
        <div className="flex flex-col lg:flex-row overflow-hidden">
          {/* Left Panel - Contact Info */}
          <div
            className="lg:w-2/5 xl:w-[555px] p-8 lg:p-12 relative rounded-lg"
            style={{ backgroundColor: "#E7E6DD" }}
          >
            <div className="max-w-md md:max-w-xl">
              <h1
                className="mb-4 font-poppins font-semibold text-[28px] leading-[40px] tracking-[0.03em] md:text-[32px] md:leading-[48px] lg:text-[39px] lg:leading-[38px]"
                style={{ color: "#162F65" }}
              >
                {pageData?.contact_form_title || "We're here to help."}
              </h1>

              <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                {pageData?.contact_form_description_1 || "Tell us as much as you can... Nothing is too complex for us..."}
              </p>

              <p className="mb-2 font-poppins font-normal text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] text-left text-[#0F2043]">
                {pageData?.contact_form_description_2 || "Commercial shipments only - no personal effects."}
              </p>

              {/* Contact Methods */}
              <div className="space-y-6 mb-8 lg:mt-26 sm:mt-4 mt-4">
                <div className="flex items-start space-x-3">
                  <Image
                    src={pageData?.contact_item_1.icon || "/call_icon.png"}
                    alt="Phone Icon"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <div>
                    <h3
                      className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                      style={{ color: "#162F65" }}
                    >
                      {pageData?.contact_item_1.title || "Call Us"}
                    </h3>
                    <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                      {pageData?.contact_item_1.contact_info || "+61 7 3737 4310"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Image
                    src={pageData?.contact_item_2.icon || "/mail_icon.png"}
                    alt="mail Icon"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <div>
                    <h3
                      className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                      style={{ color: "#162F65" }}
                    >
                      {pageData?.contact_item_2.title || "Send Us Mail"}
                    </h3>
                    <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                      {pageData?.contact_item_2.contact_info || "enquiries@nexuslogix.com.au"}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Image
                    src={pageData?.contact_item_3.icon || "/location_icon.png"}
                    alt="location Icon"
                    width={20}
                    height={20}
                    className="mt-1"
                  />
                  <div>
                    <h3
                      className="font-medium text-[16px] md:text-[18px] lg:text-[20px] leading-[25px] tracking-[0.013em] mb-1 font-poppins"
                      style={{ color: "#162F65" }}
                    >
                      {pageData?.contact_item_3.title || "We Are Located"}
                    </h3>
                    <p className="font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-justify text-[#162F65]">
                      {pageData?.contact_item_3.contact_info || "Level 38, 71 Eagle Street, Brisbane"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Icons - Bottom Left */}
            <div className="absolute bottom-4 sm:bottom-4 md:bottom-4 lg:bottom-8 left-8 flex space-x-3">
              <a
                href={pageData?.x_link || "https://www.facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/x_icon.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href={pageData?.linkedin_link || "https://www.linkedin.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/linkedin_icon.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href={pageData?.facebook_link || "https://www.facebook.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/facebook_icon.png"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
              <a
                href={pageData?.instagram_link || "https://www.youtube.com"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/instagram_icon.png"
                  alt="YouTube"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </a>
            </div>
          </div>

          {/* Right Panel - Contact Form */}
          <div className="lg:w-3/5 xl:w-2/3 p-8 lg:p-12 bg-[#F6F6F6]">
            <div className="max-w-2xl">
              {submissionStatus === "submitting" && (
                <p className="text-blue-600 text-sm mb-4">Submitting your request...</p>
              )}
              {submissionStatus === "success" && (
                <p className="text-green-600 text-sm mb-4">Your request has been submitted successfully!</p>
              )}
              {submissionStatus === "error" && (
                <p className="text-red-600 text-sm mb-4">Failed to submit your request. Please try again later.</p>
              )}

              {/* Contact Information */}
              <div className="mb-8">
                <h2
                  className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                  style={{ color: "#162F65" }}
                >
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                      />
                      <span className="absolute right-0 bottom-2 text-black">*</span>
                    </div>
                    {errors.firstName && (
                      <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                      />
                      <span className="absolute right-0 bottom-2 text-black">*</span>
                    </div>
                    {errors.lastName && (
                      <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Company Email Address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        name="companyEmail"
                        value={formData.companyEmail}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                      />
                      <span className="absolute right-0 bottom-2 text-black">*</span>
                    </div>
                    {errors.companyEmail && (
                      <p className="text-red-600 text-sm mt-1">{errors.companyEmail}</p>
                    )}
                  </div>
                  <div className="relative">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Phone
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+61 2 1234 5678"
                        required
                        className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                      />
                      <span className="absolute right-0 bottom-2 text-black">*</span>
                    </div>
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="mb-8">
                <h2
                  className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                  style={{ color: "#162F65" }}
                >
                  Company Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Company Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="companyName"
                        value={formData.companyName}
                        onChange={handleInputChange}
                        required
                        className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                      />
                      <span className="absolute right-0 bottom-2 text-black">*</span>
                    </div>
                    {errors.companyName && (
                      <p className="text-red-600 text-sm mt-1">{errors.companyName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.website && (
                      <p className="text-red-600 text-sm mt-1">{errors.website}</p>
                    )}
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                  />
                  {errors.address && (
                    <p className="text-red-600 text-sm mt-1">{errors.address}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2"
                    />
                    {errors.city && (
                      <p className="text-red-600 text-sm mt-1">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      State
                    </label>
                    <input
                      type="text"
                      name="province"
                      value={formData.province}
                      onChange={handleInputChange}
                      className="w-full border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                    />
                    {errors.province && (
                      <p className="text-red-600 text-sm mt-1">{errors.province}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Topic */}
              <div className="mb-8">
                <h2
                  className="mb-6 font-poppins font-normal text-[18px] md:text-[22px] lg:text-[25px] leading-[25px] tracking-[0.013em]"
                  style={{ color: "#162F65" }}
                >
                  Topic
                </h2>
                <div className="relative">
                  <button
                    type="button"
                    onClick={() => setIsTopicOpen(!isTopicOpen)}
                    className="w-full flex items-center justify-between border-b-2 border-black focus:border-blue-500 outline-none pb-2 text-left"
                  >
                    <span className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                      {formData.topic}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${isTopicOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  {isTopicOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-md shadow-lg z-10 mt-1 max-h-48 overflow-y-auto">
                      {topics.map((topic, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, topic }));
                            setIsTopicOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-700"
                        >
                          {topic}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mb-8">
                <label className="block mb-2 font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] text-black">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Include a description of your requirements"
                  rows={2}
                  className="w-full font-poppins font-normal text-[14px] md:text-[16px] lg:text-[18px] leading-[25px] tracking-[0.013em] border-b-2 border-black focus:border-blue-500 outline-none pb-2 placeholder-[#676767]"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Privacy Policy */}
              <div className="mb-8">
                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacyPolicyAccepted"
                    className="mt-1"
                    checked={formData.privacyPolicyAccepted || false}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        privacyPolicyAccepted: e.target.checked,
                      }))
                    }
                  />
                  <label
                    htmlFor="privacy"
                    className="font-poppins font-normal text-[12px] md:text-[14px] lg:text-[15px] leading-[25px] tracking-[0em] text-[#676767]"
                  >
                    Our{" "}
                    <a href="/privacy-policy" className="underline">
                      privacy policy
                    </a>{" "}
                    contains detailed information about our handling of personal
                    information.
                  </label>
                </div>
                {errors.privacyPolicyAccepted && (
                  <p className="text-red-600 text-sm mt-1">{errors.privacyPolicyAccepted}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <button
                  onClick={handleSubmit}
                  disabled={submissionStatus === "submitting"}
                  className={`px-8 py-3 font-poppins font-medium text-[16px] md:text-[20px] lg:text-[25px] leading-[100%] tracking-[0em] text-white rounded-md hover:bg-blue-950 hover:scale-105 transition-all duration-300 ${submissionStatus === "submitting" ? "opacity-50 cursor-not-allowed" : ""}`}
                  style={{ backgroundColor: "#162F65" }}
                >
                  Submit My Request
                </button>
              </div>
            </div>
          </div>
        </div>
        <Quote />
      </div>

      {/* Map Section - Full Width */}
      <div className="py-12 w-full h-96 lg:h-[500px] overflow-hidden shadow-lg">
        <iframe
          src={pageData.map_link || "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.060111295403!2d153.0303199!3d-27.4673879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b915b171910d4d5%3A0x85ac0d5597492f4!2sLevel%2038%2F71%20Eagle%20St%2C%20Brisbane%20City%20QLD%204000%2C%20Australia!5e0!3m2!1sen!2slk!4v1752561333604!5m2!1sen!2slk"}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        ></iframe>
      </div>
    </div>
  );
}

