// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
//
// const Footer = () => {
//     return (
//         <footer className="relative z-30 public-sans bg-[#002B64] text-white">
//             <div className="container mx-auto pt-12 relative pb-8 ">
//                 <div
//                     className="absolute bg-[url('/artboard.png')] bg-repeat bg-cover inset-0 w-1/3"/>
//                 <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//                     <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
//                         <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center lg:text-left leading-tight">
//                             Let’s Connect with Nexus Logix <br className="hidden lg:block"/>
//                             for Seamless Shipping
//                         </h2>
//                         <button
//                             className="bg-gradient-to-r from-[#0065AB] to-[#243173] rounded-xl text-white text-base sm:text-lg font-semibold px-6 sm:px-8 py-2.5 hover:from-[#007BC7] hover:to-[#3B4B9F] transition-all duration-300"
//                         >
//                             Get Price
//                         </button>
//                     </div>
//                     <hr className="my-8 lg:my-12 w-full border-white/20"/>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
//                         <div className="space-y-6">
//                             <div className="flex justify-center sm:justify-start">
//                                 <Image
//                                     src="/nexus-logo.png"
//                                     alt="Nexus Logix Logo"
//                                     width={180}
//                                     height={150}
//                                     className="bg-[#F8F8F8] py-3 px-8 rounded-md"
//                                 />
//                             </div>
//                             <p className="text-[#B5B5B5] text-sm leading-relaxed text-center sm:text-left max-w-xs mx-auto sm:mx-0">
//                                 Lorem ipsum dolor sit amet consectetur. Eget adipiscing
//                                 consequat quis nulla non cras velit. Velit posuere
//                                 fames consectetur sit nulla porta diam.
//                             </p>
//                             <div className="flex justify-center sm:justify-start space-x-4">
//                                 {[
//                                     {
//                                         path: "M22 12C16.477 12 12 16.477 12 22C12 26.991 15.657 31.128 20.438 31.879V24.89H17.898V22H20.438V19.797C20.438 17.291 21.93 15.907 24.215 15.927C25.309 15.907 26.453 16.102 26.453 16.102V18.562H25.193C23.95 18.562 23.563 19.333 23.563 20.124V22H26.336L25.893 24.89H23.563V31.879C28.343 31.129 32 26.99 32 22C32 16.477 27.523 12 22 12Z",
//                                         clipPath: "clip0_155_1249",
//                                     },
//                                     {
//                                         path: "M22 12C24.717 12 25.056 12.01 26.122 12.06C27.187 12.11 27.912 12.277 28.55 12.525C29.21 12.779 29.766 13.123 30.322 13.678C30.8305 14.1779 31.224 14.7826 31.475 15.45C31.722 16.087 31.89 16.813 31.94 17.878C31.987 18.944 32 19.283 32 22C32 24.717 31.99 25.056 31.94 26.122C31.89 27.187 31.722 27.912 31.475 28.55C31.2247 29.2178 30.8311 29.8226 30.322 30.322C29.822 30.8303 29.2173 31.2238 28.55 31.475C27.913 31.722 27.187 31.89 26.122 31.94C25.056 31.987 24.717 32 22 32C19.283 32 18.944 31.99 17.878 31.94C16.813 31.89 16.088 31.722 15.45 31.475C14.7823 31.2245 14.1775 30.8309 13.678 30.322C13.1694 29.8222 12.7759 29.2175 12.525 28.55C12.277 27.913 12.11 27.187 12.06 26.122C12.013 25.056 12 24.717 12 22C12 19.283 12.01 18.944 12.06 17.878C12.11 16.812 12.277 16.088 12.525 15.45C12.7752 14.7822 13.1688 14.1773 13.678 13.678C14.1777 13.1692 14.7824 12.7757 15.45 12.525C16.088 12.277 16.812 12.11 17.878 12.06C18.944 12.013 19.283 12 22 12ZM22 17C20.6739 17 19.4021 17.5268 18.4645 18.4645C17.5268 19.4021 17 20.6739 17 22C17 23.3261 17.5268 24.5979 18.4645 25.5355C19.4021 26.4732 20.6739 27 22 27C23.3261 27 24.5979 26.4732 25.5355 25.5355C26.4732 24.5979 27 23.3261 27 22C27 20.6739 26.4732 19.4021 25.5355 18.4645C24.5979 17.5268 23.3261 17 22 17ZM28.5 16.75C28.5 16.4185 28.3683 16.1005 28.1339 15.8661C27.8995 15.6317 27.5815 15.5 27.25 15.5C26.9185 15.5 26.6005 15.6317 26.3661 15.8661C26.1317 16.1005 26 16.4185 26 16.75C26 17.0815 26.1317 17.3995 26.3661 17.6339C26.6005 17.8683 26.9185 18 27.25 18C27.5815 18 27.8995 17.8683 28.1339 17.6339C28.3683 17.3995 28.5 17.0815 28.5 16.75ZM22 19C22.7956 19 23.5587 19.3161 24.1213 19.8787C24.6839 20.4413 25 21.2044 25 22C25 22.7956 24.6839 23.5587 24.1213 24.1213C23.5587 24.6839 22.7956 25 22 25C21.2044 25 20.4413 24.6839 19.8787 24.1213C19.3161 23.5587 19 22.7956 19 22C19 21.2044 19.3161 20.4413 19.8787 19.8787C20.4413 19.3161 21.2044 19 22 19Z",
//                                         clipPath: "clip0_155_1244",
//                                     },
//                                     {
//                                         path: "M16 18C17.1046 18 18 17.1046 18 16C18 14.8954 17.1046 14 16 14C14.8954 14 14 14.8954 14 16C14 17.1046 14.8954 18 16 18ZM17.6667 19.333H14.3333C14.1493 19.333 14 19.4823 14 19.6663V29.6663C14 29.8503 14.1493 29.9997 14.3333 29.9997H17.6667C17.8507 29.9997 18 29.8503 18 29.6663V19.6663C18 19.4823 17.8507 19.333 17.6667 19.333ZM27.598 18.8744C26.1734 18.3864 24.3914 18.815 23.3227 19.5837C23.286 19.4404 23.1554 19.3337 23 19.3337H19.6667C19.4827 19.3337 19.3334 19.483 19.3334 19.667V29.667C19.3334 29.851 19.4827 30.0004 19.6667 30.0004H23C23.184 30.0004 23.3334 29.851 23.3334 29.667V22.4804C23.872 22.0164 24.566 21.8684 25.134 22.1097C25.6847 22.3424 26 22.9104 26 23.667V29.667C26 29.851 26.1494 30.0004 26.3334 30.0004H29.6667C29.8507 30.0004 30 29.851 30 29.667V22.9957C29.962 20.2564 28.6734 19.2424 27.598 18.8744Z",
//                                         clipPath: "clip0_155_1249",
//                                     },
//                                 ].map((icon, index) => (
//                                     <a
//                                         key={index}
//                                         href="#"
//                                         className="text-gray-300 hover:text-white transition-colors transform hover:scale-110"
//                                     >
//                                         <svg
//                                             width="40"
//                                             height="40"
//                                             viewBox="0 0 45 45"
//                                             fill="none"
//                                             xmlns="http://www.w3.org/2000/svg"
//                                         >
//                                             <path
//                                                 opacity="0.25"
//                                                 d="M43.875 22.5C43.875 34.3051 34.3051 43.875 22.5 43.875C10.6949 43.875 1.125 34.3051 1.125 22.5C1.125 10.6949 10.6949 1.125 22.5 1.125C34.3051 1.125 43.875 10.6949 43.875 22.5Z"
//                                                 fill="white"
//                                                 stroke="#00367E"
//                                                 strokeWidth="2.25"
//                                             />
//                                             <rect x="2" y="2" width="40" height="40" rx="20" fill="white"/>
//                                             <g clipPath={`url(#${icon.clipPath})`}>
//                                                 <path d={icon.path} fill="#00367E"/>
//                                             </g>
//                                             <defs>
//                                                 <clipPath id={icon.clipPath}>
//                                                     <rect
//                                                         width="24"
//                                                         height="24"
//                                                         fill="white"
//                                                         transform="translate(10 10)"
//                                                     />
//                                                 </clipPath>
//                                             </defs>
//                                         </svg>
//                                     </a>
//                                 ))}
//                             </div>
//                         </div>
//
//                         {[1, 2].map((col) => (
//                             <div key={col} className="space-y-4">
//                                 <h3 className="text-base font-semibold text-[#F8F8F8] text-center sm:text-left">
//                                     Quick Links
//                                 </h3>
//                                 <ul className="space-y-3 text-[#B5B5B5] text-sm text-center sm:text-left">
//                                     {Array(5)
//                                         .fill(null)
//                                         .map((_, i) => (
//                                             <li key={i}>
//                                                 <a href="#" className="hover:text-white transition-colors">
//                                                     Lorem ipsum
//                                                 </a>
//                                             </li>
//                                         ))}
//                                 </ul>
//                             </div>
//                         ))}
//
//                         <div className="space-y-4">
//                             <h3 className="text-base font-semibold text-[#F8F8F8] text-center sm:text-left">
//                                 Contact Us
//                             </h3>
//                             <ul className="space-y-4 container justify-start text-[#B5B5B5] text-sm">
//                                 {[
//                                     {
//                                         icon: "M17.0001 9.6665C20.2251 9.6665 22.8334 12.2748 22.8334 15.4998C22.8334 19.8748 17.0001 26.3332 17.0001 26.3332C17.0001 26.3332 11.1667 19.8748 11.1667 15.4998C11.1667 12.2748 13.7751 9.6665 17.0001 9.6665ZM12.8334 15.4998C12.8334 17.8748 15.2667 21.5082 17.0001 23.7332C18.7667 21.4915 21.1667 17.8998 21.1667 15.4998C21.1667 13.1998 19.3001 11.3332 17.0001 11.3332C14.7001 11.3332 12.8334 13.1998 12.8334 15.4998ZM17.0001 17.5832C15.8495 17.5832 14.9167 16.6504 14.9167 15.4998C14.9167 14.3492 15.8495 13.4165 17.0001 13.4165C18.1507 13.4165 19.0834 14.3492 19.0834 15.4998C19.0834 16.6504 18.1507 17.5832 17.0001 17.5832Z",
//                                         text: "Lorem ipsum dolor sit amet consectetur. Sed tempus sed sed",
//                                     },
//                                     {
//                                         icon: "M25.3334 13.0002C25.3334 12.0835 24.5834 11.3335 23.6667 11.3335H10.3334C9.41675 11.3335 8.66675 12.0835 8.66675 13.0002V23.0002C8.66675 23.9168 9.41675 24.6668 10.3334 24.6668H23.6667C24.5834 24.6668 25.3334 23.9168 25.3334 23.0002V13.0002ZM23.6667 13.0002L17.0001 17.1668L10.3334 13.0002H23.6667ZM23.6667 23.0002H10.3334V14.6668L17.0001 18.8335L23.6667 14.6668V23.0002Z",
//                                         text: "nexuslogix@gmail.com",
//                                     },
//                                     {
//                                         icon: "M12.4498 12.1667C12.4998 12.9083 12.6248 13.6333 12.8248 14.325L11.8248 15.325C11.4832 14.325 11.2665 13.2667 11.1915 12.1667H12.4498ZM20.6668 22.1833C21.3752 22.3833 22.1002 22.5083 22.8335 22.5583V23.8C21.7335 23.725 20.6752 23.5083 19.6668 23.175L20.6668 22.1833ZM13.25 10.5H10.3333C9.875 10.5 9.5 10.875 9.5 11.3333C9.5 19.1583 15.8417 25.5 23.6667 25.5C24.125 25.5 24.5 25.125 24.5 24.6667V21.7583C24.5 21.3 24.125 20.925 23.6667 20.925C22.6333 20.925 21.625 20.7583 20.6917 20.45C20.6083 20.4167 20.5167 20.4083 20.4333 20.4083C20.2167 20.4083 20.0083 20.4917 19.8417 20.65L18.0083 22.4833C15.65 21.275 13.7167 19.35 12.5167 16.9917L14.35 15.1583C14.5833 14.925 14.65 14.6 14.5583 14.3083C14.25 13.375 14.0833 12.375 14.0833 11.3333C14.0833 10.875 13.7083 10.5 13.25 10.5Z",
//                                         text: "+612 6193 3756",
//                                     },
//                                 ].map((item, index) => (
//                                     <li
//                                         key={index}
//                                         className="flex items-center gap-3 max-w-2xl justify-start"
//                                     >
//                     <span>
//                       <svg
//                           width="32"
//                           height="32"
//                           viewBox="0 0 35 35"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle cx="17.5" cy="17.5" r="17.5" fill="white"/>
//                         <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d={item.icon}
//                             fill="#002B64"
//                         />
//                       </svg>
//                     </span>
//                                         <p className="max-w-xs">{item.text}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="bg-white py-4">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//                     <div
//                         className="flex flex-col sm:flex-row justify-between items-center text-[#334770] text-sm gap-4">
//                         <p>Copyright © Nexus Logix | All Rights Reserved</p>
//                         <div className="flex space-x-6">
//                             <Link href="/privacy" className="hover:text-[#0065AB] transition-colors">
//                                 Privacy Policy
//                             </Link>
//                             <Link href="/terms" className="hover:text-[#0065AB] transition-colors">
//                                 Terms & Conditions
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;


