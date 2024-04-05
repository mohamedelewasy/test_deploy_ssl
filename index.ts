import express, { Request } from 'express';

const app = express();

app.use('/', (req:Request, res) => {
  res.json({
    message: 'server runs',
    protocol: req.protocol,
    host: req.hostname,
    url: req.url,
    original_url: req.originalUrl,
    header: req.headers
  })
})

app.listen(3000, () => {console.log('server runs')})