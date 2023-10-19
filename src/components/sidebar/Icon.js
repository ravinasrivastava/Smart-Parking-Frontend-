import React, { useState, useRef } from 'react';
import Overlay from 'react-bootstrap/Overlay';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { unSetUserToken } from '../../features/authSlice'
import { getToken, removeToken } from '../../services/LocalStorageService';
import { useGetLoggedUserQuery } from '../../services/userAuthApi';
import { setUserInfo, unsetUserInfo } from '../../features/userSlice';
export default function Icon() {
  const [show, setShow] = useState(false);
  const [target, setTarget] = useState(null);
  const ref = useRef(null);
  const handleClick = (event) => {
    setShow(!show);
    setTarget(event.target);
  };
  const handleLogout = () => {
    dispatch(unsetUserInfo({ email: "", mobile: "" }))
    dispatch(unSetUserToken({ access_token: null }))
    removeToken()
    navigate('/')
  }
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { access_token } = getToken()
  const { data, isSuccess } = useGetLoggedUserQuery(access_token)
  return (
    <div ref={ref}>
      <button type="button" class="btn btn-danger" onClick={handleLogout}>Logout</button>
      <Overlay
        show={show}
        target={target}
        placement="bottom"
        container={ref}
        containerPadding={20}
      >
      </Overlay>
    </div>
  );
}