// import Image from "next/image";
// import React from "react";
//
// const Footer = () => {
//     return (
//         <footer className="relative z-30 public-sans bg-[#222222] text-white">
//             <div className="container mx-auto pt-12 relative pb-8 ">
//                 {/*<div*/}
//                 {/*    className="absolute bg-[url('/artboard.png')] bg-repeat bg-cover inset-0 w-1/3"/>*/}
//                 <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//                     <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0">
//                         <h2 className="text-base lg:text-lg font-medium text-center lg:text-left leading-tight">
//                             Tell us your requirement and one of our experts will be touch to learn more <br/> about your
//                             business and draw up a solution that addresses your unique needs
//                         </h2>
//                         <button
//                             className="bg-white rounded-lg text-[#162F65] text-base sm:text-[22px] font-medium w-52 py-2.5 hover:bg-gray-400"
//                         >
//                             Talk to Us
//                         </button>
//                     </div>
//                     <hr className="my-6 lg:my-10 w-full border-white"/>
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-8">
//                         <div className="space-y-6">
//                             <div className="flex justify-center sm:justify-start">
//                                 <Image
//                                     src="/nexus-logo.png"
//                                     alt="Nexus Logix Logo"
//                                     width={180}
//                                     height={150}
//                                     className="bg-[#F8F8F8] py-3 px-8 rounded-md"
//                                 />
//                             </div>
//                             <p className="text-[#B5B5B5] text-sm leading-relaxed text-center sm:text-left max-w-xs mx-auto sm:mx-0">
//                                 A proudly Australian logistics pit crew with a global reach, delivering agile, reliable
//                                 freight solutions that keep your supply chain moving.
//                             </p>
//                         </div>
//
//                         {[1, 2].map((col) => (
//                             <div key={col} className="space-y-4">
//                                 <h3 className="text-base font-semibold text-[#F8F8F8] text-center sm:text-left">
//                                     Quick Links
//                                 </h3>
//                                 <ul className="space-y-3 text-[#B5B5B5] text-sm text-center sm:text-left">
//                                     {Array(5)
//                                         .fill(null)
//                                         .map((_, i) => (
//                                             <li key={i}>
//                                                 <a href="#" className="hover:text-white transition-colors">
//                                                     Lorem ipsum
//                                                 </a>
//                                             </li>
//                                         ))}
//                                 </ul>
//                             </div>
//                         ))}
//
//                         <div className="space-y-4">
//                             <h3 className="text-base font-semibold text-[#F8F8F8] text-center sm:text-left">
//                                 Contact Us
//                             </h3>
//                             <ul className="space-y-4 container justify-start text-[#B5B5B5] text-sm">
//                                 {[
//                                     {
//                                         icon: "M17.0001 9.6665C20.2251 9.6665 22.8334 12.2748 22.8334 15.4998C22.8334 19.8748 17.0001 26.3332 17.0001 26.3332C17.0001 26.3332 11.1667 19.8748 11.1667 15.4998C11.1667 12.2748 13.7751 9.6665 17.0001 9.6665ZM12.8334 15.4998C12.8334 17.8748 15.2667 21.5082 17.0001 23.7332C18.7667 21.4915 21.1667 17.8998 21.1667 15.4998C21.1667 13.1998 19.3001 11.3332 17.0001 11.3332C14.7001 11.3332 12.8334 13.1998 12.8334 15.4998ZM17.0001 17.5832C15.8495 17.5832 14.9167 16.6504 14.9167 15.4998C14.9167 14.3492 15.8495 13.4165 17.0001 13.4165C18.1507 13.4165 19.0834 14.3492 19.0834 15.4998C19.0834 16.6504 18.1507 17.5832 17.0001 17.5832Z",
//                                         text: "Lorem ipsum dolor sit amet consectetur. Sed tempus sed sed",
//                                     },
//                                     {
//                                         icon: "M25.3334 13.0002C25.3334 12.0835 24.5834 11.3335 23.6667 11.3335H10.3334C9.41675 11.3335 8.66675 12.0835 8.66675 13.0002V23.0002C8.66675 23.9168 9.41675 24.6668 10.3334 24.6668H23.6667C24.5834 24.6668 25.3334 23.9168 25.3334 23.0002V13.0002ZM23.6667 13.0002L17.0001 17.1668L10.3334 13.0002H23.6667ZM23.6667 23.0002H10.3334V14.6668L17.0001 18.8335L23.6667 14.6668V23.0002Z",
//                                         text: "nexuslogix@gmail.com",
//                                     },
//                                     {
//                                         icon: "M12.4498 12.1667C12.4998 12.9083 12.6248 13.6333 12.8248 14.325L11.8248 15.325C11.4832 14.325 11.2665 13.2667 11.1915 12.1667H12.4498ZM20.6668 22.1833C21.3752 22.3833 22.1002 22.5083 22.8335 22.5583V23.8C21.7335 23.725 20.6752 23.5083 19.6668 23.175L20.6668 22.1833ZM13.25 10.5H10.3333C9.875 10.5 9.5 10.875 9.5 11.3333C9.5 19.1583 15.8417 25.5 23.6667 25.5C24.125 25.5 24.5 25.125 24.5 24.6667V21.7583C24.5 21.3 24.125 20.925 23.6667 20.925C22.6333 20.925 21.625 20.7583 20.6917 20.45C20.6083 20.4167 20.5167 20.4083 20.4333 20.4083C20.2167 20.4083 20.0083 20.4917 19.8417 20.65L18.0083 22.4833C15.65 21.275 13.7167 19.35 12.5167 16.9917L14.35 15.1583C14.5833 14.925 14.65 14.6 14.5583 14.3083C14.25 13.375 14.0833 12.375 14.0833 11.3333C14.0833 10.875 13.7083 10.5 13.25 10.5Z",
//                                         text: "+612 6193 3756",
//                                     },
//                                 ].map((item, index) => (
//                                     <li
//                                         key={index}
//                                         className="flex items-center gap-3 max-w-2xl justify-start"
//                                     >
//                     <span>
//                       <svg
//                           width="32"
//                           height="32"
//                           viewBox="0 0 35 35"
//                           fill="none"
//                           xmlns="http://www.w3.org/2000/svg"
//                       >
//                         <circle cx="17.5" cy="17.5" r="17.5" fill="white"/>
//                         <path
//                             fillRule="evenodd"
//                             clipRule="evenodd"
//                             d={item.icon}
//                             fill="#002B64"
//                         />
//                       </svg>
//                     </span>
//                                         <p className="max-w-xs">{item.text}</p>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             <div className="bg-white py-4">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//                     <div
//                         className="flex flex-col sm:flex-row justify-center items-center text-[#334770] text-sm gap-4">
//                         <p>© nexusglobal @2025. All Rights Reserved.</p>
//                         {/*<div className="flex space-x-6">*/}
//                         {/*    <Link href="/privacy" className="hover:text-[#0065AB] transition-colors">*/}
//                         {/*        Privacy Policy*/}
//                         {/*    </Link>*/}
//                         {/*    <Link href="/terms" className="hover:text-[#0065AB] transition-colors">*/}
//                         {/*        Terms & Conditions*/}
//                         {/*    </Link>*/}
//                         {/*</div>*/}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };
//
// export default Footer;

