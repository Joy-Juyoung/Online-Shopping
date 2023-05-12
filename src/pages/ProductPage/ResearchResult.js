import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import axios from '../../api/axios';
import {
  ListMid,
  ListMidWrap,
  ListTop,
  ProductsList,
  ProductsListContainer,
  ProductsListWrapper,
  ProductsWrap,
  SelectWrap,
  TotalCount,
  TotalCountWrap,
} from './ProductListElements';
import ProductsCard from './ProductCard';
import Category from './Category';
import SideFilter from './SideFilter';


const sort = [
  { value: 'Newest', text: 'Newest first' },
  { value: 'Popular', text: 'Most Popular' },
  { value: 'HighToLow', text: 'Price: high to low' },
  { value: 'LowToHigh', text: 'Price: low to high' },
];


const ResearchResult = ({ meData, catData }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { pId } = useParams();
  const [selectOption, setSelectOption] = useState();
  const [sortList, setSortList] = useState([]);
  const [sortProducts, setSortProducts] = useState([]);
  const [addLiked, setAddLiked] = useState();

  const {searchValue} = useParams();

  console.log("searchValue",searchValue);

  const getItems = async () => {
    const itemsList = await axios.get('/products/', {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    // console.log('ProductList', itemsList?.data);
    setItems(itemsList?.data);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getItems();
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    getItems();
  }, [addLiked]);

  const handleOptionChange = (e) => {
    setSelectOption(e.target.value);
  };

 useEffect(() => {
    console.log('selectedOptionnnn', selectOption);
    // if (itemKinds.name === cName) {
    switch (selectOption) {
      case 'LowToHigh':
        const priceLToH = items.sort((a, b) => a.price - b.price);
        setSortList(priceLToH);
        // setSortProducts(...sortList);
        return setSortProducts(...sortList);
      case 'HighToLow':
        const priceHToL = items.sort((a, b) => b.price - a.price);
        setSortList(priceHToL);
        // setSortProducts(sortList);
        return setSortProducts(...sortList);
      case 'Newest':
        const uploadNewest = items.sort((a, b) => a.created_at - b.created_at);
        setSortList(uploadNewest);
        // setSortProducts(sortList);
        return setSortProducts(...sortList);
      default:
        return setSortList(sortProducts);
    }
    // }
  }, [selectOption, sortProducts]);
  
  const  filtered = !searchValue 
                      ? items 
                      : items.filter((list) =>             
                        list.name.toLowerCase()
                        .includes(searchValue.toLowerCase()) 
                        || list.detail.toLowerCase()
                        .includes(searchValue.toLowerCase())
                        //  list.name.toLowerCase().indexOf(searchValue) !== -1
                       // list.name.toLowerCase().match(searchValue)   
                      )

  // useEffect(() => {
  //   setItems(
  //     items.filter(list => list.name.indexOf(searchValue) == -1)
  //   );
  // }, [searchValue]);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <ProductsListContainer>
      <h1>Search results for "{searchValue}"</h1>
      <Category items={items} />
      <ProductsWrap>
        <SideFilter items={items} catData={catData} />
        <ProductsListWrapper>
          <ProductsList>
            <ListTop>
              <TotalCountWrap>
                <TotalCount style={{ fontSize: '13px' }}>
                  Total {items?.length}
                </TotalCount>
              </TotalCountWrap>
              <SelectWrap>
                <select
                  onChange={handleOptionChange}
                  name='category-list'
                  id='category-list'
                >
                  {sort.map((option, index) => (
                    <option key={index} value={option.value}>
                      {option.text}
                    </option>
                  ))}
                </select>
              </SelectWrap>
            </ListTop>

            <ListMidWrap>
              <ListMid>
                {/* {items?.map((all) => { */}
                {filtered?.map((all) => { 
                  return (
                    <ProductsCard
                      key={all.pk}
                      all={all}
                      meData={meData}
                      items={items}
                      // getAllKinds={getAllKinds}
                    />
                  );
                })}
              </ListMid>
            </ListMidWrap>
          </ProductsList>
        </ProductsListWrapper>
      </ProductsWrap>
    </ProductsListContainer>
  )
}

export default ResearchResult