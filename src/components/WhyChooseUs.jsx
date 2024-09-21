import { GrYoga } from "react-icons/gr";
import { FaDumbbell } from "react-icons/fa6";
import { GiGymBag } from "react-icons/gi";
import { SlideLeft } from "../utility/Animation";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const WhyChooseData = [
    {
      id: 1,
      title: "One-on-one Teaching",
      desc: "All of our special education experts have a degree in special education.",
      icon: <GrYoga />,
      bgColor: "#0063ff",
      delay: 0.3,
    },
    {
      id: 2,
      title: "24/7 Tutor Availability",
      desc: "Our tutors are always available to respond as quick as possible for you",
      link: "/",
      icon: <FaDumbbell />,
      bgColor: "#73bc00",
      delay: 0.6,
    },
    {
      id: 3,
      title: "Interactive Whiteboard",
      desc: "Our digital whiteboard equipped with audio and video chat fetures.",
      link: "/",
      icon: <GiGymBag />,
      bgColor: "#fa6400",
      delay: 0.9,
    },
    {
      id: 4,
      title: "Affordable Prices",
      desc: "Choose an expert tutor based on your budget and per hour.",
      link: "/",
      icon: <GiGymBag />,
      bgColor: "#fe6baa",
      delay: 0.9,
    },
  ];

  return (
    <section className="overflow-x-hidden">
      <div className="container">
        <div className="text-center">
          <span className="text-orange-600 text-lg font-semibold uppercase">
            Why Choose us
          </span>
          <h1 className="text-3xl md:text-4xl font-semibold mt-2 max-w-[500px] m-auto leading-tight">
            Benefits of online tutoring services with us
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-9">
          {WhyChooseData.map((data) => {
            return (
              <motion.div
                variants={SlideLeft(data.delay)}
                initial="hidden"
                whileInView={"visible"}
                className="bg-slate-50 shadow-[0_0_22px_0_rgba(0,0,0,0.15)] p-7 rounded-xl"
                key={data.id}
              >
                <div
                  style={{ backgroundColor: data.bgColor }}
                  className="w-10 h-10 flex items-center justify-center rounded-lg mb-2"
                >
                  <span className="text-2xl text-white"> {data.icon}</span>
                </div>
                <h3 className="text-[21px] lg:text-lg mb-1 font-semibold">
                  {data.title}
                </h3>
                <p className="text-lg lg:text-base text-gray-600">
                  {data.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
