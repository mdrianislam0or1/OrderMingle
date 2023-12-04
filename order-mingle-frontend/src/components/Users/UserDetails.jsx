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
    <div>
      <h1 className="text-lg font-semibold tracking-tight text-slate-800">
        {username}
      </h1>
      <div className="pb-4 flex items-center space-between border-b gap-4">
        <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
          Age {age}
        </h2>

        <div className="flex gap-6 w-full justify-end">
          <div className="flex gap-1">
            <div className="shrink-0">
              <Link to={`/users/edit/${userId}`}>
                <img className="w-5 block" src={photo} alt="Edit" />
              </Link>
            </div>
            <Link to={`/users/edit/${userId}`}>
              <span className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
                Edit
              </span>
            </Link>
          </div>
          {/* <div className="flex gap-1 cursor-pointer" onClick={handleDelete}>
            <div className="shrink-0">
              <img className="w-5 block" src={deleteImage} alt="Delete" />
            </div>
            <div className="text-sm leading-[1.7142857] text-slate-600 cursor-pointer">
              Delete
            </div>
          </div> */}
        </div>
      </div>

      <div className="mt-4 text-sm text-[#334155] dark:text-slate-400">
        <h3>User ID: {userId}</h3>
        <p>Username: {username}</p>
        <p>
          Full Name: {fullName.firstName} {fullName.lastName}
        </p>
        <p>Age: {age}</p>
        <img src={photo} alt="User" />
        <p>Email: {email}</p>
        <p>Active: {isActive ? "Yes" : "No"}</p>
        <p>Hobbies: {hobbies.join(", ")}</p>
        <p>
          Address: {address.street}, {address.city}, {address.country}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
