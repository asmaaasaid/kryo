import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
export default function StandardImageList() {
  return (
    <Container sx={{py:5}}>
      
         <ImageList sx={{ width: "100%" , borderRadius:"10px" }} cols={2} gap={12}>
         {itemData.map((item) => (
        <ImageListItem key={item.img} >
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
           
          />
        </ImageListItem>
      ))}
    </ImageList>
    
    </Container>
  );
}

const itemData = [
  {
    img: 'src/assets/images/city-bike.jpg',
    title: 'Breakfast',
  },
  {
    img: 'src/assets/images/join-programme.jpg',
    title: 'Burger',
  },
  {
    img: 'src/assets/images/moutain-bike.jpg',
    title: 'Camera',
  },
  {
    img: 'src/assets/images/speciality-bike.jpg',
    title: 'Coffee',
  }
];