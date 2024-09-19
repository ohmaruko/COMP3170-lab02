export default function ArtistDetails(props) {
    console.log(props);
    return(
        <div className="artist-details-container">
            <div className="artist-image-countainer ">
                <img className="artist-image" src={props.photo} alt={props.name}/>
            </div>
            <div>
                <h2>{props.name}</h2>
                <p>Country: {props.country}</p>
                <p>Years active: {props.year}</p>
            </div>
        </div>
    )
}