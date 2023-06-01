import React, { useEffect, useRef, useState } from 'react';
import axios from '../../api/axios';
import {
  DetailContainer,
  DetailWrapperOne,
  DetailLeftInfo,
  DetailRightInfo,
  DetailRightInfoTop,
  DetailName,
  DetailProductName,
  DetailTitle,
  DetailPrice,
  DetailCoupon,
  DetailRightInfoBottom,
  LikeBtnWrapper,
  LikeBtn,
  ButtonLarges,
  DetailWrapperTwo,
  DetailInfoWrap,
  DetailInfoList,
  InfoListDetail,
  InfoListDetailTwo,
  ListDetailBtn,
  DetailDescription,
  DescriptionList,
  DescriptionListDetail,
  ListDetailBody,
  DetailBodyOne,
  DetailBodyTwo,
  ButtonLargeWrap,
  DetailBodyThree,
  ReviewListDetail,
  ReviewListOne,
  ReviewListTwo,
  ReviewListThree,
  ListOneLink,
  ListOneAvatar,
  ListOneName,
  RatingWrap,
  StyledRating,
  ReviewListFour,
  ReviewDeleteBtn,
  ReviewEditBtn,
  DetailStock,
} from './ProductDetailElements';

import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import { Link, useParams } from 'react-router-dom';
import SizeImage from '../../asset/size.png';
import AddToCart from './AddToCart';
import Loading from '../../components/Loading';
import DetailSlider from './DetailSlider';
import Skeleton from '@mui/material/Skeleton';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import Modal from '../../components/Modal';
import { ButtonSmall } from '../../components/ButtonElements';
import NoUser from '../../components/NoUser';

const SHIPPING_RETURN_URL = '/settings/all';
const REVIEWS_URL = '/reviews/';

