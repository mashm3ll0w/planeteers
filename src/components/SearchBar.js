import React from "react";

function SearchBar({onSearch, onSort}) {

  function handleChange(e){
    onSearch(e.target.value);
  }

  function handleChangeSort(e){
    onSort(e.target.checked)
  }

  return (
    <div className="search">
      {/* For the advanced deliverables: add a checkbox to allow sorting the planeteer */}
      <div>
      <input type="checkbox" id="sort" name="sort" onChange={handleChangeSort}/>
      <label for="sort">Sort By Age</label>
    </div>
      <input className="searchTerm" name="search" placeholder="Search..." onChange={handleChange}/>
    </div>
  );
}

export default SearchBar;
