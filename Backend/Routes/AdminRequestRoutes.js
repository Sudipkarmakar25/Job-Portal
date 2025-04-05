const express=require('express')
const {addRequest,getAllRequest,deleteRequest,confirmRequest,loginUser,logoutUser} =require('../Controllers/AdminRequestController')
const router=express.Router()
const {CheckSuperAdmin}  =require('../Middleware/CheckSuperAdmin')

router.post("/addRequest",addRequest)
router.get("/getAllRequests",CheckSuperAdmin,getAllRequest)
router.delete("/deleteRequest/:id",CheckSuperAdmin,deleteRequest)
router.put("/confirmRequest/:id",CheckSuperAdmin,confirmRequest)
router.post("/login",loginUser)
router.post("/logout",logoutUser)
module.exports=router;