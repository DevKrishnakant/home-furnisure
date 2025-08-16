"use client";
import React from "react";
import { Box, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

interface ImageItem {
  url: string;
  title?: {
    line1?: string;
    line2?: string;
  };
  id?: number;
  productId?: string;
}

interface ProductsListProps {
  images: ImageItem[];
  gap?: number;
  category?: string;
}

const ProductsList: React.FC<ProductsListProps> = ({
  images,
  gap = 16,
  category
}) => {
  const router = useRouter();

  const handleItemClick = (item: ImageItem) => {
    if (item.productId && category) {
      // Extract the base productId and itemId from the productId string
      const [baseProductId, , itemId] = item.productId.split('-');
      
      // Debug logging
      console.log('ProductsList navigation:', { 
        item, 
        category, 
        baseProductId, 
        itemId,
        fullUrl: `/product-category/collection/${category}/${baseProductId}/${itemId}`
      });
      
      // Navigate to individual product detail page
      router.push(`/product-category/collection/${category}/${baseProductId}/${itemId}`);
    }
  };

  return (
    <Box
      display="grid"
      gridTemplateColumns="repeat(3, 1fr)"
      gap={gap}
      padding={gap}
    >
      {images.map((img, index) => (
        <Box 
          key={index} 
          textAlign="center"
          onClick={() => handleItemClick(img)}
          sx={{
            cursor: img.productId ? 'pointer' : 'default',
            transition: 'transform 0.2s ease-in-out',
            '&:hover': img.productId ? {
              transform: 'scale(1.05)',
            } : {},
          }}
        >
          <img
            src={img.url}
            alt={`Image ${index + 1}`}
            style={{ width: "100%", height: "auto", borderRadius: 8 }}
          />
          {img.title && (
            <Typography mt={1} fontSize={14} sx={{color:"black"}}>
              {img.title.line1}
              <br />
              {img.title.line2}
            </Typography>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default ProductsList;
