import React, { useRef, useEffect, useState } from 'react';
import { Input } from '../../components/InputElements';
import { ButtonHover, ButtonLarge } from '../../components/ButtonElements';
import {
  ErrorMsg,
  GobackLogin,
  RegisterForm,
  RegisterInput,
  RegisterInputLabel,
  RegisterSuccessMsg,
  VerificationMsg,
} from './RegisterElements';
import {
  PesnalContainer,
  PesnalWrapper,
  InputPassword,
  EyeIcon,
} from '../CommonElements';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Visibility, VisibilityOff } from '@material-ui/icons';
import Loading from '../../components/Loading';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const REGISTER_URL = '/users/';

const RegisterPage = () => {
  const userRef = useRef();
  const errRef = useRef();
  const [loading, setLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  const [pwdType, setPwdType] = useState('password');
  const [matchPwdType, setMatchPwdType] = useState('password');

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

  const handleMatchPwdChange = (evnt) => {
    setMatchPwd(evnt.target.value);
  };
  const toggleMatchPwd = () => {
    if (matchPwdType === 'password') {
      setMatchPwdType('text');
      return;
    }
    setMatchPwdType('password');
  };

  useEffect(() => {
    userRef.current?.focus();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(email));
  }, [email]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg('');
  }, [username, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(pwd);
    console.log(matchPwd);

    const v1 = USERNAME_REGEX.test(username);
    const v2 = PWD_REGEX.test(pwd);
    const v3 = EMAIL_REGEX.test(email);
    if (!v1 || !v2 || !v3) {
      setErrMsg('Invalid Entry');
      return;
    }
    // try {
    setLoading(true);
    const response = await axios.post(
      REGISTER_URL,
      {
        username: username,
        email: email,
        password: pwd,
        type: 'user',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );

    console.log('register', response?.data);

    if (response?.data.error) {
      setLoading(false);
      setErrMsg('REGISTRATION FAILD');
      errRef.current?.focus();
    } else {
      setSuccess(true);
      setUsername('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <PesnalContainer>
      {success ? (
        <PesnalWrapper>
          <RegisterSuccessMsg>
            <div>
              <CheckCircleOutlineIcon color='success' sx={{ fontSize: 100 }} />
            </div>
            <h1>REGISTERATION SUCCESSFUL!</h1>
            <p>Congratulations, your account has been successfully created</p>
            <Link to='/login'>
              {/* <ButtonHover> Go to Sign In</ButtonHover> */}
              <ButtonLarge borderColor={true} fontStrong={true}>
                Go to Sign In
              </ButtonLarge>
            </Link>
          </RegisterSuccessMsg>
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
          <h1>Create Account</h1>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInput>
              <RegisterInputLabel htmlFor='username'>
                User ID
              </RegisterInputLabel>

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
                placeholder='Enter user Id.'
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

              <RegisterInputLabel htmlFor='email'>
                Email address
              </RegisterInputLabel>
              <Input
                // type='email'
                type='text'
                id='email'
                // ref={userRef}
                autoComplete='off'
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
                aria-invalid={validEmail ? 'false' : 'true'}
                aria-describedby='uidnote'
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
                placeholder='Enter your Email address.'
              />
              <VerificationMsg
                id='uidnote'
                style={{
                  display: validEmail || !email ? 'none' : 'flex',
                  marginBottom: '20px',
                }}
              >
                <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                <span>example@email.com</span>
              </VerificationMsg>

              <RegisterInputLabel htmlFor='password'>
                Password
              </RegisterInputLabel>

              <InputPassword>
                <Input
                  placeholder='Enter password'
                  type={pwdType}
                  id='password'
                  onChange={handlePwdChange}
                  value={pwd}
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
              </InputPassword>
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
              <RegisterInputLabel htmlFor='password2'>
                Confirm Password
              </RegisterInputLabel>

              <InputPassword>
                <Input
                  placeholder='Re-enter password'
                  type={matchPwdType}
                  id='password2'
                  onChange={handleMatchPwdChange}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? 'false' : 'true'}
                  aria-describedby='confirmnote'
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <EyeIcon>
                  {matchPwdType === 'password' ? (
                    <VisibilityOff onClick={toggleMatchPwd} fontSize='small' />
                  ) : (
                    <Visibility onClick={toggleMatchPwd} fontSize='small' />
                  )}
                </EyeIcon>
              </InputPassword>
              <VerificationMsg
                id='confirmnote'
                style={{
                  display: validMatch || !matchPwd ? 'none' : 'flex',
                  marginBottom: '20px',
                }}
              >
                <ErrorOutlineIcon fontSize='small' style={{ color: 'red' }} />
                <span>Must match the first password input field.</span>
              </VerificationMsg>
            </RegisterInput>

            <ButtonLarge
              disabled={
                !validUsername || !validPwd || !validMatch ? true : false
              }
            >
              Submit
            </ButtonLarge>
            <GobackLogin>
              <span>Already registered?</span>
              <Link to='/login'>Go to Sign In</Link>
            </GobackLogin>
          </RegisterForm>
        </PesnalWrapper>
      )}
    </PesnalContainer>
  );
};

export default RegisterPage;
