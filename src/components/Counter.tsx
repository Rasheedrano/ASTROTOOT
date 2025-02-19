
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + Math.floor(Math.random() * 10));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="glass rounded-xl p-6 text-center"
    >
      <h2 className="text-xl font-semibold text-sky-900 mb-2">Total Toots</h2>
      <p className="text-4xl font-bold text-sky-600">
        {count.toLocaleString()}
      </p>
    </motion.div>
  );
};
