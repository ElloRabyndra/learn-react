import { useState, useContext } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import LiftingStateUp from "../components/OldForm/LiftingStateUp";
import Nav from "../components/Navigation/Nav";
import { ThemeContext } from "../context/ThemeContext";

export default function OldFormPage() {
  const {theme} = useContext(ThemeContext);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <section className={`${theme} flex flex-col items-center justify-center min-h-screen font-[Poppins]`}>
      <ToggleButton/>
      <div className="p-8 space-y-5 min-w-sm">
        <LiftingStateUp />
        <Nav />
      </div>
    </section>
  );
}
