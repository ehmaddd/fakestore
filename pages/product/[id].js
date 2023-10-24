import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuBar from '@/components/MenuBar';
import './ProductDetail.css';

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
      <div className="out-box">
        <div className="head">
          <a href="/"><p className="header">FakeStore</p></a>
          <MenuBar />
        </div>
        <div className="container">
          <h1>{data.title}</h1>
          <p className="price">${data.price}</p>
        </div>
        <div>
          <p className="description">{data.description}</p>
        </div>
        <div>
          <img src="./pulic/nasdaq" />
        </div>
        <div className="detail-div">
          <img src={data.image} class="detail-image" />
          <p className="price">${data.price}</p>
          <p className="cart-btn">Add to Cart</p><p className="heart-btn">&#x2665;</p>
          <p className="buy-btn">Buy Now</p>
        </div>
      </div>
  );

}

export default ProductDetail;
