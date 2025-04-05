const express = require('express');
const router = express.Router();
const { CheckAdminorSuperAdmin } = require('../Middleware/CheckAdminorSuperAdmin');
const { UploadImageMiddleWare } = require('../Middleware/UploadImageMiddleWare');

const { addJob,getAllJob,getAllInternship,deleteJob } = require('../Controllers/JobController');

router.post("/jobs", CheckAdminorSuperAdmin,UploadImageMiddleWare, addJob);
router.get("/getAlljobs", getAllJob);
router.get("/getAllInternships",getAllInternship);
router.delete("/delete/:id",CheckAdminorSuperAdmin,deleteJob);

module.exports = router;
