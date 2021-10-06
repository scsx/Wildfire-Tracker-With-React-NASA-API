const LocationInfo = ({ info }) => {
    const links = info.sources.map((src) => {
        return (
            <a
                href={src.url}
                key={src.url}
                rel='noopener noreferrer'
                target='_blank'>
                {src.id}
            </a>
        )
    })
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
                <li className='links'>
                    <strong>Sources: </strong> {links}
                </li>
            </ul>
        </div>
    )
}

export default LocationInfo
