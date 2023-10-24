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
      {courses.map((course, index) => (
        <div key={index} className="course-list">
          <div onClick={() => toggleCourse(index)}>
            <p>{course.title}</p>
            {openCourse === index ? (
              <h5>| ^</h5>
            ) : (
              <h5>| v</h5>
            )}
          </div>
          {openCourse === index && (
            <div className="pane">
              <ul>
                {course.lessons.map((lesson, lessonIndex) => (
                  <li key={lessonIndex}>{lesson}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
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
