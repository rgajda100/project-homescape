import React from "react";
import ProfileCard from "./profileCard";
import TestCard from "./TestCard";
//import TestCard from "./TestCard";

export default function ProfileList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no profiles matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="profileslist">
      <div className="profileslist-center">
        {/* {rooms.map((item) => {
          return <ProfileCard key={item.id} room={item} />;
        })} */}
        <ul>
          {rooms.map((item) => {
            return <TestCard key={item.id} room={item} />;
          })}
        </ul>
        {/* <TestCard /> */}
      </div>
    </section>
  );
}
