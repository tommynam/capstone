import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginFacebookThunk} from "../../services/actions/login";
import FacebookLogin from 'react-facebook-login';

function FaceBook([props]) {

  const dispatch = useDispatch();
  const responseFacebook = (userInfo) => {
    if (userInfo.accessToken) {
      dispatch(loginFacebookThunk(userInfo.accessToken));
    }
    return null;
  }

  return (
    <div class="container">
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID || ''}
        autoLoad={true}
        fields="name,email,picture"
        onClick={()=> {return null}}
        callback={responseFacebook}
      />
    </div>
  );
}

export default FaceBook;