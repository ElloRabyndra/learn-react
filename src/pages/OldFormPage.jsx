import { useState } from "react";
import ToggleButton from "@/components/theme/ToggleButton";
import LiftingStateUp from "../components/OldForm/LiftingStateUp";
import Nav from "../components/Navigation/Nav";

export default function OldFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen font-[Poppins]">
      <ToggleButton/>
      <div className="p-8 space-y-5 min-w-sm">
        <LiftingStateUp />
        <Nav />
      </div>
    </section>
  );
}
