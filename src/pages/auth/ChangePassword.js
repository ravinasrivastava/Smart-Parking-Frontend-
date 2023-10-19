import { Box, TextField, Button, Alert, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useChangeUserPasswordMutation } from '../../services/userAuthApi';
import { getToken } from '../../services/LocalStorageService'
// import Routers from '../../components/sidebar/Routers';
 import Sidebar from '../../components/sidebar/Sidebar';
const ChangePassword = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [changeUserPassword] = useChangeUserPasswordMutation()
  const { access_token } = getToken()

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const actualData = {
      password: data.get('password'),
      password2: data.get('password2'),
    }
    const res = await changeUserPassword({ actualData, access_token })
    if (res.error) {
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById("password-change-form").reset();
    }

  };
  // Getting User Data from Redux Store
  const myData = useSelector(state => state.user)
  // console.log("Change Password", myData)

  return <>
  <Sidebar/>
 
  {/* <Routers/> */}
    {/* {server_error.non_field_errors ? console.log(server_error.non_field_errors[0]) : ""}
    {server_error.password ? console.log(server_error.password[0]) : ""}
    {server_error.password2 ? console.log(server_error.password2[0]) : ""} */}
      
      {/* <Routers/>  */}
      <Box sx={{marginTop:"2rem",justifyItems:'center', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      <h1>Change Password</h1>

  
<section class=" text-center text-lg-start">

  <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://thumbs.dreamstime.com/b/clock-text-change-your-password-image-typical-78011639.jpg" alt="Trendy Pants and Shoes"
          class="w-100 rounded-t-5 rounded-tr-lg-5 rounded-bl-lg-5" />
     </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1,width:"70%",margin:"auto"}} id="password-change-form">
        <TextField margin="normal" required fullWidth name="password" label="New Password" type="password" id="password" />
        {server_error.password ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password[0]}</Typography> : ""}
        <TextField margin="normal" required fullWidth name="password2" label="Confirm New Password" type="password" id="password2" />
        {server_error.password2 ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.password2[0]}</Typography> : ""}
        <Box style={{ textAlign:'center'}}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Update </Button>
        </Box>
        
        {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> :''}
        {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> :''}
       
      </Box>
    </div>
    </div>
    </div>
  </div>
 </section>
 </Box> 
</>;
};

export default ChangePassword;
