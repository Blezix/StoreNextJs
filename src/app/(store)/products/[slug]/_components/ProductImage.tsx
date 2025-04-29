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
            flexDirection: { xs: "column-reverse", md: "row" }, // Kolumnowy układ na małych ekranach
            gap: 2,
            p: 2,
            bgcolor: "white",
            color: "black",
            minWidth: { xs: "100%", sm: "400px" },
            width: { xs: "100%", md: "55%" },
            height: { xs: "auto", md: "80%" },
        }}>
            <ImageList sx={{
                display: 'flex',
                flexDirection: { xs: "row", md: "column" }, // Rzędy na małych ekranach
                gap: 2,
                width: { xs: "100%", md: "20%" },
                overflowX: { xs: "scroll", md: "visible" }, // Przewijanie na małych ekranach
            }}>
                {imgSrc.map((img, index) => (
                    <ImageListItem sx={{
                        width: 'auto',
                        display: "flex",
                        justifyContent: "center",
                        alignItems:"center",
                        bgcolor: "#f2f2f2",
                        borderRadius: 2,
                        p: 2,
                    }} key={index} onClick={() => setSelectedImage(img)}>
                        <Box component={"img"} src={img} alt={`Thumbnail ${index + 1}`} sx={{
                            cursor: 'pointer',
                            width: { xs: '60px', sm: '100px',md:"100px" },
                            height: 'auto',
                        }} />
                    </ImageListItem>
                ))}
            </ImageList>

            <Box sx={{
                width: { xs: "100%", md: "80%" },
                display: "flex",
                justifyContent: "center",
                bgcolor: "#f2f2f2",
                borderRadius: 3,
                minHeight: { xs: "300px", md: "415px" },
            }}>
                <Box sx={{
                    width: "70%",
                    height: "90%",
                    m: `auto`,

                }} component={"img"} src={selectedImage} alt="Main product" />
            </Box>
        </Box>
    );
}

export default ProductImage;