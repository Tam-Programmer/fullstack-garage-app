import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/userRoute.js";
import employeeRoute from "./routes/employeeRoute.js";
import dbConnection from "./db/db.js";
const port = 3000 ;
const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());

app.use("/", userRoute);
app.use("/",employeeRoute);
async function Start() {
  try {
    const connection = await dbConnection.getConnection();
    console.log("Database connected successfully");

   await app.listen(port, () => {
      console.log("Server listening on port " + port);
    });
  } catch (error) {
    console.log(error.message);
  }
}
Start();

// Middleware for verifying the user before login
// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({ Error: "You are not authenticated" });
//   } else {
//     jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//       if (err) {
//         return res.json({ Error: "Wrong Token" });
//       } else {
//         req.role = decoded.role;
//         req.email = decoded.email;
//         next();
//       }
//     });
//   }
// };

// app.get("/", verifyUser, (req, res) => {
//   return res.json({ Status: "Success", role: req.role, email: req.email });
// });
// async function Start(){
//   try {
//   const result= await dbConnection.getConnection( (err, connection) => {
//       if (!err) {
//         console.log("Database connected successfully");
//       } else {
//         console.log({ connection: "Database connection unsuccessful" });
//       }
//     });
//     app.listen(port), 
//       console.log("Server listening on port " + ":" + port);
//   } catch (error) {
//     console.log(error.message);
//   }
// }
// Start();
