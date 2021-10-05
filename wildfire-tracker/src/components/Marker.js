import { Icon } from '@iconify/react'
import iconFire from '@iconify/icons-mdi/fire'
import iconStorms from '@iconify/icons-mdi/weather-lightning'
import iconIce from '@iconify/icons-mdi/snowflake-alert'
import iconVolcano from '@iconify/icons-mdi/image-filter-hdr'

const Marker = ({ onClick, lat, lng, type }) => {
    let iconType, iconName
    if (type === 8) {
        iconType = ' fire'
        iconName = iconFire
    } else if (type === 10) {
        iconType = ' storms'
        iconName = iconStorms
    } else if (type === 15) {
        iconType = ' ice'
        iconName = iconIce
    } else if (type === 12) {
        iconType = ' volcano'
        iconName = iconVolcano
    } else {
        return // unkown event
    }

    return (
        <div className='location-marker' onClick={onClick}>
            <Icon icon={iconName} className={`location-icon ${iconType}`} />
        </div>
    )
}

export default Marker
