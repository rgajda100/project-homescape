import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomContainer";
import Services from "../components/Services";

const Rooms = () => {
  return (
    <div>
      <Hero hero="roomsHero">
        <Banner title="Real Estate Developers">
          <Link to="/" className="btn-primary">
            Return Home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
      <Services />
    </div>
  );
};
export default Rooms;
