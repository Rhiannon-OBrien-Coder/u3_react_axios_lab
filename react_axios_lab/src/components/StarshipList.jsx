

const StarShips = (props) => {

    if (!props.ships) {
    return <h1> Loading Please Wait </h1>
    } else {
            return (
            <div>
                {
                    props.ships.map((ship)=>(
                        <div key={ship.name}>
                        <h3>{ship.name}</h3>
                        </div>  
                    ))
                }
            </div>
        )
    }
  }

  export default StarShips