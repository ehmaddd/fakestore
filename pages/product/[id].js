import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuBar from '@/components/MenuBar';

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <MenuBar />
      <h1>Product Details</h1>
      <p>Product ID: {data.id}</p>
      <p>{data.title}</p>
    </div>
  );

}

export default ProductDetail;
