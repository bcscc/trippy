import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image4 from './images/image4.jpg';



export default function Home() {
  return (
    <main>
      <div
        id="myCarousel"
        className="carousel slide mb-6 pointer-event"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        data-bs-pause="false"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            className="active"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
          ></button>
        </div>

        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={image4}
              alt="First slide"
              className="d-block object-fit-cover w-100 h-100" 
            />
            <div className="container">
              <div className="carousel-caption text-start">
                <h1>Get trippy with Trippy</h1>
                <p>The home of all your trip planning.</p>
                <p>
                  <Link to="/dashboard" className="btn btn-lg btn-primary">
                    View your trips
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={image2}
              alt="Second slide"
              className="d-block object-fit-cover w-100 h-100" 
            />
            <div className="container">
              <div className="carousel-caption">
                <h1>Get trippy with Trippy</h1>
                <p>The home of all your trip planning.</p>
                <p>
                  <Link to="/dashboard" className="btn btn-lg btn-primary">
                    View your trips
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <img
              src={image1}
              alt="Third slide"
              className="d-block object-fit-cover w-100 h-100" 
            />
            <div className="container">
              <div className="carousel-caption text-end">
                <h1>Get trippy with Trippy</h1>
                <p>The home of all your trip planning.</p>
                <p>
                  <Link to="/dashboard" className="btn btn-lg btn-primary">
                    View your trips
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </main>
  );
}
