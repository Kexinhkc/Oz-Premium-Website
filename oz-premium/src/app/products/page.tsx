import LearnMore from "@/components/Buttons/LearnMore";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Container, Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { WebPageJsonLd } from 'next-seo';

interface Processes {
    name: string;
    description: string;
}
const processes:Processes[] = [  
    {
        name:'Quote', 
        description:'Your insurance broker will provide you with a premium funding quote, along with your insurance invoice/s. This quote will outline your monthly repayment plan.'
    },
    {
        name:'Online Acceptance', 
        description:'You accept your finance quote online using our simple Online Acceptance process. This process is quick and easy to complete.'
    },
    {
        name:'Finalise Insurance', 
        description:'Oz Premium Finance will pay your insurance premium/s IN FULL to your insurance broker who will set up your annual insurance policies.'
    },
    {
        name:'Your Monthly Instalments', 
        description:'You make the agreed monthly instalments to Oz Premium Finance. You can make payments via Direct Debit from your bank account, or via Credit Card (Visa and Mastercard) through our automated payment platform.'
    },

]


export default function Products() {
return <>
   <WebPageJsonLd
        useAppDir={true}
        description="A page to provide information about the services of company"
        id="https://ozpremiumfinance.com"
        lastReviewed="2024-07-08"
    />

    <Header />
    <Container maxWidth='xl'>
        <Box id="most outer box" sx={{display:'flex', flexDirection:'column', gap:2, paddingY:{xs:6,md:8} ,paddingX:{xs:4,md:8}}}>
        <Typography color={'primary.main'} sx={{fontSize:{xs:'28px',md:'35px', fontWeight:'500'}}}>
            Insurance Premium Funding
        </Typography>

            <Box  sx={{ display: 'flex', flexDirection:{xs:'column',md:'row'}, alignItems: 'center', gap:{xs:4, md:8} }}>
                <Box sx={{ flex: 1 }}>
                    
                   
                    <Box sx={{display:'flex', flexDirection:'column', gap:1.5, pt:{xs:2}}}> 
                        <Typography variant='body1' color={'primary.main'} sx={{fontSize:{md:'18px'}}}>Insurance premium funding enables businesses to spread the cost of their annual insurance premiums over time, thereby improving their cash flow management and financial flexibility. This service is essential for maintaining the uninterrupted protection businesses need to safeguard against risks and uncertainties inherent in their operations.
                        </Typography>

                        <Typography variant='body1' color={'primary.main'} sx={{fontSize:{md:'18px'}}}>
                            Free up your business cash flow with Oz Premium Finance, and pay your insurance in manageable monthly instalments.
                    </Typography>
                    </Box>
                    
                </Box>
                
                <Box sx={{justifyContent:'center', alignItems:'center', width: { xs: '100%', md: '40%',lg:'40%' } }}>
                    <Image
                        src={'/Increased-Cash-Flow.jpg'}
                        alt='About Us Image'
                        width={120}
                        height={200}
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "auto"
                        }} />
                </Box>
            </Box>

            <Typography variant='h3' color={'primary.main'} sx ={{pt:{xs:7, md:8}, fontSize:{md:'35px', fontWeight:'500'}}}>Our Process</Typography>

            {processes.map((process, index) => (
                <Box key={index} sx={{display:'flex', gap:{xs:2, md:3.5}, flexDirection:{xs:'column', md:'row'},alignItems:{xs:'start',md:'center'},  borderRadius:40, paddingY:{xs:2,md:3}, mb:1}}>
                    
                    <Box sx={{backgroundColor:'text.primary', color:'white', width:'50px', height:'50px', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', maxWidth: {xs:'100%', md:'10%'}}}>
                        <Typography variant='h4'>{index+1}</Typography>
                    </Box>

                    <Box id='second' sx={{ display:'flex', flexDirection:'column', gap:{xs:1.5, md:1},maxWidth: {xs:'100%', md:'90%'}}}>
                        <Typography color={'text.primary'} sx={{fontSize:{xs:'24px'}}}>{process.name}</Typography>
                        <Typography variant='body1' color={'primary.main'}>{process.description}</Typography>
                    </Box>
                </Box>
            ))}
            
        </Box>

        <Box sx={{display:'flex', justifyContent:'center', pb:{xs:6,md:8}}}>
            <Link href='/contact'>
                <LearnMore content='Contact Us'/>
            </Link>
        </Box>
        
    </Container>
    <Footer />
</>;
}