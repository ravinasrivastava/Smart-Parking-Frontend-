import { Box, Button, Alert } from '@mui/material';
import { useState } from 'react';
import { useUpdatePostMutation, useGetTableUserQuery } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
// import { useSelector } from 'react-redux';
import Sidebar from '../sidebar/Sidebar';
import "./update.css"
const Update = () => {
  const [server_msg, setServerMsg] = useState({})
  const { access_token } = getToken()
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      platenumber: data.get('platenumber'),
      stateprovision: data.get('stateprovision'),
      modal: data.get('modal'),
      color: data.get('color'),
    }
    const res = await updatePost({ actualData, access_token })
    if (res.data) {
      console.log(res.data)
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }
  };
  // const myData = useSelector(state => state.user)
  const updatePostData =
  {
    "id": 12,
    "platenumber": "RJ67-6799",
    "stateprovision": "Jaipur",
    "modal": "XYZ",
    "color": "White",
  }
  const [updatePost, responseInf] = useUpdatePostMutation()
  const responseInfo = useGetTableUserQuery(access_token)
  console.log("Response Information: ", responseInfo)
  console.log("Data: ", responseInfo.data)
  console.log("Success: ", responseInfo.isSuccess)
  //  console.log("dgggggggggggggggg",responseInf.data.id)
  //   console.log("dgggiiiiiiiiiiiiggggg",responseInf.id)
  if (responseInf.isLoading) return <div>Loading....</div>
  if (responseInfo.isLoading) return <div>Loading....</div>
  if (responseInfo.isError) return <h1>An error occured {responseInfo.error.error}</h1>
  return (
    <>
      <Sidebar />
      <div class="container" style={{ backGround: "white" }}>
        <div class="row d-flex justify-content-center">
          <div class="col-md-4">
            <div class="form-wrap">
              <div class="form-heading">
                <h4>Vehicles update</h4>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form"></Box>
              </div>
              <div class="p-3 ">
                <div class="row mt-2">
                  <div class="col-md-12">
                    <label style={{ textAlgin: "left" }}>Platenumber</label>
                    <input type="text" id="password" class="form-control" />
                  </div>

                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Stateprovision</label>
                    <input type="text" id="password" class="form-control" />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Modal</label>
                    <input type="text" id="password" class="form-control" />
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-12">
                    <label class="labels">Color</label>
                    <input type="text" class="form-control" />
                  </div>
                </div>
                <Box textAlign='center'>
                  <Button type="submit" className="login-btns" name="id" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }} onClick={() => { updatePost(updatePostData) }}>Submit </Button>
                </Box>
                {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
                <Box />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Update