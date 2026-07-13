// "use client";
// import React, { useState } from 'react';
// import Link from 'next/link';

// export default function Header() {
//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const toggleMobileMenu = () => {
//         setIsMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <header className="bg-[#0B1527]">
//             <nav className="container mx-auto px-4 py-3">
//                 <div className="flex items-center justify-between gap-4">
//                     {/* Logo/Brand */}
//                     <Link 
//                         href="/" 
//                         className="flex items-center gap-2 text-white font-bold text-lg tracking-wider hover:opacity-80 transition-opacity z-50"
//                         onClick={(e) => {
//                             e.preventDefault();
//                             window.location.href = '/';
//                         }}
//                     >
//                         <img
//                             src="/wallogo.png"
//                             alt="Logo"
//                             className="h-8"
//                         />
//                         <span className="hidden sm:inline">SERVER RECTIFIER</span>
//                     </Link>

//                     {/* Chain Selector Pills - Desktop only */}
//                     <div className="hidden lg:flex items-center gap-2 flex-1 justify-center">
//                         <Link href="/connectWallet" className="bg-[rgba(13,110,253,1)] hover:bg-[#0b5ed7] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
//                             All
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/ethereumlogo.png" alt="Ethereum" className="w-4 h-4" />
//                             Ethereum
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/bscLogo.png" alt="BSC" className="w-4 h-4" />
//                             BSC
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/polygonlogo.png" alt="Polygon" className="w-4 h-4" />
//                             Polygon
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/avalanche.png" alt="Avalanche" className="w-4 h-4" />
//                             Avalanche
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/solana.png" alt="Solana" className="w-4 h-4" />
//                             Solana
//                         </Link>
//                         <Link href="/connectWallet" className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
//                             <img src="/cardano.png" alt="Cardano" className="w-4 h-4" />
//                             Cardano
//                         </Link>
//                     </div>

//                     {/* Desktop Connect Wallet Button */}
//                     <Link 
//                         href="/connectWallet"
//                         className="hidden lg:inline-block bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white px-6 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide transition-all border border-[#0a58ca] hover:border-[#0a4cad] whitespace-nowrap"
//                     >
//                         Connect Wallet
//                     </Link>

//                     {/* Hamburger Menu Button - Mobile/Tablet only */}
//                     <button
//                         onClick={toggleMobileMenu}
//                         className="lg:hidden flex flex-col gap-1.5 w-8 h-8 items-center justify-center z-50 relative"
//                         aria-label="Toggle menu"
//                     >
//                         <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
//                         <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
//                         <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
//                     </button>
//                 </div>

//                 {/* Mobile Menu Dropdown */}
//                 <div className={`lg:hidden fixed inset-0 bg-[rgba(11,21,39,0.98)] z-40 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//                     <div className={`flex flex-col items-center justify-center min-h-screen p-6 pt-20 transition-all duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
//                         {/* Connect Wallet Button - Top */}
//                         <Link
//                             href="/connectWallet"
//                             onClick={() => setIsMobileMenuOpen(false)}
//                             className="w-full max-w-xs bg-[#0D6EFD] hover:bg-[#0b5ed7] text-white px-6 py-3 rounded-lg text-sm font-bold uppercase tracking-wide transition-all border border-[#0a58ca] text-center mb-6"
//                         >
//                             Connect Wallet
//                         </Link>

//                         {/* Chain Selector Pills */}
//                         <div className="flex flex-col gap-3 w-full max-w-xs">
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(13,110,253,1)] hover:bg-[#0b5ed7] text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors text-center">
//                                 All
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/ethereumlogo.png" alt="Ethereum" className="w-4 h-4" />
//                                 Ethereum
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/bscLogo.png" alt="BSC" className="w-4 h-4" />
//                                 BSC
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/polygonlogo.png" alt="Polygon" className="w-4 h-4" />
//                                 Polygon
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/avalanche.png" alt="Avalanche" className="w-4 h-4" />
//                                 Avalanche
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/solana.png" alt="Solana" className="w-4 h-4" />
//                                 Solana
//                             </Link>
//                             <Link href="/connectWallet" onClick={() => setIsMobileMenuOpen(false)} className="bg-[rgba(232,241,255,1)] hover:bg-[#0b5ed7] text-[rgba(13,110,253,1)] hover:text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2">
//                                 <img src="/cardano.png" alt="Cardano" className="w-4 h-4" />
//                                 Cardano
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }