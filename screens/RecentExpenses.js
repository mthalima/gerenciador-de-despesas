import { useContext, useEffect, useState } from "react";

import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { ExpensesContext } from "../store/expenses-context";
import { getDateMinusDays } from "../util/date";
import { getExpenses } from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

function RecentExpenses() {
  const [isLoading, setIsLoading] = useState(true);
  const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
    async function waitExpenses() {
      setIsLoading(true);
      const expenses = await getExpenses();
      setIsLoading(false);
      expensesCtx.setExpenses(expenses);
    }

    waitExpenses();
  }, []);

  if (isLoading) {
    return <LoadingOverlay></LoadingOverlay>;
  }

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);

    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Ultimos 7 dias"
      fallbackText="Não há despesa nos ultimos 7 dias"
    />
  );
}

export default RecentExpenses;
