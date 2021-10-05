const LocationInfo = ({ info }) => {
    return (
        <div className='info'>
            <h2>Event info</h2>
            <ul>
                <li>
                    <strong>id:</strong> {info.id}
                </li>
                <li>
                    <strong>Title: </strong> {info.title}
                </li>
            </ul>
        </div>
    )
}

export default LocationInfo
