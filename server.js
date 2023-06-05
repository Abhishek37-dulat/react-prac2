import  express, { json }  from "express";
import dotenv from 'dotenv';
import router from "./routes/userRouter.js";
import { Connection } from "./database/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;


Connection(MONGODB_URL);
app.use(express.json());
app.use('/', router);

app.listen(PORT, ()=>{
    console.log("Listening to PORT: ",PORT);
})