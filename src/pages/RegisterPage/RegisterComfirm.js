import React from 'react';
import { ButtonLarge } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import { PesnalContainer, PesnalWrapper } from '../StyledElements';

const RegisterComfirm = () => {
  return (
    <PesnalContainer>
      <PesnalWrapper>
        Confirm Your Email Address
        <div>We sent the verification code to your email.</div>
        <div>
          email@gmai.com
          <button>Edit</button>
          {/* Edit 누르면 이전 페이지로 돌아감 */}
        </div>
        <div>
          <Input placeholder='Enter your verificaiton code.' />
          <Input />
          <button>Resend</button>
        </div>
        <div>The verification code is vaild for 30 minutes.</div>
        <ButtonLarge>Confirm</ButtonLarge>
        {/* onClick -> 모달 Tanks you message & Continue shopping click -> 자동로그인 후 Home으로 */}
      </PesnalWrapper>
    </PesnalContainer>
  );
};

export default RegisterComfirm;
