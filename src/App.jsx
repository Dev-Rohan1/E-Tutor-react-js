import Counter from "./components/Counter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="overflow-y-hidden">
      <Navbar />
      <Hero />
      <Counter />
    </main>
  );
};

export default App;
