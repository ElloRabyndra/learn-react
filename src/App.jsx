import { useState } from "react";
import FormInput from "./FormInput";
import Preview from "./Preview";

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  return (
    <div className="max-w-md p-4 mx-auto mt-40">
      <h1 className="mb-4 text-2xl font-bold text-center">Lifting State Up</h1>
      <FormInput formData={formData} setFormData={setFormData} />
      <Preview formData={formData} />
    </div>
  );
}
