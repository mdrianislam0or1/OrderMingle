/* eslint-disable react/prop-types */
import { Link, useParams } from "react-router-dom";

export const UserPhoto = ({ data }) => {
  const { userId } = useParams();
  return (
    <div>
      <Link to={`/users/${userId}`}>
        Full Name: {data.fullName.firstName} {data.fullName.lastName}
      </Link>
    </div>
  );
};
