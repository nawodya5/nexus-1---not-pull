// import Link from "next/link";
// import Image from "next/image";
// import React, {useState} from "react";
//
// const Nav = () => {
//
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//
//     return (
//         <header
//             className="relative lg:bg-transparent z-50 poppins">
//             <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6 relative">
//                     <div className="lg:hidden flex-shrink-0 order-1">
//                         <button
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
//                             aria-expanded={isMenuOpen}
//                             aria-controls="mobile-menu"
//                         >
//                             <span className="sr-only">Open main menu</span>
//                             {isMenuOpen ? (
//                                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//                                      viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M6 18L18 6M6 6l12 12"/>
//                                 </svg>
//                             ) : (
//                                 <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//                                      viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                                           d="M4 6h16M4 12h16M4 18h16"/>
//                                 </svg>
//                             )}
//                         </button>
//                     </div>
//
//                     <div
//                         className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">
//                         <Link href="/">
//                             <Image
//                                 src="/Logo-Nexus.png"
//                                 alt="Nexus Logo"
//                                 width={120}
//                                 height={120}
//                                 className="h-12 sm:h-16 lg:h-25 w-auto"
//                             />
//                         </Link>
//                     </div>
//
//                     <div className="lg:hidden flex-shrink-0 order-3">
//                         <Link href="#">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors"
//                             >
//                                 Track & Trace
//                             </button>
//                         </Link>
//                     </div>
//
//                     <nav
//                         className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2">
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Why Nexus
//                         </Link>
//                         <Link
//                             href="/leadership"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Leadership Team
//                         </Link>
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Services
//                         </Link>
//                         <Link
//                             href="#"
//                             className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//                         >
//                             Insights
//                         </Link>
//                         <Link href="#"
//                               className="hidden xl:block">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//                             >
//                                 Track and Trace
//                             </button>
//                         </Link>
//                     </nav>
//
//                     <div
//                         className="hidden lg:flex items-center space-x-3 lg:space-x-4 order-3">
//                         <button
//                             className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//                         >
//                             Contact Us
//                         </button>
//                     </div>
//                 </div>
//
//                 <div
//                     id="mobile-menu"
//                     className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
//                 >
//                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Why Nexus
//                         </Link>
//                         <Link
//                             href="/leadership"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Leadership Team
//                         </Link>
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Services
//                         </Link>
//                         <Link
//                             href="#"
//                             className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//                             onClick={() => setIsMenuOpen(false)}
//                         >
//                             Insights
//                         </Link>
//                         <Link href="#" className="w-full text-center mt-4">
//                             <button
//                                 className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
//                                 onClick={() => setIsMenuOpen(false)}
//                             >
//                                 Contact Us
//                             </button>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </header>
//
//         // <header
//         //     className="relative lg:bg-transparent z-50 poppins">
//         //     <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
//         //         <div className="flex items-center justify-between py-3 sm:py-4 lg:py-6 relative lg:justify-center"> {/* Added lg:justify-center */}
//         //
//         //             {/* Mobile: Hamburger, Logo, Mobile T&T Button */}
//         //             <div className="lg:hidden flex-shrink-0 order-1">
//         //                 <button
//         //                     onClick={() => setIsMenuOpen(!isMenuOpen)}
//         //                     className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
//         //                     aria-expanded={isMenuOpen}
//         //                     aria-controls="mobile-menu"
//         //                 >
//         //                     <span className="sr-only">Open main menu</span>
//         //                     {isMenuOpen ? (
//         //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//         //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//         //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//         //                                   d="M6 18L18 6M6 6l12 12"/>
//         //                         </svg>
//         //                     ) : (
//         //                         <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
//         //                              viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
//         //                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//         //                                   d="M4 6h16M4 12h16M4 18h16"/>
//         //                         </svg>
//         //                     )}
//         //                 </button>
//         //             </div>
//         //
//         //             <div
//         //                 className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none lg:mx-auto"> {/* Added lg:mx-auto for centering in desktop flex */}
//         //                 <Link href="/">
//         //                     <Image
//         //                         src="/Logo-Nexus.png"
//         //                         alt="Nexus Logo"
//         //                         width={120}
//         //                         height={120}
//         //                         className="h-12 sm:h-16 lg:h-25 w-auto"
//         //                     />
//         //                 </Link>
//         //             </div>
//         //
//         //             <div className="lg:hidden flex-shrink-0 order-3">
//         //                 <Link href="#">
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors"
//         //                     >
//         //                         Track & Trace
//         //                     </button>
//         //                 </Link>
//         //             </div>
//         //
//         //             {/* Desktop Navigation Group - Reorder for flex centering */}
//         //             <div className="hidden lg:flex items-center justify-between flex-grow"> {/* Use flex-grow to take available space */}
//         //                 {/* Left side links (before logo) */}
//         //                 <nav className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Why Nexus
//         //                     </Link>
//         //                     <Link
//         //                         href="/leadership"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Leadership Team
//         //                     </Link>
//         //                 </nav>
//         //
//         //                 {/* Right side links (after logo) and desktop buttons */}
//         //                 <div className="flex items-center space-x-6 lg:space-x-8 xl:space-x-12">
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Services
//         //                     </Link>
//         //                     <Link
//         //                         href="#"
//         //                         className="text-base sm:text-lg lg:text-xl font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"
//         //                     >
//         //                         Insights
//         //                     </Link>
//         //                     {/* The Track and Trace button for desktop */}
//         //                     <Link href="#">
//         //                         <button
//         //                             className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//         //                         >
//         //                             Track and Trace
//         //                         </button>
//         //                     </Link>
//         //                     {/* The Contact Us button for desktop */}
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors"
//         //                     >
//         //                         Contact Us
//         //                     </button>
//         //                 </div>
//         //             </div>
//         //         </div>
//         //
//         //         {/* Mobile menu remains the same */}
//         //         <div
//         //             id="mobile-menu"
//         //             className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
//         //         >
//         //             <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Why Nexus
//         //                 </Link>
//         //                 <Link
//         //                     href="/leadership"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Leadership Team
//         //                 </Link>
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Services
//         //                 </Link>
//         //                 <Link
//         //                     href="#"
//         //                     className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
//         //                     onClick={() => setIsMenuOpen(false)}
//         //                 >
//         //                     Insights
//         //                 </Link>
//         //                 <Link href="#" className="w-full text-center mt-4">
//         //                     <button
//         //                         className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
//         //                         onClick={() => setIsMenuOpen(false)}
//         //                     >
//         //                         Contact Us
//         //                     </button>
//         //                 </Link>
//         //             </div>
//         //         </div>
//         //     </div>
//         // </header>
//     )
// }
//
// export default Nav;

