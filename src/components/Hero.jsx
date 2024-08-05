import {HERO_CONTENT} from "../constants"
//import profilePic from "../assets/kevinRushProfile.png"
import { motion } from "framer-motion"

const container = (delay) => ({
  hidden: {x:-100, opacity:0},
  visible: {x:0, opacity:1, transition: {delay: delay, duration:0.5}},
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start">
                <motion.h1 
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className="pb-16 text-5xl font-thin tracking-light lg:mt-16 lg: text-8xl"> 
                    Chakradhar J
                </motion.h1>
                <motion.span w
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-state-500 to-purple-500 bg-clip-text text-3xl tracking-light text-transparent">
                    Mid level Data Engineer
                </motion.span>
                <motion.p
                variants={container(1)}
                initial="hidden"
                animate="visible"
                className="my-2 max-w-xl py-6 font-light tracking-lighter">
                    {HERO_CONTENT}
                </motion.p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex w-full h-full justify-center">
                <motion.img 
                initial={{x:100, opacity:0}}
                animate={{x:0, opacity:1}}
                transition={{delay: 1.2, duration:1}}
                className="rounded-full"
                src="https://media.licdn.com/dms/image/D5603AQHb8B4-H1hDiA/profile-displayphoto-shrink_400_400/0/1722797961995?e=1728518400&v=beta&t=eYko_8paF_j9AhUBQ0o2ozpINohftD9mHj-4X-QMKsU" 
                alt="Profile photo" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
