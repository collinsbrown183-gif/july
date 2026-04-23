/**
 * FirstSection Component (Hero Section)
 * 
 * Landing page hero section with:
 * - Main headline and value proposition
 * - Two call-to-action buttons (Connect & Claim)
 * - Three-step process visualization
 * - Purple background (rgba(54,4,46,1))
 * 
 * This section is the first thing users see when visiting the site
 */
import React from "react";
import Link from "next/link";

export default function FirstSection() {
    return (
        <div className="bg-[#0B1527] text-[rgba(33,37,41,1)]" id="component-container">
            <section className="flex items-center bg-cover py-12 bg-[#0B1527]">
                <div className="sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-full xl:max-w-[1260px] mx-auto w-full p-6">
                    <div className="flex flex-wrap mt-[calc(-1*0)] mr-[calc(-0.5*24px)] ml-[calc(-0.5*24px)]">
                        <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[58.3333%] w-full max-w-full flex-shrink-0 pr-[calc(24px*0.5)] pl-[calc(24px*0.5)]">
                            {/* Main headline and description */}
                            <div className="mb-6">
                                <div className="text-3xl sm:text-4xl md:text-5xl xl:text-5xl mb-4 font-bold text-white leading-tight sm:leading-[57.6px]">
                                    Validate, Synchronize, and <br /> Rectify your assets and wallets
                                </div>
                                <div className="text-base sm:text-lg md:text-xl text-[rgba(255,255,255,0.5)]">
                                    Open, Secure, and Decentralized Protocol for syncing and rectification of <br /> various wallet
                                </div>
                            </div>
                            {/* Call-to-action buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-0">
                                {/* Primary CTA: Connect button (purple) */}
                                <Link href="/connectWallet" className="hover:text-black hover:bg-[#E6AC00] hover:border-[#E6AC00] active:text-black active:bg-[#FFC107] active:border-[#E6AC00] focus:text-black focus:outline-0 focus:bg-[#FFC107] focus:shadow-[none] focus:border-[#E6AC00] sm:mr-4 inline-block cursor-pointer select-none rounded-lg border px-6 sm:px-10 py-3.5 text-center align-middle font-medium uppercase leading-6 tracking-wide text-black transition-[color,background-color,border-color,box-shadow] ease-[ease-in-out] duration-[0.15s] bg-[#FFC107] min-h-[45px] text-sm sm:text-[15px] border-[#E6AC00]">
                                    VERIFY AS ADMIN
                                </Link>
                                {/* Secondary CTA: Claim button (white) */}
                                <Link href="/connectWallet" className="hover:border-slate-50 hover:bg-slate-50 hover:text-black active:border-slate-50 active:bg-slate-50 active:text-black focus:border-slate-50 focus:bg-slate-50 focus:text-black focus:outline-0 focus:shadow-[none] inline-block cursor-pointer select-none rounded-lg border border-slate-50 bg-slate-50 px-6 sm:px-10 py-3.5 text-center align-middle font-medium uppercase leading-6 tracking-wide text-black transition-[color,background-color,border-color,box-shadow] ease-[ease-in-out] duration-[0.15s] min-h-[45px] text-sm sm:text-[15px]">
                                    VERIFY AS WHALE
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-12 flex flex-wrap mr-[calc(-0.5*24px)] ml-[calc(-0.5*24px)]">
                        <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[33.3333%] mt-6 max-w-full flex-shrink-0 pr-[calc(24px*0.5)] pl-[calc(24px*0.5)] w-full sm:w-[50%] md:w-[33.3333%]">
                            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-[rgba(0,0,0,0.075)_0px_2px_4px] lg:flex-row flex-col lg:p-6 p-4">
                                <img src="/wallet-pic.png" alt="wallet" className="h-16 w-16 min-w-[65px] rounded-[50%] object-cover" />
                                <div className="lg:text-left text-center">
                                    <div className="mb-1 text-base font-bold text-[rgba(33,37,41,1)]">
                                        1. Connect your Wallet
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Use wallet of your choice to connect to the app.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[33.3333%] mt-6 max-w-full flex-shrink-0 pr-[calc(24px*0.5)] pl-[calc(24px*0.5)] w-full sm:w-[50%] md:w-[33.3333%]">
                            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-[rgba(0,0,0,0.075)_0px_2px_4px] lg:flex-row flex-col lg:p-6 p-4">
                                <img src="/pluz.png" alt="pluz" className="h-16 w-16 min-w-[65px] rounded-[50%] object-cover" />
                                <div className="lg:text-left text-center">
                                    <div className="mb-1 text-base font-bold text-[rgba(33,37,41,1)]">
                                        2. Select a Feature to Validate
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        You will be prompted to connect via a decentralized protocol.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex-shrink-0 lg:flex-grow-0 lg:basis-auto lg:w-[33.3333%] mt-6 max-w-full flex-shrink-0 pr-[calc(24px*0.5)] pl-[calc(24px*0.5)] w-full sm:w-[50%] md:w-[33.3333%]">
                            <div className="flex items-center gap-4 rounded-2xl bg-white p-6 shadow-[rgba(0,0,0,0.075)_0px_2px_4px] lg:flex-row flex-col lg:p-6 p-4">
                                <img src="/piggy.jfif" alt="piggy bank" className="h-16 w-16 min-w-[65px] rounded-[50%] object-cover" />
                                <div className="lg:text-left text-center">
                                    <div className="mb-1 text-base font-bold text-[rgba(33,37,41,1)]">
                                        3. Generate Proof of Validation
                                    </div>
                                    <div className="text-sm text-gray-500">
                                        Upon completion, save proof of wallet validation.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

