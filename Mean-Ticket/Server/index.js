import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import ticketRouter from './routes/ticketRouter.js';


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users',userRouter)
app.use('/tickets',ticketRouter)

const PORT = process.env.PORT || '8080';
const URL = process.env.URL

mongoose.connect(URL).then(() => {
    app.listen(PORT, () => {
        console.log(`server is running on PORT: http//localhost:${PORT}`)
    })
}).catch(err => {
    console.log('Error:', err.message)
})
