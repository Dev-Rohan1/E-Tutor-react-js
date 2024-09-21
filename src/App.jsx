import Counter from "./components/Counter";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import SubjectCard from "./components/SubjectCard";
import Testimonial from "./components/Testimonial";
import WhyChooseUs from "./components/WhyChooseUs";

const App = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <Hero />
      <Counter />
      <WhyChooseUs />
      <Schedule />
      <SubjectCard />
      <Testimonial />
      <Footer />
    </main>
  );
};

export default App;
