// types.ts

// Define the Shop type
export type Shop = {
  id: number;
  name: string;
  url_name: string;
  supplier_id: number;
  membership_name: string;
  shop_category_name: string;
  city: string;
  district: string;
  supplier_name: string;
  address?: string;//add
  phone?: string;//add
  logo_url?: string; // Optional field for shop logo
};

// Define the RelatedProduct type
export interface RelatedProduct {
  id: number;
  name: string;
  unit_price: string; // Price as string to handle currency
  unit: string; // e.g., Kg, piece
  image_url: string; // URL to the product image
}

// Define the Product type, which includes a Shop object
export type Product = {
  data: any;
  // properties: any;
  id: number;
  name: string;
  image: string;
  shop_id: number;
  unit: string; // Unit of the product, e.g., Kg
  unit_price: string;  // Unit price in KHR
  sale_price: string; // Sale price if applicable
  list_price: string;// List price
  origin: string; // Origin of the product
  brand_id: number;
  category_id: number;
  unit_id: number;
  brand_name?: string;// Brand name, optional
  category_name: string;
  unit_name: string;
  thumbnail: string;
  image_name: string; // URL to the product image
  available_from: string; // Available from date
  available_until: string; // Available until date
  supply_ability: string; // Maximum supply ability
  Is_available: boolean; // Availability status
  shop: Shop;  // Referencing the Shop type, // Shop selling the product
  properties?: Array<{
    field: string;
    value: string;
  }>; // Additional properties like 'min_order_quantity' or 'certified_organic'
  related_products?: RelatedProduct[]; // List of related products

};

export interface SubCategory {
  sub_category: any;
  id: number;
  parent_id: number;
  default_name: string;
  image_name: string;
  icon: string | null;
  updateflag: number;
}

export interface CategoryProductResponse {
  status: boolean;
  data: {
      id: number;
      parent_id: number | null;
      default_name: string;
      image_name: string;
      icon: string | null;
      updateflag: number;
      sub_category: SubCategory[];
      products: Product[];
  };
}
