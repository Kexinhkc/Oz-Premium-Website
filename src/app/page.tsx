import Image from "next/image";
import { Typography, Container } from "@mui/material";
import Banner from "@/app/components/Banner"
import Why from "@/app/components/landing-Page/Why"
import AboutUs from "@/app/components/landing-Page/AboutUs";
import Investor from "@/app/components/landing-Page/Investor";
import Contact from "@/app/components/landing-Page/ContactUs";


export default function Home() {
  return (
    <>
     <Banner />
    
      <Why />
      <AboutUs />
      <Investor />
      <Contact />
    {/* </Container> */}
    </>
  );
}
