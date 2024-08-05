//import { BiLogoPostgresql } from "react-icons/bi"
//import { DiScala, DiCss3,  } from "react-icons/di";
import { GrMysql } from "react-icons/gr";
import { FaPython, FaAws } from "react-icons/fa"
//import { FaC, FaJava, FaWindows } from "react-icons/fa6"
import { BiLogoGoogleCloud  } from "react-icons/bi"
//import { RiReactjsLine, RiFileExcel2Fill } from "react-icons/ri"
import {  SiApache, SiPowerbi, SiMicrosoftazure } from "react-icons/si";
//import { TbSql, TbApi } from "react-icons/tb";
import {motion} from "framer-motion"

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y:[10, -10], 
    transition: {
      duration: duration, 
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">
        Technologies
    </motion.h1>
      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <FaPython className="text-4xl ml-4 text-cyan-400"/>
            <p className="px-2 text-cyan-400">Python</p>
        </motion.div>


        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <SiApache className="text-4xl ml-4 text-cyan-400"/>
            <p className="px-2 text-cyan-400">Apache</p>
        </motion.div>

        
        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <GrMysql className="text-4xl ml-4 text-cyan-400"/>
            <p className="px-2 text-cyan-400">MySQL</p>
        </motion.div>

        {/*
        <motion.div 
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <TbSql  className="text-4xl text-cyan-400"/>
        </motion.div>

        */}

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <SiPowerbi className="text-4xl ml-6 text-cyan-400"/>
            <p className="px-2 text-cyan-400">Power BI</p>
        </motion.div>

        <motion.div 
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <FaAws className="text-4xl ml-2 text-cyan-400"/>
            <p className="px-2 text-cyan-400">AWS</p>
        </motion.div>

        <motion.div 
        variants={iconVariants(4.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <BiLogoGoogleCloud className="text-4xl ml-10 text-cyan-400"/>
            <p className="px-2 text-cyan-400">Google Cloud</p>
        </motion.div>

        <motion.div 
        variants={iconVariants(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800 p-2">
            <SiMicrosoftazure className="text-4xl ml-3 text-cyan-400"/>
            <p className="px-2 text-cyan-400">Azure</p>
        </motion.div>

        
      </motion.div>
    </div>
  )
}

export default Technologies
