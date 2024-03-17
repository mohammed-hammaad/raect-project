import express from 'express';
import initConnection from './db/initConnection.js';
import medicineRoutes from './src/modules/medicines/medicine.routes.js';
import categoryRoutes from './src/modules/categories/category.routes.js';
import customerRoutes from './src/modules/customers/customer.routes.js';
import doctorRoutes from './src/modules/doctors/doctor.routes.js';
import serviceRoutes from './src/modules/services/service.routes.js';
import cartRoutes from './src/modules/carts/cart.routes.js';
import orderRoutes from './src/modules/orders/order.routes.js';
import cors from 'cors';

initConnection();
const server = express();
server.use(cors());
server.use('/uploads', express.static('uploads'));
server.use(express.json());
server.use(medicineRoutes);
server.use(categoryRoutes);
server.use(customerRoutes);
server.use(doctorRoutes);
server.use(serviceRoutes);
server.use(cartRoutes);
server.use(orderRoutes);

server.listen(4000);
export default server;
