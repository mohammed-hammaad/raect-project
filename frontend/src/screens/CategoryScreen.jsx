// import { useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
// import { toast } from 'react-toastify';
// import {
//   useGetCategoryNameQuery,
//   useCreateReviewMutation,
// } from '../slices/productsApiSlice';
// import Loader from '../components/Loader';
// import Message from '../components/Message';
// import Meta from '../components/Meta';
// import { addToCart } from '../slices/cartSlice';

// const CategoryScreen = () => {
//   const { name: CategoryName } = useParams();
//   console.log(CategoryName, useParams());

//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [qty, setQty] = useState(1);
//   const [rating, setRating] = useState(0);
//   const [comment, setComment] = useState('');

//   const addToCartHandler = () => {
//     dispatch(addToCart({ ...product, qty }));
//     navigate('/cart');
//   };

//   const {
//     data: product,
//     isLoading,
//     refetch,
//     error,
//   } = useGetCategoryNameQuery(CategoryName);

//   const { userInfo } = useSelector((state) => state.auth);

//   const [createReview, { isLoading: loadingproductReview }] =
//     useCreateReviewMutation();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//   };
//   console.log('bebo', product);

//   return (
//     <>
//       <Link className='btn btn-light my-3' to='/getAllMedicines'>
//         Go Back
//       </Link>
//       {isLoading ? (
//         <Loader />
//       ) : error ? (
//         <Message variant='danger'>
//           {error?.data?.message || error.error}
//         </Message>
//       ) : (
//         <>
//           <Meta title={product.name} description={product.description} />
//           <Row>
//             <Col md={6}>
//               <Image src={product.image} alt={product.name} fluid />
//             </Col>
//             <Col md={3}>
//               <ListGroup variant='flush'>
//                 <ListGroup.Item>
//                   <h3>{product.found.name}</h3>
//                 </ListGroup.Item>

//                 <ListGroup.Item>Price: {product.price} L.E </ListGroup.Item>
//                 <ListGroup.Item>product Date: {product.mfgDate}</ListGroup.Item>
//                 <ListGroup.Item>Expired Date: {product.expDate}</ListGroup.Item>
//                 <ListGroup.Item>product : {product.product}</ListGroup.Item>
//                 <ListGroup.Item>Company : {product.company}</ListGroup.Item>
//               </ListGroup>
//             </Col>
//             <Col md={3}>
//               <Card>
//                 <ListGroup variant='flush'>
//                   <ListGroup.Item>
//                     <Row>
//                       <Col>Price:</Col>
//                       <Col>
//                         <strong>{product.price} L.E </strong>
//                       </Col>
//                     </Row>
//                   </ListGroup.Item>
//                   <ListGroup.Item></ListGroup.Item>

//                   <ListGroup.Item>
//                     <Button
//                       className='btn-block'
//                       type='button'
//                       disabled={product.countInStock === 0}
//                       onClick={addToCartHandler}
//                     >
//                       Add To Cart
//                     </Button>
//                   </ListGroup.Item>
//                 </ListGroup>
//               </Card>
//             </Col>
//           </Row>
//         </>
//       )}
//     </>
//   );
// };

// export default CategoryScreen;
