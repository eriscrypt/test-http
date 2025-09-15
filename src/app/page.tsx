"use client";

import { useState } from "react";

export default function Home() {
  const [username, setUsername] = useState("");

  const handleAction = async () => {
    const url = `/api/twitter/accounts/${username}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <form action={handleAction} className="flex flex-col gap-3">
        <input
          type="text"
          className="border rounded py-2 px-4"
          placeholder="Enter twitter username"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 cursor-pointer"
        >
          Fetch data
        </button>
      </form>
    </div>
  );
}
