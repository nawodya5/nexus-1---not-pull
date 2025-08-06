// Import the pre-configured Sanity client from your client.ts file
import sanityClient from '../../../client';

// Import queries (these are now direct GROQ query strings)
import {
    airAndFreightService,
    contactUs,
    customs,
    footer,
    freight_quote,
    homePage,
    roadAndRail,
    ServiceCardRowSection,
    services,
    termsAndConditions,
    trackAndTrace,
    whyNexus,
    integratedLogistics,
    leadership,
    linkedInSection,
    privacyPolicy,
    insights,
    Post,
} from './queries';


// Import types
import {
    CardSection,
    SEOData,
    BottomBanner,
    HeroSection,
    AirAndFreightData,
    contactItem,
    SeoData,
    pageData,
    FormData,
    AccordianItem,
    CustomsData,
    insightData,
    RelatedPost,
    // InsightsPageData,
    PostDetails,
    IntegratedLogisticsData,
    TeamMemberSanityData,
    LeadershipPageData,
    TeamMember,
    PrivacyPolicyData,
    roadAndRailData,
    ServiceCard,
    ServiceData,
    Service,
    TermsAndConditionsData,
    IconCard,
    trackAndTraceData,
    cardSection,
    whyNexusData,
    LinkedinSectionData,
    photoSectionDescriptionItem,
    ServiceCardData,

} from '@/sanity/types';

// The 'sanityClient' variable is imported and will now be directly used in the fetch functions below.

/**
 * Fetches data for the Home Page.
 * @returns {Promise<pageData | null>} The home page data or null if an error occurs.
 */
export async function getHomePageData() {
    try {
        const data = await sanityClient.fetch(homePage);
        console.log("Fetched home page data:", data);
        // Assuming homePage query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching home page data:", error);
        return null;
    }
}



/**
 * Fetches data for the Home Page.
 * @returns {Promise<pageData | null>} The home page data or null if an error occurs.
 */
export async function getPostData(slug: string | undefined): Promise<PostDetails | null> {
    try {
        const data = await sanityClient.fetch(Post, { slug });
        console.log("Fetched post data:", data);
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching post data:", error);
        return null;
    }
}




/**
 * Fetches data for the Home Page.
 * @returns {Promise<pageData | null>} The home page data or null if an error occurs.
 */
export async function getInsightPageData(): Promise<pageData | null> {
    try {
        const data = await sanityClient.fetch(insights);
        console.log("Fetched insights page data:", data);
        // Assuming insights query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching insights page data:", error);
        return null;
    }
}

/**
 * Fetches data for the Air and Freight Service page.
 * @returns {Promise<AirAndFreightData | null>} The air and freight service data or null if an error occurs.
 */
export async function getAirAndFreightServiceData(): Promise<AirAndFreightData | null> {
    try {
        const data = await sanityClient.fetch(airAndFreightService);
        console.log("Fetched air and freight service data:", data);
        // Assuming airAndFreightService query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching air and freight service data:", error);
        return null;
    }
}

/**
 * Fetches data for the Contact Us page.
 * @returns {Promise<contactItem | null>} The contact us data or null if an error occurs.
 */
export async function getContactUsData(): Promise<contactItem | null> {
    try {
        const data = await sanityClient.fetch(contactUs);
        console.log("Fetched contact us data:", data);
        // Assuming contactUs query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching contact us data:", error);
        return null;
    }
}

/**
 * Fetches data for the Customs page.
 * @returns {Promise<CustomsData | null>} The customs data or null if an error occurs.
 */
export async function getCustomsData(): Promise<CustomsData | null> {
    try {
        const data = await sanityClient.fetch(customs);
        console.log("Fetched customs data:", data);
        // Assuming customs query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching customs data:", error);
        return null;
    }
}

/**
 * Fetches data for the Footer section.
 * @returns {Promise<any | null>} The footer data or null if an error occurs. (Assuming footer has a specific type, replace 'any')
 */
export async function getFooterData(): Promise<any | null> {
    try {
        const data = await sanityClient.fetch(footer);
        console.log("Fetched footer data:", data);
        // Assuming footer query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching footer data:", error);
        return null;
    }
}

/**
 * Fetches data for the Freight Quote section.
 * @returns {Promise<FormData | null>} The freight quote form data or null if an error occurs.
 */
export async function getFreightQuoteData(): Promise<FormData | null> {
    try {
        const data = await sanityClient.fetch(freight_quote);
        console.log("Fetched freight quote data:", data);
        // Assuming freight_quote query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching freight quote data:", error);
        return null;
    }
}

