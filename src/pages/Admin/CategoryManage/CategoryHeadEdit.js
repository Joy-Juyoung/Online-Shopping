import React, { useState } from 'react'
import axios from '../../../api/axios';
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';

const CategoryHeadEdit = ({categorys, setUpDateState,setIsEdit}) => {
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleInput = (e) => {
        // const newList = catData.map((li) => {
        //     li.pk === categorys.pk ? {...li, [e.target.name]:e.target.value} : li
        // })
        // setCatData(newList);
        setNewCategoryName(e.target.value)
        console.log(e.target.value);
    }
    console.log("categorys",categorys);

    const handleUpdate = async() => {
             await axios.put(
            `/products/edit_parent_kind/${categorys?.pk}`,
            {
              name: newCategoryName,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          );
          setIsEdit(false);
          setUpDateState(-1);
    }

  return (
    <div>
        <input 
            type='text'
            name='name'
            value={newCategoryName || categorys.name}
            onChange={handleInput}
        />
        <button onClick={handleUpdate} > 
          <SaveAltSharpIcon fontSize='small'/> 
        </button>
    </div>
  )
}

export default CategoryHeadEdit;