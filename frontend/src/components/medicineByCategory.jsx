import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Rating from './Rating';

const medicineByCategory = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/getMedicineByCategory/${product.name}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>

      <Card.Body>
        <Link to={`/getMedicineByCategory/${product.name}`}>
          <Card.Title as='div' className='product-title'>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>

        <Card.Text as='h3'>{product.price} L.E </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default medicineByCategory;
