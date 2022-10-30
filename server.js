import express from "express";
import dotenv from "dotenv";
import path from "path";



dotenv.config();
const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;

app.listen(port,() => {
  console.log(`${port}`)
})

app.use('/static',express.static(path.resolve(__dirname,'static')));

app.get('/*',(req,res) => {
  res.sendFile(path.resolve(__dirname,'static','index.html'));
})