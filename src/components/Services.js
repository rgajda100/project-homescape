import React, { Component } from "react";
import { FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import Title from "./Title";

export default class Services extends Component {
  state = {
    services: [
      {
        icons: <FaInstagram />,
        title: "Instagram",
        info: "@Rob.Gajda",
      },
      {
        icons: <FaTwitter />,
        title: "Twitter",
        info: "Does Not Exist",
      },
      {
        icons: <FaEnvelope />,
        title: "Email",
        info: "robert.gajda123@gmail.com",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="Contact" />
        <div className="services-center">
          {this.state.services.map((item, index) => {
            return (
              <article key={index} className="service">
                <span>{item.icons}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
