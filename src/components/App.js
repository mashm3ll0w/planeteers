import React, {useState, useEffect} from "react";

import Header from "./Header";
import RandomButton from "./RandomButton";
import PlaneteersContainer from "./PlaneteersContainer";
import SearchBar from "./SearchBar";

function App() {

  const [planeteers, setPlaneteers] = useState([])

  useEffect(() => {
    fetch("http://localhost:8003/planeteers")
    .then(res => res.json())
    .then(data => {
      setPlaneteers(planeteers => setPlaneteers(data))
    })
  }, [])

  return (
    <div>
      <Header />
      <SearchBar />
      <RandomButton />
      <PlaneteersContainer planeteers={planeteers}/>
    </div>
  );
}

export default App;
