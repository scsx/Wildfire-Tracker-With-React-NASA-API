import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import Marker from './Marker'
import LocationInfo from './LocationInfo'

const Map = ({ eventData, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)

    const markers = eventData.map((ev) => {
        // Ignore volcanoes with multiple coords:
        if (typeof ev.geometries[0].coordinates[0] !== 'object') {
            return (
                <Marker
                    key={ev.id}
                    lat={ev.geometries[0].coordinates[1]}
                    lng={ev.geometries[0].coordinates[0]}
                    type={ev.categories[0].id}
                    onClick={() =>
                        setLocationInfo({ id: ev.id, title: ev.title })
                    }
                />
            )
        }

        return null
    })

    return (
        <div className='map'>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: process.env.REACT_APP_GOOGLE_API_KEY // Check ntn Wildfire-Tracker-With-React-NASA-API
                }}
                defaultCenter={center}
                defaultZoom={zoom}>
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
        </div>
    )
}

// Default props with default location (Rome)
Map.defaultProps = {
    center: {
        lat: 41.9028,
        lng: 12.4964
    },
    zoom: 5
}

export default Map
