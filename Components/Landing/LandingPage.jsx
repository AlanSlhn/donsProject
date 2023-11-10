'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants/Variants';

const LandingPage = () => {
  const [inputText, setInputText] = useState('');
  const [showButton, setShowButton] = useState(false); // State untuk menampilkan tombol
  const router = useRouter();

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    // Menampilkan tombol jika input tidak kosong
    setShowButton(text.trim() !== '');
  };

  const handleButtonClick = () => {
    router.push(`/pages1?teks=${inputText}`); // Ubah '/About' menjadi '/about'
  };

  return (
    <div className="flex flex-col gap-10 justify-center items-center bg-gradient-to-r  from-blue-500 to-cyan-500 min-h-screen">
      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-5xl text-white ">
        <p>Welcome To My World</p>
      </motion.div>
      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex flex-col gap-5 justify-center items-center">
        <input
          type="text"
          name="yourName"
          className="block py-2.5 px-0 w-full text-center text-xl  text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
          required
          value={inputText}
          onChange={handleInputChange}
        />
        {/* <label
          htmlFor="yourName"
          className="peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-1/2 -z-10 origin-[0] peer-focus:left-62 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Your Name
        </label> */}
      </motion.div>

      {showButton && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.1 }}
          transition={{
            duration: 0.4,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
            type: 'spring',
            stiffness: 400,
            damping: 10,
          }}
          whileHover={{ scale: 1.2 }}
          className="absolute top-90 left-90 bottom-52 right-90"
        >
          <button className="border w-16 h-16 bg-slate-200 rounded-full text-xs" onClick={handleButtonClick}>
            Next
          </button>
        </motion.div>
      )}
    </div>
  );
};

export default LandingPage;
