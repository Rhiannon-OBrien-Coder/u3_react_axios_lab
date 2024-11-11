import { useNavigate } from "react-router-dom"

const Films = (props) => {
    let navigate = useNavigate()

    const showFilm = (key) => {
        const aFilmUrl = props.films[key].url
        const newUrl = new URL (aFilmUrl)
        const pathname = newUrl.pathname
        const segments = pathname.split('/')
        const filmId = segments[segments.length - 2]
        console.log(filmId)
        navigate(`${filmId}`)
    }

    return(
    <div className="films">
        <h2>List of Films</h2>
        {
        props.films.map((f, key) => (
            <div key={key} onClick={()=>showFilm(key)} className="card">
                <h3>{f.title}</h3>
            </div>
        ))
        }
    </div>
    )
}

export default Films