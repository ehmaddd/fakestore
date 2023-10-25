import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import MenuBar from '@/components/MenuBar';
import './ProductDetail.css';

function ProductDetail() {
  const router = useRouter();
  const { id } = router.query;
  const courses = [
    {
      title: 'Course 1',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3'],
    },
    {
      title: 'Course 2',
      lessons: ['Lesson 1', 'Lesson 2'],
    },
    {
      title: 'Course 3',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
    },
    {
      title: 'Course 4',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
    },
    {
      title: 'Course 5',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
    },
    {
      title: 'Course 6',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
    },
    {
      title: 'Course 7',
      lessons: ['Lesson 1', 'Lesson 2', 'Lesson 3', 'Lesson 4'],
    },
  ];

  const [data, setData] = useState([]);
  const [openCourse, setOpenCourse] = useState(null);

  const toggleCourse = (index) => {
    if (openCourse === index) {
      setOpenCourse(null);
    } else {
      setOpenCourse(index);
    }
  };

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((apiData) => setData(apiData))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
      <>
        <div className="head">
          <a href="/"><p className="header">FakeStore</p></a>
          <MenuBar />
        </div>
        <div className="jumbotron">
          <h1 className="item-title">{data.title}</h1>
          <p className="price">${data.price}</p>
        </div>
        <div>
          <p className="description">{data.description}</p>
        </div>
        <div>
        {courses.map((course, index) => (
          <div className="accordion" id={`accordionExample-${index}`} key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button accordion-button-small"
                  type="button"
                  onClick={() => toggleCourse(index)} // Add an onClick handler to toggle the course
                  aria-expanded={openCourse === index} // Check if the course is open
                  aria-controls={`collapseOne-${index}`}
                >
                  {course.title}
                </button>
              </h2>
              {course.lessons.map((lesson, lessonIndex) => (
                <div
                  id={`collapseOne-${index}`}
                  className={`accordion-collapse collapse ${openCourse === index ? 'show' : ''} ${lessonIndex === 0 ? 'accordion-content-small' : ''}`}
                  data-bs-parent={`#accordionExample-${index}`}
                  key={lessonIndex}
                >
                  <div className="accordion-body">
                    <strong>{lesson}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
        </div>
        <div class="card detail-div">
          <img class="card-img-top card-img" src={data.image} alt="Card image cap" />
          <div class="card-body">
            <p className="price">${data.price}</p>
            <p className="cart-btn">Add to Cart</p>
            <p className="heart-btn">&#x2665;</p>
            <p className="buy-btn">Buy Now</p>
          </div>
        </div>
      </>
  );

}

export default ProductDetail;
