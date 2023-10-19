import React from "react"
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useLocationInfoBoxMutation, useGetPlatenumberQuery, useGetParkingplaceQuery, useGetAddressQuery, useGetStateQuery, useGetCityQuery } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
import { useSelector } from 'react-redux';
const LocationInfoBox = ({ info }) => {
  const [server_msg, setServerMsg] = useState({})
  const [LocationInfoBox] = useLocationInfoBoxMutation()
  const { access_token } = getToken()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      parking_name: data.get('parking_name'),
      device_eui: data.get('device_eui'),
      platenumber: data.get('platenumber'),
      checkin_date: data.get('checkin_date'),
      checkout_date: data.get('checkout_date'),
    }
    const res = await LocationInfoBox({ actualData, access_token })
    if (res.data) {
      console.log(res.data)
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }
  };
  const myData = useSelector(state => state.user)
  //get
  const responseInf = useGetParkingplaceQuery(access_token)
  const responseInfo = useGetPlatenumberQuery(access_token)
  const responseIn = useGetAddressQuery(access_token)

  if (responseInfo.isLoading) return <div>Loading...</div>
  if (responseInf.isLoading) return <div>Loading...</div>
  if (responseIn.isLoading) return <div>Loading...</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <div className="location-info">
      <ul style={{ color: "white" }}>
        <li>ID: <strong>{info.id}</strong></li>
        <li>TITLE: <strong>{info.title}</strong></li>
      </ul>
      <button style={{ backgroundColor: "green" }} type="button" class="btn btn-dark" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Booking</button>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Smart Parking Booking</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
              <div class="modal-body">
                <label htmlFor="">Select place</label><br />
                <select name="parking_name" id="" style={{ width: "100%" }} required>
                  {
                    responseIn.data.map((post) =>
                      <option value={post.parking_name}>{post.parking_name}</option>
                    )}
                </select><br />

                <label htmlFor="">Select address</label><br />
                <select name="device_eui" id="states" style={{ width: "100%" }} required>
                  {
                    responseInf.data.map((post) =>
                      <option value={post.device_eui} >{post.device_eui}</option>
                    )}
                </select><br />

                <label htmlFor="">Plate Number</label>
                <select name="platenumber" id="platenumber" style={{ width: "100%" }} required>
                  {
                    responseInfo.data.map((post) =>
                      <option value={post.platenumber}>{post.platenumber}</option>
                    )}
                </select><br />
                <label>CheckIn Date:</label>
                <input type="datetime-local" name="checkin_date" required /><br />
                <label >CheckOut Date:</label>
                <input type="datetime-local" name="checkout_date" />
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <Button type="submit" class="btn btn-secondary" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Submit </Button>
              </div>
            </Box>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LocationInfoBox