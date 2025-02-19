
import { motion } from 'framer-motion';

export const Trading = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-sky-900 text-center">How to Buy $ATOOT</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-white/20 rounded-lg text-center">
          <div className="text-4xl mb-2">👛</div>
          <h3 className="text-lg font-semibold text-sky-800 mb-2">1. Get a Wallet</h3>
          <p className="text-sky-700">Download Phantom or Solflare</p>
        </div>
        
        <div className="p-4 bg-white/20 rounded-lg text-center">
          <div className="text-4xl mb-2">💱</div>
          <h3 className="text-lg font-semibold text-sky-800 mb-2">2. Get SOL</h3>
          <p className="text-sky-700">Buy SOL from any exchange</p>
        </div>
        
        <div className="p-4 bg-white/20 rounded-lg text-center">
          <div className="text-4xl mb-2">🔄</div>
          <h3 className="text-lg font-semibold text-sky-800 mb-2">3. Swap for $ATOOT</h3>
          <p className="text-sky-700">Use Raydium to swap SOL for $ATOOT</p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center gap-4 pt-4">
        <div className="space-y-2 text-center">
          <h3 className="text-sky-800 font-semibold">Buy & Sell on Raydium</h3>
          <div className="flex gap-2 justify-center">
            <a
              href="https://raydium.io/swap/?inputCurrency=sol&outputCurrency=ToDo2PkcLrqHQGAXHeNKF8hEaWHEJqbE7ayuKgmAtQL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-green-500 text-white rounded-full font-semibold hover:bg-green-600 transition-colors duration-300"
            >
              Buy
            </a>
            <a
              href="https://raydium.io/swap/?inputCurrency=ToDo2PkcLrqHQGAXHeNKF8hEaWHEJqbE7ayuKgmAtQL&outputCurrency=sol"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-red-500 text-white rounded-full font-semibold hover:bg-red-600 transition-colors duration-300"
            >
              Sell
            </a>
          </div>
        </div>
        
        <div className="space-y-2 text-center">
          <h3 className="text-sky-800 font-semibold">Trade on PUMP</h3>
          <div className="flex gap-2 justify-center">
            <a
              href="https://pump.fun/token/ToDo2PkcLrqHQGAXHeNKF8hEaWHEJqbE7ayuKgmAtQL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-300"
            >
              Trade
            </a>
          </div>
        </div>
        
        <div className="space-y-2 text-center">
          <h3 className="text-sky-800 font-semibold">Price Chart</h3>
          <div className="flex gap-2 justify-center">
            <a
              href="https://dexscreener.com/solana/ToDo2PkcLrqHQGAXHeNKF8hEaWHEJqbE7ayuKgmAtQL"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-300"
            >
              View Chart
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
