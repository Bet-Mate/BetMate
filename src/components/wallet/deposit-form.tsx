import { DollarSign } from "lucide-react"

export default function DepositForm() {
  return (
    <form>
      <div className="mb-4">
        <label htmlFor="amount" className="block text-sm font-medium text-gray-400 mb-1">
          Amount
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <DollarSign className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="number"
            name="amount"
            id="amount"
            className="block w-full pl-10 pr-3 py-2 rounded-md bg-[#2a2a2a] border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff7b26] focus:border-transparent"
            placeholder="0.00"
          />
        </div>
      </div>
      <div className="mb-4">
        <label htmlFor="payment-method" className="block text-sm font-medium text-gray-400 mb-1">
          Payment Method
        </label>
        <select
          id="payment-method"
          name="payment-method"
          className="block w-full px-3 py-2 rounded-md bg-[#2a2a2a] border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-[#ff7b26] focus:border-transparent"
        >
          <option>Credit Card</option>
          <option>PayPal</option>
          <option>Bank Transfer</option>
        </select>
      </div>
      <button
        type="submit"
        className="w-full bg-[#ff7b26] text-white py-2 px-4 rounded-md hover:bg-[#e66c1e] transition duration-300"
      >
        Deposit
      </button>
    </form>
  )
}

