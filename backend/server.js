import express from 'express';
import morgan from 'morgan';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.urlencoded({extended: false}))
app.use(express.json());

if (process.env.NODE_ENV==='development'){
  app.use(morgan('dev'))
}



const __dirname = path.resolve()
if (process.env.NODE_ENV === 'production'){
  app.use(express.static(path.join(__dirname, '/client/build')))

  app.get('*', (req, res)=> res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')))
} else{
  app.get('/', (req, res)=>{
    res.send('App is working');
  })
}


const PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>
console.log(`Server running in ${process.env.NODE_ENV} mode on PORT ${PORT}`.rainbow))