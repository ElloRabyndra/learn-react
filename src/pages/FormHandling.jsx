import { useContext } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import Nav from "../components/Navigation/Nav";
import { Button } from "@/components/ui/button";
import { Link } from "react-router";
import { ThemeContext } from "../context/ThemeContext";

export default function FormHandling() {
  const {theme} = useContext(ThemeContext);
  
  return (
    <section className={`${theme} flex items-center justify-center min-h-screen p-8 font-[Poppins]`}>
      <ToggleButton/>
      <div className="p-8 space-y-3 text-center min-w-sm">
        <h1 className="text-2xl font-bold">Form Handling</h1>
        <div className="flex w-full gap-2">
          <Button className={"w-1/2"}><Link to="/Register">Register</Link></Button>
          <Button className={"w-1/2"}><Link to="/Login">Login</Link></Button> 
        </div>
        <Nav />
      </div>
    </section>
  );
}
