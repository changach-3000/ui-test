import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

const Sidebar = () => {
  const { profiles, selectedProfile, setSelectedProfile } =
    useContext(ProfileContext);
  const [showProfileSidebar, setShowProfileSidebar] = useState(false);

  const toggleProfileSidebar = () => {
    setShowProfileSidebar(!showProfileSidebar);
  };

  return (
    <aside
      className={`bg-white w-${showProfileSidebar ? "28" : "64"} h-full p-4`}
    >
      {/* Add title and button */}
      <nav className={`w-${showProfileSidebar ? "40" : "48"}`}>
        <div className="flex justify-center">
          {showProfileSidebar && (
            <button className="mb-5" onClick={toggleProfileSidebar}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="#5b21b6"
                viewBox="0 0 256 256"
              >
                <path d="M224,128a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM112,72H216a8,8,0,0,0,0-16H112a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16ZM34.34,141.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0,0-11.32l-40-40A8,8,0,0,0,34.34,61.66L68.69,96,34.34,130.34A8,8,0,0,0,34.34,141.66Z"></path>
              </svg>
            </button>
          )}
        </div>
      </nav>

      {/* This is the body section of the sidebar with the profiles */}
      {showProfileSidebar ? (
        <>
          <nav className="flex justify-center">
            <button className="bg-violet-800 text-white rounded-full p-2 text-sm shadow hover:shadow-lg">
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
              </span>
            </button>
          </nav>
          <div className="mx-auto p-5 mt-5">
            <ul className="space-y-4">
              <hr />
              {profiles.map((profile) => (
                <li
                  key={profile.id}
                  className={`flex gap-3 w-48 p-2 cursor-pointer ${
                    selectedProfile === profile.id
                      ? "bg-violet-100"
                      : "hover:bg-violet-100"
                  }`}
                  onClick={() => setSelectedProfile(profile.id)}
                >
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-10 h-10 rounded-full"
                  />
                </li>
              ))}
              <hr />
            </ul>
          </div>
        </>
      ) : (
        // Original sidebar content
        <>
          <nav>
            <div className="flex justify-between">
              <h1 className="text-gray-500 text-2xl mb-5">Chat</h1>
              <button className="mb-5" onClick={toggleProfileSidebar}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#5b21b6"
                  viewBox="0 0 256 256"
                >
                  <path d="M91.31,128l80,80a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
                </svg>
              </button>
            </div>
            <button className="bg-violet-800 text-white rounded-full flex gap-2 justify-center w-52 p-2 text-sm shadow hover:shadow-lg">
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
              </span>
              New Conversation
            </button>
          </nav>

          <div className="mx-auto p-5 mt-5">
            <ul className="space-y-4">
              <hr />
              {profiles.map((profile) => (
                <li
                  key={profile.id}
                  className={`flex gap-3 w-64 p-2 cursor-pointer ${
                    selectedProfile === profile.id
                      ? "bg-violet-100"
                      : "hover:bg-violet-100"
                  }`}
                  onClick={() => setSelectedProfile(profile.id)}
                >
                  <img
                    src={profile.profileImage}
                    alt={profile.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm">{profile.name}</p>
                    <p className="text-gray-400 text-xs">
                      {profile.timeOnline}
                    </p>
                  </div>
                </li>
              ))}
              <hr />
            </ul>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
