const express = require("express");
const cors = require("cors");
const { getAllEmployees, getEmployeesById } = require("./controllers");
const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.get("/employees", async(req,res) => {
  const employees = getAllEmployees();
  res.json({employees});
});

app.get("/employees/details/:id", async(req,res) => {
  let employee = getEmployeesById(parseInt(req.params.id));
  res.json({employee});
});

module.exports = {app};


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
