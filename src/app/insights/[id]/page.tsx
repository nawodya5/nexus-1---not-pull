
import Image from "next/image";
import Nav from "@/Components/Nav";
import React from "react";
import LinkedinSection from "@/Components/LinkedinSection";
import { getInsightPageData, getPostData } from "@/sanity/lib/api";
import { useParams } from "next/navigation";

import { PortableText } from '@portabletext/react';

interface RelatedPost {
    postTitle: string;
    Post_short_description: string;
    postContent: any;
    slug: string;
    postImage: string;
}

interface HeroSection {
    heroTitle?: string;
    heroImage?: string;
}

interface InsightsPageData {
    hero_section?: HeroSection;
    Page_subtitle?: string;
}

interface PostDetails {
    postTitle: string;
    Post_short_description: string;
    postContent: any;
    slug: string;
    postImage: string;
    related_posts?: RelatedPost[];
}

const InsightInner = async() => {
    const params = useParams();
    const slug = Array.isArray(params.id) ? params.id[0] : params.id;

    
    const postData: PostDetails | null = await getPostData(slug);
    const insightsPageData: InsightsPageData | null = await getInsightPageData();

    if (!postData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                No content available for this post.
            </div>
        );
    }
    return (
        <div className="min-h-screen bg-[#F6F6F6] poppins">
            <div className="relative mx-auto block">
                <Nav />
                {/* Hero Section */}
                <div id="hero-section" className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src={insightsPageData?.hero_section?.heroImage || "/insights-banner.svg"}
                            alt="Insights Banner"
                            fill
                            className="object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60 justify-start">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    {insightsPageData?.hero_section?.heroTitle || "Insights"}
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* ... Rest of your component (binding postData) ... */}
            <div className="container relative -top-22 lg:-top-50 mx-auto px-8 py-8 lg:py-12 max-w-7xl">
                {/* Hero Section */}
                <div className="space-y-6 lg:space-y-8">
                    {/* Main Title */}
                    <h1 className="text-[#162F65] font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[50px] leading-tight lg:leading-[60px] tracking-[1.65px] max-w-md lg:max-w-lg">
                        {postData.postTitle}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-[#162F65] text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed lg:leading-[32px] font-medium max-w-5xl">
                        {postData.Post_short_description}
                    </p>

                    {/* Hero Image */}
                    <div className="w-full max-w-5xl">
                        {postData.postImage && (
                            <Image
                                src={postData.postImage}
                                alt={postData.postTitle || "Post image"}
                                width={1200}
                                height={800}
                                className="w-full h-auto rounded-[10px] object-cover aspect-[2/1]"
                            />
                        )}
                    </div>
                </div>

                {/* Content Section */}
                <div className="mt-12 lg:mt-16 space-y-6 lg:space-y-8">
                    <div className="prose prose-lg max-w-none">
                        {/* Assuming postContent is Sanity Portable Text */}
                        <PortableText value={postData.postContent} />
                    </div>
                </div>

                {/* Related Insights Section */}
                {postData.related_posts && postData.related_posts.length > 0 && (
                    <div className="mt-16 lg:mt-20">
                        <h2 className="text-[#162F65] text-base sm:text-lg lg:text-xl leading-relaxed lg:leading-[32px] font-normal mb-8 lg:mb-12">
                            This Insights may also be of interest to you.
                        </h2>
                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
                            {postData.related_posts.map((post) => (
                                <div key={post.slug} className="relative group">
                                    <div className="relative w-full h-44 rounded-[10px] overflow-hidden">
                                        <Image
                                            src={post.postImage}
                                            alt={post.postTitle}
                                            width={600}
                                            height={600}
                                            className="w-full h-full object-cover"
                                        />
                                        {/* Text Overlay */}
                                        <div className="absolute inset-0">
                                            <div className="absolute bg-gradient-to-t from-[#002B64] to-[#00255700] inset-0" />
                                            <div className="absolute bottom-9 left-6 right-6">
                                                <h3 className="text-white font-bold text-sm lg:text-base leading-normal tracking-[0.6px]">
                                                    {post.postTitle}
                                                </h3>
                                                <p className="text-white text-[10px] leading-[12px] mb-4">
                                                    {post.Post_short_description}
                                                </p>
                                            </div>
                                            {/* Read More Button */}
                                            <div className="absolute bottom-4 left-6">
                                                <a
                                                    href={`/insights/${post.slug}`}
                                                    className="bg-white text-[#162F65] px-3 py-1.5 rounded-[10px] text-xs font-medium hover:scale-105 transition-all duration-300"
                                                >
                                                    Read More
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            <div className="-mt-15 lg:-mt-50">
                <LinkedinSection />
            </div>

        </div>
    );
};

export default InsightInner;