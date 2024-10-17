import axios from "axios";
import React from "react";
import Image from "next/image";
import { Product, Shop, RelatedProduct } from "@/types/types";

export default async function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  // Fix the fetchProduct function to return the correct type
  const fetchProduct = async (): Promise<Product> => {
    const { data } = await axios.get(
      `https://kasemall1.kasegro.com/api/products/${params.productId}/`
    );
    return data.data.product; // Extracting the actual product data from the response
  };

  const displayProduct = await fetchProduct(); // Fetch the product
  console.log(displayProduct); // Debugging log

  // Ensure the product exists before rendering
  if (!displayProduct) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h1 className="text-3xl font-bold">{displayProduct?.name}</h1>

      {/* Main Details Section */}
      <div className="flex flex-col lg:flex-row gap-6 mt-4">
        {/* Product Image */}
        <Image
          src={displayProduct?.image_name}
          alt={displayProduct?.name}
          width={500}
          height={500}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-4">
          {/* Pricing Info */}
          <p className="text-lg">
            <strong>Price: </strong>
            {parseFloat(displayProduct?.unit_price.replace(",", ""))} ៛
          </p>

          {displayProduct?.sale_price !== "0.00" && (
            <p>
              <strong>Sale Price: </strong>
              {parseFloat(displayProduct?.sale_price.replace(",", ""))} ៛
            </p>
          )}

          <p>
            <strong>List Price: </strong>
            {parseFloat(displayProduct?.list_price.replace(",", ""))} ៛
          </p>

          {/* Product Unit */}
          <p>
            <strong>Unit: </strong> {displayProduct?.unit || "Kg"}
          </p>

          {/* Product Origin */}
          <p>
            <strong>Origin: </strong> {displayProduct?.origin || "Unknown"}
          </p>

          {/* Available Period */}
          <p>
            <strong>Available Period: </strong>{" "}
            {`${displayProduct?.available_from} to ${displayProduct?.available_until}`}
          </p>

          {/* Supply Ability */}
          <p>
            <strong>Supply Ability: </strong>{" "}
            {displayProduct?.supply_ability || "Unknown"} Kg
          </p>

          {/* Product Details */}
          <p>
            <strong>Category: </strong> {displayProduct?.category_name}
          </p>
          <p>
            <strong>Brand: </strong> {displayProduct?.brand_name || "N/A"}
          </p>
          <p>
            <strong>Min Order Quantity: </strong>{" "}
            {displayProduct?.properties?.find(
              (p: { field: string }) => p.field === "min_order_quantity"
            )?.value || "N/A"}{" "}
            
          </p>

          <p>
            <strong>Availability: </strong>
            {displayProduct?.Is_available ? "In Stock" : "Out of Stock"}
          </p>

          {/* Certified Organic */}
          <p>
            <strong>Certified Organic: </strong>
            {displayProduct?.properties?.find(
              (p: { field: string }) => p.field === "certified_organic"
            )?.value === "Yes"
              ? "Yes"
              : "No"}
          </p>

          {/* Shop Info */}
          <div>
            <h2 className="text-xl font-bold mt-6">Shop Information</h2>
            <p>
              <strong>Shop Name: </strong> {displayProduct?.shop?.name || "N/A"}
            </p>
            <p>
              <strong>Location: </strong>{" "}
              {displayProduct?.shop?.address || "N/A"}
            </p>
            <p>
              <strong>Shop Address: </strong>
              {displayProduct?.shop?.address}
            </p>
            <p>
              <strong>Phone: </strong> {displayProduct?.shop?.phone || "N/A"}
            </p>
            <p>
              <strong>Shop Contact: </strong>
              {displayProduct?.shop?.phone}
            </p>
          </div>
        </div>
      </div>

      {/* Related Products */}
      {displayProduct?.related_products &&
        displayProduct.related_products.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-bold">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayProduct.related_products.map(
                (product: RelatedProduct) => (
                  <div key={product.id} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p>
                      <strong>Price: </strong>
                      {product.unit_price} ៛
                    </p>
                    <p>
                      <strong>Unit: </strong> {product.unit}
                    </p>
                    <Image
                      src={product.image_url}
                      alt={product.name}
                      width={150}
                      height={150}
                      className="rounded-lg"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        )}
    </div>
  );
}
