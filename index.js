const express = require("express")
const app = express() ; 
const fileUpload = require("express-fileupload");

require("dotenv").config() ; 
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
}));

//db connection 
const dbConnect = require("./configs/dbconnect");
dbConnect() ; 

//cloudinary connection 
const { connectToCloudinary } = require("./configs/cloudinary");
connectToCloudinary();

const upload = require("./routes/fileUpload");

app.use("/api/v1/upload/" , upload);

app.get("/" , (req , res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`Server started at port no: ${PORT}`)
})
