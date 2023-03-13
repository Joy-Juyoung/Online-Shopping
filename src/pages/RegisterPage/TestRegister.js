import React, { useEffect, useState } from 'react';
import { Input } from '../../components/InputElements';
import { ButtonLarge } from '../../components/ButtonElements';
import { RegisterInput, RegisterInputLabel } from './RegisterElements';
import {
  PesnalContainer,
  PesnalWrapper,
  InputPassword,
} from '../CommonElements';

const TestRegister = () => {
  const [emailInput, setEmailInput] = useState('');
  const [nameInput, setNameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  return (
    <PesnalContainer>
      <PesnalWrapper>
        <h3>Create Account</h3>
        <form>
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
                type='password'
                onChange={(e) => setPasswordInput(e.target.value)}
                value={passwordInput}
                name='password'
              />
            </InputPassword>
          </RegisterInput>
          <ButtonLarge>Next</ButtonLarge>
        </form>
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default TestRegister;
