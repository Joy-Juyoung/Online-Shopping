import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import axios from '../../../api/axios';
import { ButtonUtils } from '../../../components/ButtonElements';

const Dropbtn = styled.div`
  /* position: relative;
  font-size: 14px; */
  margin-top: -20px;
  display: flex;
  justify-content: flex-end;
`;

const DropWrap = styled.div`
  position: relative;
  font-size: 14px;
  /* margin-top: -40px; */
  /* display: flex; */
`;

const Dropdown = styled.div`
  cursor: pointer;
  /* background: #efeae1; */
  border: 1px solid #21201e;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 150px;
  padding: 3px 5px;
  position: relative;
  span {
  }

  svg {
    display: flex;
    align-items: center;
  }
`;

const DropdownWrap = styled.div`
  display: flex;
  align-items: center;
  /* position: absolute; */

  button {
    margin-left: 10px;
  }
`;

const DropdownContent = styled.ul`
  position: absolute;
  list-style-type: none;
  /* margin: 5px 0; */
  padding: 0;
  width: 150px;
  /* border: 1px solid #21201e; */
  border-radius: 10px;

  li {
    margin: 0;
    background: #efeae1;
    padding: 5px;

    &:hover {
      background-color: lightgray;
    }

    span {
      width: 100%;
      height: 100%;
      text-align: left;
      /* padding: 5px; */

      background: none;
      color: inherit;
      border: none;
      margin: 0;
      font: inherit;
      cursor: pointer;
    }
  }
`;

const DropStatus = ({
  // statusOptionData,
  orderById,
  isDrop,
  setIsDrop,
}) => {
  // const [isDrop, setIsDrop] = useState(false);
  const [selectedOption, setSelectedOption] = useState();

  const statusOptionData = ['pending', 'inprogress', 'delivered', 'cancelled'];

  const handleDropdown = () => {
    setIsDrop(!isDrop);
    // console.log('isDrop', isDrop);
  };

  const handelStatusOption = async (option) => {
    setIsDrop(false);
    console.log('option', option);
    setSelectedOption(option);
  };

  const handelUpdateOption = async (pk) => {
    console.log('pk', pk);
    console.log('selectedOption', selectedOption);
    try {
      const statusChange = await axios.put(
        `/orders/${pk}`,
        {
          status: selectedOption,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      console.log('statusChange', statusChange?.data);
      window.location.reload();
    } catch (err) {
      if (err.response?.status === 400) {
      } else {
        console.log('Error page or empty page');
      }
    }
  };

  return (
    <Dropbtn>
      <DropWrap>
        <DropdownWrap>
          <Dropdown onClick={handleDropdown}>
            {selectedOption ? (
              <span>{selectedOption}</span>
            ) : (
              <span>{orderById?.status}</span>
            )}
            {isDrop ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </Dropdown>
          <ButtonUtils
            onClick={() => handelUpdateOption(orderById?.pk)}
            style={{ background: '#21201E', color: '#fff' }}
          >
            Update Status
          </ButtonUtils>
        </DropdownWrap>
        {isDrop ? (
          <DropdownContent>
            {statusOptionData?.map((optionData, index) => {
              return (
                <li key={index}>
                  <span onClick={() => handelStatusOption(optionData)}>
                    {optionData}
                  </span>
                </li>
              );
            })}
          </DropdownContent>
        ) : null}
      </DropWrap>
    </Dropbtn>
  );
};

export default DropStatus;
