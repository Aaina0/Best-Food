import "./App.css";
import Category from "./components/Category";
import Food from "./components/Food";
import HeadLineCard from "./components/HeadLineCard";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadLineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
