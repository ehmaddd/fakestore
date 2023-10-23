import React, { useEffect, useState } from 'react';

function HomePage({ data }) {
  return (
    <div>
      {data.map((element) => (
        <div key={element.id}>
          <p>ID: {element.id}</p>
          <p>Title: {element.title}</p>
          <p>Price: {element.price}</p>
          <p>Description: {element.description}</p>
          <p>Category: {element.category}</p>
          <img src={element.image} alt={element.title} />
          <p>Rating: {element.rating.rate} (Count: {element.rating.count})</p>
        </div>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  // Fetch data from an external API (e.g., fakestoreapi)
  const res = await fetch('https://fakestoreapi.com/products');
  const data = await res.json();

  return {
    props: { data },
  };
}

export default HomePage;
