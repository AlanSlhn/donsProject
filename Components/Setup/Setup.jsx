import React from 'react';
import Image from 'next/image';
import { Setup1, Setup2, Setup3, Setup4 } from '../../public/assets/img';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants/Variants';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

const Setup = () => {
  return (
    <div className="bg-gradient-to-tr from-gradient1 to-gradient2 flex flex-col justify-center items-center " style={{ fontFamily: 'Bricolage Grotesque' }}>
      <motion.div
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className=" min-h-screen  text-center text-white w-2/5 flex flex-col justify-center items-center gap-5 max-md:w-full max-md:p-5"
      >
        <h1 className="text-5xl max-md:text-2xl">Setup</h1>
        <p className="italic text-2xl max-md:text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iure veritatis labore suscipit numquam ea nemo, quas dolorum vitae. Unde!</p>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex flex-row justify-center w-full gap-10 min-h-screen max-md:flex-col max-md:gap-5">
        <div className="w-2/5 flex flex-col justify-start items-start text-white max-md:w-full max-md:p-5">
          <Image src={Setup3} alt="setup3"></Image>
          <p className="text-white max-md:text-sm">Setup By XXX</p>
        </div>
        <div className="w-2/5 flex flex-col  text-white justify-start items-start max-md:w-full max-md:p-5">
          <Image src={Setup1} alt="setup1"></Image>
          <p className="text-white max-md:text-sm">Setup By XXX</p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-3/5 min-h-screen flex flex-col justify-center items-center">
        <p className="text-2xl italic text-white max-md:text-center max-md:text-xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, illo.</p>
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.3)}
        initial={'hidden'}
        whileInView={'show'}
        viewport={{ once: false, amount: 0.7 }}
        className="w-4/5 min-h-screen flex flex-row-reverse gap-5 justify-center items-center max-md:flex-col max-md:w-full max-md:p-5 "
      >
        <div className="w-2/5 max-md:w-full max-md:p-5">
          <Image src={Setup2} width={500} alt="al"></Image>
        </div>
        <div className="w-96 text-white">
          <p className="text-2xl">Setup Simple</p>
          <p className="text-lg italic mt-5"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod laboriosam facere ullam rem reprehenderit atque unde beatae voluptate ab ad!</p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-3/5 min-h-screen flex flex-col justify-center ">
        <p className="text-2xl italic text-white text-center max-md:text-xl">Modi soluta sunt suscipit quae vero! Accusantium, illo nemo. Esse aspernatur inventore non quidem, iusto voluptatem blanditiis est!</p>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-3/5 min-h-screen flex flex-col justify-center max-md:w-full max-md:p-5 ">
        <Image src={Setup4} alt="setup4"></Image>
        <p className="text-white max-md:text-sm">Setup By XXX</p>
      </motion.div>

      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-3/5 mb-5 flex flex-col justify-center items-center">
        <Link href={'/main/mainpage'} className="w-20 h-9  flex flex-col items-center justify-center rounded-2xl transition ease-in duration-300 hover:bg-slate-300/30">
          <IoMdArrowBack size={30} color="#ffff" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Setup;
