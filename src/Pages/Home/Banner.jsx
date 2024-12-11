import { easeOut } from "motion";
import { motion } from "motion/react"
import img1 from '../../assets/BannerImg/img1.jpg'
import img2 from '../../assets/BannerImg/img2.jpg'

const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-[500px]">
        <div className="hero-content flex-col items-center lg:flex-row-reverse">
         <div className="flex-1">
         <motion.img
         animate={{y:[50,100,50]}}
         transition={{duration:10,repeat:Infinity}}
            src={img1}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-900 shadow-2xl w-[250px]" />
         <motion.img
         animate={{x:[100,150,100]}}
         transition={{duration:10,delay:5,repeat:Infinity}}
            src={img2}
            className="max-w-sm rounded-t-[40px] rounded-br-[40px] border-b-4 border-l-4 border-blue-900  shadow-2xl w-[250px]" />
         </div>
          <div className="flex-1">
            <motion.h1
            animate={{x:50, color:['pink']}}
            transition={{ duration: 3, delay: 1, ease:easeOut,repeat:Infinity }}
            className="text-5xl font-bold">Latest <motion.span 
            animate={{color:['#eb4f34','#3468eb','#cdeb34']}}
            transition={{duration:2.5,repeat:Infinity}}
            >Jobs</motion.span> for You</motion.h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;