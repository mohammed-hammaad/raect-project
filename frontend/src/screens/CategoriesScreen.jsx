import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const CategoriesScreen = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    axios
      .get('http://localhost:4000/getAllCategories')

      .then((data) => {
        setdata(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log('bebo', data);
  return (
    <>
      <Row>
        {data.allCategories?.map((category) => (
          <Col key={category._id} sm={12} md={6} lg={4} xl={3}>
            {/* <Product product={category} /> */}
            <Card className='my-3 p-3 rounded'>
              <Link to={`/getMedicineByCategory/${category.name}`}>
                <Card.Img src={category.image} variant='top' />
              </Link>
              <Link to={`/getMedicineByCategory/${category.name}`}>
                <Card.Title as='div' className='product-title'>
                  <strong>{category.name}</strong>
                </Card.Title>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoriesScreen;
