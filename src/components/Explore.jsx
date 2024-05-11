import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SharedButton from './Button';
import Grid from '@mui/material/Grid';
function Explore(){
    return(
        <>
         <Box sx={{backgroundImage:"url('src/assets/pictures/section-bg-img.jpg')" ,
        backgroundAttachment:{md:'fixed' , xs:'scroll'},
         backgroundSize:"cover" , 
         backgroundPosition:"center" ,
         backgroundRepeat:"no-repeat" , 
         width:"100%" , height:{md:"90vh" , xs:"60vh"}}}>
            <Box sx={{width:"100%" , height:{md:"90vh" , xs:"60vh"} , backgroundColor:"rgba(0,0,0,0.5)" , display:"flex" , alignItems:'center' , justifyContent:{md:"flex-end", xs:"center"}}}>
                <Grid container>
                   <Grid item xs={12} md={6}></Grid>
                     <Grid item xs={12} md={6}>
                       <Box sx={{ px:2 }}>
                          <Typography sx={{ textTransform: "uppercase", color: "whitesmoke", fontWeight: 700 }} variant='h5' component="h5">Explore the World</Typography>
                          <Typography variant='p' component="p" sx={{textTransform: "capitalize", color: "whitesmoke", my: { md: 2, xs: 2 }, fontWeight: { md: 400, xs: 300 }}}>Diremit mundi mare undae nunc mixtam tanto sibi. Nubes unda concordi.<br></br> Fert his.
                            Recessit mentes praecipites locum caligine sui egens erat. Silvascaeli regna.</Typography>
                          <SharedButton />
                       </Box>
                      </Grid>
                   </Grid>
            </Box>
         </Box>
        </>
    )
}
export default Explore;