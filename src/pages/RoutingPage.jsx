import { useContext } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import Nav from "../components/Navigation/Nav";
import Routing from "../components/Routing/Routing";
import { ThemeContext } from "../context/ThemeContext";

export default function RoutingPage() {
  const { theme } = useContext(ThemeContext);
  return (
    <section className={`${theme} flex items-center justify-center min-h-screen p-8 space-y-5 font-[Poppins]`}>
      <ToggleButton/>
      <div className="space-y-4 text-center min-w-80 md:min-w-md">
        <h1 className="text-2xl font-bold">React Routing</h1>
        <Routing />
        <Nav />
      </div>
    </section>
  );
}