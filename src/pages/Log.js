import { CssBaseline, Grid, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../features/authSlice'
import { getToken, removeToken } from '../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../services/userAuthApi';
import { useEffect, useState } from 'react';
import { setUserInfo, unsetUserInfo } from '../features/userSlice';
const Log = () => {
  const handleLogout = () => {
    dispatch(unsetUserInfo({ username: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/login')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  const [userData, setUserData] = useState({
    username: ""
  })
  // Store User Data in Local State
  useEffect(() => {
    if (data && isSuccess) {
      setUserData({
        username: data.username,
      })
    }
  }, [data, isSuccess])
  // Store User Data in Redux Store
  useEffect(() => {
    if (data && isSuccess) {
      dispatch(setUserInfo({
        username: data.username
      }))
    }
  }, [data, isSuccess, dispatch])
  return <>
    {/* <SubMenu/> */}
    <CssBaseline />
    <Grid container>
      <Typography variant='h6'>hello {userData.username}</Typography>
    </Grid>
  </>;
};
export default Log;