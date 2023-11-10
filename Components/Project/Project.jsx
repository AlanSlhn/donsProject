import React from 'react';
import { projectConf } from './projectConf';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants/Variants';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';

const Project = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-orange-400 to-orange-200" style={{ fontFamily: 'Bricolage Grotesque' }}>
      <div className="flex flex-col justify-center gap-10 items-center p-10">
        <motion.h1 variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="text-5xl text-white text-center">
          Project
        </motion.h1>
        <div className="w-3/5 flex flex-col justify-center gap-20 items-center max-lg:w-full">
          {projectConf.map((conf) => (
            <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} key={conf.id} className="w-4/5 flex flex-col gap-5 justify-center items-center relative max-lg:w-full">
              <p className="text-3xl text-white  absolute top-7 right-0 left-15 max-lg:text-xl">{conf.header}</p>
              <div className="w-4/5 max-lg:w-full">
                <Image src={conf.image} alt="image" className="w-full"></Image>
              </div>
              <div className="w-4/5 max-lg:w-full p-3 rounded-xl leading-5 text-white text-xs bg-slate-300/30 font-thin ">
                <p>{conf.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div variants={fadeIn('down', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }}>
          <Link href={'/main/mainpage'} className="w-20 h-9  flex flex-col items-center justify-center rounded-2xl ease-in duration-300 hover:bg-slate-300/30">
            <IoMdArrowBack size={30} color="#ffff" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Project;
