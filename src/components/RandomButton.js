import React, { useState } from "react";
import { getRandomPlaneteer } from "../data/planeteers";

function RandomButton({ onAddRandomPlaneteer }) {
	const [randomPlaneteers, setRandomPlaneteers] = useState([]);

	function handleClick() {
		const randomPlaneteer = getRandomPlaneteer();
		if (!randomPlaneteers.includes(randomPlaneteer)) {
			setRandomPlaneteers([...randomPlaneteers, randomPlaneteer]);
			fetch("http://localhost:8003/planeteers", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(randomPlaneteer),
			})
				.then((res) => res.json())
				.then((newPlaneteer) => onAddRandomPlaneteer(newPlaneteer));
		} else {
			alert(`Planeteer ${randomPlaneteer.name} already in the page!!`);
		}
	}

	return (
		<div className="centered">
			<button onClick={handleClick} id="random-planeteer">
				Click to Add a Random Planeteer
			</button>
		</div>
	);
}

export default RandomButton;
