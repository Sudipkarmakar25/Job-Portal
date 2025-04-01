const AdminRequest = require("../Models/AdminRequest");
const bcrypt = require('bcryptjs');


const addRequest = async (req, res) => {
  try {
    const {name,email,phone,password} = req.body;
    if(!name || !email || !phone || !password)
    {
      return res.status(400).json({
        message: "Please fill all the fields",
        success:false
      })
    }
    const existingRequest = await AdminRequest.findOne({
      email: req.body.email,
    });

    if (existingRequest) {
      return res.status(409).json({
        message: "Email Already Exists",
        success: false,
      });
    }
    const salt = await bcrypt.genSalt(10); 
    const hashedPassword = await bcrypt.hash(password, salt);

     const newlycreatedRequest = await AdminRequest.create({
      name,
      email,
      phone,
      password: hashedPassword,
    });
    if (newlycreatedRequest) {
      return res.status(201).json({
        message: "Request Added Successfully",
        success: true,
        data: newlycreatedRequest,
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error in Adding request",
      error: error.message,
    });
  }
};

const getAllRequest = async (req, res) => {
  try {
    const requests = await AdminRequest.find();
    if (requests.length > 0) {
      return res.status(200).json({
        success: true,
        data: requests,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "No Request Found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error in Fetching requests ",
      error: error.message,
    });
  }
};

const deleteRequest = async (req, res) => {
  try {
    const {id }= req.params;
    const request = await AdminRequest.findById(id);
    if (request) {
      await AdminRequest.findByIdAndDelete(id);
      return res.status(200).json({
        success: true,
        message: "Request Deleted Successfully",
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Request Not Found",
      });
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      message: "Error in Deleting request ",
      error: error.message,
    });
  }
};

const confirmRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const request = await AdminRequest.findById(id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Request not found",
      });
    }

    if (request.role !== "user") {
      return res.status(400).json({
        success: false,
        message: "Role is not 'user', update not allowed.",
      });
    }

   
    const updatedRequest = await AdminRequest.findByIdAndUpdate(
      id,
      { role: "admin" },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Role updated to admin successfully",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error in confirming request",
      error: error.message,
    });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await AdminRequest.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    const token = user.generateAuthToken();
    const loggedInUser = await AdminRequest.findById(user._id).select("-password");

    const options = {
      httpOnly: true,
      secure: false,
      sameSite: "Lax",
      maxAge: 24 * 60 * 60 * 1000, 
    };

    res.cookie("accessToken", token, options);

    return res.status(200).json({
      user: loggedInUser,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.error("Login Error:", error.message);
    return res.status(500).json({ message: "Server error. Please try again later." });
  }
};



module.exports = { addRequest, getAllRequest,deleteRequest,confirmRequest,loginUser };
