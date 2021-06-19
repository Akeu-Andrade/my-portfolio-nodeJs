import 'reflect-metadata';

import express, { request } from 'express';
import routes from './routes';
import uploudConfig from './config/uploud';

import './database';

const app = express();

app.use(express.json())
app.use('/files', express.static(uploudConfig.directory));
app.use(routes);

app.listen(3333, () => {
    console.log('🚀 Aplicação iniciada na porta 3333')
}); 