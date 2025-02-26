import { DollarSign, Percent, Shield } from "lucide-react";

export default function FeaturesSection () {
    return (
        <section className="bg-blue-900/90 dark:bg-black py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose BetMate</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Experience the ultimate betting platform with competitive odds, secure transactions, and exciting features.</p>
          </div>
          
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#181818] p-8 rounded-xl card-hover">
              <div className="bg-white dark:bg-blue-950/90 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Percent className="w-8 h-8 text-blue-900/90 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Best Odds Guaranteed</h3>
              <p className="text-gray-400">
                We offer the most competitive odds in the market, ensuring maximum returns on your successful bets.
              </p>
            </div>
            
            <div className="bg-[#181818] p-8 rounded-xl card-hover">
              <div className="bg-white dark:bg-blue-950/90 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <Shield className="w-8 h-8 text-blue-900/90 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Secure Platform</h3>
              <p className="text-gray-400">
                Your data and funds are protected with state-of-the-art encryption and security measures.
              </p>
            </div>
            
            <div className="bg-[#181818] p-8 rounded-xl card-hover">
              <div className="bg-white dark:bg-blue-950/90 w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <DollarSign className="w-8 h-8 text-blue-900/90 dark:text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Fast Payouts</h3>
              <p className="text-gray-400">
                Withdraw your winnings quickly with our efficient payout system and multiple payment options.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}