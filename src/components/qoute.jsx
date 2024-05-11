import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import {Grid} from '@mui/material';
import SharedButton from './Button';
import './qoute.css'

function Qoute(){
    return(
        <>
        <Box sx={{backgroundColor:"#f5f5f5" , py:5}}>
           <Container>
           <Box sx={{display:'flex'}}>
                <img src='src/assets/pictures/quote-1.png' alt='qoute image' className='qouteImg'></img>
                <Box sx={{ml:5}}>
                    <Typography variant='h6' component='h6' sx={{textTransform:"capitalize", textAlign:"center"}}>"Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris."</Typography>
                    <Typography variant='body1' sx={{fontWeight:500 , textTransform:"capitalize" , textAlign:"center" , pt:3}}>_ Adam Sendler</Typography>
                </Box>
            </Box>
            <Typography sx={{textTransform:"uppercase" , textAlign:"center" , mt:10 , fontWeight:600}} variant='h4'>upcoming events</Typography>
            <Grid  container gap={5} justifyContent="center" sx={{my:10}}>
                <Grid item xs={12} md={5} >
                    <img src='src/assets/pictures/hiking-v1.jpg' alt='qoute image' className='campImage'></img>
                    <Box sx={{display:"flex" ,justifyContent:"center", alignItems:"center" , flexDirection:"column", mt:2}}>
                        <Typography variant='h6' sx={{textTransform:'capitalize'}}>Everest Camp Trek</Typography>
                        <Typography variant='body1' sx={{textTransform:'capitalize',fontWeight:400, textAlign:"center" , my:2}}>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</Typography>
                        <SharedButton/>
                    </Box>
                </Grid>
                <Grid item xs={12} md={5} >
                    <img src='src/assets/pictures/walking-v1.jpg' alt='qoute image' className='campImage' ></img>
                    <Box sx={{display:"flex" ,justifyContent:"center", alignItems:"center" , flexDirection:"column" , mt:2}}>
                        <Typography variant='h6' sx={{textTransform:'capitalize'}}>Walking Holidays</Typography>
                        <Typography variant='body1' sx={{textTransform:'capitalize',fontWeight:400, textAlign:"center" , my:2}}>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris inistra possedit.</Typography>
                        <SharedButton/>
                    </Box>
                </Grid>
            </Grid>
           </Container>
        </Box>
       
        </>
    )
}
export default Qoute;