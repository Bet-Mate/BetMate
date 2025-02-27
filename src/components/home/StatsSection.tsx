export default function StatsSection() {
  return (
    <section className="stats-gradient py-16 bg-[#181818] dark:bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-800/90 mb-2">
              500K+
            </p>
            <p className="text-gray-400">Active Users</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-800/90 mb-2">
              100+
            </p>
            <p className="text-gray-400">Sports Markets</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-800/90 mb-2">
              99.9%
            </p>
            <p className="text-gray-400">Uptime</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-blue-800/90 mb-2">
              24/7
            </p>
            <p className="text-gray-400">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
}
