import React from 'react';
import NaverLogin from '../../../utils/NAVERAuth';

function Login() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  return (
    <>
      <a href={KAKAO_AUTH_URL}>Kakao Login</a>
      <NaverLogin />
    </>
  );
}

export default Login;
