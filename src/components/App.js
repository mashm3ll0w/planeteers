import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers, setPlaneteers] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
    .then(res => res.json())
    .then(data => setPlaneteers(data))
  }, [])


  function handleSearch(searchTerm){
    setSearch(searchTerm)
  }

  function addRandomPlaneteer(newPlaneteer){
    setPlaneteers([...planeteers, newPlaneteer])
  }

  
  const searchedPlaneteers = planeteers.filter(planeteer => {
    if(search === ""){
      return true
    }
    else {
      return ((planeteer.name).toLowerCase().includes(search) || planeteer.bio.toLowerCase().includes(search))
    }
  })

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch}/>
      <RandomButton onAddRandomPlaneteer={addRandomPlaneteer}/>
      <PlaneteersContainer planeteers={searchedPlaneteers}/>
    </div>
  );
}

export default App;
