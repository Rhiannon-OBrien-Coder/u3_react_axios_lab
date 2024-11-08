const StarShips = (props) => {
    if (!props.ships) {
    return (<h1> Loading Please Wait </h1>)
    } else {
            return (
            <div>
                {
                props.ships.map((ship)=>(
                    <div key={ship.name}>
                        <h2>{ship.name}</h2>
                        <h4>Model: {ship.model}</h4>
                        <h4>Manufacturer: {ship.manufacturer}</h4>
                        <h4>Price: {ship.cost_in_credits}</h4>
                        <h4>Crew: {ship.crew}</h4>
                        <h4>Passengers: {ship.passengers}</h4>
                        <h4>Starship Class: {ship.starship_class}</h4>
                    </div>  
                ))
                }
            </div>
        )
    }
  }

  export default StarShips