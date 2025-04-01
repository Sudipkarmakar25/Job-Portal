const jwt = require("jsonwebtoken");
const AdminRequest = require("../Models/AdminRequest");

const CheckSuperAdmin = async (req, res, next) => {
  try {
    const token = req.cookies?.accessToken;
    console.log(token)
    if (!token) {
      return res.status(401).json({ message: "Unauthorized request!!!" });
    }

    const payload = jwt.verify(token, process.env.JWT_SECRET);

    const user = await AdminRequest.findById(payload.id).select("-password");

    if (!user) {
      return res.status(401).json({ message: "Invalid access token" });
    }

    if (user.role !== "superadmin") {
      return res.status(403).json({ message: "Access denied. Superadmin only." });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(500).json({ message: "Error occurred while accessing user from cookies." });
  }
};

module.exports = { CheckSuperAdmin };
