import React from 'react';
import { confPage } from './confPage';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants/Variants';

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gradient4 to bg-gradient3 flex flex-col justify-center items-center font-thin" style={{ fontFamily: 'Bricolage Grotesque' }}>
      <div className="flex flex-col justify-center gap-3 items-start  p-10 rounded-xl h-96 bg-slate-300/30">
        {confPage.map((page) => (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1 }}
            transition={{
              duration: 0.3,
              delay: 0.1,
              easeIn: [0, 0.72, 0.2, 1.02],
            }}
            variants={fadeIn('up', 0.3)}
            initial={'hidden'}
            whileInView={'show'}
            viewport={{ once: false, amount: 0.7 }}
            key={page.id}
          >
            <Link href={page.url} className={page.class} key={page.id}>
              {page.heading}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
