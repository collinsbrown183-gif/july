import Image from "next/image";
import styles from "./page.module.css";
import FirstSection from "./section/firstSection";
import Ticker from "./section/ticker";
// import ServerFeatures from "./section/serverFeatures";
// import Vso from "./section/vso";
// import Sns from "./section/sns";

export default function Home() {
  return (
    <div>
    <FirstSection />
    <Ticker />
    {/* <ServerFeatures /> */}
    {/* <Vso/> */}
    {/* <Sns/> */}
    </div>
  );
}
