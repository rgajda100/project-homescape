import React from "react";
import { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../components/Title";
//Get all unique value
//java script challenge for getting unique values
//Set() only takes unique values
const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};
//4:06:00
export default function RoomFilter({ rooms }) {
  const context = useContext(RoomContext);

  const {
    handleChange,
    name,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;
  //get unique types
  let types = getUnique(rooms, "type");

  //add all
  types = ["all", ...types];

  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <div className="search-title">
        <h4>
          Search for Design, Remodeling, Renovation, and Home Improvement
          Services
        </h4>
        <div />
      </div>
      <form className="filter-form">
        {/* Room Price */}
        <div className="form-group">
          <label htmlFor="price">Location: {price} mi.</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* End of Room Price */}
        {/* Select Type */}
        <div className="form-group">
          <label htmlFor="type">Professional Service</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/* End of Select Type */}
        {/* Guests */}
        <div className="form-group">
          <label htmlFor="capacity">Style</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/* End of Guess */}
        {/* Size */}
        <div className="form-group">
          <label htmlFor="size">Budget $-$$$</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End of size */}

        {/* Word Search */}
        <div className="form-group">
          <label htmlFor="name">Search</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        {/* End of Word Search */}

        {/* Extras */}
        {/* <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div> */}

        {/* End of Extras */}
      </form>
    </section>
  );
}
