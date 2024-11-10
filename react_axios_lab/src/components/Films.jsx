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
                        <h4>Opening Crawl: {film.opening_crawl}</h4>
                        <h4>Producers: {film.producer}</h4>
                        <h4>Release Date: {film.release_date}</h4>
                    </div>  
                ))
                }
            </div>
        )
    }
}
    export default Films