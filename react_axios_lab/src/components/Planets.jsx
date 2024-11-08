const Planets = (props) => {
    if (!props.planets) {
    return (<h1> Loading Please Wait </h1>)
    } else {
            return (
            <div>
                {
                props.planets.map((p)=>(
                    <div key={p.name}>
                        <h2>{p.name}</h2>
                        <h4>Terrain: {p.terrain}</h4>
                        <h4>Population: {p.population}</h4>
                        <h4>Climate: {p.climate}</h4>
                    </div>  
                ))
                }
            </div>
        )
    }
}
    export default Planets