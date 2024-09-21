import { motion } from "framer-motion";
import { FaRegCirclePlay } from "react-icons/fa6";
import hero_image from "../assets/hero.png";
import { slideRigth } from "../utility/Animation";

const Hero = () => {
  return (
    <section id="home">
      <div className="container">
        <div className="flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center justify-center flex-col md:items-start">
            <motion.h3
              variants={slideRigth(0.5)}
              initial="hidden"
              animate="visible"
              className="text-orange-600 text-lg font-semibold mb-3"
            >
              100% Satisfaction Guarantee
            </motion.h3>
            <motion.h1
              variants={slideRigth(0.6)}
              initial="hidden"
              animate="visible"
              className="text-5xl font-semibold text-center mb-4 leading-tight md:text-6xl md:text-left lg:max-w-[365px] lg:leading-[65px]"
            >
              Find Your Perfect <span className="text-primary">Tutor</span>
            </motion.h1>
            <motion.p
              variants={slideRigth(0.7)}
              initial="hidden"
              animate="visible"
              className="text-center text-gray-600 text-lg mb-5 md:text-left md:max-w-[385px]"
            >
              We help you find perfect tutor for 1-on-1 lessons. It is
              completely free and private
            </motion.p>
            <motion.div
              variants={slideRigth(1.0)}
              initial="hidden"
              animate="visible"
              className="flex items-center justify-center flex-col md:flex-row md:gap-5 w-full md:justify-start "
            >
              <button className="bg-primary w-full h-11 rounded-full text-lg font-medium md:w-auto md:h-auto md:py-3 px-10">
                Get Started
              </button>
              <button
                className="flex items-center justify-center gap-2 text-lg font-medium border-2 border-secondary rounded-lg w-full h-11 mt-3
              md:border-0  md:w-auto md:h-auto"
              >
                <FaRegCirclePlay className="text-3xl text-secondary" />
                See how it works
              </button>
            </motion.div>
          </div>
          <div>
            <motion.img
              initial={{ opacity: 0, x: 200 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 50, delay: 0.2 }}
              className="mt-6 w-[350px] md:w-[550px] xl:w-[600px] m-auto"
              src={hero_image}
              alt="image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
