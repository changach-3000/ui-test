import React, { useContext, useEffect, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

const Sidebar = () => {
  const {profiles, selectedProfile, setSelectedProfile} = useContext(ProfileContext)

  return (
    <aside className="bg-white w-64 h-full p-4">
      {/* Add title and button */}
      <nav>
        <h1 className="text-gray-500 text-2xl mb-5">Chat</h1>
        <button className="bg-violet-800 text-white rounded-full flex gap-2 justify-center w-52 p-2 text-sm shadow-violet-800 hover:shadow-lg">
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

      {/* This is the body section of the sidebar with the profiles */}
      <div className="mx-auto p-5 mt-5">
      <ul className="space-y-4">
        <hr />
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className={`flex gap-3 w-64 p-2 cursor-pointer ${selectedProfile === profile.id ? 'bg-violet-100' : 'hover:bg-violet-100'}`}
            onClick={() => setSelectedProfile(profile.id)}
          >
            <img
              src={profile.profileImage}
              alt={profile.name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm">{profile.name}</p>
              <p className="text-gray-400 text-xs">{profile.timeOnline}</p>
            </div>
          </li>
        ))}
        <hr />
      </ul>
    </div>
    </aside>
  );
};

export default Sidebar;
