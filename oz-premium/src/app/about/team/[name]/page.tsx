import { Box, Typography, Grid, Container } from "@mui/material"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LinkedIn from '@mui/icons-material/LinkedIn';

const members = [
    {
        name: "Karl Kirsten",
        title: "Founder/Director",
        image: "/bioPhotos/Karl.JPG",
        description:"Criminal defence lawyer in 2004. His move into the field of Native Title involved also working in property law, mining law and corporate governance, mainly within the Federal Court system. In the business sphere he has worked as a Venture Capital Fund manager and been a director of Westminster Australia where he has gained experience in Mergers and Acquisitions and banking and finance law, with a strong focus on mediations and negotiations. He has also been involved since 2009 with a registered Australian Charity (PAF) as an investment advisor and Trustee on a volunteer basis.",
    },
    {
        name: "Jarrod Herring",
        title: "Chief Execitive Officer/Director",
        image: "/bioPhotos/Jarrod.JPG",
        description:"20 years Banking and Executive experience with National Australia Bank Ltd in Australia, across Melbourne, Adelaide, Perth and Sydney regions. Jarrod is highly experienced in Corporate Lending, Commercial Property debt structuring, Compliance, Trade, Finance and Executive Leadership.",
    },
    {
        name: "Philip Riquier",
        title: "Director",
        image: "/bioPhotos/Philip.JPG",
        description:"Professional Finance Sector Non-Executive Director and Advisor. Philip was previously a group executive of Bendigo/Adelaide Bank Ltd, responsible for multiple banking divisions; Mergers and Acquisitions, Products Treasury, APRA relationship, Rating Agency relationship and major technology projects. Philip was also previously a Director of the Risk Management Association of Australia. Philip is currently a Non-Executive Director of Credit Union SA Ltd and Capital Prudential Pty. Ltd. (which also provides executive management services for an APRA regulated super fund). Philip's advisory clients include several Banks, Superannuation Funds, Private Health Insurers and listed gold EFT issuers."
    },
    {
        name: "Henry Downer",
        title: "Chief Financial Officer/Director",
        image: "/bioPhotos/Henry.JPG",
        description:"Chartered Accountant with over 20 years experience. Henry was at Deloitte for over 15 years, where he led Deloitte's Adelaide Transaction Services team for a number of years, focussed on providing Corporate Advisory, M&A and financial due diligence. Most recently Henry supported Capital Prudential as its CFO in its start up period."
    },
    {
        name: "Sam Morris",
        title: "Chief Operating Officer/Director",
        image: "/bioPhotos/Sam.JPG",
        description:"Operations / general manager with 15 years experience in both the mining and private wealth industries. Specialising in being the interface between the board and operational team to ensure there is effective board decision making leading to efficient operational outcomes."
    },
    {
        name: "Ben Hage",
        title: "Sales and Distribution",
        image: "/bioPhotos/Ben.JPG",
        description:"Ben is an experienced Financial Services Professional with 25 years experience in finance, predominantly focused on Commercial, business and asset finance; including Mortgage Broking and financial planning. Ben worked with CBA, Westpac, and his own financial services business for the past 20 years in Australia and London. With key relationships across all of the financial services sector, combined with an entrepreneurial flair, Ben adds a broad knowledge of financial products and experience with the industries and businesses that utilise them."
    },
    {
        name: "Jade Murray",
        title: "Operations Manager",
        image: "/bioPhotos/Jade.jpg",
        description:"With over 24 years' experience in the insurance premium funding industry, Jade is a highly skilled operations professional. Specialising in people management, customer service and product development, Jade uses her experience to lead the Operations team at Oz Premium Finance."

    },
   
];

// Correcting the function parameter to properly destructure and type the props
export default function Bio({params}: {params: {name: string}}) {
    // console.log(params.name);
    const member = members.find((m) => m.name.replace(/ /g, '-').toLowerCase() === params.name);

    if (!member) {
      return <Typography>No member found</Typography>;
    }
  
    return (
        <>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

            <Header />
                <Box component="main" sx={{ flexGrow: 1 }}>
            
                    <Container maxWidth='xl'>
                        <Box id="most outer box" sx={{display:'flex', flexDirection:'column', gap:2, paddingY:{xs:6,md:8} ,paddingX:{xs:4,md:8}}}>
                    
                           <Grid container spacing={{ xs: 2, sm: 3, lg: 6 }}>
                                <Grid item xs={12} lg={3} gap={2}>
                                {/* Image of the member */}
                              
                                <Box 
                                sx={{
                                    display:'flex',
                                    flexDirection:'column',
                                    width: {xs:'220px',sm:'220px',md:'285px',lg:'265px',xl:'304px'},
                                    height:{xs:'254px',sm:'254px', md:'330px', lg:'320px', xl:'352px'},
                                    }}>
                                        <img  
                                        style={{  
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        src={member.image} 
                                        alt={member.name} />
                                         
                                </Box>
                                </Grid>
                                
                                <Grid item xs={12} lg={9}>
                                {/* Details of the member */}
                                <Box>
                                    <Box display="flex" alignItems={'center'} gap={1}>
                                    <Typography color={'primary.main'} 
                                    sx={{
                                        fontSize:{xs:'28px', md:'32px'}, fontWeight:500, 
                                        lineHeight: '1.1'}}>    
                                            {member.name}
                                    </Typography>
                                    {/* <LinkedIn  sx={{ fontSize: '30px', color:'primary.main',  }}/> */}
                                    </Box>

                                    <Typography  color={'text.primary'} sx={{fontSize:{xs:'20px', md:'22px',lg:'24px'}} }>
                                        {member.title}

                                    </Typography>

                                    <Typography  color={'text.primary'} sx={{pt:4, fontSize:{md:'20px'}}}>
                                        {member.description}
                                        </Typography>

                                </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                    </Box>

            <Footer />
            </Box>
      </>
    );
  }