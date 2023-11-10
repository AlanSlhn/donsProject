'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { fadeIn } from '../Variants/Variants';

const PageJourney = () => {
  const router = useRouter();
  const { teks } = router.query;

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
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
        style={{ fontFamily: 'Bricolage Grotesque' }}
        className="flex gap-5 flex-col justify-center items-center"
      >
        <div className="flex flex-row items-center font-thin text-2xl text-">
          <p>Hi ,</p>
          <p>{teks}</p>
        </div>

        <h1 className="text-5xl">Lets find out my experience </h1>

        <Link href={'main/mainpage'} className="w-36 rounded-xl from-gradient4 to bg-gradient3 transition ease-in translate-x-1 hover:scale-105 flex flex-col justify-center items-center text-white">
          Journey now
        </Link>
      </motion.div>
    </div>
  );
};

export default PageJourney;
