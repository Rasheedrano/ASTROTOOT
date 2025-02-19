
import { motion } from 'framer-motion';
import { Logo } from '@/components/Logo';
import { Counter } from '@/components/Counter';
import { TokenInfo } from '@/components/TokenInfo';
import { Tokenomics } from '@/components/Tokenomics';
import { Trading } from '@/components/Trading';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="container max-w-4xl mx-auto text-center space-y-12"
      >
        <Logo />
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-sky-900"
        >
          AstroToot
        </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl md:text-2xl text-sky-700 max-w-2xl mx-auto"
        >
          The world's first decentralized flatulence tracking system
        </motion.p>
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="max-w-sm mx-auto"
        >
          <Counter />
        </motion.div>

        <TokenInfo />
        
        <Tokenomics />
        
        <Trading />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="space-y-4"
        >
          <p className="text-sky-600">Every toot is tracked on the blockchain</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://twitter.com/intent/tweet?text=Check%20out%20AstroToot%20-%20The%20future%20of%20flatulence%20tracking%20%F0%9F%92%A8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-300"
            >
              Share on Twitter
            </a>
            <a
              href="https://t.me/astrotoot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-sky-500 text-white rounded-full font-semibold hover:bg-sky-600 transition-colors duration-300"
            >
              Join Telegram
            </a>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Index;
