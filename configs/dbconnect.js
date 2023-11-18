const mongoose = require("mongoose")

require("dotenv").config();

const dbConnect = () => { 

    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("successively connect to the databse"))
    .catch((err) => {
        console.log("Database connection failed")
        process.exit(1);
    });

}

module.exports = dbConnect;