"use client"
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { usePathname } from "next/navigation";




const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/whyNexus", label: "Why Nexus" },
    { href: "/leadership", label: "Leadership Team" },
    { href: "/services", label: "Services" },
    { href: "/insights", label: "Insights" },
  ];



  return (
    <header className="relative z-50 poppins">
      <div className="max-w-7xl container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3 sm:py-4 lg:py-2 relative">
          {/* Mobile Menu Button - Visible on small screens */}
          <div className="lg:hidden flex-shrink-0 order-1">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#282828] hover:text-[#082049] focus:outline-none focus:ring-2 focus:ring-[#e6b333] rounded-md p-2 transition-all duration-200"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Logo */}
          {/*<div*/}
          {/*    className="flex-shrink-0 order-2 lg:order-none absolute left-1/2 -translate-x-1/2 lg:relative lg:left-0 lg:transform-none">*/}
          {/*    <Link href="/">*/}
          {/*        <Image*/}
          {/*            src="/Logo-Nexus.png"*/}
          {/*            alt="Nexus Logo"*/}
          {/*            width={120}*/}
          {/*            height={120}*/}
          {/*            className="h-12 sm:h-16 lg:h-20 w-auto"*/}
          {/*            priority*/}
          {/*        />*/}
          {/*    </Link>*/}
          {/*</div>*/}

          {/*<div*/}
          {/*    className="flex-shrink-0 order-2 lg:order-none lg:relative lg:left-0 lg:transform-none md:flex md:justify-center"*/}
          {/*>*/}
          {/*    <Link href="/">*/}
          {/*        <Image*/}
          {/*            src="/Logo-Nexus.png"*/}
          {/*            alt="Nexus Logo"*/}
          {/*            width={120}*/}
          {/*            height={120}*/}
          {/*            className="h-12 sm:h-16 lg:h-20 w-auto"*/}
          {/*            priority*/}
          {/*        />*/}
          {/*    </Link>*/}
          {/*</div>*/}

          {/*<div className="flex-shrink-0 order-2 flex justify-center absolute left-1/2 -translate-x-1/2 lg:order-none lg:relative lg:left-0 lg:transform-none md:flex md:justify-center">*/}
          {/*    <Link href="/">*/}
          {/*        <Image*/}
          {/*            src="/Logo-Nexus.png"*/}
          {/*            alt="Nexus Logo"*/}
          {/*            width={120}*/}
          {/*            height={120}*/}
          {/*            className="h-12 sm:h-16 lg:h-20 w-auto"*/}
          {/*            priority*/}
          {/*        />*/}
          {/*    </Link>*/}
          {/*</div>*/}

          <div className="flex-shrink-0 order-2 flex justify-center lg:order-none lg:flex lg:justify-center">
            <Link href="/">
              <Image
                src="/Logo-Nexus.png"
                alt="Nexus Logo"
                width={180}
                height={180}
                className="h-20 sm:h-24 lg:h-28 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Mobile Track & Trace Button - Visible on small screens */}
          <div className="lg:hidden flex-shrink-0 order-3">
            <Link href="/track-and-trace">
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#e6b333]/90 px-4 sm:px-6 py-1.5 sm:py-2 text-xs sm:text-sm rounded-lg font-normal transition-colors">
                Track & Trace
              </button>
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on small screens */}
          {/*<nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2 text-sm md:text-base xl:text-lg">*/}
          {/*  <Link*/}
          {/*    href="/whyNexus"*/}
          {/*    className="font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"*/}
          {/*  >*/}
          {/*    Why Nexus*/}
          {/*  </Link>*/}
          {/*  <Link*/}
          {/*    href="/leadership"*/}
          {/*    className="font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"*/}
          {/*  >*/}
          {/*    Leadership Team*/}
          {/*  </Link>*/}
          {/*  <Link*/}
          {/*    href="/services"*/}
          {/*    className="font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"*/}
          {/*  >*/}
          {/*    Services*/}
          {/*  </Link>*/}
          {/*  <Link*/}
          {/*    href="/insights"*/}
          {/*    className="font-semibold text-[#282828] hover:text-[#082049] transition-colors duration-200"*/}
          {/*  >*/}
          {/*    Insights*/}
          {/*  </Link>*/}
          {/*  /!* Desktop Track & Trace Button - Now visible from 'lg' breakpoint *!/*/}
          {/*  <Link href="/track-and-trace">*/}
          {/*    {" "}*/}
          {/*    /!* Removed the 'hidden xl:block' class *!/*/}
          {/*    <button className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors">*/}
          {/*      Track and Trace*/}
          {/*    </button>*/}
          {/*  </Link>*/}
          {/*</nav>*/}

          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8 xl:space-x-12 order-2 text-sm md:text-base xl:text-lg">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-200 ${pathname === link.href
                    ? "text-[#162F65]" // Active color
                    : "text-[#282828] hover:text-[#162F65]" // Default and hover
                  }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Desktop Track & Trace Button - Now visible from 'lg' breakpoint */}
            <Link href="/track-and-trace">
              {" "}
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors">
                Track and Trace
              </button>
            </Link>
          </nav>

          {/* Desktop Contact Us Button - Hidden on small screens */}
          <div className="hidden lg:flex items-center space-x-3 lg:space-x-4 order-3">
            <Link href="/contactUs">
              <button className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] hover:text-white px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2 text-xs sm:text-sm lg:text-sm rounded-lg font-normal transition-colors">
                Contact Us
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Menu Content - Toggles visibility based on isMenuOpen */}
        <div
          id="mobile-menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
            <Link
              href="/whyNexus"
              className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Why Nexus
            </Link>
            <Link
              href="/leadership"
              className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Leadership Team
            </Link>
            <Link
              href="/services"
              className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/insights"
              className="block px-3 py-2 text-base font-medium text-[#282828] hover:text-[#082049] hover:bg-gray-100 rounded-md transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Insights
            </Link>
            <Link href="/contactUs" className="w-full text-center mt-4">
              <button
                className="bg-[#e6b333] text-[#282828] hover:bg-[#162f65] px-6 py-2 text-sm rounded-lg font-normal w-full transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Nav;
