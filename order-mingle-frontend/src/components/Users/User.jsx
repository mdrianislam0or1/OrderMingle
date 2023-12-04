/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const User = ({ user, refetch }) => {
  const { userId, username, fullName, age, email, address, photo } = user;
  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div>
          <h1 className="text-center font-bold text-2xl">{username}</h1>
          <Link to={`/users/${userId}`}>
            <img src={photo} className="w-full h-auto" alt={photo} />
          </Link>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <img
            src={photo}
            className="rounded-full h-6 w-6 shrink-0"
            alt={photo}
          />

          <div className="flex flex-col">
            <Link to={`/users/${userId}`}>
              <p className="text-slate-900 text-sm font-semibold">
                <button className="px-2 py-2 bg-black text-white font-bold text-sm rounded-sm">
                  Oder Details
                </button>
              </p>
            </Link>
            <p className="">Address</p>
            <span className="text-conter text-gray-400 text-xs hover:text-gray-600">
              {address.city}, {address.country}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
