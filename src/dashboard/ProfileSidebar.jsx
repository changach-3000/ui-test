import React, { useContext, useState } from "react";
import { ProfileContext } from "../context/ProfileContext";

const ProfileSidebar = () => {
  const { profiles, selectedProfile } = useContext(ProfileContext);
  const [sidebarVisible, setSidebarVisible] = useState(true);


  // Find the detailed information of the selected profile
  const profileDetails = profiles.find(
    (profile) => profile.id === selectedProfile
  );

  // Check if a profile is selected
  if (!profileDetails) {
    return <div>No profile selected</div>;
  }

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  return (
    <>
     {sidebarVisible && (
    <aside className="bg-white w-96 h-full p-4">
      {/* Header with weather, notifications and country */}
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
            <img src="flag.svg" alt="flag_image" className="h-6 w-6" />
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
          <span className="justify-end rounded-full bg-white shadow p-1" onClick={toggleSidebar}>
          <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="#9ca3af"
          viewBox="0 0 256 256"
        >
          <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
        </svg>
        </span>
        </div>
       
      </nav>
      <div className="flex flex-col items-center mt-5">
        {/* Profile Image */}
        <div>
          <img
            src={profileDetails && profileDetails.profileImage}
            alt={`${profileDetails && profileDetails.name}-profile-image`}
            className="rounded-full w-32 h-32"
          />
          {/* profile details */}
          <p className="font-bold mt-4 text-center">
            {profileDetails && profileDetails.name}
          </p>
          <p className="text-gray-500 text-center">
            {profileDetails && profileDetails.jobTitle}
          </p>
        </div>
        {/* Audio and Video call buttons */}
        <div id="buttons" className="flex mt-4 space-x-4">
          <button className="text-gray-500 outline outline-gray-200 rounded-full flex items-center gap-2 text-sm px-4 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#9ca3af"
              viewBox="0 0 256 256"
            >
              <path d="M231.88,175.08A56.26,56.26,0,0,1,176,224C96.6,224,32,159.4,32,80A56.26,56.26,0,0,1,80.92,24.12a16,16,0,0,1,16.62,9.52l21.12,47.15,0,.12A16,16,0,0,1,117.39,96c-.18.27-.37.52-.57.77L96,121.45c7.49,15.22,23.41,31,38.83,38.51l24.34-20.71a8.12,8.12,0,0,1,.75-.56,16,16,0,0,1,15.17-1.4l.13.06,47.11,21.11A16,16,0,0,1,231.88,175.08Z"></path>
            </svg>
            Audio Call
          </button>
          <button className="text-gray-500 outline outline-gray-200 rounded-full flex items-center gap-2 text-sm px-4 py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="#9ca3af"
              viewBox="0 0 256 256"
            >
              <path d="M192,72V184a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V72A16,16,0,0,1,32,56H176A16,16,0,0,1,192,72Zm58,.25a8.23,8.23,0,0,0-6.63,1.22L209.78,95.86A4,4,0,0,0,208,99.19v57.62a4,4,0,0,0,1.78,3.33l33.78,22.52a8,8,0,0,0,8.58.19,8.33,8.33,0,0,0,3.86-7.17V80A8,8,0,0,0,250,72.25Z"></path>
            </svg>
            Video Call
          </button>
        </div>
      </div>
      {/* Shared Photos */}
      <div>
        <p className="flex gap-2 text-gray-500 p-5">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#9ca3af"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM48,48H208v77.38l-24.69-24.7a16,16,0,0,0-22.62,0L53.37,208H48ZM208,208H76l96-96,36,36v60ZM96,120A24,24,0,1,0,72,96,24,24,0,0,0,96,120Zm0-32a8,8,0,1,1-8,8A8,8,0,0,1,96,88Z"></path>
            </svg>
          </span>{" "}
          Shared Photos
        </p>
        <img src="shared-photos.png" alt="shared photos" />

        <p className="text-violet-600 font-bold text-center p-4">View More</p>
      </div>
    ) : (
      <span className="justify-end rounded-full bg-white shadow p-1" onClick={toggleSidebar}>
           <svg
           xmlns="http://www.w3.org/2000/svg"
           width="20"
           height="20"
           fill="#9ca3af"
           viewBox="0 0 256 256"
         >
           <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
         </svg>
         </span>
         </aside>
    )}
    </>
  );
};

export default ProfileSidebar;
