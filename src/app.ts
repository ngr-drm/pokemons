import express from 'express';
import { routes } from './communication/index'
import compression from 'express'
import helmet from 'helmet'
import cors from 'cors'

const app = express();

app.use(express.json());

app.use(compression());
app.use(helmet())
app.use(cors());

app.use(routes);

export { app };
