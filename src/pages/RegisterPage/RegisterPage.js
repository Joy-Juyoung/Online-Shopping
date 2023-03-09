import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/InputElements';
import { ButtonLarge } from '../../components/ButtonElements';
import {
  Agreements,
  EyeIcon,
  InputPassword,
  PesnalContainer,
  PesnalWrapper,
  RegisterInput,
  RegisterInputLabel,
} from '../StyledElements';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CheckIcon from '@material-ui/icons/Check';

const RegisterPage = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [rePasswordType, setRePasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [rePasswordInput, setRePasswordInput] = useState('');
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

  const handleRePasswordChange = (evnt) => {
    setRePasswordInput(evnt.target.value);
  };
  const toggleRePassword = () => {
    if (rePasswordType === 'password') {
      setRePasswordType('text');
      return;
    }
    setRePasswordType('password');
  };

  return (
    <PesnalContainer>
      <PesnalWrapper>
        Create Account
        <RegisterInput>
          <RegisterInputLabel>Email address</RegisterInputLabel>
          <Input placeholder='Enter your Email address.' />
          <RegisterInputLabel>Email address</RegisterInputLabel>
          <Input placeholder='Enter name' />
          <RegisterInputLabel>Email address</RegisterInputLabel>
          <InputPassword>
            <Input
              placeholder='Enter password'
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
          {/* Re-password와 Password가 동시에 동작함.  */}
          <InputPassword>
            <Input
              placeholder='Re-enter password'
              type={rePasswordType}
              onChange={handleRePasswordChange}
              value={rePasswordInput}
              name='password'
            />

            <EyeIcon>
              {rePasswordType === 'password' ? (
                <VisibilityOff onClick={toggleRePassword} fontSize='small' />
              ) : (
                <Visibility onClick={toggleRePassword} fontSize='small' />
              )}
            </EyeIcon>
          </InputPassword>
        </RegisterInput>
        <Agreements>
          <input type='checkbox' />I agree to all terms
          <div>
            <CheckIcon />I have read and agreed to he SHOP Terms & Conditions
            and Privacy Policy.
          </div>
          <div>
            <CheckIcon />I subscribe to advertising and marketing services
            (Optional.) Read more
          </div>
        </Agreements>
        {/* /confirm이 아니라 /register/{email-id} 이런식으로 진행하게 변경해야함 */}
        <Link to='/confirm'>
          <ButtonLarge>Next</ButtonLarge>
        </Link>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default RegisterPage;
