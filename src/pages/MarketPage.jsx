import { useContext } from "react";
import Nav from "../components/Navigation/Nav";
import ToggleButton from "../components/theme/ToggleButton";
import { Outlet } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
export default function MarketPage() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <section className={`${theme} flex flex-col items-center justify-center min-h-screen font-[Poppins]`}> 
      <ToggleButton/> 
      <div className="p-8 space-y-3 text-center min-w-sm"> 
        <h1 className="text-2xl font-bold">Market Place</h1>
        <Nav />
        <Outlet /> 
      </div>
    </section>
  );
}