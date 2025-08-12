import jwt from "jsonwebtoken";

// Admin authentication middleware
const authAdmin = async (req, res, next) => {
  try {
    // Expect the token in a header field (e.g., atoken)
    const { atoken } = req.headers;
    if (!atoken) {
      return res.status(401).json({ success: false, message: "Not Authorized. Please Login Again." });
    }
    
    // Verify token using your JWT secret
    const decoded = jwt.verify(atoken, process.env.JWT_SECRET);
    
    // Check that the decoded payload includes the admin's email
    // (We generate the token as { email } in loginAdmin below.)
    if (decoded.email !== process.env.ADMIN_EMAIL) {
      return res.status(403).json({ success: false, message: "Invalid Admin Token" });
    }

    // Proceed if the token is valid
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ success: false, message: "Invalid or Expired Token" });
  }
};

export default authAdmin;