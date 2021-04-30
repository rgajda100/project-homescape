//profilecard is the same as room.js
import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../images/room-1.jpeg";
import PropTypes from "prop-types";

export default function profileCard({ room }) {
  const { name, slug, images, price } = room;

  console.log(room);
  return (
    <article className="profilecard">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>${price}</h6>
          {/* <p>per night</p> */}
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary profilecard-link">
          Features
        </Link>
      </div>
      <p className="profilecard-info">{name}</p>
    </article>
  );
}
//2:27:00
profileCard.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }),
};
