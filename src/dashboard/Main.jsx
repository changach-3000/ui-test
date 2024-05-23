import React from "react";
import Textbox from "../components/Textbox";

const Main = () => {
  return (
    <div className="flex-1 p-4 bg-gray-50 flex flex-col">
      <main className="flex-1 flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Main Content</h2>
       
      </main>
      <div className="mt-auto p-4 bg-gray-50">
        <Textbox />
      </div>
    </div>
  );
};

export default Main;
