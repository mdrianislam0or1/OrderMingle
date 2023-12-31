import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import EditFormUser from "./EditFromUser";

const EditUser = () => {
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(userId);
  let content = null;

  if (isLoading) {
    content = <div className="text-center text-gray-700">Loading...</div>;
  }

  if (!isLoading && isError) {
    content = <Error message="There was an error loading the user" />;
  }

  if (!isError && !isLoading) {
    content = <EditFormUser editData={data.data} />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white shadow-md rounded-md p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">Edit User</h3>
          <p className="mt-2 text-sm text-gray-600">
            Please fill out the form to edit the user.
          </p>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
};

export default EditUser;
