// UserProfile.js
import React from "react";

const UserProfile = ({ userData }) => {
  return (
    <div className="bg-white p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold mb-2">User Profile</h2>
      <p className="text-black">Email: {userData.email}</p>
      {/* Add more profile information here */}
    </div>
  );
};

export default UserProfile;
