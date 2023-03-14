import React, { useRef, useEffect, useState } from 'react';
import { Input } from '../../components/InputElements';
import { ButtonLarge } from '../../components/ButtonElements';
import {
  ErrorMsg,
  GobackLogin,
  RegisterForm,
  RegisterInput,
  RegisterInputLabel,
  VerificationMsg,
} from './RegisterElements';
import {
  PesnalContainer,
  PesnalWrapper,
  InputPassword,
} from '../CommonElements';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

// const EMAIL_REGEX = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const USERNAME_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/users/log-in';
// const PRODUCTS_URL = '/products';

const TestRegister = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [username, setUsername] = useState('');
  const [validUsername, setValidUsername] = useState(false);
  const [usernameFocus, setUsernameFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  // useEffect(() => {
  //   userRef.current.focus();
  // }, []);

  useEffect(() => {
    setValidUsername(USERNAME_REGEX.test(username));
  }, [username]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
  }, [pwd]);

  // useEffect(() => {
  //   setErrMsg('');
  // }, [email, username, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(pwd);

    const response = await axios.post(
      REGISTER_URL,
      {
        username: 'juyoung',
        password: '1234',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        // 유저인증 토큰 쿠키를 자동으로 보내줌 Django라서 ...
        withCredentials: true,
      }
    );

    console.log('login', response?.data);

    setUsername('');
    setPwd('');
  };

  return (
    <PesnalContainer>
      <PesnalWrapper>
        <h1>Create Account</h1>
        <RegisterForm onSubmit={handleSubmit}>
          <RegisterInput>
            <RegisterInputLabel htmlFor='username'>Username</RegisterInputLabel>

            <Input
              type='text'
              id='username'
              // ref={userRef}
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
            <RegisterInputLabel htmlFor='password'>Password</RegisterInputLabel>

            <InputPassword>
              <Input
                placeholder='Enter password'
                type='password'
                id='password'
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? 'false' : 'flex'}
                aria-describedby='pwdnote'
                onFocus={() => setPwdFocus(true)}
                onBlur={() => setPwdFocus(false)}
              />
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
          </RegisterInput>

          <ButtonLarge>Submit</ButtonLarge>
          <GobackLogin>
            <span>Already registered?</span>
            <Link to='/login'>Go to Sign In</Link>
          </GobackLogin>
        </RegisterForm>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default TestRegister;
