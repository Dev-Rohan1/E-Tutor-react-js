import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <Hero />
      <Counter />
      <WhyChooseUs />
      <Schedule />
    </main>
  );
};

export default App;
