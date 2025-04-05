const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'Uploads/'); 
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const checkFileFilter = (req, file, cb) => {
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(new Error("Please upload only image files (JPEG/PNG)"));
    }
};


const upload = multer({
    storage: storage,
    fileFilter: checkFileFilter,
    limits: { fileSize: 1024 * 1024 * 5 } 
});

const UploadImageMiddleWare = upload.single('logo'); 

module.exports = { UploadImageMiddleWare };
