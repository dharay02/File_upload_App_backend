const cloudinary = require("cloudinary").v2;

exports.connectToCloudinary = () => {
    try {
        cloudinary.config({
            cloud_name: 'dkepgjnhy',
            api_key: '338682173972786',
            api_secret: 'GBQbdFX6830PzyXoxjX1oN7d8Yg'
        });
        console.log("successfully connect to cloudinary");
    
    } catch (err) {
        console.log(err);
    }
}

