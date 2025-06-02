// FormInput.jsx
export default function FormInput({ formData, setFormData }) {
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  return (
    <div className="flex flex-col gap-4 mb-6">
      <input
        type="text"
        name="name"
        placeholder="Nama"
        value={formData.name}
        onChange={handleChange}
        className="block w-full p-2 mb-2 border border-gray-300 rounded bg-zinc-800"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        className="block w-full p-2 border border-gray-300 rounded bg-zinc-800"
      />
    </div>
  );
}
