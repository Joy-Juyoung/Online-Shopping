import React, { useEffect, useState } from 'react';
import { ButtonLarge } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import {
  InputWrap,
  LoginCheck,
  LoginOptions,
  LoginOptionsLegend,
  RegisterLink,
} from './LoginElements';
import {
  PesnalContainer,
  PesnalWrapper,
  EyeIcon,
  InputPwd,
} from '../CommonElements';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

// 다른 경로 로그인하는 방법 추가
// Validation 조건 충족 에러 넣기
// Keep~ Forgot~ 이거 나중에 활성화해보기

const LOGIN_URL = '/users/log-in';

const LoginPage = () => {
  const [success, setSuccess] = useState(false);
  const [pwdType, setPwdType] = useState('password');
  const [pwd, setPwd] = useState('');
  const [username, setUsername] = useState('');

  const handlePwdChange = (evnt) => {
    setPwd(evnt.target.value);
  };
  const togglePwd = () => {
    if (pwdType === 'password') {
      setPwdType('text');
      return;
    }
    setPwdType('password');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(pwd);

    // try {
    const loginData = await axios.post(
      LOGIN_URL,
      {
        username: username,
        password: pwd,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('loginData', loginData?.data);

    // setSuccess(true);

    // Error 추가
    // } catch (err) {
    // }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, []);

  return (
    <PesnalContainer>
      {success ? (
        <PesnalWrapper>
          <h1>Success!</h1>
        </PesnalWrapper>
      ) : (
        <PesnalWrapper>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrap>
              <Input
                type='text'
                id='username'
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                aria-describedby='uidnote'
                placeholder='Enter username.'
              />
              <InputPwd>
                <Input
                  placeholder='Enter pwd.'
                  type={pwdType}
                  onChange={handlePwdChange}
                  value={pwd}
                  name='pwd'
                />
                <EyeIcon>
                  {pwdType === 'password' ? (
                    <VisibilityOff onClick={togglePwd} fontSize='small' />
                  ) : (
                    <Visibility onClick={togglePwd} fontSize='small' />
                  )}
                </EyeIcon>
              </InputPwd>
            </InputWrap>
            <ButtonLarge borderColor={true} fontStrong={true}>
              Sign In
            </ButtonLarge>
            <LoginCheck>
              <div>
                <input type='checkbox' />
                Keep me signed in
              </div>
              <div>Forgot Your pwd?</div>
            </LoginCheck>
          </form>

          <LoginOptions>
            <LoginOptionsLegend>OR</LoginOptionsLegend>
            <ButtonLarge lightBg={true} darkFont={true}>
              Countinue with Google
            </ButtonLarge>
            <ButtonLarge lightBg={true} darkFont={true}>
              Countinue with Apple
            </ButtonLarge>
            <ButtonLarge lightBg={true} darkFont={true}>
              Countinue with Facebook
            </ButtonLarge>
          </LoginOptions>

          <RegisterLink to='/register'>Register</RegisterLink>
        </PesnalWrapper>
      )}
    </PesnalContainer>
  );
};

export default LoginPage;
