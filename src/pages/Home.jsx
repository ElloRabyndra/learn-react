import { useContext } from "react";
import ToggleButton from "../components/theme/ToggleButton";
import Nav from "../components/Navigation/Nav";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  const {theme} = useContext(ThemeContext);
  return (
    <section className={`${theme} flex items-center justify-center min-h-screen p-8 font-[Poppins]`}>
      <ToggleButton/> 
      <div className="flex flex-col items-center justify-center gap-2 p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome !</h1>
        <p className="text-sm font-medium text-center md:text-lg">
          My React Project for Learning Purposes
        </p>
        <Nav />
      </div>
    </section>
  );
}
