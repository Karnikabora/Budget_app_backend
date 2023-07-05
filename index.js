require("dotenv").config();
const express = require("express");
const dbconnect = require("./conn/db.conn");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { username, email, password } = req.body;
  res.json({ message: "User registered successfully" });
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  res.json({ message: "User logged in successfully", token: "JWTtoken" });
});

app.post("/addExpense", (req, res) => {
  const { date, description, category, amount, budgetId } = req.body;
  res.json({ message: "Expense added successfully" });
});

app.post("/viewExpense", (req, res) => {
  const { sort, sortingCriteria, filter, filterCriteria, paginate } = req.body;

  res.json({
    payload: [
      {
        date: "date",
        description: "description",
        category: "grocery",
        amount: 200,
        budgetId: "budgetID",
      },
      {
        date: "date",
        description: "description",
        category: "grocery",
        amount: 200,
        budgetId: "budgetID",
      },
    ],
  });
});

app.put("/updateExpense", (req, res) => {
  const { expenseId, update } = req.body;
  res.json({ message: "Expense updated successfully" });
});

app.put("/deleteExpense", (req, res) => {
  const { expenseId } = req.body;
  res.json({ message: "Expense deleted successfully" });
});

app.post("/addBudget", (req, res) => {
  const { name, amount } = req.body;
  res.json({ message: "Budget added successfully" });
});

app.post("/viewBudget", (req, res) => {
  const { budgetId } = req.body;

  res.json({
    name: "name",
    allocatedAmount: "amount",
    totalExpenses: "expenses",
    remainingAmount: "remaining",
  });
});

app.put("/updateBudget", (req, res) => {
  const { budgetId, update } = req.body;
  res.json({ message: "Budget was updated successfully" });
});
