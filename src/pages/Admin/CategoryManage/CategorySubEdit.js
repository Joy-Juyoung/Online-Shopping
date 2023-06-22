import React, { useState } from 'react'
import axios from '../../../api/axios';
import SaveAltSharpIcon from '@mui/icons-material/SaveAltSharp';

const CategorySubEdit = ({sub, upDateState, setUpDateChildState, setIsChildEdit}) => {
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleInput = (e) => {
        setNewCategoryName(e.target.value)
        console.log(e.target.value);
    }
    console.log("sub",sub);

    const handleUpdate = async() => {
             await axios.put(
            `/products/edit_child_kind/${sub?.pk}`,
            {
              parent_kind_id:upDateState,
              name: newCategoryName,
            },
            {
              headers: { 'Content-Type': 'application/json' },
              withCredentials: true,
            }
          );
          setIsChildEdit(false);
          setUpDateChildState(-1);
    }
console.log("upDateState",upDateState);
  return (
    <div>
        <input 
            type='text'
            name='name'
            value={newCategoryName || sub?.name}
            onChange={handleInput}
        />
        <button onClick={handleUpdate} > 
          <SaveAltSharpIcon fontSize='small'/> 
        </button>
    </div>
  )
}

export default CategorySubEdit;