// import Image from "next/image";
// import React from "react";
//
// const Footer = () => {
//     return (
//         <footer className="bg-[#222222] text-white poppins">
//             <div className="relative">
//                 {/* Background pattern */}
//                 <div
//                     className="absolute bg-[url('/x.png')] bg-no-repeat bg-cover inset-0 w-2/5 opacity-30"/>
//                 <div className="absolute left-0 top-0 opacity-5">
//                     <Image
//                         src="/logo.png"
//                         alt=""
//                         width={100}
//                         height={100}
//                         className="w-96 h-96 object-cover"
//                     />
//                 </div>
//
//                 <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//                     {/* Top section */}
//                     <div className="flex flex-col lg:flex-row items-center justify-between mb-12">
//                         <div className="mb-8 lg:mb-0 lg:mr-12">
//                             <p className="text-lg lg:text-2xl font-medium mb-8 lg:mb-0 max-w-3xl poppins">
//                                 Tell us your requirement and one of our experts will be in
//                                 touch to learn more about your business and draw up a solution
//                                 that addresses your unique needs
//                             </p>
//                         </div>
//                         <button
//                             className="bg-white text-[#162F65] hover:bg-gray-100 px-8 py-3 text-lg lg:text-xl rounded-lg font-medium flex-shrink-0">
//                             Talk to Us
//                         </button>
//                     </div>
//
//                     <hr className="border-white/20 mb-12"/>
//
//                     {/* Content grid */}
//                     <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
//                         {/* Logo and description */}
//                         <div className="lg:col-span-1">
//                             <img
//                                 src="https://cdn.builder.io/api/v1/image/assets/TEMP/5eb673562ebcddf33bba9188c3ce5c95db9bf1f9?width=320"
//                                 alt="Nexus Logo"
//                                 className="h-24 w-auto mb-6"
//                             />
//                             <p className="text-sm leading-relaxed max-w-xs">
//                                 A proudly Australian logistics pit crew with a global reach,
//                                 delivering agile, reliable freight solutions that keep your
//                                 supply chain moving.
//                             </p>
//                         </div>
//
//                         {/* Links */}
//                         <div>
//                             <h4 className="text-2xl lg:text-3xl font-bold mb-6">Links</h4>
//                             <div className="space-y-2">
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Home
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Why Nexus
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Leadership Team
//                                 </a>
//                             </div>
//                         </div>
//
//                         {/* Additional Links */}
//                         <div>
//                             <div className="space-y-2 mt-12">
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Insights
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Contact Us
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Track and Trace
//                                 </a>
//                             </div>
//                         </div>
//
//                         {/* Services */}
//                         <div>
//                             <h4 className="text-2xl lg:text-3xl font-bold mb-6">
//                                 Services
//                             </h4>
//                             <div className="space-y-2">
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Air & Sea Freight
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Road & Rail Transport
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Customs Clearance & Border Processing
//                                 </a>
//                                 <a
//                                     href="#"
//                                     className="block text-white hover:text-[#e6b333] transition-colors"
//                                 >
//                                     Integrated Logistics & Special Projects
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//
//             {/* Bottom bar */}
//             <div className="bg-white">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
//                     <div className="flex flex-col sm:flex-row items-center justify-between text-[#162F65]">
//                         <div className="flex items-center mb-2 sm:mb-0">
//                             <span className="text-xl">
//                   © nexusglobal @2025. All Rights Reserved.
//                 </span>
//                         </div>
//                         <div className="text-xl">
//                             <span>Terms and Condition | Privacy Policy</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     )
// }
//
// export default Footer;

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { getFooterData } from "@/sanity/lib/api";

