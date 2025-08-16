export interface ProductItem {
  id: string;
  name: string;
  image: string;
  description: string;
  price: string;
}

export interface Product {
  id: string;
  title: string;
  image: string;
  description: string;
  products: ProductItem[];
}

export interface CategoryData {
  category: string;
  description: string;
  products: Product[];
}

export interface ProductsData {
  [key: string]: CategoryData;
} 