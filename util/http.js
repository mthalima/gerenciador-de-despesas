import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://expensetracker-4b729-default-rtdb.firebaseio.com/expenses.json",
    expenseData
  );
}
