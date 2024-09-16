"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.log("Error", error);
  }, [error]);

  const reset = () => {
    reset();
  };

  return (
    <div>
      <h1>Error</h1>
      <p>{error.message}</p>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
