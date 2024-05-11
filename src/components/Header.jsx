import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import React, { useState, useEffect } from 'react';
function Header(){
        return(
        <>
        <Box sx={{backgroundImage:"url('src/assets/pictures/hero-bg.jpg')" ,
        backgroundAttachment:{md:'fixed' , xs:'scroll'},
         backgroundSize:"cover" , 
         backgroundPosition:"center" ,
         backgroundRepeat:"no-repeat" , 
         width:"100%" , height:{md:"100vh" , xs:"60vh"}}}>
            <Box sx={{width:"100%" , height:{md:"100vh" , xs:"60vh"} , backgroundColor:"rgba(0,0,0,0.5)" , display:"flex" ,justifyContent:"center", alignItems:"center" , flexDirection:"column"}}>
                <Typography sx={{textTransform:"uppercase" , color:"whitesmoke"}} variant='h5' component="h5">Explore the Colourful World</Typography>
                <Typography variant='h1' component="h1" sx={{fontSize:{xs:"2rem" , md:"6rem"} , textTransform:"uppercase" , color:"whitesmoke" , my:{md:5 , xs:2}}}>A WONDERFUL GIFT</Typography>
                <Button sx={{backgroundColor:"#fb2056" , color:"whitesmoke" , borderRadius:"30px" , padding:"1% 3%"}}>learn more</Button>
            </Box>
         </Box>
        </>
    )
}
export default Header;