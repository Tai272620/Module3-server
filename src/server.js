import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
const server = express();

//cors
import cors from 'cors';
server.use(cors());

import apiConfig from './routes';
server.use("/apis", apiConfig)

// public folder public
server.use(express.static('public'))

server.listen(3000, () => {
    console.log(`Server ok! => Link: http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}/`)
})