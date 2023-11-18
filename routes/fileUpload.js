const express = require("express")
const router = express.Router() ; 

const { localFileUpload,imageUpload , videoUpload ,reducedImageUpload} = require("../controllers/fileUpload");

router.post("/localFileUpload" , localFileUpload);
router.post("/uploadImage" , imageUpload)
router.post("/uploadVideo" , videoUpload)
router.post("/uploadReducedImage" , reducedImageUpload);



module.exports = router;