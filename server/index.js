const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const EmployeeModel = require("./model/Employee");
//const bcrypt = require("bcrypt");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/employee");

app.post("/", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("Wrong password");
      }
    } else {
      res.json("No Records Found");
    }
  });
});

// app.post("/", (req, res) => {
//   const { email, password } = req.body;
//   // Find the user by email
//   EmployeeModel.findOne({ email: email }).then((user) => {
//     if (user) {
//       // Compare the provided password with the hashed password in the database
//       bcrypt.compare(password, user.password, (err, result) => {
//         if (err) {
//           // Handle error
//           res.status(500).json("Internal Server Error");
//         } else if (result) {
//           // Passwords match, return success
//           res.json("success");
//         } else {
//           // Passwords don't match, return error
//           res.json("Wrong password");
//         }
//       });
//     } else {
//       // No user found with the provided email
//       res.json("No Records Found");
//     }
//   });
// });

app.post("/signup", (req, res) => {
  EmployeeModel.create(req.body)
    .then((employees) => res.json(employees))
    .catch((err) => res.json(err));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
