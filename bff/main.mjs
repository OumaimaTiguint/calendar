import express from 'express';
import dotenv from 'dotenv'
import path from 'path';
import cors from 'cors';
import proxy from './proxy.mjs'

dotenv.config({
  path: path.resolve(process.cwd(), 'bff', '.env')
});

const app = express();
app.use(cors());

const port = process.env.PORT || 8081;

app.use('/proxy', async (req, res) => {
  const {soapData} = req.query
  
  
  const _response = await proxy.request({
    method: req.method,
    data:soapData,
    params: req.query
  });

  return res.status(_response.status).json(_response.data);
});

app.listen(port, () => console.log(`Express BFF is running on port ${port}`));