const ProductDetailPage = ({
  all,
  meData,
  itemAllKinds,
  itemKinds,
  wishItems,
  setIsCount,
}) => {
  const [itemsDetail, setItemsDetail] = useState([]);
  const { id } = useParams();
  const [addLiked, setAddLiked] = useState();
  const [loading, setLoading] = useState(false);
  const [loadings, setLoadings] = useState(true);
  const ref = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [shipReturn, setShipReturn] = useState([]);
  const [description, setDescription] = useState(true);
  const [size, setSize] = useState(false);
  const [shippingReturn, setShippingReturn] = useState(false);
  const [reviews, setReviews] = useState(false);
  const [noUserModalShown, toggleNoUserModal] = useState(false);

  const [changeReviews, setChangeReviews] = useState('');
  const [payload, setPayload] = useState('');
  const [rating, setRating] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const [fav, setFav] = useState(false);
  const [slideIndex, setSlideIndex] = useState([]);

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    setChangeReviews(itemsDetail.reviews);
    setRating(itemsDetail?.reviews?.rating);
    setPayload(itemsDetail?.reviews?.payload);
  }, [itemsDetail.reviews]);

  const handleInputChange = (e) => {
    // console.log('name', e.target.value);
    var tempChangeReviews = changeReviews;

    if (e.target.id === 'rating') {
      setRating(e.target.value);
    }
    if (e.target.id === 'payload') {
      setPayload(e.target.value);
    }
    setChangeReviews(tempChangeReviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isEdit) {
      handleEdit();
    } else {
      const reviewsInfo = await axios.put(
        `/reviews/${id}`,
        {
          payload: payload,
          rating: rating,
        },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      );
      setChangeReviews(reviewsInfo?.data);
      // console.log('reviewsInfo', reviewsInfo?.data);

      setIsEdit(false);
    }
  };

  const handleEdit = () => {
    if (!isEdit) {
      setIsEdit(true);
    } else {
      setIsEdit(false);
    }
  };
  // console.log('me', meData);

  const getProduct = async () => {
    const { data } = await axios.get(`/products/${id}`, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });

    setSlideIndex(data);
    setItemsDetail(data);
  };
  useEffect(() => {
    getProduct();
  }, [addLiked]);

  useEffect(() => {
    setFav(itemsDetail?.is_liked);
    setIsCount(false);
  }, []);

  // console.log('me', meData);

  const getShipReturn = async () => {
    const shipData = await axios.get(SHIPPING_RETURN_URL, {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    });
    setShipReturn(shipData?.data);
  };

  const handleDeleteReview = async (pk) => {
    alert('Are you sure you want to remove the reviews?');
    var tempReviews = itemsDetail.reviews;
    tempReviews.forEach((c) => {
      // console.log('c', c);
      if (c.pk === pk) {
        axios.delete(`/reviews/${c.pk}`, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        });
      }
    });
    window.location.reload(`/products/${id}`);
  };

  useEffect(() => {
    getShipReturn();
  }, []);

  const ShowDescription = () => {
    if (description === false) {
      setDescription(true);
      setSize(false);
      setShippingReturn(false);
      setReviews(false);
    } else {
      setDescription(false);
      setSize(false);
      setShippingReturn(false);
      setReviews(false);
    }
  };
  const ShowSize = () => {
    if (size === true) {
      setSize(false);
      setDescription(false);
      setShippingReturn(false);
      setReviews(false);
    } else {
      setSize(true);
      setDescription(false);
      setShippingReturn(false);
      setReviews(false);
    }
  };
  const ShowShippingReturn = () => {
    if (shippingReturn === true) {
      setShippingReturn(false);
      setSize(false);
      setDescription(false);
      setReviews(false);
    } else {
      setShippingReturn(true);
      setSize(false);
      setDescription(false);
      setReviews(false);
    }
  };
  const ShowReviews = () => {
    if (reviews === true) {
      setShippingReturn(false);
      setSize(false);
      setDescription(false);
      setReviews(false);
    } else {
      setReviews(true);
      setShippingReturn(false);
      setSize(false);
      setDescription(false);
    }
  };

  const handleLiked = () => {
    // itemsDetail.is_liked = !itemsDetail.is_Liked;
    setFav(!fav);
    const addLike = axios.put(
      '/wishlists/',
      {
        product_pk: itemsDetail.id,
      },
      {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
    );
    setAddLiked(addLike);
    setItemsDetail(itemsDetail);
  };

  const SuccessNotify = ({ text }) => (
    <div>
      <p className='text'>{text}</p>
      {/* <button className="button1" onClick={() => toast.dismiss()}>Ok!</button> */}
    </div>
  );
  const showCustomToast = () => {
    toast.success(<SuccessNotify text='Success' />);
  };
  const handleSuccess = () => {
    setIsSuccess(true);
    showCustomToast();
  };

  // console.log('isSuccess', isSuccess);

  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      if (isOpen && ref.current && !ref.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', checkIfClickedOutside);
    return () => {
      document.removeEventListener('click', checkIfClickedOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoadings(false);
    }, 680);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );

  return (
    <DetailContainer>
      <DetailWrapperOne>
        <DetailSlider slideIndex={slideIndex} />
        <DetailRightInfo>
          <DetailRightInfoTop>
            <DetailName>
              {loadings ? (
                <Skeleton variant='rect' duration={2} width={450} height={60} />
              ) : (
                <>{itemsDetail.name}</>
              )}
            </DetailName>
            <DetailProductName>
              <DetailTitle>
                {loadings ? (
                  <Skeleton variant='rect' width={450} height={30} />
                ) : (
                  <>{itemsDetail.detail}</>
                )}
              </DetailTitle>
              <DetailPrice>
                {loadings ? (
                  <Skeleton variant='rect' width={450} height={40} />
                ) : (
                  <>${itemsDetail.price}</>
                )}
              </DetailPrice>
              {loadings ? (
                <Skeleton variant='rect' width={450} height={50} />
              ) : (
                <DetailCoupon>
                  <p>
                    Shop on our App and Enjoy 10% off
                    <br />
                    Use code
                    <strong>APPFW22</strong>
                  </p>
                </DetailCoupon>
              )}
              <DetailStock>
                InStock: {itemsDetail?.in_stock?.toLocaleString()}
              </DetailStock>
            </DetailProductName>
          </DetailRightInfoTop>
          <DetailRightInfoBottom>
            <LikeBtnWrapper>
              {meData === undefined ? (
                <LikeBtn
                  onClick={() => {
                    toggleNoUserModal(!noUserModalShown);
                  }}
                >
                  <FavoriteIcon sx={{ color: '#B1B1B1' }} />
                </LikeBtn>
              ) : (
                <LikeBtn
                  onClick={(e) => {
                    handleLiked();
                  }}
                >
                  {fav ? (
                    <FavoriteIcon sx={{ color: '#e20000' }} />
                  ) : (
                    <FavoriteIcon sx={{ color: '#B1B1B1' }} />
                  )}
                </LikeBtn>
              )}
            </LikeBtnWrapper>

            <NoUser
              noUserModalShown={noUserModalShown}
              toggleNoUserModal={toggleNoUserModal}
            />

            {itemsDetail?.in_stock === 0 ? (
              <ButtonLarges style={{ background: 'gray' }} disabled>
                Sold out
              </ButtonLarges>
            ) : (
              // <ButtonLarges onClick={showCustomToast}>
              <ButtonLarges onClick={() => setIsOpen(true)}>
                Add to Cart
              </ButtonLarges>
            )}
            {isOpen && (
              <AddToCart
                // setIsSuccess={setIsSuccess}
                // onClose={!isOpen}
                onSuccess={handleSuccess}
                setIsCount={setIsCount}
                onClose={() => setIsOpen(false)}
                meData={meData}
              />
            )}
            {isSuccess && (
              <ToastContainer
                transition={Zoom}
                autoClose={1000}
                hideProgressBar={false}
                closeOnClick={true}
                limit={1}
                theme='dark' // light, dark, colored
                pauseOnHover={true}
                // pauseOnFocusLoss={true}
                // icon={} // true or false
                position='top-center'
              />
            )}
          </DetailRightInfoBottom>
        </DetailRightInfo>
      </DetailWrapperOne>
      <DetailWrapperTwo>
        <DetailInfoWrap>
          <DetailInfoList>
            <InfoListDetail>
              <ListDetailBtn onClick={ShowDescription}>
                <span>DESCRIPTION</span>
              </ListDetailBtn>
              {description && (
                <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <span>
                            * Composition : 97% cotton and 3% ployurethane
                          </span>
                        </DetailBodyOne>
                        <DetailBodyTwo>
                          <span>* Color : Red</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>* Country of origin : South Korea</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>* Product No : 123455</span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>
                            * For more information, click DETAIL IMAGES
                          </span>
                        </DetailBodyTwo>
                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
              )}
            </InfoListDetail>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowSize}>
                <span>SIZE GUIDE</span>
              </ListDetailBtn>
              {size && (
                <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <img src={SizeImage} />
                        </DetailBodyOne>
                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
              )}
            </InfoListDetailTwo>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowShippingReturn}>
                <span>SHIPPING & RETURNS</span>
              </ListDetailBtn>
              {shippingReturn && (
                <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <ListDetailBody>
                        <DetailBodyOne>
                          <span>
                            <strong> * Shipping : </strong>
                            <br />
                            <p>{shipReturn.shipping_description}</p>
                          </span>
                        </DetailBodyOne>
                        <DetailBodyTwo>
                          <span>
                            <strong>* Duties and taxes : </strong>
                            <br />
                            <p>{shipReturn.duties_and_taxes} </p>
                          </span>
                        </DetailBodyTwo>
                        <DetailBodyTwo>
                          <span>
                            <strong>* Returns and refunds : </strong>
                            <br />
                            <p>{shipReturn.returns_and_refunds}</p>
                          </span>
                        </DetailBodyTwo>
                      </ListDetailBody>
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
              )}
            </InfoListDetailTwo>
            <InfoListDetailTwo>
              <ListDetailBtn onClick={ShowReviews}>
                <span>REVIEWS</span>
              </ListDetailBtn>
              {reviews && (
                <DetailDescription>
                  <DescriptionList>
                    <DescriptionListDetail>
                      <h2>Reviews</h2>

                      {itemsDetail.reviews.length === 0 ? (
                        <ReviewListDetail>
                          <p>This product has no reviews.</p>
                        </ReviewListDetail>
                      ) : (
                        <>
                          {itemsDetail?.reviews?.map((i) => {
                            return (
                              <form onSubmit={handleSubmit}>
                                <>
                                  {!isEdit ? (
                                    <ReviewListDetail key={i.pk}>
                                      <ReviewListOne>
                                        <ListOneLink>
                                          <ListOneAvatar>
                                            <Avatar
                                              sx={{ width: 30, height: 30 }}
                                            >
                                              C
                                            </Avatar>
                                          </ListOneAvatar>
                                          <ListOneName>
                                            <span>{i?.user?.username}</span>
                                          </ListOneName>
                                        </ListOneLink>
                                        {i?.user?.username ===
                                          meData?.username && (
                                          <>
                                            <ReviewEditBtn to={`/review/${id}`}>
                                              <EditIcon
                                                fontSize='small'
                                                color='primary'
                                              />
                                            </ReviewEditBtn>
                                            <ReviewDeleteBtn>
                                              <DeleteIcon
                                                fontSize='small'
                                                color='primary'
                                                onClick={(e) => {
                                                  e.preventDefault();
                                                  handleDeleteReview(i.pk);
                                                }}
                                              />
                                            </ReviewDeleteBtn>
                                          </>
                                        )}
                                      </ReviewListOne>
                                      <ReviewListTwo>
                                        <StyledRating
                                          size='medium'
                                          value={
                                            itemsDetail?.reviews?.[0].rating
                                          }
                                          readOnly
                                        />
                                        <RatingWrap>
                                          <span>
                                            <strong>{itemsDetail?.name}</strong>
                                          </span>
                                        </RatingWrap>
                                      </ReviewListTwo>
                                      <ReviewListFour>
                                        <span>Reviewed on April 16, 2023</span>
                                      </ReviewListFour>
                                      <ReviewListThree>
                                        <span>
                                          {itemsDetail?.reviews?.[0].payload}
                                        </span>
                                      </ReviewListThree>
                                    </ReviewListDetail>
                                  ) : (
                                    <ReviewListDetail key={i.pk}>
                                      <ReviewListOne>
                                        <ListOneLink>
                                          <ListOneAvatar>
                                            <Avatar
                                              sx={{ width: 30, height: 30 }}
                                            >
                                              C
                                            </Avatar>
                                          </ListOneAvatar>
                                          <ListOneName>
                                            <span>{i?.user?.username}</span>
                                          </ListOneName>
                                        </ListOneLink>
                                        {i?.user?.username ===
                                          meData?.username && (
                                          <ReviewEditBtn to={`/review/${id}`}>
                                            <FileDownloadDoneIcon
                                              fontSize='small'
                                              color='primary'
                                            />
                                          </ReviewEditBtn>
                                        )}
                                      </ReviewListOne>
                                      <ReviewListTwo>
                                        <StyledRating
                                          size='medium'
                                          value={
                                            itemsDetail?.reviews?.[0].rating
                                          }
                                          readOnly
                                        />
                                        <RatingWrap>
                                          <span>
                                            <strong>{itemsDetail?.name}</strong>
                                          </span>
                                        </RatingWrap>
                                      </ReviewListTwo>
                                      <ReviewListFour>
                                        <span>Reviewed on April 16, 2023</span>
                                      </ReviewListFour>
                                      <ReviewListThree>
                                        <input
                                          type='text'
                                          value={payload || ''}
                                          id='payload'
                                          onChange={handleInputChange}
                                        />
                                        {/* <span>{itemsDetail?.reviews?.[0].payload}</span> */}
                                      </ReviewListThree>
                                    </ReviewListDetail>
                                  )}
                                </>
                              </form>
                            );
                          })}
                        </>
                      )}
                    </DescriptionListDetail>
                  </DescriptionList>
                </DetailDescription>
              )}
            </InfoListDetailTwo>
          </DetailInfoList>
        </DetailInfoWrap>
      </DetailWrapperTwo>
    </DetailContainer>
  );
};

export default ProductDetailPage;
