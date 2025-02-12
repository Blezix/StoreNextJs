import React, { useState } from 'react';
import { Box, ImageList, ImageListItem } from '@mui/material';

interface Props {
    imgSrc: string[];
}

const ProductImage: React.FC<Props> = ({ imgSrc }) => {
    const [selectedImage, setSelectedImage] = useState(imgSrc[0]);

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            p: 2,
            bgcolor: "white",
            color: "black",
            minWidth: "400px",
            width: "55%",
            height: "80%",
        }}>
            <ImageList sx={{ display: 'flex', flexDirection: 'column', gap: 2, width:"20%" }}>
                {imgSrc.map((img, index) => (
                    <ImageListItem sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent:"center",
                        bgcolor: "#f2f2f2",
                        borderRadius: 2,
                        p:2
                    }} key={index} onClick={() => setSelectedImage(img)}>
                        <img src={img} alt={`Thumbnail ${index + 1}`} style={{ cursor: 'pointer', width: '100%', height: 'auto' }} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Box sx={{
                width: "80%",
                display: "flex",
                justifyContent:"center",
                bgcolor: "#f2f2f2",
                borderRadius: 3,
                minHeight:"415px"
            }}>
                <Box sx={{
                    width: "auto",
                    height: "90%",
                    m:`auto`
                }} component={"img"} src={selectedImage} alt="Main product" />
            </Box>
        </Box>
    );
}

export default ProductImage;