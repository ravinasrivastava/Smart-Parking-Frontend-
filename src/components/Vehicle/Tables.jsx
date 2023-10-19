import Tab from './Tab';
import { Box, TextField,Alert } from '@mui/material';
import { useState } from 'react';
import { useTableMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
// import { useSelector } from 'react-redux';
const Tables = () => {
  const [server_msg, setServerMsg] = useState({})
  const [table] = useTableMutation()
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
    const res = await table({ actualData, access_token })
    if (res.data) {
      console.log(res.data)
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }
  };
  // const myData = useSelector(state => state.user)
  return (
    <>
      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Register New Vehicles</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }} id="password-change-form">
                <TextField margin="normal" fullWidth name="platenumber" label="Plate Number" type="text" id="password" />
                <TextField margin="normal" fullWidth name="stateprovision" label=" State Provision" type="text" id="password2"/>
                <TextField margin="normal" fullWidth name="modal" label="Modal" type="text" id="password3" />
                <TextField margin="normal" fullWidth name="color" label="Color" type="text" id="password4" />
                <Box textAlign='center'>
                  {/* <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Submit </Button> */}
                  <button type="submit" class="btn btn-primary">Submit</button>
                </Box>
                {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
              </Box>
            </div>
          </div>
        </div>
      </div>
      <Tab />
    </>
  )
}
export default Tables;