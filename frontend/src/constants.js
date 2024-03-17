// export const BASE_URL =
// process.env.NODE_ENV === 'development' ? 'http://localhost:5000' : '';
export const BASE_URL =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : ''; // If using proxy
export const PRODUCTS_URL = '/getAllMedicines';
export const USERS_URL = '/api/users';
export const CATEGORY_URL = '/getAllCategories';
export const MEDICINEDETAILS_URL = '/getMedicineByName';
export const CATEGORYDETAILS_URL = '/getMedicineByCategory';
// export const Medicine_URL = '/getAllMedicine';
// export const Medicine_URL = '/getAllMedicine';

export const ORDERS_URL = '/api/orders';
export const PAYPAL_URL = '/api/config/paypal';
