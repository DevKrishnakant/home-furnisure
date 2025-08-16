"use client";
import { useParams } from "next/navigation";
import { productsData } from "@/lib/data/productsData";

export default function TestJsonPage() {
  const params = useParams();
  
  return (
    <div style={{ padding: '20px', fontFamily: 'monospace' }}>
      <h1>Test JSON Page</h1>
      
      <h2>Current Params:</h2>
      <pre>{JSON.stringify(params, null, 2)}</pre>
      
      <h2>Products Data Structure:</h2>
      <pre>{JSON.stringify(productsData, null, 2)}</pre>
      
      <h2>Test Data Access:</h2>
      <div>
        <p>Boho category exists: {productsData.boho ? 'Yes' : 'No'}</p>
        <p>Kathisma product exists: {productsData.boho?.['kathisma-boho-1'] ? 'Yes' : 'No'}</p>
        <p>Product title: {productsData.boho?.['kathisma-boho-1']?.title || 'Not found'}</p>
        <p>Number of items: {productsData.boho?.['kathisma-boho-1']?.items?.length || 0}</p>
      </div>
    </div>
  );
} 