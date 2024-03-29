import React from "react";
//import RoomsList from "./RoomList";
import RoomsFilter from "./RoomFilter";
import { withRoomConsumer } from "../Context";
import Loading from "./Loading";

import ProfilesList from "./ProfileList";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <RoomsFilter rooms={rooms} />
      {/* <RoomsList rooms={sortedRooms} /> */}
      <ProfilesList rooms={sortedRooms} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);

// import React from 'react';
// import RoomsList from './RoomList';
// import RoomsFilter from './RoomFilter';
// import { RoomConsumer } from '../Context';
// import Loading from './Loading';

//
//export default function RoomContainer() {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms } = value

//                     if (loading) {
//                         return <Loading/>;
//                     }
//                     return (
//                         <div>
//                             hello from rooms RoomContainer
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms}/>
//                         </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     );
// }
