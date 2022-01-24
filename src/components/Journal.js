const Journal = (props) => {
    return (
        <div>
            <main className="container">
                <img src={props.imageUrl} alt="journal-images" className="journal--image"/>
                <div className="journal--details">
                    <div>
                        <img src="" alt="" />
                        <span className="location"><span className="brandLogo">🪡 </span>{props.location}</span>
                        <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
                    </div>
                    <h1>{props.title}</h1>
                    <h5>{props.startDate} - {props.endDate}</h5>
                    <p>{props.description}</p>
                </div>
            </main>
            <hr />
        </div>
    );
}

export default Journal;