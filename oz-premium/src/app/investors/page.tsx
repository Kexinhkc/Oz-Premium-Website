import { Container, Grid, Typography, Box } from "@mui/material"
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ContactUs from "@/components/Buttons/LearnMore";
import Link from "next/link";
import { WebPageJsonLd } from 'next-seo';

const tableContent = [
    {
        title: "Name of Fund",
        content: "Oz Premium Funding Trust(Fund)"
    },
    {
        title: "Trustee",
        content: "Oz Premium Nominees Pty Ltd (ACN 670 307 543)<br /> The Trustee is a wholly owned subsidiary of Oz Premium Finance Pty Ltd, the Fund Manager"
    },
    {
        title:"Fund Manager",
        content:"Oz Premium Finance Pty Ltd (ACN 666 232 319)<br />Oz Premium Finance Pty Ltd owns 100% of the Ordinary Units in the Fund."
    },
    {
        title:"Fund Legal Structure",
        content:"The fund is an unregistered managed investment scheme structured as a unit trust established by the Trustee pursuant to the Fund Constitution."
    },
    {
        title:"Fund Registry",
        content:"William Buck Managed Funds Administration (SA) Pty Ltd ABN 96 643 372 230"
    },
    {
        title:"Fund Lawyers",
        content:"Kain Lawyers"
    },
    {
        title:"Fund Overview",
        content:"The Oz Premium Funding Trust is a special purpose vehicle established to provide investors with access to investments in a portfolio of short term insurance premium funding loans sourced by the Fund Manager through a network of insurance brokers.<br /> <br />Insurance premium funding loans are provided to Australian businesses to manage their cash flows. The insurance premium funding loans are typically repaid over 10 monthly instalments and are secured by the underlying insurance policy. In the event of default, the majority of insurance polices can be cancelled by the lender, with the unearned premium returned to the lender. Historically funded by banks and other finance companies, the Fund provides investors the unique opportunity to generate regular monthly returns from a portfolio of insurance premium funding loans provided to Australian businesses.<br /> <br /> The Fund Manager aims to have the Fund fully invested in insurance premium funding."
    },
];

export default function Investors() {
    return (
        <>
        <WebPageJsonLd
            useAppDir={true}
            description="A page to provide information about the company to protential investors"
            id="https://ozpremiumfinance.com"
            lastReviewed="2024-07-08"
        />
            <Header />
            <Container maxWidth='xl'>
                <Box id="most outer box" sx={{ display: 'flex', flexDirection: 'column', gap: 5, paddingY: { xs: 6, md: 8 }, paddingX: { xs: 4, md: 8 }, color:'primary.main' }}>
                
                    <Typography sx={{ width:{xs:'100%', md:'50%'}, fontSize: { xs: '24px', md: '28px' }, fontWeight: '400' }} >
                    Oz Premium Funding Trust is currently open for  investment to Wholesale Investors to facilitate growth within the Premium Funding business
                    </Typography>


                   <Grid container id='outer grid container'>

                        {tableContent.map((item, index) => (
                            <Grid container xs={12} key={index} spacing={{ xs: 2, sm: 0 }} sx={{ paddingY:{xs:2, sm:1.5},borderBottom: 1, borderColor: '#D4D4D4', alignItems: 'center'}}>

                                <Grid item xs={12} sm={2.5}>
                                    <Box component="span">
                                        <Typography fontSize="16px" fontWeight={500}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Grid item xs={12} sm={9.5}>
                                    <Typography dangerouslySetInnerHTML={{ __html: item.content }} />
                                </Grid>
                            </Grid>
                         ))}
                    </Grid>

                    <Box>
                        <Typography fontSize={'16px'}>
                            For Wholesales investors interested in investing in Oz Premium Funding units, please contact us by filling the contact form or by emailing us directly at investor@ozpremiumfinance.com.au.
                        </Typography>

                        <Box textAlign={'center'} sx={{paddingY:{xs:3,md:2}}} >
                            <Link href='/contact'>
                                <ContactUs content='Contact Us' />
                            </Link>
                        </Box>
                    </Box>



                    <Box sx={{fontSize:'14px'}}>

                        <Box component={'span'}>
                        Disclaimer:<br />
                        </Box>

                        <Box sx={{pt:1}}>
                            <Typography sx={{fontSize:'14px'}}>
                                Oz Premium Finance Pty Ltd (ABN 55 666 232 319) is a Corporate Authorised Representative (Number -----) of Oz Premium Funds Management Pty Limited (ACN 674 379 330) under its AFSL (No. _ -). Oz Premium Nominees Pty Limited is the trustee of the Oz Premium Funding Trust and the investment management is provided by Oz Premium Finance Pty Ltd. An investment into the Trust is available to wholesale investors (as defined by section 761G of the Corporations Act) in Australia only. The information on this website is general in nature. It does not take into account your specific needs or circumstances, so you should look at your own financial position, objectives and requirements, read the Information Memorandum and seek financial, legal or tax advice appropriate to your situation before making any financial decisions. Please email investor@ozpremiumfinance.com.au or call 1300 570 407 to obtain a copy of the Information Memorandum.
                            </Typography>
                        </Box>

                    </Box>

                    
                    </Box>
             

            </Container>
            <Footer />
        </>
);
}