import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import SharedButton from './Button';

function Tours(){
    return(
        <>
        <Box sx={{backgroundColor:'#f5f5f5' , py:5 , px:4}}>
            <Grid container gap={6} sx={{my:5}}>
                <Grid item xs={12} md={3}>
                    <Box>
                        <Typography variant='h4' sx={{textTransform:'uppercase' , fontWeight:600}}>upcomin <br></br> tours& <br></br> destination</Typography>
                        <Typography variant='body1' sx={{textTransform:'capitalize' , my:4}}>Fuerat aestu carentem habentia spectent tonitrua mutastis locavit liberioris. Sinistra possedit litora ut nabataeaque. Setucant coepyterunt perveniunt animal! Concordi aurea nabataeaque seductaque constaque cepit sublime flexi nullus.</Typography>
                        <SharedButton/>
                    </Box>
                </Grid>
                <Grid  item xs={12} md={4}>
                    <Box style={{width:"100%"}} >
                        <img src="src/assets/pictures/outdoor-image-01.jpg" alt="" style={{width:"100%" , borderRadius:"10px"}} />
                    </Box>
                    <Box style={{width:"100%"}}>
                        <img src="src/assets/pictures/image-1.jpg" style={{width:"100%" , borderRadius:"10px"}} alt="" />
                    </Box>
                </Grid>
                <Grid  item xs={12} md={4}>
                    <Box style={{width:"100%"}} >
                        <img src="src/assets/pictures/snow-1.jpg" alt="" style={{width:"100%" , borderRadius:"10px"}} />
                    </Box>
                    <Box style={{width:"100%" }}>
                        <img src="src/assets/pictures/outdoor-image-04.jpg" style={{width:"100%" , borderRadius:"10px" }} alt="" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </>
    )
}
export default Tours;