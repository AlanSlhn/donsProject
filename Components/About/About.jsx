import React from 'react';
import Image from 'next/image';
import { Profile, Project1 } from '../../public/assets/img';
import Link from 'next/link';
import { IoMdArrowBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { fadeIn } from '../Variants/Variants';
import { PiWhatsappLogoThin, PiInstagramLogoLight, PiFacebookLogo } from 'react-icons/pi';

const About = () => {
  return (
    <div className="p-5 min-h-screen bg-gradient-to-r from-cyan-500 to-blue-400 flex flex-col items-center gap-10 justify-center" style={{ fontFamily: 'Bricolage Grotesque' }}>
      <motion.div variants={fadeIn('up', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-64 h-64 bg-slate-300/30  rounded-full flex flex-col justify-center items-center ">
        <Image src={Profile} width={150} alt="profile"></Image>
      </motion.div>
      <motion.div variants={fadeIn('up', 0.7)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="w-2/5 max-md:w-full max-md:p-5 text-white text-center flex flex-col gap-5">
        <p className="text-5xl">Hello,</p>
        <p className="text-xl font-thin">My Name is Alan Solihin 🙌</p>
        <div className="w-full p-3 rounded-xl leading-5 text-xs bg-slate-300/30 font-thin">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas ullam voluptatem nulla quam officia temporibus velit est, ad eaque, atque fuga harum veniam quos maiores quo necessitatibus? Repellendus, placeat atque.</p>
        </div>
      </motion.div>

      <motion.div variants={fadeIn('down', 0.3)} initial={'hidden'} whileInView={'show'} viewport={{ once: false, amount: 0.7 }} className="flex flex-col justify-center items-center text-white gap-5">
        <div className="flex flex-row justify-center gap-10 items-center">
          <div className="w-10 h-10 border flex flex-col justify-center items-center rounded-lg hover:bg-slate-300/30 transition ease-in duration-300">
            <Link href={'#'} className="bg-slate ">
              <PiFacebookLogo size={30}></PiFacebookLogo>
            </Link>
          </div>
          <div className="w-10 h-10 border flex flex-col justify-center items-center rounded-lg hover:bg-slate-300/30 transition ease-in duration-300">
            <Link href={'#'} className="bg-slate ">
              <PiInstagramLogoLight size={30}></PiInstagramLogoLight>
            </Link>
          </div>
          <div className="w-10 h-10 border flex flex-col justify-center items-center rounded-lg hover:bg-slate-300/30 transition ease-in duration-300">
            <Link href={'#'} className="bg-slate ">
              <PiWhatsappLogoThin size={30}></PiWhatsappLogoThin>
            </Link>
          </div>
        </div>
        <Link href={'/main/mainpage'} className="w-20 h-9  flex flex-col items-center justify-center rounded-2xl transition ease-in duration-300 hover:bg-slate-300/30">
          <IoMdArrowBack size={30} color="#ffff" />
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
