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
        <Banner title="Homescape" subtitle="Browse Real Estate developers">
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
