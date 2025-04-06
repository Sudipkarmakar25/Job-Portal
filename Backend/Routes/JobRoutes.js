const express = require('express');
const router = express.Router();
const { CheckAdminorSuperAdmin } = require('../Middleware/CheckAdminorSuperAdmin');
const { UploadImageMiddleWare } = require('../Middleware/UploadImageMiddleware');

const { addJob,getAllJob,getAllInternship,deleteJob,Myjobs,MyInternships} = require('../Controllers/JobController');

router.post("/jobs", CheckAdminorSuperAdmin,UploadImageMiddleWare, addJob);
router.get("/getAlljobs", getAllJob);
router.get("/getAllInternships",getAllInternship);
router.delete("/delete/:id",CheckAdminorSuperAdmin,deleteJob);
router.get("/myjobs",CheckAdminorSuperAdmin,Myjobs);
router.get("/myinternships",CheckAdminorSuperAdmin,MyInternships);

module.exports = router;
