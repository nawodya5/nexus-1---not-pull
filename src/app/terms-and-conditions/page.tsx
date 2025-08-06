
import LinkedinSection from "@/Components/LinkedinSection";
import React from "react";
import Nav from "@/Components/Nav";
import HeroSection from "@/Components/HeroSection";
import { getTermsAndConditionsData } from "@/sanity/lib/api";
import { PortableText, PortableTextBlock } from "@portabletext/react";



interface HeroSection {
    heroTitle?: string;
    heroImage?: string;
}
interface TermsAndConditionsData {
  hero_section?: HeroSection;
  terms_and_conditions?: PortableTextBlock[];
}

const TermsAndConditions = async() => {

  // const [pageData, setPageData] = useState<TermsAndConditionsData | null>(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState<string | null>(null);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setLoading(true);
  //       const data = await termsAndConditions();

  //       if (data && data.length > 0) {
         
  //         setPageData(data[0]);
  //       } else {
  //         setPageData(null);
  //       }
  //     } catch (err) {
  //       console.error("Failed to fetch Terms and Conditions data:", err);
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

  const pageData = await getTermsAndConditionsData();

  if (!pageData) {
    return <div className="min-h-screen flex items-center justify-center">No content available.</div>;
  }

  return (
    <div className="min-h-screen bg-[#F6F6F6] poppins">
      <div className="relative mx-auto block">
        <Nav />

        {/* <div id="hero-section"
                    className="relative mx-auto -top-10 lg:-top-30 max-w-screen-4xl z-30">
                    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[400px] lg:h-[450px] xl:h-[500px]">
                        <Image
                            src="/leadership.svg"
                            alt="Nexus X Logo"
                            width={1000}
                            height={400}
                            className="w-full h-full object-cover absolute inset-0"
                        />
                        <div className="absolute inset-0 flex items-center left-10 lg:left-60">
                            <div className="text-left px-4">
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Terms and
                                </h1>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-normal text-[#0F2043] uppercase">
                                    Conditions
                                </h1>
                            </div>
                        </div>
                    </div>
                </div> */}

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
            {/* <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed text-center">
              All business undertaken and Services supplied by NEXUS LOGIX PTY
              LTD (NEXUS) will be subject to the terms and conditions of this
              Agreement, which may be amended by NEXUS from time to time by
              notice on NEXUS’s website at{" "}
              <a
                href="http://www.nexuslogix.com.au"
                className="text-blue-500 hover:underline"
              >
                www.nexuslogix.com.au
              </a>
              :
            </p> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                1. Definitions
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                In these terms and conditions:
              </p>
              <ul className="list-disc list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  <span className="font-medium">Agreement:</span> means these
                  terms and conditions.
                </li>
                <li>
                  <span className="font-medium">Carriage:</span> unless
                  otherwise agreed in writing prior to the tender of the Goods
                  to NEXUS for Carriage, the receipt, pickup, loading, carriage,
                  transportation, customs clearance where applicable,
                  warehousing, holding, storage, unloading and delivery of the
                  Goods.
                </li>
                <li>
                  <span className="font-medium">Charges:</span> means all
                  amounts payable to NEXUS under this Agreement directly or
                  indirectly in relation to or in connection with the Carriage
                  of any Goods and/or rendering any Services, including without
                  limitation:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>fees and costs of NEXUS and its Sub-Contractors;</li>
                    <li>
                      costs of and disbursements in connection with Carriage and
                      the Services;
                    </li>
                    <li>
                      all freight, transport, insurance and shipping costs;
                    </li>
                    <li>all duties, taxes, imposts, and levies;</li>
                    <li>
                      all legal fees, costs and disbursements incurred by NEXUS
                      or its Sub-Contractors in enforcing or in any other way
                      connected with this Agreement;
                    </li>
                    <li>
                      any costs or charges incurred Ascot from NEXUS in
                      complying with any law or requirement of any airport,
                      harbour, dock, railway, shipping, customs, excise,
                      warehouse or other authority or Person;
                    </li>
                    <li>
                      charges for any additional attempts or calls made or
                      delays suffered by NEXUS in delivering the Goods where
                      scheduled delivery is not possible for any reason;
                    </li>
                    <li>
                      all demurrage costs incurred by NEXUS or any
                      Sub-contractor whilst rendering the Services or in any way
                      related to the Services or the Goods;
                    </li>
                    <li>all storage, warehousing and holding costs;</li>
                    <li>all Claims and Liability;</li>
                    <li>all other sums due to NEXUS under this Agreement.</li>
                    AMA{" "}
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Claim:</span> includes but is
                  not limited to any action, claim, demand, allegation, threat,
                  suit, or cause of action:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>
                      in contract (including, but not limited to, breach of
                      warranty);
                    </li>
                    <li>
                      in tort (including, but not limited to, misrepresentation
                      or negligence);
                    </li>
                    <li>in bailment;</li>
                    <li>under the statute;</li>
                    <li>under an international convention;</li>
                    <li>for breach of this Agreement;</li>
                    <li>
                      alleging any act, including but not limited to intentional
                      acts with the apprehension of the consequences, or any
                      omission, whether unlawful or not.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Dangerous Goods:</span> means
                  Goods that are or may become noxious, dangerous, inflammable,
                  unstable, explosive, incendiary, corrosive or damaging, or
                  which are or may become liable to damage any other Goods or
                  property.
                </li>
                <li>
                  <span className="font-medium">Damages:</span> bears the widest
                  possible meaning and includes but is not limited to any:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>loss or damage;</li>
                    <li>
                      damage, diminution, devaluation, deterioration,
                      evaporation, contamination, misplacement, loss,
                      mis-delivery or alteration or reduction in usefulness or
                      value of any Goods or property;
                    </li>
                    <li>
                      judgement, award, penalty, fine, impost, duty, proceeding
                      or Claim;
                    </li>
                    <li>injury, personal injury or death;</li>
                    <li>
                      legal costs, on the maximum scale, and any other
                      professional costs, including consultant’s fees and fees
                      for expert witnesses;
                    </li>
                    <li>
                      direct, indirect and consequential loss, liability or
                      damages (all including without limitation loss of profit,
                      loss of market, loss of goodwill, loss of contract, loss
                      of business, depletion of goodwill and like loss).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Goods:</span> means the property
                  and things from time to time accepted by NEXUS from or on
                  behalf of the Shipper for Carriage and/or services and
                  includes any container or packaging.
                </li>
                <li>
                  <span className="font-medium">GST Law:</span> means the same
                  as in the A New Tax System (Goods and Services Tax) Act 1999.
                </li>
                <li>
                  <span className="font-medium">GST Rate:</span> means the rate
                  of GST under the GST Law.
                </li>
                <li>
                  <span className="font-medium">Invoice:</span> means a tax
                  invoice under the GST Law.
                </li>
                <li>
                  <span className="font-medium">Liability:</span> bears the
                  widest possible meaning and includes but is not limited to
                  all:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>Damages;</li>
                    <li>Interest;</li>
                    <li>obligations to pay money;</li>
                    <li>obligations to do something;</li>
                    <li>obligations not to do something;</li>
                    <li>
                      obligations to deliver up or otherwise deal with any Goods
                      or property;
                    </li>
                    <li>charges, duties, taxes and other imposts;</li>
                    <li>any other loss;</li>
                    <li>expenses, cost, disbursements and charges.</li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Limitation of Liability:</span>{" "}
                  includes any exemption from or limitation of Liability,
                  exclusion or Limitation of Claims, indemnity, immunity,
                  limitation, exclusion, condition, defence, or liberty of any
                  nature.
                </li>
                <li>
                  <span className="font-medium">NEXUS:</span> means NEXUS LOGIX
                  PTY LTD (ABN 82 682 875 154).
                </li>
                <li>
                  <span className="font-medium">Person:</span> means any
                  individual, partnership, firm, corporation, association,
                  trust, unincorporated organisation, or other entity, including
                  a governmental agency.
                </li>
                <li>
                  <span className="font-medium">Perishable Goods:</span> means
                  the Goods are legally or factually likely to deteriorate in
                  quality, value, usefulness, or condition and includes without
                  limitation, foodstuffs, fruits, vegetables, dairy products,
                  meat, and the like.
                </li>
                <li>
                  <span className="font-medium">Service(s):</span> means the
                  Carriage of the Goods or property, as well as any other
                  related or ancillary acts, operations and services undertaken
                  or rendered by NEXUS, its agents or its Sub-contractors or any
                  Person (whether gratuitously or not).
                </li>
                <li>
                  <span className="font-medium">Shipper:</span> includes one or
                  more of:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>
                      the shipper, consignor, addressee, sender, recipient,
                      bailor, bailee, possessor, owner, importer and/or exporter
                      of the Goods;
                    </li>
                    <li>
                      any Person for whom the Services or Carriage are
                      performed;
                    </li>
                    <li>
                      any Person who engages NEXUS to perform the Services or
                      Carriage of the Goods, including without limitation any
                      Person who is interested in the Goods or who becomes
                      interested in the Goods at any time.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Sub-contractor:</span> includes:
                  <ul className="list-decimal list-inside ml-4 mt-2 space-y-1">
                    <li>
                      any Person, firm or company with whom NEXUS may arrange to
                      effect any Service or Carriage or part thereof in respect
                      of any Goods;
                    </li>
                    <li>
                      any other Person, firm or company that is now or hereafter
                      a servant, agent, employee or sub-contractor of any of the
                      Persons or entities referred to in (a).
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-medium">Supply:</span> means the same as
                  in the GST Law.
                </li>
                <li>
                  <span className="font-medium">Taxable Supply:</span> means any
                  Supply under this Agreement in respect of which NEXUS is or
                  may become liable to pay GST.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                2. Negation of Liability as a Common Carrier
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  NEXUS is not a Common Carrier and will not accept liability as
                  such.
                </li>
                <li>
                  All Goods are Carried, and all Services are rendered by NEXUS
                  subject only to this Agreement.
                </li>
                <li>
                  NEXUS reserves the right, at its sole discretion, to refuse
                  and decline the:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>Carriage of Goods for any Person;</li>
                    <li>Carriage of any class of Goods;</li>
                    <li>Rendering any Service.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                3. Shipper&apos;s Warranties
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                The Shipper and any person tendering any Goods to NEXUS for
                Carriage warrant and NEXUS and its Sub-Contractors rely on the
                warranties that:
              </p>
              <ul className="list-[lower-alpha] list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  the Goods are fit for Carriage, and been suitably packaged;
                </li>
                <li>
                  the Shipper has the authority of all Persons owning or having
                  any interest in the Goods to enter into this Agreement and to
                  give NEXUS instructions in relation to the Goods;
                </li>
                <li>
                  the Person delivering any Goods to NEXUS for Carriage is
                  authorised to sign this document and accept these terms and
                  conditions for and on behalf the Shipper;
                </li>
                <li>
                  any information, descriptions, values or any other particulars
                  provided in respect of the Goods are accurate and true;
                </li>
                <li>
                  the Shipper has complied and the Goods do and will comply with
                  all applicable laws and government regulations of any country
                  to, from, through or over which the Goods may be carried,
                  including those relating to packaging, Carriage, storage,
                  clearance, customs, import, export, delivery or other Services
                  in respect of the Goods;
                </li>
                <li>
                  the Shipper will furnish any information and provide any
                  documents that may be necessary to comply with all laws and
                  regulations;
                </li>
                <li>
                  the Shipper employed reliable staff to prepare the Goods for
                  Carriage and protect the Goods against unauthorised
                  interference during preparation, storage and handing them to
                  NEXUS;
                </li>
                <li>
                  any Dangerous Goods have been properly declared to NEXUS;
                </li>
                <li>
                  The Goods are properly and accurately marked and addressed.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                4. Discretion and Right to Subcontract as Agent or Principal
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  NEXUS and any Sub-contractors may at their sole discretion, as
                  principal or as agent for the Shipper, sub-contract on any
                  terms the whole or part of the Carriage of the Goods and/or
                  provision of the Services.
                </li>
                <li>
                  The Shipper is aware that such terms may materially differ
                  from the terms of this Agreement. Any Sub-contractor&apos;s
                  terms are available from NEXUS upon request.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                5. Route and Deviation
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  The manner and route of Carriage and provision of the Services
                  is solely at the discretion of NEXUS or its Sub-contractors.
                </li>
                <li>
                  If the shipper expressly or impliedly instructs NEXUS to use,
                  or it is expressly or impliedly agreed that NEXUS will use a
                  particular method of handling or storing the Goods or a
                  particular method or route of Carriage, NEXUS may employ that
                  method but if it cannot conveniently be adopted by NEXUS in
                  its sole discretion, the Shipper hereby authorises NEXUS to
                  handle, store or to Carry the Goods and/or to render the
                  Services as NEXUS in its sole discretion sees fit.
                </li>
                <li>
                  At the sole discretion of NEXUS the Goods may at any time be
                  warehoused or otherwise stored or held at the Shipper&apos;s
                  risk and expense at any place or places.
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                6. Declaration Forms and Inspection
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  If required by NEXUS the Shipper must accurately complete and
                  deliver to NEXUS or its agents any declaration form showing
                  particular of Goods, values, weights, and any other
                  information the form requires to be completed.
                </li>
                <li>
                  NEXUS reserves the right at the cost and risk of the Shipper,
                  but is not required, to open and inspect any package or Goods
                  tendered to it and/or accepted for Carriage.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                7. Delivery and Unloading
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  NEXUS will and is authorised to deliver the Goods to the
                  address provided to NEXUS.
                </li>
                <li>
                  NEXUS will be conclusively presumed to have completed Carriage
                  of the Goods and/or rendering of the Services if at that
                  address it obtains from any Person a receipt or signed
                  delivery docket for the Goods.
                </li>
                <li>
                  If at the time of delivery:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>the nominated place of delivery is unattended;</li>
                    <li>
                      the Consignee fails or refuses to take delivery of the
                      Goods;
                    </li>
                    <li>
                      delivery cannot otherwise be effected or Carriage
                      completed;
                    </li>
                  </ul>
                  NEXUS may at its sole discretion and subject to any right to
                  sell the Goods:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      leave the Goods at that address, which will constitute
                      proper delivery of the Goods and completion of Carriage
                      and the Services;
                    </li>
                    <li>
                      store or warehouse the Goods at the Shipper&apos;s cost
                      and risk and re-deliver the Goods at any time.
                    </li>
                  </ul>
                </li>
                <li>
                  The Shipper will at its cost and risks provide, procure or
                  arrange adequate and suitable facilities and equipment for
                  loading and unloading the Goods.
                </li>
                <li>
                  Dates specified for completion of Carriage or any other
                  Services are estimates only and NEXUS will bear or suffer no
                  claim or Liability for failure to complete Carriage or
                  rendering any Services by any date.
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                8. Liability of NEXUS and Risk
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  The Goods are at the sole risk of the Shipper and not of NEXUS
                  or any Sub-contractor.
                </li>
                <li>
                  The Shipper undertakes and warrants that neither NEXUS nor any
                  Sub-contractor or any other Person who Carries the Goods or
                  renders any Service at any time will in any circumstances
                  (except where any statute otherwise requires) suffer or
                  subject to:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>any Claim;</li>
                    <li>
                      any Liability relating to any Damages or other loss in any
                      way connected with Carriage, Services, the Goods or
                      otherwise arising.
                    </li>
                  </ul>
                </li>
                <li>
                  Every limitation of Liability in this Agreement or otherwise
                  available to NEXUS will also be available and will extend to
                  protect:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>all Subcontractors;</li>
                    <li>
                      every director, servant, employee, officer, or agent of
                      NEXUS or of a Sub-contractor;
                    </li>
                    <li>
                      all Persons who are or might be vicariously liable for the
                      acts or omissions of any Person falling within (a) or (b).
                    </li>
                  </ul>
                  NEXUS is or will be deemed to be acting as agent or Trustee on
                  behalf of and for the benefit of each of the other persons
                  benefiting from any Limitation of Liability under this
                  Agreement and all such Persons and each of them will to this
                  extent be or be deemed to be parties of this Agreement.
                </li>
                <li>
                  Every Limitation of Liability in this Agreement or otherwise
                  available to:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>any Sub-contractor;</li>
                    <li>
                      every director, servant, employee, officer or agent of
                      NEXUS or of a Sub-contractor;
                    </li>
                    <li>
                      every other Person (other than NEXUS) by whom the Services
                      or any part thereof is undertaken;
                    </li>
                    <li>
                      all Persons who are or might be vicariously liable for the
                      acts or omissions of any Person falling within (a), (b) or
                      (c);
                    </li>
                  </ul>
                  will also be available and will extend to protect NEXUS.
                </li>
                <li>
                  Without limiting clauses 8.2, 8.3 and 8.4:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      Limitations of Liability in this Agreement apply even if
                      it is proved that the Liability or other loss resulted
                      from an act or omission done with intent to cause Damage
                      or other loss, or recklessly and with the knowledge that
                      Damage or other loss would or could result.
                    </li>
                    <li>
                      Nothing whatsoever done or omitted to be done or other
                      conduct by NEXUS or any other person in breach of this
                      Agreement or otherwise will under any circumstances
                      constitute a fundamental breach or repudiation of this
                      Agreement so as to disentitle NEXUS or any other person
                      entitled under this Agreement to the benefit of any
                      Limitation of Liability and like protection, which will
                      continue to have full force and effect in any event
                      whatsoever.
                    </li>
                    <li>
                      Each Limitation of Liability in this Agreement is separate
                      and independent from other provisions and limitations of
                      Liability and each Limitation of Liability survives
                      termination of this Agreement for any reason.
                    </li>
                  </ul>
                </li>
                <li>
                  In all cases where Liability of NEXUS and/or its
                  Sub-contractors cannot be excluded, whether because of
                  statute, international convention or otherwise, the Liability
                  of NEXUS, no matter how arising, is limited to:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      the lesser of (at NEXUS&apos;s sole discretion):
                      <ul className="list-[lower-roman] list-inside ml-4 mt-2 space-y-1">
                        <li>
                          payment received by NEXUS in relation to the relevant
                          Services;
                        </li>
                        <li>
                          the value of the Goods the subject of the Services at
                          the time the Goods were received by or for NEXUS;
                        </li>
                        <li>$100 Australian;</li>
                      </ul>
                    </li>
                    <li>
                      in the case of a proven breach of an implied warranty
                      provided by the Trade Practices Act 1974 as amended, the
                      re-supply of the Services by NEXUS or replacement of the
                      Goods;
                    </li>
                    <li>
                      where superseding (a) and (b) preceding, mandatory
                      international convention or statute.
                    </li>
                  </ul>
                </li>
                <li>
                  Notwithstanding anything in this Agreement, NEXUS will
                  continue to be subject to any mandatory implied warranty
                  provided by the Trade Practices Act 1974 as amended (TPA):
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      to the extent that the TPA is applicable to this Agreement
                      and prevents the exclusion, restriction, limitation or
                      modification of such warranty or Liability for any breach
                      thereof;
                    </li>
                    <li>
                      only to the minimum extent required and imposing the least
                      liability on NEXUS required under the TPA.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                9. Indemnity and Immunity
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  The Shipper will indemnify and hold NEXUS and its
                  Sub-Contractors harmless in respect of any Claim made against
                  it by any Person in connection with any liability or other
                  loss arising or purportedly arising out of or relating to:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>this Agreement;</li>
                    <li>
                      provision of the Services by NEXUS, its Sub-contractors,
                      or any other person;
                    </li>
                    <li>Carriage of the Goods and/or any property;</li>
                    <li>the Goods.</li>
                  </ul>
                </li>
                <li>
                  Without limiting clause 9.1, the Shipper undertakes to
                  indemnify and hold harmless NEXUS and its Sub-Contractors from
                  of all Liability and Claims:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      in respect any duties, taxes, imposts, outlays or charges
                      at any port or place in respect of the Goods;
                    </li>
                    <li>
                      all customs and/or excise duties, costs, fines or
                      penalties imposed for any reason whatsoever in relation to
                      or connected with the Goods, Carriage or the Services;
                    </li>
                    <li>pursuant to any applicable laws or regulations;</li>
                    <li>
                      the Claims of any Person (other than the Shipper) based on
                      real or purported interest in the Goods or parts of them;
                    </li>
                    <li>
                      arising out of a breach of any warranty given by the
                      Shipper or the person who tendered the Goods to NEXUS for
                      Carriage;
                    </li>
                    <li>
                      arising out of the Carriage of any Dangerous Goods whether
                      declared as such or not and whether or not the Shipper was
                      aware of the nature of the Good;
                    </li>
                    <li>
                      in respect of any Claim or Liability arising from any
                      inherent defect, quality or characteristic of the Goods.
                    </li>
                  </ul>
                </li>
                <li>
                  Without limiting clauses 9.1 and 9.2, the Shipper and any
                  person who tenders Goods to NEXUS for Carriage irrevocably
                  exempts NEXUS and its Sub-Contractors from all or any Claims
                  or Liability arising from or under this Agreement, performance
                  of the Services, Carriage of the Goods, or any property,
                  howsoever caused.
                </li>
                <li>
                  Nothing in this clause 9 will limit or prejudice any
                  Limitation of liability contained in any other clause of this
                  Agreement. Each and every Limitation of Liability in this
                  Agreement is separate, cumulative, and severable and available
                  to both NEXUS, its Sub-contractors and any other person
                  involved in the Services or Carriage of the Goods.
                </li>
                <li>
                  Any right or Limitation of Liability granted under this
                  Agreement or otherwise available to NEXUS or its
                  Sub-contractors also extends and is available to their
                  directors, employees, consultants, servants, agents, officers,
                  and advisors.
                </li>
                <li>
                  Every indemnity granted under this Agreement means not only to
                  indemnify and hold harmless, but also to keep indemnifying and
                  holding harmless.
                </li>
                <li>
                  Each indemnity in this agreement is a continuing obligation,
                  separate and independent from other obligations of the parties
                  and survives termination of this Agreement for any reason.
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                10. Insurance
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>The Shipper is advised to seek its own insurance cover.</li>
                <li>
                  No insurance will be sought or effected by NEXUS except on
                  express instructions in writing from the Shipper and at the
                  Shipper&apos;s risk and expense after lodgement of a
                  declaration pursuant to clause 6.1 prior to acceptance of the
                  Goods by NEXUS and subject to NEXUS&apos;s right to charge for
                  arranging insurance.
                </li>
                <li>
                  The Shipper must pay the costs on any insurance policy
                  affected by NEXUS pursuant to clause 10.2.
                </li>
                <li>
                  Any insurance so affected will be subject to the usual
                  exceptions and conditions of policies of the insurance company
                  or underwriter taking the risk.
                </li>
                <li>
                  Subject to 10.1:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      Should NEXUS procure insurance pursuant to clause 10.2,
                      NEXUS will not be under any obligation to effect separate
                      insurance on each consignment but may, at its sole
                      discretion, declare it on any general policy. Should the
                      insurer dispute liability for any reason, the Shipper as
                      insured will have no recourse whatsoever against and
                      forever releases NEXUS from all such Liability and Claims
                      and any recourse by the Shipper will be against the
                      insurer only;
                    </li>
                    <li>
                      If NEXUS procures insurance pursuant to clause 10.2, the
                      Liability of NEXUS is defined and limited to amounts
                      stated for specified loss or damage in the insurance
                      policy on the terms and conditions of the relevant policy,
                      and is subject to acceptance and payment of any claims by
                      the insurer.
                    </li>
                  </ul>
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                11. Payment of Duties and Imposts
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  NEXUS may, at its sole discretion, as the Shipper&apos;s agent
                  or as principal, advance any duties, taxes, imposts, outlays
                  or charges at any port or place in respect of the Goods and
                  their Carriage.
                </li>
                <li>
                  The Shipper will pay all duties, taxes, imposts, outlays,
                  charges, costs, fines or penalties which NEXUS or its
                  Sub-Contractors become liable to pay for any reason whatsoever
                  in respect of the Goods, Carriage and/or the Services and any
                  documentation relating to the Goods pursuant to any applicable
                  laws or regulations.
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                12. Payment of NEXUS&apos;s Charges
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  NEXUS&apos;s quotations are provided based on immediate
                  acceptance and may be withdrawn or revised by NEXUS.
                </li>
                <li>NEXUS&apos;s invoices prevail over its quotations.</li>
                <li>
                  NEXUS&apos;s Charges will be considered earned as soon as the
                  Goods are received by NEXUS and are under no circumstances
                  refundable.
                </li>
                <li>
                  NEXUS may charge by way of weight, measurement or value and
                  may at any time re-weigh, re-measure or re-value or require
                  the Goods to be re-weighed, re-measured or re-valued and
                  impose additional Charges accordingly.
                </li>
                <li>
                  The Shipper must pay to NEXUS the amounts set out in any
                  relevant invoice plus any of the following:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>NEXUS and its Sub-Contractors’ charges;</li>
                    <li>
                      amounts contemplated under any other clause of this
                      Agreement;
                    </li>
                    <li>
                      amounts in respect of all Claims or Liability incurred by
                      NEXUS for any reason in relation to the Carriage of the
                      Goods, the Services, the Goods, and/or this Agreement.
                    </li>
                  </ul>
                </li>
                <li>
                  Any special instruction given by the Shipper to the effect
                  that Charges will be paid by the consignee or any other Person
                  will be deemed to include stipulation that:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      the Shipper and the other person are jointly and severally
                      liable under this Agreement;
                    </li>
                    <li>
                      if the Consignee or that other Person does not pay the
                      Charges on the date of delivery or attempted delivery of
                      the Goods, the Shipper will pay such Charges immediately
                      upon demand by NEXUS.
                    </li>
                  </ul>
                </li>
                <li>
                  NEXUS discloses that it is likely to be paid certain
                  brokerages, commissions, allowances, and other remuneration in
                  respect of the Carriage of the Goods and/or the Services.
                  NEXUS and the Shipper agree that NEXUS need not make any
                  disclosure whatsoever to any person generally or in relation
                  to any specific instance of payment and is entitled to retain
                  these payments without any obligation to grant any refunds or
                  rebates.
                </li>
                <li>
                  The Shipper agrees that it will not exercise or purport to
                  exercise any right of set-off against, or defer, withhold, or
                  deduct by way of counterclaim or otherwise any sum from any
                  amount due to NEXUS by reason of any Claim it may allege
                  against NEXUS or any Sub-contractor or any Person, or on
                  account of any liability it may have suffered or apprehend.
                </li>
                <li>
                  NEXUS&apos;s Charges, including but not limited to sums
                  relating to Carriage and/or Services, will be set out in one
                  or more invoices.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                13. General Lien
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  The Goods and documents relating to the Goods and any other
                  goods or cargo in NEXUS&apos;s possession and documents
                  relating to these other goods or cargo are accepted subject to
                  a general lien for all Charges now due or which may hereafter
                  become due to NEXUS or its Sub-contractors by the Shipper on
                  any account whatsoever, whether in respect of the Goods now
                  Carried, or in respect of any other Goods for which NEXUS
                  provides or has provided Services or Carriage.
                </li>
                <li>
                  Subject to clause 13.3, if any charges are not paid to NEXUS
                  within 1 month after notice of a lien has been given, the
                  detained Goods may be sold by NEXUS at its discretion and the
                  proceeds of the sale will be applied firstly to the costs of
                  storage and sale and then towards the satisfaction of any
                  outstanding Charges or any other sums owing to NEXUS,
                  appropriated as NEXUS in its sole discretion sees fit.
                </li>
                <li>
                  In the case of Goods that NEXUS determines are Perishable, the
                  Goods may be sold immediately without notice to the Shipper.
                </li>
                <li>
                  NEXUS and its Sub-contractors will be entitled at the cost,
                  risk and expense of the Shipper or any other person having an
                  interest in the Goods, subject to any compliance with the
                  applicable laws, to sell or dispose of:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      Goods that in the opinion of NEXUS or any Sub-contractor
                      cannot be delivered because they are insufficiently or
                      incorrectly addressed;
                    </li>
                    <li>
                      Goods that are not collected or accepted by the consignee;
                    </li>
                    <li>
                      any Perishable goods which in the opinion of NEXUS or the
                      Sub-contractor appear to be deteriorating;
                    </li>
                    <li>
                      Goods in respect of which the person liable for Charges
                      under this Agreement fails to pay any costs and/or Charges
                      necessary to implement the Shipper&apos;s instructions.
                    </li>
                  </ul>
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                14. Dangerous Goods
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  If NEXUS accepts Dangerous Goods for Carriage, the Shipper
                  must provide and the Shipper warrants the accuracy of a full
                  written declaration disclosing the nature of such goods.
                </li>
                <li>
                  If in the opinion of NEXUS, any Goods or Dangerous Goods are
                  or are liable to become a risk, the relevant Goods may at any
                  time be destroyed, disposed of, abandoned or rendered harmless
                  without compensation to the Shipper or any other person and
                  without prejudice to NEXUS&apos;s right to any Charges.
                </li>
                <li>
                  The Shipper warrants that it has complied with all laws and
                  regulations relating to the nature, packaging, labelling or
                  Carriage of any Dangerous Goods and that these Goods are
                  packaged in a manner adequate to withstand the ordinary risks
                  of Carriage having regard to their nature.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                15. Intellectual Property Rights
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  In this Agreement, Intellectual Property Rights includes
                  patents, rights to inventions, copyright and related rights,
                  trademarks, trade names and domain names, rights in get-up,
                  rights in goodwill or to sue for passing off, unfair
                  competition rights, rights in designs, rights in computer
                  software, database rights, topography rights, technology,
                  technical and product information, business systems; logistics
                  plans; rights in confidential information (including know-how
                  and trade secrets) and any other intellectual property rights,
                  in each case whether registered, registrable or unregistered
                  and including all applications (or rights to apply) for, and
                  renewals or extensions of, such rights and all similar or
                  equivalent rights or forms of protection which subsist or will
                  subsist now or in the future in any part of the world.
                </li>
                <li>
                  Notwithstanding anything in this Agreement or any other
                  agreement or otherwise, all Intellectual Property Rights of
                  NEXUS remain vested solely in NEXUS.
                </li>
                <li>
                  If NEXUS and/or the Shipper create any Intellectual Property
                  during or in any way related to the Services or the Carriage
                  of Goods, all the resulting Intellectual Property Rights vest
                  solely in NEXUS and to the extent necessary, even despite
                  termination of this Agreement for any reason, the Shipper
                  irrevocably undertakes to assign in the manner prescribed by
                  NEXUS, all Intellectual Property Rights exclusively to NEXUS
                  so that NEXUS is exclusive owner of those rights and
                  irrevocably appoints NEXUS as its attorney to execute all
                  document and do all things necessary to bring about such
                  assignment.
                </li>
                <li>
                  For the purposes of this Clause 15, it does not matter whether
                  the Intellectual Property was created before or after this
                  Agreement.
                </li>
                <li>
                  Without limiting clauses 15.1, 15.2, 15.3 or 15.4, the Shipper
                  acknowledges and agrees that:
                  <ul className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-1">
                    <li>
                      NEXUS may from time to time supply it with document
                      (&quot;Documents&quot;) which are NEXUS&apos;s standard
                      documents or which have been customised to streamline
                      NEXUS&apos;s Services to the Shipper;
                    </li>
                    <li>
                      NEXUS exclusively owns and holds all the Intellectual
                      Property Rights (including but not limited to copyright)
                      in these Documents which will remain the sole property of
                      NEXUS and which are supplied to the Shipper under license
                      (the &quot;License&quot;) and subject to strict
                      confidentiality only;
                    </li>
                    <li>
                      The License:
                      <ul className="list-[lower-roman] list-inside ml-4 mt-2 space-y-1">
                        <li>
                          only entitles the Shipper to use the Documents as
                          directed by NEXUS and in relation to Carriage of Goods
                          or the rendering Services under this Agreement;
                        </li>
                        <li>
                          may be terminated by NEXUS at any time on notice to
                          the Shipper;
                        </li>
                        <li>
                          does not include the right on the part of the Shipper
                          or any other person to retain, use, copy, duplicate,
                          adapt or amend the Documents or to supply them to any
                          other person, save as directed in writing by NEXUS.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Upon termination of the License by NEXUS the Shipper and
                      persons holding the Documents through it:
                      <ul className="list-[lower-roman] list-inside ml-4 mt-2 space-y-1">
                        <li>
                          will have no further right to possess or use the
                          Documents or any copies thereof;
                        </li>
                        <li>
                          have no right to the Intellectual Property Rights in
                          the Documents;
                        </li>
                        <li>
                          will deal with the Documents (including any copies) as
                          directed by NEXUS, including destruction or the
                          delivery up of the Documents (including copies) to
                          NEXUS.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  Without limiting clauses 15.1, 15.2, 15.3 or 15.4, the Shipper
                  acknowledges and agrees that damages alone would not be an
                  adequate remedy for any breach by the Shipper or persons
                  acting through it of the provisions of this clause 15 and
                  accordingly, without prejudice to any and all other rights or
                  remedies that NEXUS might have, NEXUS is entitled without
                  proof of special damage to the remedies of injunction and
                  other equitable relief for any threatened or actual breach of
                  the provisions of this clause 15.
                </li>
              </ul>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                16. GST
              </h2>
              <ul className="list-decimal list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  This Clause-16 applies if NEXUS is or becomes liable to pay
                  GST in relation to any Supply under these Conditions.
                </li>
                <li>
                  Unless otherwise stated, all Charges quoted are exclusive of
                  GST. In addition to such Charges, the Shipper must pay GST on
                  the Taxable Supply to NEXUS of an amount equal to the GST
                  exclusive consideration multiplied by the GST Rate.
                </li>
                <li>
                  GST will be payable by the Shipper without any deduction or
                  set off for any other amount at the same time as the GST
                  exclusive consideration is payable.
                </li>
                <li>
                  In all other respects, GST will be payable by the Shipper to
                  NEXUS upon the same basis as the GST exclusive consideration
                  is payable by the Shipper under these Conditions.
                </li>
                <li>
                  NEXUS will issue an invoice or Invoices to the Shipper for the
                  amount of GST referrable to the Taxable Supply. NEXUS will
                  include in any such Invoice the particulars that are required
                  by the GST Law so that the Shipper may obtain an input tax
                  credit for the amount of GST payable on the Taxable Supply.
                </li>
                <li>
                  If any part of the consideration is referrable to both a
                  Taxable Supply and anything that is not a Taxable Supply, the
                  amount of GST payable by the Shipper will be determined by
                  NEXUS and will be the same amount of GST that would be payable
                  if the Taxable Supply were the only Supply made to the
                  Shipper.
                </li>
                <li>
                  If the Shipper defaults in making any payment to NEXUS
                  pursuant to this Agreement, then without prejudice to any
                  other remedies of NEXUS, the Shipper will pay to NEXUS upon
                  demand an amount equal to the amount of any Damages or
                  interest or additional GST that may become payable by NEXUS
                  arising out of the default of the Shipper.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                17. Exclusion of Warranties
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                Subject to clause 8.7, NEXUS and its Sub-contractors give and
                are bound by no warranties whatsoever.
              </p>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                18. General
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                The parties acknowledge and agree that if any provision or part
                of any provision of this Agreement is unenforceable; such
                unenforceability will not affect any other part or provision of
                this Agreement. Without limiting any Limitation of Liability
                under this Agreement, if NEXUS is unable to carry out any
                obligation under this Agreement due to any circumstances, matter
                or thing beyond its reasonable control NEXUS will be excused
                from such obligations to the extent of the prevention,
                restriction, or interference. In the event of and to the extent
                of any inconsistency between these terms and conditions and
                those incorporated into any bill of lading, waybill, consignment
                note, any document of the Shipper or any other transport
                document, these terms and conditions prevail. Without limiting
                the immediately preceding:
              </p>
              <ul className="list-[lower-alpha] list-inside text-xs sm:text-sm lg:text-base text-gray-600 space-y-2">
                <li>
                  this Agreement sets out the entire agreement of the parties
                  with respect to its subject matter. No other Agreement,
                  warranty, or representation, express or implied has been given
                  or made by the parties.
                </li>
                <li>
                  NEXUS will not be responsible for any Claim or Liability
                  resulting from or arising out of in connection with any
                  quotation, advice, statement, representation, or information
                  given or made by or on behalf of NEXUS to the Shipper or
                  others, including without limitation, as to the classification
                  of or any matter material to the valuation of or the liability
                  for or the amount, scale or rate of customs and/or excise duty
                  or other impost, tax or rates charged in respect of the Goods
                  or any cargo whatsoever.
                </li>
              </ul>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mt-4 leading-relaxed">
                NEXUS will not be bound by any waiver or agreement purporting to
                vary these terms and conditions unless such agreement is in
                writing and signed on behalf of NEXUS by an authorised officer
                of NEXUS. This Agreement is governed by and is to be construed
                in accordance with the laws of the State of Queensland. Each
                party irrevocably and unconditionally submits to the
                non-exclusive jurisdiction of the Courts of Queensland and
                Courts entitled to hear appeals from those Courts. The Shipper
                will pay all of NEXUS&apos;s costs and expenses on a full
                indemnity basis in respect of any dispute or legal proceedings
                arising from the Goods, Carriage of the Goods, or the Services.
              </p>
            </section> */}

            {/* <section className="mb-8">
              <h2 className="text-xl sm:text-2xl font-medium text-gray-800 mb-4">
                19. Special Conditions
              </h2>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                To the extent that any provision of this Agreement conflicts
                with any Special Conditions, the Special Conditions will prevail
                to the extent of any conflict. Special Conditions means written
                terms and conditions described as Special Conditions which
                expressly amend this Agreement.
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 mb-4 leading-relaxed">
                The Shipper agrees that all Carriage of Goods by NEXUS on behalf
                of the Shipper from the date of signing of these Conditions of
                Carriage will be on the terms and conditions contained herein,
                unless otherwise agreed in writing by NEXUS.
              </p>
            </section> */}
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
