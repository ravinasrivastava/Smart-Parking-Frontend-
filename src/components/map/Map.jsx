import { useState, useEffect } from 'react'
import Map from "./Parking"
import Sidebar from '../sidebar/Sidebar'
function Mainlocation() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("http://meters.siotel.in:8005/geomap/").then((result) => {
      result.json().then((resp) => {
        // console.warn("result",resp)
        setData(resp)
      })
    })
  }, [])
  return (
    <div>
      <Sidebar />
      <h4>Google Map</h4>
      <div className='input-group mb-3 mt-3'>
        <input type="text" className='form-control' placeholder='Search State....' aria-label='username' aria-describedby='basic-addon1'></input>
        <input type="text" className='form-control' placeholder='Search City....' aria-label='username' aria-describedby='basic-addon1'></input>
      </div>
      <Map data={data} />
    </div>
  );
}
export default Mainlocation;