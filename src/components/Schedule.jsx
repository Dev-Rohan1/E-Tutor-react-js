import { motion } from "framer-motion";
import { SlideUp } from "../utility/Animation";
import image_1 from "../assets/banner1.png";
import image_2 from "../assets/banner2.png";

const Schedule = () => {
  return (
    <section className="bg-[#f9f9f9]">
      <div className="container">
        <div className="flex items-center flex-col  md:flex-row md:justify-between mb-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 50, delay: 0.1 }}
            className="w-[500px] mb-3 md:mb-0  object-cover"
            src={image_1}
            alt="image"
          />
          <motion.div
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-center md:text-left max-w-[500px]"
          >
            <span className="text-sm font-semibold text-orange-500 mb-3 block">
              CUSTOMIZE WITH YOUR SCHEDULE
            </span>
            <h1 className="text-2xl font-semibold mb-3">
              Personalized Professional Online Tutor on Your Schedule
            </h1>
            <p className="text-base text-gray-500">
              Our scheduling system allows you to select based on your free
              time. Lorem ipsum demo text for template. Keep track of your
              students class and tutoring schedules, and never miss your
              lectures. The best online class scheduling system with easy
              accessibility.Lorem ipsum is a placeholder text commonly used to
              demonstrate the visual form
            </p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              className="bg-primary rounded-full capitalize py-3 px-11 text-lg font-medium mt-5"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
        <div className="flex items-center flex-col  md:flex-row md:justify-between">
          <motion.div
            variants={SlideUp(0.5)}
            initial="hidden"
            whileInView="visible"
            className="text-center md:text-left max-w-[500px] order-2 md:order-1"
          >
            <span className="text-sm font-semibold text-orange-500 mb-3 block">
              CUSTOMIZE WITH YOUR SCHEDULE
            </span>
            <h1 className="text-2xl font-semibold mb-3">
              Talented and Qualified Tutors to Serve You for Help
            </h1>
            <p className="text-base text-gray-500">
              Our scheduling system allows you to select based on your free
              time. Lorem ipsum demo text for template. Keep track of your
              students class and tutoring schedules, and never miss your
              lectures. The best online class scheduling system with easy
              accessibility. Lorem ipsum is a placeholder text commonly used
            </p>
            <motion.button
              variants={SlideUp(0.6)}
              initial="hidden"
              whileInView="visible"
              className="bg-primary rounded-full capitalize py-3 px-11 text-lg font-medium mt-5"
            >
              Get Started
            </motion.button>
          </motion.div>
          <motion.img
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ stiffness: 50, delay: 0.1 }}
            className="w-[500px] mb-3 md:mb-0  object-cover order-1 md:order-2"
            src={image_2}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
};

export default Schedule;
