import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";
import LogoIcon from "../images/logo/logo_icon.png";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner
          title=" Welcome to Homescape"
          subtitle="Search for your new home improvement!"
        >
          <Link to="/rooms" className="btn-primary">
            Services
          </Link>
        </Banner>
      </Hero>
      <FeaturedRooms />
      <Services />
    </>
  );
}
