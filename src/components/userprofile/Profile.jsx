import { CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice'
import { getToken, removeToken } from '../../services/LocalStorageService';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
import PhoneIcon from '@mui/icons-material/Phone';
const Profile = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ username: "", email: "", mobile: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  const [userData, setUserData] = useState({
    email: "",
    username: "",
    mobile: ""
  })
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        email: data.email,
        username: data.username,
        mobile: data.mobile,
      })
    }
  }, [data, isSuccess])
  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        email: data.email,
        username: data.username,
        mobile: data.mobile,
      }))
    }
  }, [data, isSuccess, dispatch])
  return <>
    {/* <Submenu/> */}
    <CssBaseline />
    <Grid style={{ textAlign: "center" }}>
      <Typography className='mb-2'><PersonIcon /> {userData.username}</Typography>
      < Typography className='mb-2'><EmailIcon /> {userData.email}</Typography>
      < Typography className='mb-2'><PhoneIcon /> {userData.mobile}</Typography>
    </Grid>
  </>;
};
export default Profile;