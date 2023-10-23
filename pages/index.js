import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useEffect, useState } from 'react';
import 'react-multi-carousel/lib/styles.css';
import './MultiItemCarousel.css';

function MultiItemCarousel({ data }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Carousel responsive={responsive}>
      {data.map((element) => (
        <div key={element.id}>
          <div className="card hoverable-card">
            <img src={element.image} className="card-img-top" alt={element.title} />
            <div className="card-body">
              <h6 className="card-title">{element.title}</h6>
              <p>Rating: {element.rating.rate}</p>
              <p>Price: ${element.price}</p>
            </div>
            <div className="alternate-content">
              <h5>{element.title}</h5>
              <p>
                {Array.from({ length: element.rating.rate }, (_, index) => (
                  <i key={index} className="bi bi-star text-warning"></i>
                ))}
              </p>
              <p className="details">{element.description}</p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
      // Fetch your data here
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((apiData) => setData(apiData))
        .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
        <h1>Multi-Item Carousel</h1>
        <MultiItemCarousel data={data} />
      </div>
    );
  }

  export default HomePage;
