import React from "react"
import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-emojione/water-wave'
 import locationIcon from '@iconify/icons-icon-park/parking'


const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick} >
            <Icon icon={locationIcon} className="location-icon" />
        </div>
    )
}

export default LocationMarker

