import React, { useEffect, useState } from 'react'
import { AdCategoryForm, AdCategoryInput } from '../ItemManage/reviewStyle';
import AddIcon from '@mui/icons-material/Add';
import axios from '../../../api/axios';

const CategoryAddBtn = () => {  
    const [input, setInput] = useState("");

    const changeHandler = (e) => {
        setInput(e.target.value);
    };

    const submitHandler = async (e) => {
      e.preventDefault();
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
          window.location.reload();
      };

  return (
    <AdCategoryForm onSubmit={submitHandler}>
    <AdCategoryInput
      // id="form__input"
      type="text"
      onChange={changeHandler}
    />
    <button>
      <AddIcon/>
    </button>
  </AdCategoryForm>
  )
}

export default CategoryAddBtn;