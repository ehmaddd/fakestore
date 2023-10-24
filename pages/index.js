import Carousel from 'react-multi-carousel';
import 'bootstrap/dist/css/bootstrap.css';
import 'react-multi-carousel/lib/styles.css';
import './MultiItemCarousel.css';
import MenuBar from '../components/MenuBar';
import React, { useEffect, useState } from 'react';

function MultiItemCarousel({ data }) {
  // Define your responsive settings
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5, // Number of items to display on super-large desktops
    },
    largeDesktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4, // Number of items to display on large desktops
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3, // Number of items to display on desktops
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2, // Number of items to display on tablets
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1, // Number of items to display on mobile devices
    },
  };

  return (
    <Carousel responsive={responsive}>
      {data.map((element, index) => (
        <div className="card hoverable-card carousal-card" key={index}>
          <div className="card-body">
            <img className="w-50 h-100" src={element.image} />
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
      <h1>UDEMY</h1>
      <MenuBar />
      <MultiItemCarousel data={data} />
    </div>
  );
}

export default HomePage;
