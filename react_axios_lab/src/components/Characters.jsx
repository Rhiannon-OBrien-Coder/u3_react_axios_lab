const Characters = (props) => {
    if (!props.characters) {
    return (<h1> Loading Please Wait </h1>)
    } else {
            return (
            <div>
                {
                props.characters.map((c)=>(
                    <div key={c.name}>
                        <h2>{c.name}</h2>
                        <h4>Species: {c.species}</h4>
                        <h4>Gender: {c.gender}</h4>
                        <h4>Height: {c.height}</h4>
                        <h4>Hair Color: {c.hair_color}</h4>
                        <h4>Skin Color: {c.skin_color}</h4>
                        <h4>Eye Color: {c.eye_color}</h4>
                    </div>  
                ))
                }
            </div>
        )
    }
}
    export default Characters