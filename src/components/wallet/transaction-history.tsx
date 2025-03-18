import { ArrowDownCircle, ArrowUpCircle } from "lucide-react"

const transactions = [
  { id: 1, type: "deposit", amount: 500, date: "2025-03-15", status: "completed" },
  { id: 2, type: "withdraw", amount: 200, date: "2025-03-14", status: "completed" },
  { id: 3, type: "deposit", amount: 1000, date: "2025-03-12", status: "completed" },
  { id: 4, type: "withdraw", amount: 50, date: "2025-03-10", status: "pending" },
]

export default function TransactionHistory() {
  return (
    <div className="space-y-4">
      {transactions.map((transaction) => (
        <div key={transaction.id} className="flex items-center justify-between p-3 bg-[#2a2a2a] rounded-md">
          <div className="flex items-center">
            {transaction.type === "deposit" ? (
              <ArrowDownCircle className="text-green-500 mr-2" />
            ) : (
              <ArrowUpCircle className="text-red-500 mr-2" />
            )}
            <div>
              <p className="font-medium">{transaction.type === "deposit" ? "Deposit" : "Withdrawal"}</p>
              <p className="text-sm text-gray-400">{transaction.date}</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-medium">
              {transaction.type === "deposit" ? "+" : "-"}${transaction.amount}
            </p>
            <p className={`text-sm ${transaction.status === "completed" ? "text-green-500" : "text-yellow-500"}`}>
              {transaction.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}

