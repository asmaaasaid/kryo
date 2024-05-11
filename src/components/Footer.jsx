import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
function Footer(){
    return(
        <>
          <Box sx={{py:5 , backgroundColor:"#191919" }}>
           <Container>
           <Grid container spacing={2} sx={{display:'flex' , justifyContent:"space-between"}}>
              <Grid item xs={7}>
                <Typography sx={{textTransform:'capitalize' , fontWeight:400 , color:"whitesmoke"}}>123 Fifth Avenue, NY 10160, New York, USA | Phone: 800-123-456 | Email: contact@example.com</Typography>
              </Grid>
              <Grid item xs={3}>
                <Typography sx={{textTransform:'capitalize' , fontWeight:400 , color:"whitesmoke"}}>Copyright © 2024 Outdoor Adventure</Typography>
              </Grid>
            </Grid>
           </Container>
          </Box>
        </>
    )
}
export default Footer;