// /**
//  * ServerFeatures Component
//  * 
//  * Display grid of 31 wallet service features.
//  * Each feature card is clickable and navigates to /connectWallet page.
//  * 
//  * Features include:
//  * - Migration Issues, Asset Recovery, Whitelist Issues
//  * - Rectification, High Gas Fees, Slippage Error
//  * - NFT Minting, Staking Issues, Transaction Delays
//  * - And 22 more wallet-related services
//  * 
//  * Visual design:
//  * - Responsive grid layout (2 columns mobile, 6 columns desktop)
//  * - Purple Unicode icons (rgba(160,7,158,1))
//  * - White cards with rounded corners
//  * - Light gray background (rgba(240,242,245,1))
//  */
// import React from "react";
// import Link from "next/link";

// export default function ServerFeatures() {
//     return (
//        <div
//   className="bg-[rgba(240,242,245,1)] text-[rgba(33,37,41,1)]"
//   id="component-container"
// >
//   {/* Server features section with clickable cards */}
//   <section id="features" className="py-12">
//     <div
//       className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-full xl:max-w-[1260px] mx-auto my-6 w-full px-6"
//     >
//       <div className="mb-4">
//         {/* Section title */}
//         <div className="mb-4 flex items-center justify-between">
//           <div
//             className="xl:text-2xl text-2xl font-bold leading-7 text-[rgba(33,37,41,1)]"
//             >Server Features 🌟</div>
//         </div>
//         {/* Grid of feature cards */}
//         <div
//           className="flex flex-wrap mt-[calc(-1*16px)] mr-[calc(-0.5*16px)] ml-[calc(-0.5*16px)]"
//         >
//           {/* Each card follows this structure: outer div → Link → white card → icon + title */}
//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             {/* Clickable link wraps entire card */}
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   {/* Purple Unicode icon */}
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⟲</div>
//                   {/* Feature name */}
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Migration Issues</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">$</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Asset Recovery</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">※</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Rectification</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✓</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Validation</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◇</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >High Gas Fees</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">╲</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Slippage Error</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✕</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Transaction Error</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">∞</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Cross Chain Transfer</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⬢</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Staking Issues</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⇄</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Swap/Exchange</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◈</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Claim Reflection</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">★</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Dapps Reconnection</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◆</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Initialize Wallet</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⊙</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Login Issues</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✓</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Approve Wallet</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⊘</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Revoke connections</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◉</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >NFTS Issues</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">₿</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Missing/Irregular Balances</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⛨</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Threats Scan</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⧗</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Transaction Delays</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">○</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Locked Accounts</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">╱</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Trading Wallet Issues</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">§</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Multichain Enabler</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">☰</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Wallet Whitelist</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✓</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Verify Holding Wallet</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◎</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Wallet Retrieval</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✉</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Post Migration</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-24 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">✦</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Clear Wallet Glitch</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">♔</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Verify as Admin</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">◆</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Verify as WHALE</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>

//           <div
//             className="md:flex-shrink-0 md:flex-grow-0 md:basis-auto md:w-[33.3333%] lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[16.6667%] mt-4 w-1/2 max-w-full flex-shrink-0 pr-[calc(16px*0.5)] pl-[calc(16px*0.5)]"
//           >
//             <Link href="/connectWallet" className="cursor-pointer block">
//               <div
//                 className="relative flex h-20 min-w-0 flex-col break-words rounded-2xl border-0 bg-white p-2 text-[rgba(33,37,41,1)] shadow-[rgba(0,0,0,0.2)_0px_1px_2px] border-[rgba(0,0,0,0.176)]"
//               >
//                 <div
//                   className="flex-grow px-4 py-1 text-center text-[rgba(33,37,41,1)]"
//                 >
//                   <div className="text-3xl mb-1 text-[rgba(160,7,158,1)] font-bold">⊕</div>
//                   <h6
//                     className="mt-2 mb-1 text-base font-bold leading-5 text-[rgba(33,37,41,1)]"
//                     >Others</h6
//                   >
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   </section>
//   {/* comopnent end  */}
// </div>

//     );
// }

