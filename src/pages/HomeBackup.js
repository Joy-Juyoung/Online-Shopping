import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from './CommonElements';

import HelpCenterPage from './HelpCenterPage/HelpCenter';

const HomeBackup = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path='/helpcenter' element={<HelpCenterPage />} exact={true} />
        </Routes>
      </Container>
    </>
  );
};

export default HomeBackup;
