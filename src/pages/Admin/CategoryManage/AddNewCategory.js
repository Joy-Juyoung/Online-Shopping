import React, { useState } from 'react'

const AddNewCategory = ({cate},setCate) => {

    const [isEdit, setIsEdit] = useState(false);

    const handleEditChange = (e) => {
        setCate(e.target.value);
      };
    

  return (
    <div>
        <form>
        <input 
            type='text'
            value={cate?.name || ''}
            onChange={handleEditChange}
        />
        <button>save</button>
        <button onClick={() => setIsEdit(false)}>cancel</button>
        </form>
    </div>
  )
}

export default AddNewCategory