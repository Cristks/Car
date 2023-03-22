import express from 'express';
import errorMiddleware from './Middelwares/errorMiddealwares';
import carsRoutes from './Routes/CarsRoutes';

const app = express();

app.use(express.json());
app.use('/cars', carsRoutes);

app.use(errorMiddleware);

export default app;
// iniciando projeto
