// /**
//  * Footer Component - Mobile-First Responsive
//  * Bottom section with navigation, app store links, and copyright
//  */
// import React from "react";

// export default function Footer() {
//   return (
//     <footer className="bg-gray-100">
//       {/* Main Footer Content */}
//       <div className="container-responsive py-6 sm:py-8">
//         <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
//           {/* Navigation Links */}
//           <nav className="flex items-center gap-4 sm:gap-6" aria-label="Footer navigation">
//             <a
//               href="/"
//               className="text-sm sm:text-base font-bold text-gray-800 hover:text-blue-600
//                          transition-colors duration-200 focus:outline-none focus:underline"
//             >
//               Home
//             </a>
//             <a
//               href="#features"
//               className="text-sm sm:text-base font-bold text-gray-800 hover:text-blue-600
//                          transition-colors duration-200 focus:outline-none focus:underline"
//             >
//               Features
//             </a>
//           </nav>

//           {/* App Store Badges */}
//            <div
//           className="w-auto max-w-full flex-shrink-0 pr-[calc(24px*0.5)] pl-[calc(24px*0.5)]"
//         >
//           <div className="flex items-center gap-4">
//             <span
//               className="hover:text-[rgba(26,30,33,1)] focus:text-[rgba(26,30,33,1)] text-[rgba(33,37,41,1)]"
//               style={{textDecorationColor: "rgba(33, 37, 41, 1)"}}
//               >Download app</span
//             >
//             <a
//               href="#"
//               className="hover:text-[rgba(10,88,202,1)] underline text-[rgba(13,110,253,1)]"
//               ><img
//                 src="data:image/png;base64,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"
//                 alt="#"
//                 className="h-9"
//             /></a>
//             <a
//               href="#"
//               className="hover:text-[rgba(10,88,202,1)] underline text-[rgba(13,110,253,1)]"
//               ><img
//                 src="data:image/png;base64,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"
//                 alt="#"
//                 className="h-9"
//             /></a>
//           </div>
//         </div>
//       </div>
//     </div>

//       {/* Copyright Bar */}
//       <div className="bg-white border-t border-gray-200">
//         <div className="container-responsive py-4 sm:py-6">
//           <p className="text-xs sm:text-sm text-center text-gray-600">
//             © 2026 Multichain Connect, All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }