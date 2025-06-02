// Preview.jsx
export default function Preview({ formData }) {
  return (
    <div className="p-4 space-y-2 border shadow-xs rounded-2xl">
      <h2 className="font-bold ">Preview:</h2>
      <p><strong>Nama:</strong> {formData.name || "(empty)"}</p>
      <p><strong>Email:</strong> {formData.email || "(empty)"}</p>
    </div>
  );
}
