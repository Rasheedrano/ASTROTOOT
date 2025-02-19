
import { motion } from 'framer-motion';

export const TokenInfo = () => {
  const contractAddress = "ToDo2PkcLrqHQGAXHeNKF8hEaWHEJqbE7ayuKgmAtQL";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 text-center space-y-4"
    >
      <h2 className="text-xl font-semibold text-sky-900">Token Address</h2>
      <div className="flex items-center justify-center space-x-2">
        <code className="bg-sky-100 p-2 rounded text-sky-800 text-sm">{contractAddress}</code>
        <button 
          onClick={() => navigator.clipboard.writeText(contractAddress)}
          className="p-2 hover:bg-sky-100 rounded-full transition-colors"
        >
          📋
        </button>
      </div>
    </motion.div>
  );
};
