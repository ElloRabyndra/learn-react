import { useState } from "react";
import OldForm from "./Components/OldForm/OldForm";


export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: ""
  });

  return (
    <div className="flex items-center justify-center min-h-screen">
      <OldForm />
    </div>
  );
}
