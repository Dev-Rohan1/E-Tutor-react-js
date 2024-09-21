import CountUp from "react-countup";

const Counter = () => {
  return (
    <section className="bg-secondary">
      <div className="container">
        <div className="counter_grid text-white text-center py-4">
          <div className="mb-6 lg:mb-0">
            <p className="text-4xl font-bold">
              {" "}
              <CountUp
                start={0}
                end={872}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg font-medium mt-1">Expert tutors</p>
          </div>
          <div className="mb-6 lg:mb-0">
            <h2 className="text-4xl font-bold">
              <p className="text-4xl font-bold">
                {" "}
                <CountUp
                  start={0}
                  end={20000}
                  separator=","
                  suffix="+"
                  duration={3}
                  enableScrollSpy={true}
                  scrollSpyOnce={true}
                />
              </p>
            </h2>
            <p className="text-lg font-medium mt-1">Hours content</p>
          </div>
          <div className="mb-6 lg:mb-0">
            <p className="text-4xl font-bold">
              {" "}
              <CountUp
                start={0}
                end={298}
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg font-medium mt-1">Subject and courses</p>
          </div>
          <div>
            <p className="text-4xl font-bold">
              {" "}
              <CountUp
                start={0}
                end={72878}
                separator=","
                suffix="+"
                duration={3}
                enableScrollSpy={true}
                scrollSpyOnce={true}
              />
            </p>
            <p className="text-lg font-medium mt-1">Active students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;
