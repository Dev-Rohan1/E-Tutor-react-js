import { motion } from "framer-motion";
import { FaComputer, FaBook } from "react-icons/fa6";
import { slideRigth } from "../utility/Animation";

const SubjectCard = () => {
  const subjectList = [
    {
      id: 1,
      name: "Engineering",
      icon: <FaComputer />,
      color: "#0063ff",
      delay: 0.2,
    },
    {
      id: 2,
      name: "English",
      icon: <FaBook />,
      color: "#00c986",
      delay: 0.3,
    },
    {
      id: 3,
      name: "Programming",
      icon: <FaComputer />,
      color: "#922aee",
      delay: 0.4,
    },
    {
      id: 4,
      name: "Science",
      icon: <FaBook />,
      color: "#ea7516",
      delay: 0.5,
    },
    {
      id: 5,
      name: "History",
      icon: <FaBook />,
      color: "#075267",
      delay: 0.6,
    },
    {
      id: 6,
      name: "Psychology",
      icon: <FaBook />,
      color: "#986d1d",
      delay: 0.7,
    },
    {
      id: 7,
      name: "Web design",
      icon: <FaBook />,
      color: "#b93838",
      delay: 0.8,
    },
    {
      id: 8,
      name: "See all",
      icon: <FaBook />,
      color: "#464646",
      delay: 0.9,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="text-center">
          <span
            className="text-xl capitalize tracking-wide
          font-bold text-orange-400 mb-2 block"
          >
            Our tutor subjects
          </span>
          <h1 className="text-3xl font-bold">
            Find Online Tutor in Any Subject
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {subjectList.map((item) => {
            return (
              <motion.div
                variants={slideRigth(item.delay)}
                initial="hidden"
                whileInView="visible"
                className="border border-secondary/20 rounded-md p-4 flex items-center gap-3 hover:shadow-lg duration-300"
                key={item.id}
              >
                <div
                  style={{ backgroundColor: item.color }}
                  className="w-10 h-10 flex items-center justify-center rounded-md text-white"
                >
                  <span className="text-xl">{item.icon}</span>
                </div>
                <span className="text-lg">{item.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SubjectCard;
