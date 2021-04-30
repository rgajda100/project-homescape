import React from "react";
//import { Link } from "react-router-dom";
//import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function TestCard({ room }) {
  const { name, slug, images, price } = room;

  console.log(room);

  return (
    <ul>
      <li class="booking-card">
        <div class="book-container">
          <div class="content">
            <button class="btn">More Info</button>
          </div>
        </div>

        <div class="informations-container">
          <h2 class="title">{name}</h2>
          <p class="sub-title">Real Estate Development</p>
          <p class="price">${price}</p>

          <div class="more-information">
            <div class="info-and-date-container">
              <div class="box info">
                <p>Mumbo Jumbo Orange Section</p>
              </div>

              <div class="box date">
                <p>Mumbo Jumbo blue Section</p>
              </div>
            </div>

            <p class="disclaimer">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              eveniet perferendis culpa. Expedita architecto nesciunt, rem
              distinctio
            </p>
          </div>
        </div>
      </li>
    </ul>
  );
}
//2:27:00
TestCard.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
