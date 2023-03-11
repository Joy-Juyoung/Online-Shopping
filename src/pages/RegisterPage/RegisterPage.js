import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Input } from '../../components/InputElements';
import { ButtonLarge } from '../../components/ButtonElements';
import {
  AgreeAll,
  AgreeAllCheckbox,
  AgreeContents,
  AgreeEach,
  Agreements,
  AgreementsWrap,
  RegisterInput,
  RegisterInputLabel,
} from './RegisterElements';
import {
  PesnalContainer,
  PesnalWrapper,
  EyeIcon,
  InputPassword,
} from '../CommonElements';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CheckIcon from '@material-ui/icons/Check';

// email, name, password validation 디테일하게 조건 설정하기
// next 누르면 email로 confirm 넘버 보내기
// agree버튼 All 또는 위에꺼 체크하면 다음으로가기
// policy랑 conditions 알아보기
// 체크아이콘에 클릭 이벤트 넣기

const RegisterPage = () => {
  const [passwordType, setPasswordType] = useState('password');
  const [rePasswordType, setRePasswordType] = useState('password');
  const [passwordInput, setPasswordInput] = useState('');
  const [rePasswordInput, setRePasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [isValid, setValid] = useState(false);

  const validStyle = { color: 'lightgrey' };
  const validStyleButton = {
    backgroundColor: 'lightgrey',
    border: 'lightgrey',
  };

  const validate = () => {
    return (
      emailInput.length &
      nameInput.length &
      passwordInput.length &
      rePasswordInput.length
    );
  };

  useEffect(() => {
    const isValid = validate();
    setValid(isValid);
  }, [emailInput, nameInput, passwordInput, rePasswordInput]);

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
          <Input
            type='email'
            onChange={(e) => setEmailInput(e.target.value)}
            value={emailInput}
            placeholder='Enter your Email address.'
          />
          <RegisterInputLabel>Name</RegisterInputLabel>
          <Input
            type='text'
            onChange={(e) => setNameInput(e.target.value)}
            value={nameInput}
            placeholder='Enter name'
          />
          <RegisterInputLabel>Password</RegisterInputLabel>
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
        <Agreements style={isValid ? {} : validStyle}>
          <AgreementsWrap>
            <AgreeAll>
              <AgreeAllCheckbox type='checkbox' disabled={!isValid} />
              <AgreeContents>I agree to all terms</AgreeContents>
            </AgreeAll>
            <AgreeEach>
              <button disabled={!isValid}>
                <CheckIcon fontSize='small' />
              </button>
              <AgreeContents>
                I have read and agreed to he SHOP Terms & Conditions and Privacy
                Policy.
              </AgreeContents>
            </AgreeEach>
            <AgreeEach>
              <button disabled={!isValid}>
                <CheckIcon fontSize='small' />
              </button>
              <AgreeContents>
                I subscribe to advertising and marketing services (Optional.)
                Read more
              </AgreeContents>
            </AgreeEach>
          </AgreementsWrap>
        </Agreements>
        <Link to='/register/:email'>
          <ButtonLarge
            disabled={!isValid}
            style={isValid ? {} : validStyleButton}
          >
            Next
          </ButtonLarge>
        </Link>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default RegisterPage;
