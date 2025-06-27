'use client'

import { useEffect, useState } from "react";
import { Product } from "@/app/types";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import { Button, Box } from "@mui/material";
import {useAdmin} from "@/app/admin/AdminContext";
const ProductsManagementTable = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { deleteProduct } = useAdmin();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/products`);
                if (!response.ok) {
                    throw new Error("Failed to fetch products");
                }
                const data: Product[] = await response.json();
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []);



    const handleEdit = (slug: string) => {
        console.log(`Edit product with slug: ${slug}`);
    };

    const columns: GridColDef[] = [
        { field: "slug", headerName: "Slug", width: 200 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "price", headerName: "Price", width: 150 },
        { field: "category", headerName: "Category", width: 150 },
        {
            field: "actions",
            headerName: "Actions",
            width: 200,
            renderCell: (params: GridRenderCellParams) => (
                <Box>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        onClick={() => handleEdit(params.row.slug)}
                        style={{ marginRight: 8 }}
                    >
                        Edit
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="small"
                        onClick={() => deleteProduct(params.row.slug)}
                    >
                        Delete
                    </Button>
                </Box>
            ),
        },
    ];

    return (
        <Box sx={{ height: 400, width: "100%" }}>
            <DataGrid rows={products} columns={columns} getRowId={(row) => row.slug}
            />
        </Box>
    );
};

export default ProductsManagementTable;