import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServiceNavbar from "./ServiceNavbar";
import "./Services.css";

import mullet from "./assets/mullet.jpg";
import taperFade from "./assets/taper-fade.webp";
import burstFade from "./assets/burst-fade.jpg";

import naturalBrown from "./assets/natural-brown.jpg";
import darkBrown from "./assets/dark-brown.jpg";
import ashBrown from "./assets/ash-brown.jpg";

import cheryl from "./assets/cheryl.jpg";
import korean from "./assets/korean.webp";
import facialO3 from "./assets/facial-o3.jpg";

import detanO3 from "./assets/detan-o3.webp";
import raga from "./assets/raga.webp";

import groomMakeup from "./assets/groom-makeup.webp";


function Services() {

  const [search, setSearch] = useState("");

  const navigate = useNavigate();


  const serviceCards = [

    // HAIR CUT

    {
      name: "Mullet Haircut",
      price: "₹200",
      image: mullet
    },

    {
      name: "Taper Fade Haircut",
      price: "₹150",
      image: taperFade
    },

    {
      name: "Burst Fade Haircut",
      price: "₹195",
      image: burstFade
    },


    // HAIR COLOR

    {
      name: "Natural Brown",
      price: "₹500",
      image: naturalBrown
    },

    {
      name: "Dark Brown",
      price: "₹550",
      image: darkBrown
    },

    {
      name: "Ash Brown",
      price: "₹600",
      image: ashBrown
    },


    // FACIAL

    {
      name: "Cheryl Facial",
      price: "₹700",
      image: cheryl
    },

    {
      name: "Korean Facial",
      price: "₹800",
      image: korean
    },

    {
      name: "O3 Facial",
      price: "₹900",
      image: facialO3
    },


    // DETAN

    {
      name: "O3 Detan",
      price: "₹300",
      image: detanO3
    },

    {
      name: "Raga Detan",
      price: "₹250",
      image: raga
    },


    // MAKEUP

    {
      name: "Groom Makeup",
      price: "₹1000",
      image: groomMakeup
    }

  ];


  // Book Now
  const handleBookNow = (card) => {

    navigate("/appointment", {
      state: {
        service: card.name,
        price: card.price
      }
    });

  };


  return (

    <div>

      <ServiceNavbar
        search={search}
        setSearch={setSearch}
      />


      <div className="cards-container">

        {serviceCards

          .filter((card) =>
            card.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )

          .map((card, index) => (

            <div
              className="service-card"
              key={index}
            >

              <img
                src={card.image}
                alt={card.name}
              />


              <h2>
                {card.name}
              </h2>


              <div className="price">
                {card.price}
              </div>


              <button
                onClick={() =>
                  handleBookNow(card)
                }
              >
                Book Now
              </button>

            </div>

          ))}

      </div>

    </div>

  );
}

export default Services;