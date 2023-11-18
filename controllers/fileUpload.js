const file = require("../models/file")
const cloudinary = require("cloudinary").v2




exports.localFileUpload = async (req , res) => { 

    try{
        const uploadedFile = req.files.file; 

        let pathInTheServer = __dirname + "/files/" + Date.now() + "."+ uploadedFile.name.split(".")[1] ;

        uploadedFile.mv(pathInTheServer , (err) => {
            console.log(err);
        });

        res.status(200).json({
            success:true, 
            message:"Successfully upload file in the server ",

        })


    }catch(err){
        console.log(err);
        res.status(200).json({
            success:false, 
            message:err.message,

        })

    }

}

function checkExtension(type , suportedExtension){
    return suportedExtension.includes(type);
}

async function uploadTocloudinary( file  , folder , quality) {
    const options = {folder ,use_filename:true , resource_type: "auto" , quality};
    console.log(file.tempFilePath);
    // const compresedfile = cloudinary.image(file.tempFilePath, {quality: 60})
    return await cloudinary.uploader.upload(file.tempFilePath , options);
}

exports.imageUpload = async ( req , res ) => {


    try{

        const {name , tag , email} = req.body; 
        console.log(name , tag , email );

        const imageFile = req.files.imageFile ; 

        const suportedExtension = ["jpeg" , "jpg" , "png"];

        const type = imageFile.name.split(".")[1].toLowerCase();
        console.log("filetype" , type);

        if(!checkExtension(type, suportedExtension)) {
            res.status(401).json({
                success:false,
                message:"doesn't match extension"
            })
        }

        const response = await uploadTocloudinary(imageFile,"dharay");
        console.log("response" , response);

        const fileData = await file.create({
            name , 
            tag , 
            email , 
            imageUrl:response.url,
        })

        res.status(200).json({
            success:true, 
            message:"successfully uploaded to coludinary"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            message:err.message,

        })
    }

} ;

exports.videoUpload = async ( req , res ) => {


    try{

        const {name , tag , email} = req.body; 
        console.log(name , tag , email );

        const imageFile = req.files.videoFile ; 

        const suportedExtension = ["mp4" , "mov"];

        const type = imageFile.name.split(".")[1].toLowerCase();
        console.log("filetype" , type);

        if(!checkExtension(type, suportedExtension)) {
            res.status(401).json({
                success:false,
                message:"doesn't match extension"
            })
        }

        const response = await uploadTocloudinary(imageFile,"dharay");
        console.log("response" , response);

        const fileData = await file.create({
            name , 
            tag , 
            email , 
            imageUrl:response.secure_url,
        })

        res.status(200).json({
            success:true, 
            message:"successfully uploaded to coludinary"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            message:err.message,

        })
    }

} 

exports.reducedImageUpload = async ( req , res ) => {


    try{

        const {name , tag , email} = req.body; 
        console.log(name , tag , email );

        const imageFile = req.files.imageFile ; 

        const suportedExtension = ["jpeg" , "jpg" , "png"];

        const type = imageFile.name.split(".")[1].toLowerCase();
        console.log("filetype" , type);

        if(!checkExtension(type, suportedExtension)) {
            res.status(401).json({
                success:false,
                message:"doesn't match extension"
            })
        }

        const response = await uploadTocloudinary(imageFile,"dharay" , 30);
        console.log("response" , response);

        const fileData = await file.create({
            name , 
            tag , 
            email , 
            imageUrl:response.url,
        })

        res.status(200).json({
            success:true, 
            message:"successfully uploaded to coludinary"
        })

    }catch(err){
        console.log(err);
        res.status(500).json({
            success:false, 
            message:err.message,

        })
    }

} ;