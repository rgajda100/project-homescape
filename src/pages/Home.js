import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title="Homescape"
          subtitle="Search for your new home improvement!"
        >
          <Link to="/rooms" className="btn-primary">
            Portfolios
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
    </>
  );
}
