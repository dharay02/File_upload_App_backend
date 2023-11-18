const cloudinary = require("cloudinary").v2;

exports.connectToCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: process.env.CLOUD_NAME,
            api_key: process.env.API_KEY,
            api_secret: process.env.API_SECRET,
        });
        console.log("successfully connect to cloudinary");
    
    } catch (err) {
        console.log(err);
    }
}

