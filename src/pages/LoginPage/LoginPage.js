import React, { useEffect, useRef, useState } from 'react';
// import { redirect } from 'react-router-dom';
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

import { useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { GoogleLogin } from 'react-google-login';

// 다른 경로 로그인하는 방법 추가
// Validation 조건 충족 에러 넣기
// Keep~ Forgot~ 이거 나중에 활성화해보기

// const GOOGLE_CLIENT_ID =
//   '232888623547-a7ji95besadd8bfain3pemtdovstl9ij.apps.googleusercontent.com';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const LOGIN_URL = '/users/log-in';

const LoginPage = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);

  const [pwd, setPwd] = useState('');
  const [pwdType, setPwdType] = useState('password');
  const [validPwd, setValidPwd] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

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
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
    setLoading(true);
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
    // setUsername(username);
    // setPwd(pwd);
    // setLoginSuccess(true);
    // navigate('/');
    // window.location.reload();

    // } catch (error) {
    // setLoading(false);
    //   console.log('error', error);
    //   errRef.current.focus();
    //   setErrMsg('LOGIN FAILD');
    // }
    if (loginData.data.error) {
      setLoading(false);
      setErrMsg(
        'Login faild! Please recheck the username and password and try again'
      );
      errRef.current.focus();
    } else {
      setUsername(username);
      setPwd(pwd);
      setLoginSuccess(true);
      navigate('/');
      window.location.reload('/');
      setLoading(false);
    }
  };
  // console.log('username', username);
  // const isLoggIn = useSelector((state) => state.auth.isLoggIn);
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PesnalContainer>
      {/* {isLoggIn ? (
        <PesnalWrapper>
          <h1>Welcom Username</h1>

          <button>Logout</button>
        </PesnalWrapper>
      ) : ( */}
      <PesnalWrapper>
        <h1>Sign In</h1>
        <ErrorMsg
          ref={errRef}
          style={{ display: errMsg ? 'block' : 'none' }}
          aria-live='assertive'
        >
          {/* <ErrorOutlineIcon style={{ color: 'red' }} /> */}
          <div>{errMsg}</div>
        </ErrorMsg>
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
              placeholder='Enter user id.'
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
            {/* <GoogleLogin
              clientId={GOOGLE_CLIENT_ID}
              buttonText='Login'
              // onSuccess={onSuccess}
              // onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
              style={{ marginTop: '100px' }}
              isSignedIn={true}
            /> */}
          </ButtonLarge>
          <ButtonLarge lightBg={true} darkFont={true}>
            Countinue with Apple
          </ButtonLarge>
          <ButtonLarge lightBg={true} darkFont={true}>
            Countinue with Facebook
          </ButtonLarge>
        </LoginOptions>

        <RegisterLink to='/register'>Go to Sign up</RegisterLink>
      </PesnalWrapper>
      {/* )} */}
    </PesnalContainer>
  );
};

export default LoginPage;
