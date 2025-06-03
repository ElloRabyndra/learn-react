import { useState } from "react";
import OldForm from "../components/OldForm/OldForm";
import Nav from "../components/Navigation/Nav";

export default function OldFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <section className="flex flex-col items-center justify-center min-h-screen font-[Poppins]">
      <div className="p-8 space-y-5 min-w-sm">
        <OldForm />
        <Nav />
      </div>
    </section>
  );
}
