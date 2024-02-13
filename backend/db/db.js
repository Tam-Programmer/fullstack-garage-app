import mysql from "mysql2";

// Create a database connection pool
var dbConnection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "mern_garage_db",
});

// Connect to the database
// dbConnection.getConnection(function (err, connection) {
//   if (!err) {
//     console.log("Database connected successfully");
//   } else {
//     console.log({ connection: "Database connection unsuccessful" });
//   }
// });

// Create tables in the database
const createTables = async () => {
  try {
    const createCustomerTable = `CREATE TABLE IF NOT EXISTS customers(
      cust_id int auto_increment,
      firstname varchar(255) not null,
      lastname varchar(255) not null,
      phone varchar(255) not null,
      email varchar(255) not null,
      password varchar(255) not null,
      role varchar(11) NULL,
      PRIMARY KEY (cust_id)
    )`;

    const createEmployeeTable = `CREATE TABLE IF NOT EXISTS employees(
      emp_id int auto_increment,
      firstname varchar(255) not null,
      lastname varchar(255) not null,
      email varchar(255) not null,
      password varchar(255) not null,
      salary varchar(255) not null,
      address varchar(255) not null,
      phone varchar(255) not null,
      role varchar(11)  NOT NULL,
      PRIMARY KEY (emp_id)
    )`;

    const createLoginTable = `CREATE TABLE IF NOT EXISTS login(
      login_id int auto_increment,
      email varchar(255) not null,
      password varchar(255) not null,
      role varchar(11) NULL,
      cust_id INT,
      emp_id INT,
      PRIMARY KEY (login_id),
      FOREIGN KEY (cust_id) REFERENCES customers(cust_id),
      FOREIGN KEY (emp_id) REFERENCES employees(emp_id) 
    )`;

    await dbConnection.promise().query(createCustomerTable);
    console.log("Customer table created");

    await dbConnection.promise().query(createEmployeeTable);
    console.log("Employee table created");

    await dbConnection.promise().query(createLoginTable);
    console.log("Login table created");
  } catch (err) {
    console.error("Error creating tables:", err);
  }
};

createTables();

export default dbConnection.promise();