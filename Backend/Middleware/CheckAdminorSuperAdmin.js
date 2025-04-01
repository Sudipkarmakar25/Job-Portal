const AdminRequest = require("../Models/AdminRequest");

const CheckAdminorSuperAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required." });
    }

    const user = await AdminRequest.findOne({ email }).select("+password");

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid credentials." });
    }

    if (user.role === "user") {
      return res.status(403).json({ message: "Access denied. Admin or Superadmin only." });
    }

    req.user = user;
    next();
  } catch (error) {
    console.error("Login Verification Error:", error.message);
    return res.status(500).json({
      message: "Error occurred while verifying user credentials.",
    });
  }
};

module.exports = { CheckAdminorSuperAdmin };
