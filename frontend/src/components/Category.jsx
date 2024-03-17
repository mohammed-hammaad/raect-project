import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Category = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/getAllCategories/${product.name}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
    </Card>
  );
};

export default Category;
