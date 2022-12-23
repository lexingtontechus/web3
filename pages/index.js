import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import Main from "../components/main";
import Hero from "../components/hero";
import Team from "../components/team";
import FAQs from "../components/faqs";
import Signup from "../components/signup";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Main />
      <Team />
      <FAQs />
      <Signup />
    </>
  );
}
