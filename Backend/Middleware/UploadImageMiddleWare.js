const multer = require('multer');

// Memory storage for Vercel (uses RAM, doesn't write to disk)
const storage = multer.memoryStorage();

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
  limits: { fileSize: 1024 * 1024 * 5 } // Max: 5MB
});

const UploadImageMiddleWare = upload.single('logo');

module.exports = { UploadImageMiddleWare };
