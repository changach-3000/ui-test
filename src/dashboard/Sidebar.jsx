import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white w-64 h-full p-4">
      <nav>
        <ul className="space-y-2">
          <h1 className="text-gray-500 text-2xl mb-5">Chat</h1>
          <button className="bg-violet-800 text-white rounded-full flex gap-2 justify-center w-52 p-2 text-sm">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#ffffff"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path>
              </svg>
            </span>New Conversation
          </button>
          <li>
            <a href="/" className="block p-2 hover:bg-gray-600 rounded">
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/analytics"
              className="block p-2 hover:bg-gray-600 rounded"
            >
              Analytics
            </a>
          </li>
          <li>
            <a href="/messages" className="block p-2 hover:bg-gray-600 rounded">
              Messages
            </a>
          </li>
          <li>
            <a href="/settings" className="block p-2 hover:bg-gray-600 rounded">
              Settings
            </a>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
