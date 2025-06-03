import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";

// FormInput.jsx
export default function OldFormInput({ formData, setFormData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="grid gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Insert Name..."
          required
          autocomplete= "off"
          value={formData.name || ""}
          onChange={handleChange}
        />
      </div>

      <div className="grid gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="Insert Email..."
          required
          autocomplete= "off"
          value={formData.email || ""}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
