// Preview.jsx
export default function Preview({ formData }) {
  return (
    <div className="p-4 space-y-2 text-gray-200 border rounded bg-zinc-800">
      <h2 className="font-semibold ">Preview:</h2>
      <p><strong>Nama:</strong> {formData.name || "(kosong)"}</p>
      <p><strong>Email:</strong> {formData.email || "(kosong)"}</p>
    </div>
  );
}
