const LocationInfo = ({ info }) => {
    return (
        <div className='info'>
            <h2>Event info</h2>
            <ul>
                <li>
                    ID: <strong>{info.id}</strong>
                </li>
                <li>
                    Title: <strong>{info.title}</strong>
                </li>
            </ul>
        </div>
    )
}

export default LocationInfo
