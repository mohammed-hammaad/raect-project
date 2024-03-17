import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import { toast } from 'react-toastify';
import {
  useGetCategoryDetailsQuery,
  useCreateReviewMutation,
} from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Meta from '../components/Meta';
import { addToCart } from '../slices/cartSlice';

const CategoryDetails = () => {
  const { category: namecategory } = useParams();
  console.log(namecategory, useParams());

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const addToCartHandler = () => {
    dispatch(addToCart({ ...category, qty }));
    navigate('/cart');
  };

  const {
    data: category,
    isLoading,
    refetch,
    error,
  } = useGetCategoryDetailsQuery(namecategory);

  const { userInfo } = useSelector((state) => state.auth);

  const [createReview, { isLoading: loadingcategoryReview }] =
    useCreateReviewMutation();

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      await createReview({
        namecategory,
      }).unwrap();
      refetch();
      toast.success('Review created successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };
  console.log('bebo', category);

  return (
    <>
      <Link className='btn btn-light my-3' to='/getAllCategories'>
        Go Back
      </Link>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          {/* {console.log('hazem', category)}
          <Meta
            title={category.found.name}
            description={category?.description}
          /> */}
          <Row>
            {category.found?.map((category) => (
              <Col key={category.name} sm={12} md={6} lg={4} xl={3}>
                <Card className='my-3 p-3 rounded'>
                  <Link to={`/getMedicineByName/${category.name}`}>
                    <Card.Img src={category.image} variant='top' />
                  </Link>
                  <Card.Body>
                    <Link to={`/getMedicineByName/${category.name}`}>
                      <Card.Title as='div' className='category-title'>
                        <strong>{category.name}</strong>
                      </Card.Title>
                    </Link>
                    <Card.Text as='h3'>{category.price} L.E </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  );
};

export default CategoryDetails;
