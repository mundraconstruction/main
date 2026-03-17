import { useState } from "react";

function AdminPanel() {

  const [file, setFile] = useState(null);

  const uploadFile = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    await fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData
    });

    alert("File uploaded successfully");

  };

  return (

    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center">

      <h1 className="text-3xl text-yellow-400 mb-10">
        Admin Upload Panel
      </h1>

      <input
        type="file"
        onChange={(e)=>setFile(e.target.files[0])}
        className="mb-6"
      />

      <button
        onClick={uploadFile}
        className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-yellow-400"
      >
        Upload File
      </button>

    </div>

  );
}

export default AdminPanel;