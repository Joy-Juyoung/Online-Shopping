import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <Link to='/login'>
        <div>Header</div>
      </Link>
    </div>
  );
};

export default Header;
