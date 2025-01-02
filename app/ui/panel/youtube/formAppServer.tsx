"use client";
import { useState } from "react";

export default function ServerAppForm() {
  const [selectedServer, setSelectedServer] = useState<string>("");
  const [selectedApp, setSelectedApp] = useState<string>("");
  const [price, setPrice] = useState<number | null>(null);
  const [isServerSelected, setIsServerSelected] = useState<boolean>(false);

  const handleServerChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedServer(event.target.value);
    setIsServerSelected(event.target.value !== ""); // Set to true if a server is selected
    calculatePrice(event.target.value, selectedApp);
  };

  const handleAppChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedApp(event.target.value);
    calculatePrice(selectedServer, event.target.value);
  };

  const calculatePrice = (server: string, app: string) => {
    // Example pricing logic
    if (server === "server1" && app === "app1") {
      setPrice(100);
    } else if (server === "server1" && app === "app2") {
      setPrice(150);
    } else if (server === "server2" && app === "app1") {
      setPrice(200);
    } else if (server === "server2" && app === "app2") {
      setPrice(250);
    } else {
      setPrice(null); // Reset price if no valid combination
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(
      `Selected Server: ${selectedServer}, Selected Aplikasi: ${selectedApp}, Price: ${
        price !== null ? price : "N/A"
      }`
    );
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="mb-4">
        <label
          htmlFor="server"
          className="block text-sm font-medium text-gray-700"
        >
          Server
        </label>
        <select
          id="server"
          value={selectedServer}
          onChange={handleServerChange}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="" disabled={isServerSelected}>Select a Server</option>
          <option value="server1">Server 1</option>
          <option value="server2">Server 2</option>
          <option value="server3">Server 3</option>
        </select>
      </div>

      <div className="mb-4">
        <label
          htmlFor="aplikasi"
          className="block text-sm font-medium text-gray-700"
        >
          Aplikasi
        </label>
        <select
          id="aplikasi"
          value={selectedApp}
          onChange={handleAppChange}
          disabled={!isServerSelected} // Disable if no server is selected
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="" disabled>Req</option>
          <option value="sub">Subscribe</option>
          <option value="like">Likes</option>
          <option value="comm">Comment</option>
          <option value="view">Views</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Price</label>
        <input
          type="text"
          value={price !== null ? `$${price}` : "N/A"}
          readOnly
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-100"
        />
      </div>

      <button
        type="submit"
        className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Order
      </button>
    </form>
  );
}