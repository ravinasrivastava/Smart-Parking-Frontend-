import { Grid, TextField, Button, Box, Alert, Typography } from "@mui/material";
import { useState } from 'react';
import { useSendPasswordResetEmailMutation } from "../../services/userAuthApi";
const SendPasswordResetEmail = () => {
  const [server_error, setServerError] = useState({})
  const [server_msg, setServerMsg] = useState({})
  const [sendPasswordResetEmail, { isLoading }] = useSendPasswordResetEmailMutation()
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const actualData = {
      email: data.get('email'),
    }
    const res = await sendPasswordResetEmail(actualData)
    if (res.error) {
      console.log(typeof (res.error.data.errors))
      console.log(res.error.data.errors)
      setServerMsg({})
      setServerError(res.error.data.errors)
    }
    if (res.data) {
      console.log(typeof (res.data))
      console.log(res.data)
      setServerError({})
      setServerMsg(res.data)
      document.getElementById('password-reset-email-form').reset()
    }
  }
  return <>
    <Box sx={{marginTop:"2rem",justifyItems:'center', display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }}>
      <h1>Reset Password</h1>
</Box>

   <div class="card mb-3">
    <div class="row g-0 d-flex align-items-center">
      <div class="col-lg-4 d-none d-lg-flex">
        <img src="https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg" alt="Trendy Pants and Shoes"
          class="w-50 rounded-t-5 rounded-tr-lg-5 rounded-bl-lg-5" />
     </div>
      <div class="col-lg-8">
        <div class="card-body py-5 px-md-5">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt:1,width:"70%",margin:"auto"}} id="password-change-form">
        <TextField margin='normal' required fullWidth id='email' name='email' label='Email Address' />
          {server_error.email ? <Typography style={{ fontSize: 12, color: 'red', paddingLeft: 10 }}>{server_error.email[0]}</Typography> : ""}
        <Box style={{ textAlign:'center'}}>
          <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}> Send </Button>
        </Box>
        
        {server_error.non_field_errors ? <Alert severity='error'>{server_error.non_field_errors[0]}</Alert> :''}
        {server_msg.msg ? <Alert severity='success'>{server_msg.msg}</Alert> : ''}
       
      </Box>
    </div>
      </div>
    </div>
  </div>
</>;
};

export default SendPasswordResetEmail;
