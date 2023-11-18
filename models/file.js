const mongoose = require("mongoose")
const nodemailer = require("nodemailer")

require("dotenv").config();

const fileSchema = new mongoose.Schema({
    name:{
        type:String , 
        required:true, 
    },
    imageUrl:{
        type:String , 
    },
    tag:{
        type:String , 
    },
    email:{
        type:String , 
    }
})

fileSchema.post("save" , async function (doc){

    try{

        const transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 465,
            secure: true,
            auth: {
              // TODO: replace `user` and `pass` values from <https://forwardemail.net>
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_PASS,
            },
          });

          console.log("Hello guys");
          const info = await transporter.sendMail({
            from: "Dharmendra-->super hero", // sender address
            to: doc.email, // list of receivers
            subject: "FileUpload", // Subject line
            html: `
                uploaded file see here:
                <a href="${doc.imageUrl}">${doc.imageUrl}</a>
            ` // html body
          });
          console.log("info " , info);

    }
    catch(err){
        console.log(err);
    }

})



module.exports = mongoose.model("file" , fileSchema);