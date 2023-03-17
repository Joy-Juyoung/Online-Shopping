import React, { useRef, useEffect, useState } from 'react';
import { Input } from '../../components/InputElements';
import { ButtonLarge } from '../../components/ButtonElements';
import {
  GobackLogin,
  RegisterForm,
  RegisterInput,
  RegisterInputLabel,
} from './RegisterElements';
import {
  PesnalContainer,
  PesnalWrapper,
  InputPassword,
  EyeIcon,
} from '../CommonElements';
import axios from '../../api/axios';
import { Link } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@material-ui/icons';

const REGISTER_URL = '/users/';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');
  const [pwdType, setPwdType] = useState('password');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(username);
    console.log(pwd);

    const response = await axios.post(
      REGISTER_URL,
      {
        username: username,
        password: pwd,
        type: 'user',
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('register', response?.data);

    setSuccess(true);

    setUsername('');
    setPwd('');
  };

  return (
    <PesnalContainer>
      {success ? (
        <PesnalWrapper>
          <h1>Success!</h1>
          <Link to='/login'>
            <ButtonLarge>Go to Sign In</ButtonLarge>
          </Link>
        </PesnalWrapper>
      ) : (
        <PesnalWrapper>
          <h1>Create Account</h1>
          <RegisterForm onSubmit={handleSubmit}>
            <RegisterInput>
              <RegisterInputLabel htmlFor='username'>
                Username
              </RegisterInputLabel>

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
                  aria-describedby='pwdnote'
                />
                <EyeIcon>
                  {pwdType === 'password' ? (
                    <VisibilityOff onClick={togglePwd} fontSize='small' />
                  ) : (
                    <Visibility onClick={togglePwd} fontSize='small' />
                  )}
                </EyeIcon>
              </InputPassword>
            </RegisterInput>

            <ButtonLarge>Submit</ButtonLarge>
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
