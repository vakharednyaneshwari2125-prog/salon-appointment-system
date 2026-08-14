import React from "react";
import "./HairCut.css";

function HairCut() {
  const haircuts = [
    {
      name: "Mullet haircut",
      price: 200,
      image: "/images/mullet.jpg",
    },
    {
      name: "Taper fade haircut",
      price: 150,
      image: "/images/taper-fade.jpg",
    },
    {
      name: "Burst fade haircut",
      price: 195,
      image: "/images/burst-fade.jpg",
    },
    {
      name: "Low fade haircut",
      price: 180,
      image: "/images/low-fade.jpg",
    },
    {
      name: "French crop haircut",
      price: 175,
      image: "/images/french-crop.jpg",
    },
    {
      name: "Textured haircut",
      price: 200,
      image: "/images/textured.jpg",
    },
    {
      name: "Classic haircut",
      price: 150,
      image: "/images/classic.jpg",
    },
  ];

  return (
    <div className="haircut-page">
      <div className="haircut-container">
        {haircuts.map((haircut, index) => (
          <div className="haircut-card" key={index}>

            <img
              src={haircut.image}
              alt={haircut.name}
              className="haircut-image"
            />

            <h2>{haircut.name}</h2>

            <div className="haircut-price">
              ₹{haircut.price}
            </div>

            <div className="book-section">
              <button>Book Now</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default HairCut;