import React from "react";
import ProductsManagementTable from "@/app/admin/products/_components/ProductsManagementTable";
//import Stepper from "@/app/admin/products/_components/Stepper";
export default function ProductsSite() {
  return (
    <div>
      <h1>Products</h1>
        <ProductsManagementTable/>
    </div>
  );
}
