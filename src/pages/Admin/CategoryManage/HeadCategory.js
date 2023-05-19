import React, { useEffect, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';
import axios from '../../../api/axios';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';

export const CategoryLists = styled.ul`
  display: flex;

  button { 
    background: none;
    border: none;
    margin-left:10px;
    cursor:pointer;
  }
`;


const HeadCategory = ({ meData}) => {
  const [me, setMe] = useState(null);
  const [catData, setCatData] = useState([]);
  const [input, setInput] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCatData(categoryData?.data);
    console.log('list', categoryData?.data);
  };
  useEffect(() => {
    setMe(meData)
    getCategory();
  }, [meData]);

const changeHandler = (e) => {
    setInput(e.target.value);
};
  console.log("input", input);

const handleInputChange = (e) => {
  if (e.target.id === 'name') {
    setInput(e.target.value);
  } 

};
const submitHandler = async () => {
  const addToCategory = await axios.post(
    '/products/add_parent_kind',
    {
      name: input,
    },
    {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    }
    );
    console.log('test', addToCategory.data);
};
  // console.log('me', meData);

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };


  return (
    <AdContainer>
      <h1>Head Categories</h1>
      <form onSubmit={submitHandler}>
        <input
          id="form__input"
          type="text"
          onChange={changeHandler}
        />
        <button>
          Add
        </button>
      </form>
      <div>
        {catData?.map((category) => {
          return (
            <CategoryLists key={category?.pk}>
            {!isEdit ? ( 
              <>           
                <li>{category?.name?.toUpperCase()}</li>
                <button 
                  onClick={handleEdit}
                > 
                  <EditIcon fontSize='small' color='primary'/>
                </button>
              </>
            ):(
              <>
                <input 
                  value={category?.name || ''} 
                  type='text'
                  // id='name'
                  // onChange={handleInputChange}
                />
                <button 
                  onClick={handleEdit}
                >
                  <SaveAltSharpIcon fontSize='small' color='primary'/>
                </button>
              </>
            )}
            </CategoryLists>

          )}
        )}
      </div>

    </AdContainer>
  );
};

export default HeadCategory;
