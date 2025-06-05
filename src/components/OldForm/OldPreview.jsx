// Preview.jsx
export default function OldPreview({ formData }) {
  return (
    <div className="p-4 space-y-2 border shadow-xs rounded-2xl">
      <h2 className="font-bold ">Preview:</h2>
      <p><span className="font-semibold">Name</span>: {formData.name || "(Empty)"}</p>
      <p><span className="font-semibold">Email</span>: {formData.email || "(Empty)"}</p>
    </div>
  );
}
