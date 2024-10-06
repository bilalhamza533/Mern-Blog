import express from 'express'
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config()

mongoose.connect(process.env.MONGO)
    .then(
        console.log("Mongodb connected!")
    )
    .catch((e) => {
        console.log(e);
        
    })

const app = express();

app.listen(3000, () => {
    console.log('Server is running on server 3000!!');
    
})