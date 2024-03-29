import React, { Component } from "react";
import { RoomContext } from "../Context";
import Loading from "./Loading";
//import Room from "./Room";
import Title from "./Title";

//import ProfileCard from "./profileCard";
import TestCard from "./TestCard";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map((room) => {
      return <TestCard key={room.id} room={room} />;
    });

    return (
      <section className="featured-rooms">
        <Title title="Featured Services" />
        <div className="featured-rooms-center">
          <ul>{loading ? <Loading /> : rooms}</ul>
        </div>
      </section>
    );
  }
}
