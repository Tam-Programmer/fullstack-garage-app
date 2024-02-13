import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnection from "../db/db.js";

async function verifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ error: "You are not authenticated" });
  }

  try {
    const decoded = await jwt.verify(token, "jwt-secret-key");
    req.role = decoded.role;
    req.email = decoded.email;
    next();
  } catch (err) {
    return res.json({ error: "Wrong Token" });
  }
}

async function register(req, res) {
  try {
    const { firstname, lastname, phone, email, password, role } = req.body;
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const customerValues = [
      firstname,
      lastname,
      phone,
      email,
      hashedPassword,
      role,
    ];
    const customerSql =
      "INSERT INTO customers (`firstname`, `lastname`, `phone`, `email`, `password`, `role`) VALUES (?, ?, ?, ?, ?, ?)";
    await dbConnection.query(customerSql, customerValues);
    console.log("Data inserted into customers table");

    const loginValues = [email, hashedPassword, role];
    const loginSql =
      "INSERT INTO login (`email`, `password`, `role`, `cust_id`) VALUES (?, ?, ?, LAST_INSERT_ID())";
    await dbConnection.query(loginSql, loginValues);
    console.log("Data inserted into login table");

    res.json({ status: "Success" });
  } catch (err) {
    console.error("Error registering user:", err);
    res.status(500).json({ error: "Error registering user" });
  }
}

async function login(req, res) {
  try {
    const sql = "SELECT * FROM login WHERE email = ?";
    const [data] = await dbConnection.query(sql, [req.body.email]);

    if (data.length === 0) {
      return res.json({ error: "No such email exists" });
    }

    const response = await bcrypt.compare(req.body.password, data[0].password);

    if (response) {
      const { role, email } = data[0];

      const token = jwt.sign({ role, email }, "jwt_secret_key", {
        expiresIn: "1d",
      });

      res.cookie("token", token);
      // Redirect to the appropriate route based on the user's role
      // if (role === "admin") {
      //   return res.redirect("/dashboard");
      // } else if (role === "employee") {
      //   return res.redirect("/dashboard/employee");
      // } else {
      //   return res.redirect("/dashboard/customer");
      // }
      return res.json({ status: "Success" });
    } else {
      return res.json({ error: "Password not matched" });
    }
  } catch (err) {
    console.error("Error in login:", err);
    return res.json({ error: "Error in login" });
  }
}


export { register, login, verifyUser };