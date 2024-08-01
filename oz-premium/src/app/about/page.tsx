import { Container, Box, Typography, Paper } from "@mui/material";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TeamButton from "@/components/Buttons/LearnMore";
import Link from "next/link";
import Image from "next/image";
import { OrganizationJsonLd } from 'next-seo'

const sections = [
    {
      title: "Our Experience",
      content: [
        "Founded in 2023, Oz Premium Finance is on a mission to be an industry leading provider of flexible premium funding solutions for Australian Businesses.",
        "Led by a dedicated group of industry professionals across Insurance, Finance, Legal and Technology, we bring decades of experience to the Premium Funding industry.",
        "Independent and privately owned – we make business decisions quickly and offer fast turn around times – leaving you to carry on doing what you do best.",
        "We uphold a strong focus on building relationships with broker partners and their clients so that we can make your premium funding experience seamless."
      ]
    },
    {
      title: "Our Technology",
      content: [
        "We bring the latest and most advanced loan management technology to the industry, to ensure our customers and Broker partners have a streamlined and easy to use service.",
        "We have partnered with industry leaders and offer the Odyssey platform."
      ]
    },
    {
      title: "Our Payments Platform",
      content: [
        "Benefit from our easy to use payment platform. We offer flexible Direct Debit payments from both bank accounts and credit cards allowing you to sit back and relax knowing that your repayments will be taken on time."
      ]
    }
];

export default function AboutUs() {

    return <>
    <OrganizationJsonLd
        useAppDir={true}
        type="Corporation"
        id="https://ozpremiumfinance.com"
        logo="https://ozpremiumfinance.com/images/Logo.png"
        name="Oz Premium Finance"
        address={{
            streetAddress: '67 King William Road',
            addressLocality: 'Adelaide',
            addressRegion: 'SA',
            postalCode: '5061',
            addressCountry: 'AU',
          }}
        contactPoint={[
            {
            telephone: '1300 570 407',
            contactType: 'customer service',
            email: 'info@ozpremiumfinance.com.au',
            areaServed: 'AU',
            availableLanguage: 'English',
            },
           
        ]}
        url="https://ozpremiumfinance.com"
/>
  
        <Header />
        <Container maxWidth='xl'>
            <Box id="most outer box" sx={{ display: 'flex', flexDirection: 'column', gap: 1, paddingY: { xs: 6, md: 8 }, paddingX: { xs: 4, md: 8 } }}>

                {/* Out Missiom */}
                <Box sx={{ alignItems: 'start' }}>
                    <Box>
                        <Typography color={'primary.main'} sx={{ textAlign:'start', fontSize:{xs:'28px',md:'35px'}, fontWeight:'500' }}>
                        Our Mission
                        </Typography>

                        <Box sx={{ display: 'flex',  textAlign:'start', flexDirection: 'column' }}>
                             <Typography color={'primary.main'} sx={{ fontSize: { xs: '24px', md: '26px' }, fontWeight: '400', pt:2 }}> 
                                To make Insurance Funding solutions easy so that you can invest in your business growth
                            </Typography> 
                        </Box>
                    </Box>
                </Box>

                {/* Pages */}
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column' }, alignItems: 'center', gap: { xs: 4, md: 6 }, pt: { xs: 4, md: 8 } }}>
                    {sections.map((section, index) => (
                        <Paper key={index} elevation={6} sx={{ padding: {xs:5,md:7}, width:{xs:'100%',md:'90%'} }}>
                            <Typography color={'primary.main'} sx={{ textAlign:'center', fontSize: { xs: '26px', md: '30px' }, fontWeight: '500' }}>
                                {section.title}
                            </Typography>
                            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, pt: { xs: 2 } }}>
                                {section.content.map((text, idx) => (
                                    <Typography key={idx} variant='body1' color={'primary.main'} sx={{ fontSize: { md: '18px' } }}>
                                        {text}
                                    </Typography>
                                ))}
                            </Box>
                        </Paper>
                    ))}
                </Box>

                {/* Team */}
                <Box sx={{ pt: { xs: 4, md: 10 }}}>
                    <Typography color={'primary.main'} sx={{fontSize:{xs:'28px',md:'35px'}, fontWeight:'500' }}>
                                Our Team
                    </Typography>

                    <Box  sx={{ display: 'flex', flexDirection:'column', alignItems: {xs:'center', md:'start'}, gap:{xs:4, md:0}, }}>
                    <Box sx={{ display:'flex', flexDirection:{xs:'column',md:'row'}, gap:3,}}>
                        

                        <Box> 
                            <Typography variant='body1' color={'primary.main'} sx={{fontSize:{xs:'22px',md:'26px'}, pt: { xs: 0, md: 3 }}}>
                                Our team is made up of industry professionals with decades of experience in Insurance, Finance, Legal and Technology.
                            </Typography>
                        </Box>

                        <Box sx={{justifyContent:'center', alignItems:'center', width: { xs: '100%', md: '100%',lg:'50%' } }}>
                        <Image
                            src={'Business-Cash-Forecasting.svg'}
                            alt='About Us Team Image'
                            width={120}
                            height={200}
                            sizes="100vw"
                            style={{
                                width: "100%",
                                height: "auto"
                            }} />
                        </Box>
                    </Box>
                    <Box sx={{
                            display:'flex', 
                            justifyContent:{xs:'center',lg:'start'},
                            pt:{md:3, lg:0}
                            }}
                        >

                            <Link href='/about/team'>
                                <TeamButton content='Meet the Team'/>
                            </Link>
                    </Box>
                    
                    </Box>
                </Box>
            </Box>

        </Container>
        <Footer />
    </>;
}