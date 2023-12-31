import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const UserDetails = ({ user }) => {
  const {
    userId,
    username,
    fullName,
    age,
    photo,
    email,
    isActive,
    hobbies,
    address,
  } = user;

  return (
    <div className="bg-white p-6 rounded-lg ">
      <h1 className="text-xl font-semibold text-gray-800 mb-4">
        User Name: {username}
      </h1>
      <div className="flex items-center justify-between border-b border-gray-300 pb-4">
        <h2 className="text-sm text-gray-600">Age: {age}</h2>
        <div className="flex gap-4">
          <Link to={`/users/edit/${userId}`} className="text-purple-600">
            <span className="text-sm">Edit</span>
          </Link>
          <Link to={`/users/${userId}/orders`} className="text-purple-600">
            <span className="text-sm">Orders</span>
          </Link>
          <Link to={`/users/${userId}/orders/add`} className="text-purple-600">
            <span className="text-sm">Add Order</span>
          </Link>
        </div>
      </div>

      <div className="mt-4 text-sm text-gray-700">
        <p className="mb-2">User ID: {userId}</p>
        <p className="mb-2">Email: {email}</p>
        <p className="mb-2">
          Full Name: {fullName.firstName} {fullName.lastName}
        </p>
        <p className="mb-2">Active: {isActive ? "Yes" : "No"}</p>
        <p className="mb-2">Hobbies: {hobbies.join(", ")}</p>
        <div className="flex items-center mb-2">
          <p className="mr-2">Address:</p>
          <p>
            {address.street}, {address.city}, {address.country}
          </p>
        </div>
        <img src={photo} alt="User" className="w-full h-auto rounded-md mb-2" />
      </div>
    </div>
  );
};

export default UserDetails;
