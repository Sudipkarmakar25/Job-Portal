const express=require('express')
const {addRequest,getAllRequest,deleteRequest,confirmRequest,loginUser} =require('../Controllers/AdminRequestController')
const router=express.Router()
const {CheckSuperAdmin}  =require('../Middleware/CheckSuperAdmin')
const {CheckAdminorSuperAdmin} =require('../Middleware/CheckAdminorSuperAdmin')

router.post("/addRequest",addRequest)
router.get("/getAllRequests",CheckSuperAdmin,getAllRequest)
router.delete("/deleteRequest/:id",CheckSuperAdmin,deleteRequest)
router.put("/confirmRequest/:id",CheckSuperAdmin,confirmRequest)
router.post("/login",CheckAdminorSuperAdmin,loginUser)

module.exports=router;