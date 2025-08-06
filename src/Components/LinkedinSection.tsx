import Image from "next/image";
import React from "react";
import { getLinkedInSectionData } from "@/sanity/lib/api";

// interface LinkedinSectionData {
//     section_title?: string;
//     section_description?: string;
//     button_link?: string;
// }

const LinkedinSection = async() => {

    // const [sectionData, setSectionData] = useState<LinkedinSectionData | null>(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const data = await linkedInSection();

                
    //             if (data && data.length > 0) {
    //                 setSectionData(data[0]);
    //             } else {
    //                 setSectionData(null); // No data found
    //             }
    //         } catch (err) {
    //             console.error("Failed to fetch LinkedIn section data:", err);
    //             setError("Failed to load LinkedIn section content.");
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, []); 

    // // --- Loading, Error, and No Data States ---
    // if (loading) {
    //     return (
    //         <section className="py-4 sm:py-8 lg:py-12">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="bg-[#E7E6DD] rounded-[10px] p-4 sm:p-6 lg:py-8 lg:px-12 flex flex-col items-center justify-center h-40">
    //                     Loading LinkedIn section...
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // if (error) {
    //     return (
    //         <section className="py-4 sm:py-8 lg:py-12">
    //             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //                 <div className="bg-red-100 text-red-700 rounded-[10px] p-4 sm:p-6 lg:py-8 lg:px-12 flex flex-col items-center justify-center h-40">
    //                     {error}
    //                 </div>
    //             </div>
    //         </section>
    //     );
    // }

    // // If no data is found after loading, you might choose to render nothing or a default message
    // if (!sectionData) {
    //     return null; // Or render a default LinkedIn section if you have one
    // }


    const sectionData = await getLinkedInSectionData();

    if (!sectionData) {
        return (
            <div>
                <p>No LinkedIn section data available.</p>
            </div>
        );
    }
    return (
        <section className="py-4 sm:py-8 lg:py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    className="bg-[#E7E6DD] rounded-[10px] p-4 sm:p-6 lg:py-8 lg:px-12 flex flex-col items-center lg:flex-row lg:justify-between gap-6 sm:gap-8 lg:gap-12">
                    <div className="text-center lg:text-left lg:mr-12">
                        <h3 className="text-xl sm:text-2xl lg:text-[34px] xl:text-[43px] font-normal text-[#162F65] mb-3 sm:mb-4">
                            {sectionData.section_title || "Link up on LinkedIn"}
                        </h3>
                        <p className="text-sm sm:text-base text-[#676767] font-medium leading-[28px] max-w-xl sm:max-w-2xl">
                            {sectionData.section_description || "Stay informed about the latest developments in the logistics space and get early updates about the lowest emerging rate windows by following us on LinkedIn."}
                        </p>
                    </div>
                    <div className="flex-shrink-0">
                        <a href={sectionData.button_link || "https://www.linkedin.com/company/nexus-logix"} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
                            <Image
                                src="/linkedin-button.svg"
                                width={200}
                                height={80}
                                alt="Connect with us on LinkedIn"
                                className="h-10 sm:h-12 lg:h-14 w-auto mx-auto lg:mx-0"
                            />
                        </a>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default LinkedinSection;