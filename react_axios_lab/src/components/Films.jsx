const Films = (props) => {
    if (!props.films) {
    return (<h1> Loading Please Wait </h1>)
    } else {
            return (
            <div>
                {
                props.films.map((film)=>(
                    <div key={film.title}>
                        <h2>{film.title}</h2>
                        <h4>Episode: {film.episode_id}</h4>
                    </div>  
                ))
                }
            </div>
        )
    }
}
    export default Films