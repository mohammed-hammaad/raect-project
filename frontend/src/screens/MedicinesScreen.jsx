import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';

const CategoriesScreen = () => {
  const [data, setdata] = useState([]);
  useEffect(() => {
    let medicines = axios
      .get('http://localhost:4000/getAllMedicines')

      .then((data) => {
        setdata(data.data);
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <Row>
        {data.allMedicines?.map((medicine) => (
          <Col key={medicine._id} sm={12} md={6} lg={4} xl={3}>
            <Product product={medicine} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CategoriesScreen;
