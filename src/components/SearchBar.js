import React from "react";

import { FiSearch } from "react-icons/fi";

function SearchBar() {
  return (
    <>
      <div className="search">
        <form>
          <input
            type="text"
            placeholder="Bus Stop Code"
            className="search-one"
            required
          />
          <input
            type="text"
            placeholder="Bus Number"
            className="search-two"
            required
          />
          <button>
            <FiSearch style={{ color: "#fff", fontSize: "10px" }} />
          </button>
        </form>
      </div>
    </>
  );
}

export default SearchBar;
