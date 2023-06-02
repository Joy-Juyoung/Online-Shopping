import React, { useEffect, useRef, useState } from 'react';
import { AdContainer } from '../AdminCommonElements';
import axios from '../../../api/axios';
import styled from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';

import {
  AdCategoryForm,
  AdCategoryInput,
  AdReviewBodyTr,
  AdReviewEmpty,
  AdReviewHeadTr,
  AdReviewHeader,
  AdReviewItemList,
  AdReviewLeftSide,
  AdReviewListWrap,
  AdReviewMidSide,
  AdReviewRightSide,
  AdReviewTable,
  AdReviewTbody,
  AdReviewTd,
  AdReviewTh,
  AdReviewThead,
  AdReviewWrap,
} from './CategoryElements';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import AddIcon from '@mui/icons-material/Add';
import ReplyIcon from '@mui/icons-material/Reply';
import CategoryAddBtn from './CategoryAddBtn';
import AdminModal from '../../../components/AdminComponents/AdminModal';
import CategoryHeadEdit from './CategoryHeadEdit';
import CategorySubEdit from './CategorySubEdit';


export const CategoryLists = styled.ul`
  display: flex;

  button {
    background: none;
    border: none;
    margin-left: 10px;
    cursor: pointer;
  }
`;

const CategoryManage = ({ meData }) => {
  const [me, setMe] = useState(null);
  const [catData, setCatData] = useState([]);
  const [addCate, setAddCate] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isChildEdit, setIsChildEdit] = useState(false);

  const [newList, setNewList] = useState();

  const [upDateState,setUpDateState] =  useState(-1);

  const [upDateChildState,setUpDateChildState] =  useState(-1);

  const [modalShown, toggleModal] = useState(false);
  const [addModalShown, toggleAddModal] = useState(false);


  const getCategory = async () => {
    const categoryData = await axios.get('/products/productAllParentsKinds', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setCatData(categoryData?.data);
    console.log('list', categoryData?.data);
  };

  useEffect(() => {
    setMe(meData);
    getCategory();
  }, [meData]);

  const changeAddHandler = (e) => {
    setAddCate(e.target.value);
  };

  const submitAddHandler = async (e) => {
    e.preventDefault();
    const addCategory = await axios.post(
      `/products/add_child_kind_to/${newList?.pk}`,
      {
        name: addCate,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log('test1', addCategory.data);
    window.location.reload();
  };

  const handleViewCategories = async (pk) => {
    setUpDateState(pk);
    const productReview = await axios.get(
      `/products/productAllParentsKinds/${pk}`,
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    console.log("pr",productReview?.data)
    setNewList(productReview?.data);
  };

  const handleEdit = (pk) => {
    setUpDateState(pk);
    setIsEdit(!isEdit);
  };

  const handleChildEdit = (pk) => {
    setUpDateChildState(pk);
    setIsChildEdit(!isChildEdit);
  };


  useEffect(() => {
    getCategory();
  }, [isEdit,isChildEdit]);

  return (
    <AdContainer>
      <h1>Categories</h1>
      <AdReviewWrap>
        <AdReviewLeftSide>
          <AdReviewHeader>
            <h2>Head Categories</h2>
            <CategoryAddBtn />
          </AdReviewHeader>
          <AdReviewItemList>
            <AdReviewListWrap>
              <AdReviewTable>
                <AdReviewThead>
                  <AdReviewHeadTr>
                    <AdReviewTh>HEAD CATEGORY NAME</AdReviewTh>
                  </AdReviewHeadTr>
                </AdReviewThead>
                <AdReviewTbody>
                  {catData?.sort((a,b) => a.pk-b.pk)
                  .map((category) => {
                    return (
                      <AdReviewBodyTr
                        key={category?.pk}                        
                        onClick={() => handleViewCategories(category?.pk)}
                        style={
                          category?.name === newList?.name
                            ? {
                                backgroundColor: '#ffcd6b',
                                padding: '3px 10px',
                              }
                            : {}
                        }
                      >      
                        <AdReviewTd>
                        {upDateState === category?.pk && isEdit ? (
                            <CategoryHeadEdit categorys={category} setUpDateState={setUpDateState} setIsEdit={setIsEdit} />
                          ):(
                            <div>
                              {category?.name?.toUpperCase()}
                                <button                      
                                  onClick={() => handleEdit(category?.pk)}
                                >
                                  <EditIcon fontSize='small' />
                                </button>
                            </div>
                          )}

                        </AdReviewTd>                        
                      </AdReviewBodyTr>
                    )
                  })}
                </AdReviewTbody>
              </AdReviewTable>
            </AdReviewListWrap>
          </AdReviewItemList>
        </AdReviewLeftSide>
        <AdReviewMidSide>
          <KeyboardDoubleArrowRightIcon />
        </AdReviewMidSide>
        <AdReviewRightSide>
          {newList === undefined ? (
            <>
              <AdReviewHeader>
                <h2>Sub Categories</h2>
              </AdReviewHeader>
              <AdReviewItemList>
                <AdReviewEmpty>
                  <ReplyIcon />
                  <p>Select a product</p>
                  <p>to view the review list</p>
                </AdReviewEmpty>
              </AdReviewItemList>
            </>
          ) : (
            <>
              <AdReviewHeader>
                <h2>Sub Categories</h2>
                <AdCategoryForm onSubmit={submitAddHandler}>
                  <AdCategoryInput
                    id='form__input'
                    type='text'
                    onChange={changeAddHandler}
                  />
                  <button>
                    <AddIcon />
                  </button>
                </AdCategoryForm>
              </AdReviewHeader>
              <AdReviewItemList>
                <AdReviewTable>
                  <AdReviewThead>
                    <AdReviewHeadTr>
                      <AdReviewTh>SUB CATEGORY NAME</AdReviewTh>
                    </AdReviewHeadTr>
                  </AdReviewThead>
                  <AdReviewTbody>
                    {newList?.productKinds?.map((sub) => {
                      return (
                        <AdReviewBodyTr key={sub?.pk}>
                          <AdReviewTd>
                          {upDateChildState === sub?.pk && isChildEdit ? (
                            <CategorySubEdit sub={sub} upDateState={upDateState} setUpDateChildState={setUpDateChildState} setIsChildEdit={setIsChildEdit}/>
                          ):(
                              <div>
                                {sub?.name?.toUpperCase()}
                                <button
                                  onClick={() => handleChildEdit(sub?.pk)}
                                >
                                  <EditIcon fontSize='small' />
                                </button>
                              </div>
                            )}
                          </AdReviewTd>
                        </AdReviewBodyTr>
                      );
                    })}
                  </AdReviewTbody>
                </AdReviewTable>
              </AdReviewItemList>
            </>
          )}
        </AdReviewRightSide>
      </AdReviewWrap>
    </AdContainer>
  );
};

export default CategoryManage;
