import React, { useState } from 'react';
import { ButtonLarge } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import {
  EyeIcon,
  InputPassword,
  InputWrap,
  LoginCheck,
  PesnalContainer,
  LoginOptions,
  LoginOptionsLegend,
  PesnalWrapper,
  RegisterLink,
} from '../StyledElements';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const LoginPage = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const handlePasswordChange = (evnt) => {
    setPasswordInput(evnt.target.value);
  };
  const togglePassword = () => {
    if (passwordType === 'password') {
      setPasswordType('text');
      return;
    }
    setPasswordType('password');
  };
  return (
    <PesnalContainer>
      <PesnalWrapper>
        <InputWrap>
          <Input placeholder='Enter your email address.' />
          <InputPassword>
            <Input
              placeholder='Enter password.'
              type={passwordType}
              onChange={handlePasswordChange}
              value={passwordInput}
              name='password'
            />
            <EyeIcon>
              {passwordType === 'password' ? (
                <VisibilityOff onClick={togglePassword} fontSize='small' />
              ) : (
                <Visibility onClick={togglePassword} fontSize='small' />
              )}
            </EyeIcon>
          </InputPassword>
        </InputWrap>
        <ButtonLarge
          borderColor={true}
          fontStrong={true}
          // style={{ backgroundColor: 'red' }}
        >
          Sign In
        </ButtonLarge>
        <LoginCheck>
          <div>
            <input type='checkbox' />
            Keep me signed in
          </div>
          <div>Forgot Your Password?</div>
        </LoginCheck>

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
    </PesnalContainer>
  );
};

export default LoginPage;
