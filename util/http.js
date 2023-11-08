import axios from "axios";

const backEndURL = "https://expensetracker-4b729-default-rtdb.firebaseio.com";

export async function storeExpense(expenseData) {
  const response = await axios.post(backEndURL + "/expenses.json", expenseData);
  const id = response.data.name;
  return id;
}

export async function getExpenses() {
  const response = await axios.get(backEndURL + "/expenses.json");

  const expenses = [];

  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(backEndURL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id) {
  return axios.delete(backEndURL + `/expenses/${id}.json`);
}
