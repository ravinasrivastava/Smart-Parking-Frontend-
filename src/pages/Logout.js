// import { Button, CssBaseline, Grid, Typography } from '@mui/material';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { unSetUserToken } from '../features/authSlice'
// import { getToken, removeToken } from '../services/LocalStorageService';
// import { useGetLoggedUserQuery } from '../services/userAuthApi';
// import { useEffect, useState } from 'react';
// import { setUserInfo, unsetUserInfo } from '../features/userSlice';
// import Sidebar from "../components/sidebar/Sidebar";

// const Logout = () => {
//   const handleLogout = () => {
//     dispatch(unsetUserInfo({  email: "", mobile:"" }))
//     dispatch(unSetUserToken({ access_token: null }))
//     removeToken()
//     navigate('/')   
//   }
//   const navigate = useNavigate()
//   const dispatch = useDispatch()
//   const { access_token } = getToken()
//   const { data, isSuccess } = useGetLoggedUserQuery(access_token)  

//   const [userData, setUserData] = useState({
//     email: "",
//     // name: "",
//     mobile:""
//   })

//   // Store User Data in Local State
//   useEffect(() => {
//     if (data && isSuccess) {
//       setUserData({
//         email: data.email,
//         // name: data.name,
//         mobile: data.mobile

//       })
//     }
//   }, [data, isSuccess])

//   // Store User Data in Redux Store
 

//   return <>
//    <Sidebar/>
//     <CssBaseline />
//     <Grid container>
    
//       <Grid item >
//         <Typography variant='h5'>Email: {userData.email}</Typography>
//         <Typography variant='h6'>Mobile: {userData.mobile}</Typography>
//         <Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{ mt: 8 }}>Logout</Button>
//       </Grid>
      
  
//     </Grid>
//   </>;
// };

// export default Logout;