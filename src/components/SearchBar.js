import React from "react";

function SearchBar({onSearch}) {

  function handleChange(e){
    onSearch(e.target.value);
  }

  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <input className="searchTerm" name="search" placeholder="Search..." onChange={handleChange}/>
    </div>
  );
}

export default SearchBar;
