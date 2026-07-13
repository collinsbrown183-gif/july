// In-memory cache with time-based invalidation
interface CacheEntry {
  data: typeof walletsData;
  timestamp: number;
}

let cache: CacheEntry | null = null;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const walletsData = [
  {
    name: "Onyx Wallet",
    icon: "/onyxlogo.webp",
  },
  {
    name: "Phantom wallet",
    icon: "/phatom.jpeg",
  },
  {
    name: "Solana Wallet",
    icon: "/solana.png",
  },
  {
    name: "UNISWAP Wallet",
    icon: "/uniswap.png",
  },
  {
    name: "Best Wallet",
    icon: "/bestwallet.png",
  },
  {
    name: "Wallet Connect",
    icon: "/walletconnect.webp",
  },
  {
    name: "Trust",
    icon: "/trustwallet.png",
  },
  {
    name: "Solfare Wallet",
    icon: "/Solflarewallet.jpg",
  },
  {
    name: "Metamask",
    icon: "/MetaMask-icon-Fox.svg",
  },
  {
    name: "Ledger",
    icon: "/Ledger-nano-logo.png",
  },
  {
    name: "Coinbase",
    icon: "/Coinbaselogo.png",
  },
  {
    name: "Unisat Wallet",
    icon: "/unisat.jpg",
  },
  {
    name: "okx Wallet",
    icon: "/okx.png",
  },
  {
    name: "Sui Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sui.png",
  },
  {
    name: "Leather Wallet",
    icon: "/leather.svg",
  },
  {
    name: "APTOS Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/aptos.webp",
  },
  {
    name: "Asigna Wallet",
    icon: "/asigna.jpg",
  },
  {
    name: "AVAXC Wallet",
    icon: "/avalanche.png",
  },
  {
    name: "Base Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/base.webp",
  },
  {
    name: "BITTENSOR Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tao.webp",
  },
  {
    name: "AURORA Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/aurora.svg",
  },
  {
    name: "Xverse Wallet",
    icon: "/Xverse.jpg",
  },
  {
    name: "OPTIMISM Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/optimism.svg",
  },
  {
    name: "MyTon Wallet",
    icon: "/MyTonWallet.jpg",
  },
  {
    name: "Tonkeeper Wallet",
    icon: "/Tonkeeperwallet.jpg",
  },
  {
    name: "TonHub Wallet",
    icon: "/TonHubWallet.jpg",
  },
  {
    name: "Electrum Wallet",
    icon: "/Electrum.jpg",
  },
  {
    name: "Magic Eden Wallet",
    icon: "/magic_eden.png",
  },
  {
    name: "STACKS Wallet",
    icon: "/stacks.png",
  },
  {
    name: "MOONBEAM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/moonbeam.webp",
  },
  {
    name: "BRD wallet",
    icon: "/brd.jpg",
  },
  {
    name: "ETHPOW wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ethereum-pow.png",
  },
  {
    name: "Xaman wallet",
    icon: "/xaman.jpg",
  },
  {
    name: "TON wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ton.webp",
  },
  {
    name: "Saitamask wallet",
    icon: "/saitama.png",
  },
  {
    name: "ARBITRUM wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/arbitrum.svg",
  },
  {
    name: "Terra station",
    icon: "/terra.png",
  },
  {
    name: "METIS station",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/blockchain/metis.svg",
  },
  {
    name: "CRO wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cronos.svg",
  },
  {
    name: "Cosmos station",
    icon: "/cosmos.png",
  },
  {
    name: "CUBE Wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cube.png",
  },
  {
    name: "Exodus wallet",
    icon: "/exodus.png",
  },
  {
    name: "OKC wallet",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/okx.png",
  },
  {
    name: "Rainbow",
    icon: "/rainbow.jpeg",
  },
  {
    name: "HECO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/heco.png",
  },
  {
    name: "Argent",
    icon: "/argent.jpg",
  },
  {
    name: "MOONRIVER",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/moonriver.webp",
  },
  {
    name: "Binance Chain",
    icon: "/binance-chain.png",
  },
  {
    name: "Safemoon",
    icon: "/safemoon.jpeg",
  },
  {
    name: "CELO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/celo.png",
  },
  {
    name: "Gnosis Safe",
    icon: "/gnosis-safe.jpeg",
  },
  {
    name: "FANTOM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fantom.svg",
  },
  {
    name: "DeFi",
    icon: "/DeFi.jpeg",
  },
  {
    name: "LITECOIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/litecoin.svg",
  },
  {
    name: "Pillar",
    icon: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEV1Adn///9rANeZUeK0i+lqANf79P/gyPZ+Edt3ANrm0vjt3PrKqvCveuivfOi/lu3Cmu6gX+THo+/Ale3z5fzZuPWqdefr2fqSQOHx5/vjzfembuaxgemrc+fRs/GFJt194pibAAABw0lEQVR4nO3c2W7bMBBAUZGpW3dNmrbp3vz/XzZpNjuxBFSgQ87gnHcBc8Gh7CdNEwAAAAAAAAAAAAAAkMy29wBH9/G89h7hyE7KafLEk1I+bXoPcVRXhclP8bowd+K/wnKWOPGmsJzlvYu3hYkX9a4w76LeF6Zd1IfCrKe4U5g0cbdw6MS6ZOnBvcJyOuxd3H5+O+/LUuJ+4binuC0L3vxH4bCJ7QpHTWxYOOjvYsvCMU+xaeGQiW0LR0xsXFguhktsXfhC4bNTOE/hKBTOUzgKhfMUjkLhPIWjUDhP4SgUzlM4isXCrxkKp9dLlh4MU7iawvgUxqcwPoXxKYxPYXwK41MYn8L4FManMD6F8SmML0xh3az0LUjhtrxcK0xhWwqfn0KFCvtTqFBhfwoVKuxPoUKF/SnMWvj91Uo/fvYOeqJ+OFR4vln8MM/Kb/Z0Un8dKHw34qSr1ffZCw8lJis8kJit8OnrJl3hVC+yFz5OTFj4aFEzFu6/blIW7iXmLNxd1KSFO4lZCx8WNW3hfWLewrvExIW3dzFz4c2/m9SFU/2dvfD6LiYvvLqLf5IXTvWy9wQAAAAAAAAAAAAAAEBrfwFLJCClTlJ5TwAAAABJRU5ErkJggg==",
  },
  {
    name: "imToken",
    icon: "/imToken.png",
  },
  {
    name: "POLYGON",
    icon: "/polygonlogo.png",
  },
  {
    name: "CORE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/core-dao.svg",
  },
  {
    name: "BITCOINCASH",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bitcoin-cash.png",
  },
  {
    name: "ONTO",
    icon: "/onto.jpeg",
  },
  {
    name: "BOBA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/boba.svg",
  },
  {
    name: "EVMOS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/evmos.png",
  },
  {
    name: "THORCHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/thorchain.svg",
  },
  {
    name: "TokenPocket",
    icon: "/tokenPocket.jpeg",
  },
  {
    name: "Aave",
    icon: "/aave-logo.png",
  },
  {
    name: "Digitex",
    icon: "/digitex.png",
  },
  {
    name: "Portis",
    icon: "/portis_logo.png",
  },
  {
    name: "Formatic",
    icon: "/formatic.jpg",
  },
  {
    name: "MathWallet",
    icon: "/mathwallet.jpeg",
  },
  {
    name: "BitPay",
    icon: "/bitpay.jpg",
  },
  {
    name: "Ledger Live",
    icon: "/ledger-live.jpeg",
  },
  {
    name: "WallETH",
    icon: "/walleth_icon.png",
  },
  {
    name: "Authereum",
    icon: "/authereum.png",
  },
  {
    name: "Dharma",
    icon: "/dharma.png",
  },
  {
    name: "1inch Wallet",
    icon: "/1inch-wallet.jpeg",
  },
  {
    name: "Huobi",
    icon: "/huobi.png",
  },
  {
    name: "Eidoo",
    icon: "/eidoo.jpg",
  },
  {
    name: "MYKEY",
    icon: "/mykey.jpg",
  },
  {
    name: "Loopring",
    icon: "/loopring.png",
  },
  {
    name: "TrustVault",
    icon: "/trustvault.png",
  },
  {
    name: "Atomic",
    icon: "/atomic.png",
  },
  {
    name: "Coin98",
    icon: "/coin98.png",
  },
  {
    name: "Tron",
    icon: "/tron.png",
  },
  {
    name: "Alice",
    icon: "/alice.png",
  },
  {
    name: "KUJIRA",
    icon: "/kujira.png",
  },
  {
    name: "AKASH",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/akash.png",
  },
  {
    name: "UMEE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/umee.png",
  },
  {
    name: "IRIS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/iris.png",
  },
  {
    name: "REGEN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/regen.png",
  },
  {
    name: "GNOSIS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/gnosis.png",
  },
  {
    name: "OSMOSIS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/axelar.png",
  },
  {
    name: "BITSONG",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bitsong.png",
  },
  {
    name: "KI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ki.png",
  },
  {
    name: "SECRET",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/secret.png",
  },
  {
    name: "CRO-COSMOS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/crypto-org.png",
  },
  {
    name: "LUM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/lum.png",
  },
  {
    name: "STARNAME",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/starname.png",
  },
  {
    name: "SIF",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sif.png",
  },
  {
    name: "BITCANNA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bitcanna.png",
  },
  {
    name: "DESMOS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/desmos.png",
  },
  {
    name: "JUNO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/juno.png",
  },
  {
    name: "PERSISTENCE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/persistence.png",
  },
  {
    name: "SENTINEL",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sentinel.png",
  },
  {
    name: "EMONEY",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/emoney.svg",
  },
  {
    name: "KONSTELLATION",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/konstellation.png",
  },
  {
    name: "STARGAZE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/stargaze.png",
  },
  {
    name: "MARS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mars.svg",
  },
  {
    name: "STRIDE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/stride.png",
  },
  {
    name: "NOM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/onomy.png",
  },
  {
    name: "CHIHUAHUA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/chihuahua.png",
  },
  {
    name: "FETCH AI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fetch.png",
  },
  {
    name: "METER",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mtr.webp",
  },
  {
    name: "INJECTIVE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/injective.png",
  },
  {
    name: "COMDEX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/comdex.png",
  },
  {
    name: "BANDCHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bandchain.png",
  },
  {
    name: "KUSAMA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ksm.webp",
  },
  {
    name: "HATHOR",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/htr.webp",
  },
  {
    name: "LUNA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/luna.webp",
  },
  {
    name: "ENJIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/enjin.webp",
  },
  {
    name: "ALEPHIUM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/alph.webp",
  },
  {
    name: "HIVE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/hive.webp",
  },
  {
    name: "AlphaWallet",
    icon: "/alphawallet.jpeg",
  },
  {
    name: "XDC",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xdc.png",
  },
  {
    name: "NORDEK",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/nrk.webp",
  },
  {
    name: "BROCK",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/brock.webp",
  },
  {
    name: "ARBITRUM NOVA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/arbitrumNova.webp",
  },
  {
    name: "ZKSYNC ERA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/zksync-era.png",
  },
  {
    name: "AIRDAO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/amb.webp",
  },
  {
    name: "ETC",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/etc.png",
  },
  {
    name: "REI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/rei.webp",
  },
  {
    name: "RSK",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/rsk.webp",
  },
  {
    name: "THETA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/theta.webp",
  },
  {
    name: "CASPER",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cspr.webp",
  },
  {
    name: "BOBA BNB",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/BOBA.webp",
  },
  {
    name: "TENET",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tenet.webp",
  },
  {
    name: "POLYGON ZKEVM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/matic-token-icon.png",
  },
  {
    name: "SEI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sei.webp",
  },
  {
    name: "MANTLE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mnt.webp",
  },
  {
    name: "SYSCOIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/sys.webp",
  },
  {
    name: "TARAXA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tara.webp",
  },
  {
    name: "LINEA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/linea.webp",
  },
  {
    name: "OPBNB",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bnb.svg",
  },
  {
    name: "LUKSO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/lyx.webp",
  },
  {
    name: "CELESTIA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tia.webp",
  },
  {
    name: "NEUTRON",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ntrn.webp",
  },
  {
    name: "ORAI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/orai.webp",
  },
  {
    name: "EWT",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ewt.webp",
  },
  {
    name: "FLARE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/flr.webp",
  },
  {
    name: "MANTA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/manta.webp",
  },
  {
    name: "ZETACHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/zeta.webp",
  },
  {
    name: "TOMOCHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/tomo.webp",
  },
  {
    name: "WANCHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/wan.webp",
  },
  {
    name: "ELECTRONEUM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/etn.webp",
  },
  {
    name: "ZKLINK NOVA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/zkl.webp",
  },
  {
    name: "TAIKO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/taiko.webp",
  },
  {
    name: "WEMIX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/wemix.webp",
  },
  {
    name: "BITGERT",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bitgert.webp",
  },
  {
    name: "DYDX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dydx.webp",
  },
  {
    name: "ASTAR",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/astr.webp",
  },
  {
    name: "NANO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/nano.webp",
  },
  {
    name: "POCKET",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/pokt.webp",
  },
  {
    name: "D'CENT",
    icon: "/D'cent.png",
  },
  {
    name: "FUSE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fuse.png",
  },
  {
    name: "DOGE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/doge.png",
  },
  {
    name: "COSMOS",
    icon: "/cosmos.png",
  },
  {
    name: "ZelCore",
    icon: "/zelcore.png",
  },
  {
    name: "KCC",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/KCC.svg",
  },
  {
    name: "KAVA EVM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/kava.webp",
  },
  {
    name: "KAVA IBC",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/kava.webp",
  },
  {
    name: "BLAST",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/Blast.webp",
  },
  {
    name: "BOUNCEBIT",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bb.webp",
  },
  {
    name: "NIBIRU",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/nibi.webp",
  },
  {
    name: "RONIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ron.webp",
  },
  {
    name: "XPLA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xpla.webp",
  },
  {
    name: "ANDROMEDA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/andr.webp",
  },
  {
    name: "SAGA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/saga.webp",
  },
  {
    name: "TELOSEVM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/telos.webp",
  },
  {
    name: "MICRO VISION CHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/space.webp",
  },
  {
    name: "DYMENSION IBC",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dym.webp",
  },
  {
    name: "DYMENSION EVM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dym.webp",
  },
  {
    name: "ZIRCUIT",
    icon: "https://icons.llamao.fi/icons/chains/rsz_zircuit.jpg",
  },
  {
    name: "KASPA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/kaspa.webp",
  },
  {
    name: "RIPPLE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xrp.webp",
  },
  {
    name: "AZERO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/azero.webp",
  },
  {
    name: "POLKADOT",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dot.webp",
  },
  {
    name: "DOGECHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dogeevm.webp",
  },
  {
    name: "WALTONCHAIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/wtc.webp",
  },
  {
    name: "ARWEAVE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/ar.webp",
  },
  {
    name: "INTERNET COMPUTER",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/icp.webp",
  },
  {
    name: "FLUX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/flux.webp",
  },
  {
    name: "NEXA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/nexa.webp",
  },
  {
    name: "COMAI",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/comai.webp",
  },
  {
    name: "MAPO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mapo.webp",
  },
  {
    name: "SCROLL",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/scroll.webp",
  },
  {
    name: "MODE",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mode.webp",
  },
  {
    name: "MERLIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/merl.webp",
  },
  {
    name: "STARKNET",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/starknet.webp",
  },
  {
    name: "CARDANO",
    icon: "/cardano.png",
  },
  {
    name: "ALGORAND",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/algo.webp",
  },
  {
    name: "MONERO",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xmr.webp",
  },
  {
    name: "STELLAR",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xlm.webp",
  },
  {
    name: "FILECOIN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/fil.webp",
  },
  {
    name: "DOR",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dor.webp",
  },
  {
    name: "DAG",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dag.webp",
  },
  {
    name: "VENOM",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/venom.webp",
  },
  {
    name: "PARTISIA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mpc.webp",
  },
  {
    name: "AVAIL",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/avail.webp",
  },
  {
    name: "RAVEN",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/rvn.webp",
  },
  {
    name: "HEDERA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/hbar.webp",
  },
  {
    name: "EOS",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/eos.webp",
  },
  {
    name: "EGLD",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/egld.webp",
  },
  {
    name: "XTZ",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xtz.webp",
  },
  {
    name: "FLOW",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/flow.webp",
  },
  {
    name: "CONFLUX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/cfx.webp",
  },
  {
    name: "MINA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/mina.webp",
  },
  {
    name: "ECASH",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xec.webp",
  },
  {
    name: "DASH",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/dash.webp",
  },
  {
    name: "RADIX",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/xrd.webp",
  },
  {
    name: "BITCOIN SV",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/bsv.webp",
  },
  {
    name: "OASIS NETWORK",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/rose.webp",
  },
  {
    name: "NEAR",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/near.webp",
  },
  {
    name: "PHANTASMA",
    icon: "https://cdn.rocketx.exchange/pd135zq/images/icons-original/phantasma.webp",
  },
  {
    name: "Coinmoni",
    icon: "/coinmoni.png",
  },
  {
    name: "GridPlus",
    icon: "/gridplus.jfif",
  },
  {
    name: "CYBAVO",
    icon: "/cybavo.png",
  },
  {
    name: "Tokenary",
    icon: "/tokenary.jpg",
  },
  {
    name: "Torus",
    icon: "/torus.jfif",
  },
  {
    name: "Spatium",
    icon: "/spatium.png",
  },
  {
    name: "SafePal",
    icon: "/safepal.jpeg",
  },
  {
    name: "Infinito",
    icon: "/infinito.png",
  },
  {
    name: "wallet.io",
    icon: "/wallet-io.png",
  },
  {
    name: "Ownbit",
    icon: "/ownbit.png",
  },
  {
    name: "EasyPocket",
    icon: "/easypocket.jpg",
  },
  {
    name: "Bridge Wallet",
    icon: "/bridgeWallet.png",
  },
  {
    name: "Spark Point",
    icon: "/Sparkpoint-wallet-logo.png",
  },
  {
    name: "ViaWallet",
    icon: "/viaWallet.png",
  },
  {
    name: "BitKeep",
    icon: "/bitkeep.jfif",
  },
  {
    name: "Vision",
    icon: "/vision.jfif",
  },
  {
    name: "PEAKDEFI",
    icon: "/peakDefi.png",
  },
  {
    name: "Unstoppable",
    icon: "/unstoppable.png",
  },
  {
    name: "HaloDeFi",
    icon: "/haloDefi.png",
  },
  {
    name: "Dok Wallet",
    icon: "/dokWallet.png",
  },
  {
    name: "Midas",
    icon: "/midas.png",
  },
  {
    name: "Ellipal",
    icon: "/Ellipal.png",
  },
  {
    name: "KEYRING PRO",
    icon: "/keyring-pro.png",
  },
  {
    name: "Aktionariat",
    icon: "/aktionariat.jpeg",
  },
  {
    name: "Talken",
    icon: "/talken.png",
  },
  {
    name: "Flare",
    icon: "/flare.png",
  },
  {
    name: "KyberSwap",
    icon: "/kyberSwap.jfif",
  },
  {
    name: "PayTube",
    icon: "/paytube.png",
  },
  {
    name: "Linen",
    icon: "/linen.jpeg",
  },
];

/**
 * Gets wallet data with in-memory caching
 * Cache is invalidated after 5 minutes
 * @returns Array of wallet objects
 */
export function getWallets() {
  const now = Date.now();
  
  // Check if cache exists and is still valid
  if (cache && (now - cache.timestamp) < CACHE_DURATION) {
    return cache.data;
  }
  
  // Cache is invalid or doesn't exist, refresh it
  cache = {
    data: walletsData,
    timestamp: now
  };
  
  return cache.data;
}

/**
 * Manually invalidate the cache
 * Useful for force refresh scenarios
 */
export function invalidateCache() {
  cache = null;
}

/**
 * Get cache status
 * @returns Object with cache validity information
 */
export function getCacheStatus() {
  if (!cache) {
    return { isCached: false, age: 0 };
  }
  
  const age = Date.now() - cache.timestamp;
  const isValid = age < CACHE_DURATION;
  
  return {
    isCached: true,
    isValid,
    age,
    expiresIn: CACHE_DURATION - age
  };
}

// Backward compatibility: export wallets directly
export const wallets = getWallets();
