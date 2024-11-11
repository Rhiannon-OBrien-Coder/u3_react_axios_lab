import { useNavigate } from "react-router-dom"

const Characters = (props) => {
    let navigate = useNavigate()

    const showCharacter = (key) => {
        const aCharacterUrl = props.characters[key].url
        const newUrl = new URL (aCharacterUrl)
        const pathname = newUrl.pathname
        const segments = pathname.split('/')
        const characterId = segments[segments.length - 2]
        console.log(characterId)
        navigate(`${characterId}`)
    }

    return(
    <div className="characters">
        <h2>List of Characters</h2>
        {
        props.characters.map((c, key) => (
            <div key={key} onClick={()=>showCharacter(key)} className="card">
                <h3>{c.name}</h3>
            </div>
        ))
        }
    </div>
    )
}

    export default Characters