import { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import "./map.css"
// define constants
const Locations = ({ data, center, zoom }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    // console.log('i am here'+eventData);
    const markers = data.map((ev) => {
        if (ev.id !== 0) {
            return <LocationMarker lat={ev.lat} lng={ev.lng} onClick={() => setLocationInfo({ id: ev.id, title: ev.title, pressure: ev.pressure, flowrate: ev.flowrate, volume: ev.volume, battery_level: ev.battery_level, door_status: ev.door_status, sch_time: ev.sch_time, address: ev.address, deveui: ev.deveui })} />
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyDU7PO99KSSFUzUyjqoEV6g_m7bL75yzK8' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}
Locations.defaultProps = {
    center: {
        lat: 26.9124,
        lng: 75.7873
    },
    zoom: 13
}
export default Locations