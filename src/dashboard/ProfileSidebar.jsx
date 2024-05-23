import React from "react";

const ProfileSidebar = () => {
  return (
    <aside className="bg-white w-96 h-full p-4">
      <nav>
        <div className="flex justify-center gap-4">
        <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#facc15"
              viewBox="0 0 256 256"
            >
              <path d="M120,40V32a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-8-8A8,8,0,0,0,50.34,61.66Zm0,116.68-8,8a8,8,0,0,0,11.32,11.32l8-8a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l8-8a8,8,0,0,0-11.32-11.32l-8,8A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l8,8a8,8,0,0,0,11.32-11.32ZM40,120H32a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Zm88,88a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,208Zm96-88h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"></path>
            </svg>
          </span>
          <span>
            <img src="flag.svg" alt="flag_image" className="h-6 w-6"/>
          </span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#9ca3af"
              viewBox="0 0 256 256"
            >
              <path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H88.81a40,40,0,0,0,78.38,0H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216ZM48,184c7.7-13.24,16-43.92,16-80a64,64,0,1,1,128,0c0,36.05,8.28,66.73,16,80Z"></path>
            </svg>
          </span>

        </div>
        <ul className="space-y-2">

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

export default ProfileSidebar;
