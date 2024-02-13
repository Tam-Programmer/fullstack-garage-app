import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dbConnection from "../db/db.js";

async function verifyUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.json({ error: "You are not authenticated" });
  }

  try {
    const decoded = await jwt.verify(token, "jwt_secret_key");
    req.role = decoded.role;
    req.email = decoded.email;
    next();
  } catch (err) {
    return res.json({ error: "Wrong Token" });
  }
}

async function employeeRegister(req, res) {
  try {
    const { fname, lname, email, password, salary, phone, address, role } =
      req.body;

    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const employeeValues = [
      fname,
      lname,
      email,
      hashedPassword,
      salary,
      phone,
      address,
      role,
    ];
    const employeeSql =
      "INSERT INTO employees (`firstname`, `lastname`,  `email`, `password`,`salary`, `phone`,`address`,`role`) VALUES (?, ?, ?, ?, ?, ?,?,?)";
    await dbConnection.query(employeeSql, employeeValues);
    console.log("Data inserted into employees table");

    const loginValues = [email, hashedPassword, role];
    const loginSql =
      "INSERT INTO login (`email`, `password`, `role`, `emp_id`) VALUES (?, ?, ?, LAST_INSERT_ID())";
    await dbConnection.query(loginSql, loginValues);
    console.log("Data inserted into login table");

    res.json({ status: "Success" });
  } catch (err) {
    console.error("Error registering employee:", err);
    res.status(500).json({ error: "Error registering employee" });
  }
}

async function employeeLogin(req, res) {
  try {
    const { email, password } = req.body;
    const sql = "SELECT * FROM login WHERE email = ?";
    const [data] = await dbConnection.query(sql, [email]);

    if (data.length === 0) {
      return res.json({ Error: "No such email exists" });
    }

    const response = await bcrypt.compare(password, data[0].password);

    if (response) {
      const { email, role } = data[0];
      const token = jwt.sign({ email, role }, "jwt_secret_key", {
        expiresIn: "1d",
      });
      res.cookie("token", token);
      return res.json({ status: "Success", role });
    } else {
      return res.json({ Error: "Password not matched" });
    }
  } catch (err) {
    console.error("Error in login:", err);
    return res.json({ error: "Error in login" });
  }
}
// async function employeeLogin(req, res) {
//   try {
//     const sql = "SELECT * FROM login WHERE email = ?";
//     const [data] = await dbConnection.query(sql, [req.body.email]);

//     if (data.length === 0) {
//       return res.json({ error: "No such email exists" });
//     }

//     const response = await bcrypt.compare(req.body.password, data[0].password);

//     if (response) {
//       const { role, email } = data[0];

//       const token = jwt.sign({ role, email }, "jwt_secret_key", {
//         expiresIn: "1d",
//       });

//       res.cookie("token", token);
//       return res.json({ status: "Success" });
//     } else {
//       return res.json({ error: "Password not matched" });
//     }
//   } catch (err) {
//     console.error("Error in login:", err);
//     return res.json({ error: "Error in login" });
//   }
// }

export { employeeRegister, employeeLogin, verifyUser };
