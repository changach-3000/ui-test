import React, { createContext, useState, useEffect } from "react";

export const ProfileContext = createContext();

export function ProfileProvider({ children }) {
    const [refreshData, setRefreshData] = useState(false);
    const [profiles, setProfiles] = useState([]);
    const [selectedProfile, setSelectedProfile] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/profiles")
            .then((res) => res.json())
            .then((data) => {
                setProfiles(data);
                console.log(data);  // Correct spot for logging
            });
    }, [refreshData]);

    const contextData = {
        profiles,
        setProfiles,
        selectedProfile,
        setSelectedProfile  
    };

    return (
        <ProfileContext.Provider value={contextData}>
            {children}
        </ProfileContext.Provider>
    );
};
