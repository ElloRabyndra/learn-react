import { useState } from "react";
import OldForm from "../Components/OldForm/OldForm";

export default function OldFormPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });

  return (
    <section className="flex items-center justify-center min-h-screen p-8 font-[Poppins]">
      <OldForm />
    </section>
  );
}