// interface FooterData {
//     footer_description?: string;
//     footer_button_text?: string;
//     footer_button_link?: string;
//     footer_logo?: string;
//     footer_log_alt?: string;
//     footer_sub_description?: string;
//     footer_column_1_title?: string;
//     footer_links_column_1?: {
//         nav_item_name?: string;
//         nav_item_link?: string;
//     };
//     footer_column_2_title?: string;
//     footer_links_column_2?: {
//         nav_item_name?: string;
//         nav_item_link?: string;
//     };

// }

const Footer = async() => {

    // const [sectionData, setSectionData] = useState<FooterData | null>(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState<string | null>(null);


    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             setLoading(true);
    //             const data = await footer();

               
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
    // }, []); // Empty dependency array means this runs once on mount

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
    const footerData = await getFooterData();

    if (!footerData) {
        return null; // Or render a default footer if you have one
    }

    return (
        <footer className="bg-[#222222] text-white relative poppins overflow-hidden">
            <div className="relative">
                {/* Background pattern */}
                <div
                    className="absolute bg-[url('/x.png')] bg-no-repeat -top-5 sm:-top-6 lg:-top-25 bg-contain overflow-hidden inset-0 w-full sm:w-3/5 lg:w-[550px] h-[800] opacity-5"
                />
                {/*<div className="absolute left-0 top-0 opacity-5">*/}
                {/*    <Image*/}
                {/*        src="/logo.png"*/}
                {/*        alt=""*/}
                {/*        width={100}*/}
                {/*        height={100}*/}
                {/*        className="w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover"*/}
                {/*    />*/}
                {/*</div>*/}

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8">
                    {/* Top section */}
                    <div
                        className="flex flex-col items-center lg:flex-row lg:justify-between mt-6 mb-6 sm:mb-8 lg:mb-10">
                        <div className="mb-6 sm:mb-8 lg:mb-0 lg:mr-12 text-center lg:text-left">
                            <p className="text-sm sm:text-base lg:text-lg font-medium max-w-2xl sm:max-w-3xl poppins">
                                Tell us your requirement and one of our experts will be in
                                touch to learn more about your business and draw up a solution
                                that addresses your unique needs
                            </p>
                        </div>
                        <button
                            className="bg-white text-[#162F65] hover:bg-black hover:border-1 hover:border-white hover:text-white transition duration-300 px-6 py-2 sm:px-15 sm:py-3 text-base sm:text-lg lg:text-xl rounded-lg font-medium flex-shrink-0"
                        >
                            Talk to Us
                        </button>
                    </div>

                    <hr className="border-white mb-8 sm:mb-10 lg:mb-12" />

                    {/* Content grid */}
                    <div
                        className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-40 mb-2 sm:mb-4 lg:mb-6">
                        {/* Logo and description */}
                        <div className="lg:col-span-1 text-center sm:text-left">
                            <Image
                                src="/footer_logo.png"
                                alt="Nexus Logo"
                                width={200}
                                height={200}
                                className="h-16 sm:h-20 lg:h-24 w-auto mx-auto sm:mx-0 mb-4 sm:mb-6"
                            />
                            <p className="text-xs sm:text-sm leading-relaxed max-w-xs mx-auto sm:mx-0">
                                A proudly Australian logistics pit crew with a global reach,
                                delivering agile, reliable freight solutions that keep your
                                supply chain moving.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="text-base sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                                Links
                            </h4>
                            <div className="space-y-2 text-center sm:text-left">
                                <Link
                                    href="/"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/whyNexus"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Why Nexus
                                </Link>
                                <Link
                                    href="/leadership"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Leadership Team
                                </Link>
                                <Link
                                    href="/insights"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Insights
                                </Link>
                                <Link
                                    href="/contactUs"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Contact Us
                                </Link>
                                <Link
                                    href="/track-and-trace"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Track and Trace
                                </Link>
                            </div>
                        </div>

                        {/* Additional Links */}
                        {/*<div>*/}
                        {/*    <div className="space-y-2 mt-0 sm:mt-12 text-center sm:text-left">*/}
                        {/*        <a*/}
                        {/*            href="#"*/}
                        {/*            className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"*/}
                        {/*        >*/}
                        {/*            Insights*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            href="/contactUs"*/}
                        {/*            className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"*/}
                        {/*        >*/}
                        {/*            Contact Us*/}
                        {/*        </a>*/}
                        {/*        <a*/}
                        {/*            href="#"*/}
                        {/*            className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"*/}
                        {/*        >*/}
                        {/*            Track and Trace*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/* Services */}
                        <div>
                            <h4 className="text-base sm:text-xl lg:text-2xl font-bold mb-4 sm:mb-6 text-center sm:text-left">
                                Services
                            </h4>
                            <div className="space-y-2 text-center sm:text-left">
                                <Link
                                    href="/air-and-sea-freight"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Air & Sea Freight
                                </Link>
                                <Link
                                    href="/road-and-rail"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Road & Rail Transport
                                </Link>
                                <Link
                                    href="/customs"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Customs Clearance & Border Processing
                                </Link>
                                <Link
                                    href="/Integrated-logistics"
                                    className="block text-white hover:text-[#bbbbbb] transition-colors text-xs sm:text-sm"
                                >
                                    Integrated Logistics & Special Projects
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div
                        className="flex flex-col sm:flex-row items-center justify-between text-[#162F65] text-center sm:text-left">
                        <div className="mb-2 sm:mb-0">
                            <span className="text-sm sm:text-base lg:text-lg">


                                © nexusglobal @2025. All Rights Reserved.
                            </span>
                        </div>
                        <div className="text-sm sm:text-base lg:text-lg">
                            <span><a href="/terms-and-conditions">Terms and Condition</a> | <a href="/privacy-policy">Privacy Policy</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
