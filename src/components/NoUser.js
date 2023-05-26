import React from 'react';
import { Link } from 'react-router-dom';
import {
  NoUserModal,
  NoUserContents,
  NoUserTitle,
  NoUserText,
  NoUserBtn,
  NoUserContainer,
} from '../components/Header/HeaderElements';
import { ButtonSmall } from './ButtonElements';
import Modal from './Modal';

const NoUser = ({ toggleNoUserModal, noUserModalShown }) => {
  return (
    <Modal
      shown={noUserModalShown}
      close={() => {
        toggleNoUserModal(false);
      }}
    >
      <NoUserModal>
        <NoUserContainer>
          <NoUserContents>
            <NoUserTitle>Login Required</NoUserTitle>
            <NoUserText>
              In order to save favorite item, you need to login.
            </NoUserText>
            <NoUserText>Whould you like to login now or later?</NoUserText>
          </NoUserContents>
        </NoUserContainer>
      </NoUserModal>
      <NoUserBtn>
        <ButtonSmall
          onClick={() => {
            toggleNoUserModal(false);
          }}
        >
          Later
        </ButtonSmall>
        <Link to='/login' style={{ textDecoration: 'none' }}>
          <ButtonSmall
            style={{ background: '#0A0F18', color: '#fff' }}
            onClick={() => {
              toggleNoUserModal(false);
            }}
          >
            LOGIN NOW
          </ButtonSmall>
        </Link>
      </NoUserBtn>
    </Modal>
  );
};

export default NoUser;
