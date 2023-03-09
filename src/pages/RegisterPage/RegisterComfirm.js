import React from 'react';
import { ButtonLarge } from '../../components/ButtonElements';
import { Input } from '../../components/InputElements';
import { PesnalContainer, PesnalWrapper } from '../CommonElements';

// Confirm버튼은 verifcation code가 입력되면 활성화

const RegisterComfirm = () => {
  return (
    <PesnalContainer>
      <PesnalWrapper>
        Confirm Your Email Address
        <div>We sent the verification code to your email.</div>
        <div>
          {/* 앞에서 입력한 email 자동으로 입력 */}
          <div>email@gmai.com</div>
          <button>Edit</button>
          {/* Edit 누르면 이전 페이지로 돌아감. 이때 이전에 입려한 정보는 유지하기 */}
        </div>
        <div>
          <Input placeholder='Enter your verificaiton code.' />
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
