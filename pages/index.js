import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-multi-carousel/lib/styles.css';
import './MultiItemCarousel.css';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

function MultiItemCarousel({ data }) {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {data.map((element, index) => (
        <Link href={`/product/${element.id}`} key={element.id}>
          <div className="card hoverable-card carousal-card">
            <div className="card-body">
              <img src={element.image} />
              <h6 className="card-title">{element.title}</h6>
              <p>Rating: {element.rating.rate}</p>
              <p>Price: ${element.price}</p>
            </div>
            <div className="alternate-content">
              <h5>{element.title}</h5>
              <p>{element.rating.rate}</p>
              <p className="details">{element.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <div className="head">
          <a href="/"><p className="header">FakeStore</p></a>
          <MenuBar />
      </div>
      <div className="carousal-holder">
        <MultiItemCarousel data={data} />
      </div>
    </div>
  );
}

export default HomePage;
