"use client";

export default function LinkCreateForm({ didSumit }) {
  const handleForm = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const JSONData = JSON.stringify(data);
    const endpoint = "/api/links/";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONData,
    };
    const response = await fetch(endpoint, options);

    const result = await response.json();
    if (didSumit) {
      didSumit(result);
    }
  };
  return (
    <>
      <form onSubmit={handleForm} className="mb-10">
        <input
          type="text"
          defaultValue="https://github.com/codingforentrepreneurs/jref.io"
          name="url"
          placeholder="URL"
          className="bg-black text-white w-full p-2 mb-3 rounded-lg"
        />
        <button
          type="submit"
          className="w-full mt-3 bg-slate-800 p-2 rounded-lg"
        >
          Shorten
        </button>
      </form>
    </>
  );
}
