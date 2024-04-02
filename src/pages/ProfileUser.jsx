import React from 'react';

function ProfileUser({ newUser }) {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden p-6">
      <h2 className="text-xl font-semibold mb-4">User Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600 font-semibold">Name:</p>
          <p>{newUser.name}</p>
        </div>
        <div>
          <p className="text-gray-600 font-semibold">Last Name:</p>
          <p>{newUser.lastName}</p>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-gray-600 font-semibold">Email:</p>
        <p>{newUser.email}</p>
      </div>
    </div>
  );
}

export default ProfileUser;
