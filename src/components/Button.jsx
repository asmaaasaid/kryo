import Button from '@mui/material/Button';


function SharedButton(){
   
    return(
        <Button  sx={{backgroundColor:"#fb2056" , color:"whitesmoke" , borderRadius:"30px" , padding:"2% 5%" ,'&:hover': {
            backgroundColor: '#db1c49'
          }}}>learn more</Button>
    )
}
export default SharedButton;