import styles from "./page.module.css";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Why from "../components/Why";
import AboutUs from "../components/AboutUs";
import Investor from "../components/Investor";
import Contact from "../components/Contact";
import { LocalBusinessJsonLd } from 'next-seo'

export default function Home() {
  return (
    <>

    <LocalBusinessJsonLd
        useAppDir={true}
        type="FinancialService"
        id="https://ozpremiumfinance.com/jsonld"
        name="Oz Premium Finance"
        description="Oz Premium Finance is an industry leading provider of flexible finance solutions for Australian Business"
        url="https://ozpremiumfinance.com"
        telephone="1300570407"
        address={{
          streetAddress: '67 King William Road',
          addressLocality: 'Adelaide',
          addressRegion: 'SA',
          postalCode: '5061',
          addressCountry: 'AU',
        }}
        geo={{
          latitude: '-34.9470746',
          longitude: '138.5999663',
        }}
        images={[
          'https://ozpremiumfinance.com/images/Oz-Premium-Finance-bgd-01.svg',
          'https://ozpremiumfinance.com/images/Colab-Illustration',
        ]}
        openingHours={[
          {
            dayOfWeek: [
              'Monday',
              'Tuesday',
              'Wednesday',
              'Thursday',
              'Friday',
              'Saturday',
            ],
          },
          
        ]}
    />
      <Banner />
      <Why />
      <AboutUs />
      <Investor />
      <Contact /> 
      <Footer />
    </>
  );
}
