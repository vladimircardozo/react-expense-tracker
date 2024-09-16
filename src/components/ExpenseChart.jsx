import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../contexts/GlobalState";

function ExpenseChart() {
  const { transactions } = useGlobalState();

  const totalIncomes = transactions.filter(transaction => transaction.amount > 0)
  .reduce((acc, transaction) =>  (acc += transaction.amount), 0);

  const totalExpenses = transactions.filter(transaction => transaction.amount < 0)
  .reduce((acc, transaction) =>  (acc += transaction.amount), 0)  * -1;

  const totalExpensesPercentage = Math.round((totalExpenses / totalIncomes) * 100);

  const totalIncomePercentage = 100 - totalExpensesPercentage;

  


  if (totalIncomes === 0 && totalExpenses === 0) {
    return (
      <div className="p-4 my-2">
        <div className="h-full flex items-center justify-center w-full flex-col">
          <h1 className="text-3xl font-bold my-2">No data yet</h1>
        </div>
      </div>
    );
  }

  return (
    <VictoryPie
      colorScale={["#e74c3c", "#2ecc71"]}
      data={[
        { x: "Expenses", y: totalExpensesPercentage },
        { x: "Incomes", y: totalIncomePercentage },
      ]}
      animate={{
        duration: 200,
      }}
      labels={({ datum }) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={45} style={{ fill: "white" }} />}
    />
  );
}

export default ExpenseChart;
