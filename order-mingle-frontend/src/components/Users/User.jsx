/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user, refetch }) => {
  const { userId, username, fullName, age, email, address, photo } = user;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <Link to={`/users/${userId}`}>
        <div className="w-full flex flex-col bg-white p-4 rounded-lg shadow-md">
          <div>
            <h1 className="text-center font-bold text-2xl mb-2">{username}</h1>
            <Link to={`/users/${userId}`}>
              <div className="w-full h-60 overflow-hidden rounded-md">
                <img src={photo} className="w-full h-60" alt={photo} />
              </div>
            </Link>
          </div>

          <div className="flex flex-row mt-2 items-center gap-2">
            <img
              src={photo}
              className="rounded-full h-6 w-6 shrink-0"
              alt={photo}
            />

            <div className="flex flex-col">
              <p className="text-gray-600">Address</p>
              <span className="text-gray-400 text-xs hover:text-gray-600">
                {address.city}, {address.country}
              </span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default User;
