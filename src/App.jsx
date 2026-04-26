
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function App() {
  return (
    <div className="border relative  border-neutral-200 rounded-2xl bg-[linear-gradient(180deg,_#F5FAF6_0%,_#F5FAF6_100%)] m-8">
      <Navbar />
      <Hero />
    </div>
  );
}