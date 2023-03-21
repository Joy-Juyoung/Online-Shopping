import React, { useEffect, useRef, useState } from 'react';
import { redirect } from 'react-router-dom';
import { ButtonLarge } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import {
  ErrorMsg,
  InputWrap,
  LoginCheck,
  LoginOptions,
  LoginOptionsLegend,
  RegisterLink,
  VerificationMsg,
} from './LoginElements';
import {
  PesnalContainer,
  PesnalWrapper,
  EyeIcon,
  InputPwd,
} from '../CommonElements';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';

// 다른 경로 로그인하는 방법 추가
// Validation 조건 충족 에러 넣기
// Keep~ Forgot~ 이거 나중에 활성화해보기

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LOGIN_URL = '/users/log-in';

const LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);

  const [pwd, setPwd] = useState('');
  const [pwdType, setPwdType] = useState('password');
  const [validPwd, setValidPwd] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

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

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(pwd);

    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg('Invalid Entry');
      return;
    }

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
    // } catch (err) {
    //   if (!err?.loginData) {
    //     setErrMsg('No Server Response');
    //   } else if (err.loginData?.status === 409) {
    //     setErrMsg('Username Taken');
    //   } else {
    //     setErrMsg('LOGIN FAILD');
    //   }
    //   errRef.current.focus();
    //   setSuccess(true);
    //   redirect('/login');

    //   setUsername(username);
    //   setPwd(pwd);
    // }

    if (loginData.data.error) {
      errRef.current.focus();
      setErrMsg('LOGIN FAILD');
    } else {
      setUsername(username);
      setPwd(pwd);
      setSuccess(true);
    }
  };

  return (
    <PesnalContainer>
      {success ? (
        <PesnalWrapper>
          <h1>Success!</h1>
        </PesnalWrapper>
      ) : (
        <PesnalWrapper>
          <ErrorMsg
            ref={errRef}
            style={{ display: errMsg ? 'block' : 'none' }}
            aria-live='assertive'
          >
            <ErrorOutlineIcon style={{ color: 'red' }} />
            <div>{errMsg}</div>
          </ErrorMsg>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <InputWrap>
              <Input
                ref={userRef}
                type='text'
                id='username'
                autoComplete='off'
                onChange={(e) => setUsername(e.target.value)}
                value={username}
                required
                aria-invalid={validUsername ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setUsernameFocus(true)}
                onBlur={() => setUsernameFocus(false)}
                placeholder='Enter username.'
              />
              <VerificationMsg
                id='uidnote'
                style={{
                  display: validUsername || !username ? 'none' : 'flex',
                  marginBottom: '20px',
                }}
              >
                <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                <span>
                  4 to 24 characters.Must begin with a letter. Letters, numbers,
                  underscores, hyphens allowed.
                </span>
              </VerificationMsg>
              <InputPwd>
                <Input
                  placeholder='Enter pwd.'
                  type={pwdType}
                  onChange={handlePwdChange}
                  value={pwd}
                  name='pwd'
                  required
                  aria-invalid={validPwd ? 'false' : 'flex'}
                  aria-describedby='pwdnote'
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <EyeIcon>
                  {pwdType === 'password' ? (
                    <VisibilityOff onClick={togglePwd} fontSize='small' />
                  ) : (
                    <Visibility onClick={togglePwd} fontSize='small' />
                  )}
                </EyeIcon>
              </InputPwd>
              <VerificationMsg
                id='pwdnote'
                style={{
                  display: validPwd || !pwd ? 'none' : 'flex',
                  marginBottom: '20px',
                }}
              >
                <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                <span>
                  8 to 24 characters. Must include uppercase and lowercase
                  letters, a number and a special character. Allowed special
                  characters: ! @ # $ %
                </span>
              </VerificationMsg>
            </InputWrap>
            <ButtonLarge
              borderColor={true}
              fontStrong={true}
              disabled={!validUsername || !validPwd ? true : false}
            >
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
