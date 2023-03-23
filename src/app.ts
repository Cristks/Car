import express from 'express';
import errorMiddlewares from './Middelwares/ErrorMiddealwares';
import carsRoutes from './Routes/CarsRoutes';
import motorRoutes from './Routes/MotorciclesRoutes';
// import ErrorHttp from './Utils/ErrorHttp';

const app = express();

app.use(express.json());
app.use(carsRoutes);
app.use(motorRoutes);

app.use(errorMiddlewares);

export default app;
// iniciando projeto
