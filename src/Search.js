import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="enter-city">
      <form>
        <input
          type="text"
          className="city-entered"
          placeholder="Enter a city..."
          autofocus="on"
          autocomplete="off"
        />
        <input className="submit-button" type="submit" value="Search" />
      </form>
    </div>
  );
}
