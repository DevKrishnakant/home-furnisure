"use client";
import { productsData } from "@/lib/data/productsData";

export default function TestDebugPage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Debug Products Data</h1>
      
      <h2>Available Categories:</h2>
      <ul>
        {Object.keys(productsData).map(category => (
          <li key={category}>{category}</li>
        ))}
      </ul>

      <h2>Boho Category Products:</h2>
      {productsData.boho && (
        <ul>
          {Object.keys(productsData.boho).map(productId => (
            <li key={productId}>
              {productId} - {productsData.boho[productId].title}
              <ul>
                {productsData.boho[productId].items.map(item => (
                  <li key={item.id}>
                    Item {item.id}: {item.name.line1} {item.name.line2}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}

      <h2>Test URLs:</h2>
      <ul>
        <li><a href="/product-category/collection/boho/kathisma-boho-1">/product-category/collection/boho/kathisma-boho-1</a></li>
        <li><a href="/product-category/collection/boho/kathisma-boho-1/1">/product-category/collection/boho/kathisma-boho-1/1</a></li>
        <li><a href="/product-category/collection/boho/kathisma-boho-1/2">/product-category/collection/boho/kathisma-boho-1/2</a></li>
      </ul>
    </div>
  );
} 