/**
 * Fetches data for the Road and Rail Service page.
 * @returns {Promise<roadAndRailData | null>} The road and rail service data or null if an error occurs.
 */
export async function getRoadAndRailData(): Promise<roadAndRailData | null> {
    try {
        const data = await sanityClient.fetch(roadAndRail);
        console.log("Fetched road and rail data:", data);
        // Assuming roadAndRail query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching road and rail data:", error);
        return null;
    }
}

/**
 * Fetches data for the Service Card Row Section.
 * @returns {Promise<CardSection | null>} The service card row section data or null if an error occurs.
 */
export async function getServiceCardRowSectionData(): Promise<ServiceCardData | null> {
    try {
        const data = await sanityClient.fetch(ServiceCardRowSection);
        console.log("Fetched service card row section data:", data);
        // Assuming ServiceCardRowSection query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching service card row section data:", error);
        return null;
    }
}

/**
 * Fetches data for the Services page.
 * @returns {Promise<ServiceData | null>} The services page data or null if an error occurs.
 */
export async function getServicesData(): Promise<ServiceData | null> {
    try {
        const data = await sanityClient.fetch(services);
        console.log("Fetched services data:", data);
        // Assuming services query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching services data:", error);
        return null;
    }
}

/**
 * Fetches data for the Terms and Conditions page.
 * @returns {Promise<TermsAndConditionsData | null>} The terms and conditions data or null if an error occurs.
 */
export async function getTermsAndConditionsData(): Promise<TermsAndConditionsData | null> {
    try {
        const data = await sanityClient.fetch(termsAndConditions);
        console.log("Fetched terms and conditions data:", data);
        // Assuming termsAndConditions query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching terms and conditions data:", error);
        return null;
    }
}

/**
 * Fetches data for the Track and Trace page.
 * @returns {Promise<trackAndTraceData | null>} The track and trace data or null if an error occurs.
 */
export async function getTrackAndTraceData(): Promise<trackAndTraceData | null> {
    try {
        const data = await sanityClient.fetch(trackAndTrace);
        console.log("Fetched track and trace data:", data);
        // Assuming trackAndTrace query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching track and trace data:", error);
        return null;
    }
}

/**
 * Fetches data for the Why Nexus page.
 * @returns {Promise<whyNexusData | null>} The why Nexus data or null if an error occurs.
 */
export async function getWhyNexusData(): Promise<whyNexusData | null> {
    try {
        const data = await sanityClient.fetch(whyNexus);
        console.log("Fetched why Nexus data:", data);
        // Assuming whyNexus query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching why Nexus data:", error);
        return null;
    }
}

/**
 * Fetches data for the Integrated Logistics page.
 * @returns {Promise<IntegratedLogisticsData | null>} The integrated logistics data or null if an error occurs.
 */
export async function getIntergratedLogistics(): Promise<IntegratedLogisticsData | null> {
    try {
        const data = await sanityClient.fetch(integratedLogistics);
        console.log("Fetched integrated logistics data:", data);
        // Assuming integratedLogistics query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching integrated logistics data:", error);
        return null;
    }
}

/**
 * Fetches data for the Leadership page.
 * @returns {Promise<LeadershipPageData | null>} The leadership page data or null if an error occurs.
 */
export async function getLeadershipData(): Promise<LeadershipPageData | null> {
    try {
        const data = await sanityClient.fetch(leadership);
        console.log("Fetched leadership data:", data);
        // Corrected: Assuming leadership query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching leadership data:", error);
        return null;
    }
}

/**
 * Fetches data for the LinkedIn Section.
 * @returns {Promise<LinkedinSectionData | null>} The LinkedIn section data or null if an error occurs.
 */
export async function getLinkedInSectionData(): Promise<LinkedinSectionData | null> {
    try {
        const data = await sanityClient.fetch(linkedInSection);
        console.log("Fetched LinkedIn section data:", data);
        // Assuming linkedInSection query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching LinkedIn section data:", error);
        return null;
    }
}


export async function getPrivacyPolicyData(): Promise<PrivacyPolicyData | null> {
    try {
        const data = await sanityClient.fetch(privacyPolicy);
        console.log("Fetched privacy policy data:", data);
        // Assuming privacyPolicy query returns an array, take the first item
        return data && data.length > 0 ? data[0] : null;
    } catch (error) {
        console.error("Error fetching privacy policy data:", error);
        return null;
    }
}

// You can add more specific API functions here as needed, e.g., for fetching
// individual service details, blog posts, etc., if your queries support it.
