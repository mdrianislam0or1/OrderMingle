/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

export const UserPhoto = ({ data }) => {
  const { userId } = useParams();

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md p-6 mb-6">
      <Link to={`/users/${userId}`} className="block">
        <img
          src={data.photo}
          alt={data.fullName.firstName}
          className="w-full h-auto rounded-md mb-4"
        />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {data.fullName.firstName} {data.fullName.lastName}
          </h2>
          <p className="text-sm text-gray-600">{data.email}</p>
        </div>
      </Link>
    </div>
  );
};
