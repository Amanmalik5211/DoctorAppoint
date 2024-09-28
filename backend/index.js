import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoute from './Routes/auth.js';
import userRoute from './Routes/user.js';
import doctorRoute from './Routes/doctor.js';
import reviewRouter from './Routes/review.js';
import bookingRoute from  './Routes/booking.js';

dotenv.config()
const app = express();
const port = process.env.Port || 5000;
const corsOptions = {
    origin :'http://localhost:5173'
}
app.get('/', (req,res)=>{
    res.send('working op this');
})

//database connect
mongoose.set('strictQuery',false)
const connectDB=async()=>{
    try {
      await mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
       })
       console.log('Mongodb Database is connected')
    }  catch (error) {
       console.log('Mongodb Database connection failed',error)
        
    }
}

//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute)
app.use('/api/v1/doctors',doctorRoute)
app.use('/api/v1/reviews',reviewRouter)
app.use('/api/v1/bookings',bookingRoute)

app.listen(port,()=>{
    console.log('server is running'+ port)
    connectDB();
});
