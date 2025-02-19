
import { motion } from 'framer-motion';

export const Tokenomics = () => {
  const tokenomicsData = [
    { label: "Total Supply", value: "100,000,000,000 $ATOOT" },
    { label: "Tax", value: "2/2%" },
    { label: "Liquidity", value: "Locked for 69 years" },
    { label: "Max Wallet", value: "2%" },
    { label: "Max Transaction", value: "1%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6"
    >
      <h2 className="text-2xl font-bold text-sky-900 mb-6 text-center">Tokenomics</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {tokenomicsData.map((item, index) => (
          <div key={index} className="p-4 bg-white/20 rounded-lg">
            <h3 className="text-sky-700 font-semibold">{item.label}</h3>
            <p className="text-sky-900 font-bold">{item.value}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
