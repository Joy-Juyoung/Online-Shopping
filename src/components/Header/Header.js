import React from 'react'
// import { Link } from 'react-router-dom';
import FlagIcon from '@mui/icons-material/Flag';
import { RightSide, LocationIcon,FavoriteIcon } from './HeaderElements';
import { Favorite } from '@material-ui/icons';
const Header = () => {
  return (
    <div>
        <RightSide>
            <LocationIcon>
                <FlagIcon fontSize='medium'/>
            </LocationIcon>
            <FavoriteIcon>
                <Favorite fontSize='medium'/>
            </FavoriteIcon>
        </RightSide>
        {/* <Link to='/confirm'>
          <p>1</p>
        </Link> */}
    </div>
  )
}

export default Header;