"use client";

export default function LinkCreateForm() {

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
        }
        const response = await fetch(endpoint, options);

        const result = await response.json();
        console.log(result);
    }
  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          defaultValue="https://github.com/codingforentrepreneurs/jref.io"
          name="url"
          placeholder="URL"
        />
        <button type="submit">Shorten</button>
      </form>
    </>
  );
}
