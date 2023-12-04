import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import FromUser from "./FromUser";

const EditUser = () => {
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(userId);
  let content = null;
  if (isLoading) {
    content = <div>Loading...</div>;
  }
  if (!isLoading && isError) {
    content = <Error message="There was an error" />;
  }

  if (!isError && !isLoading) {
    content = <FromUser editData={data.data} />;
  }
  return (
    <div className="max-w-7xl mx-auto px-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Edit User
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fillup the form to edit User
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">{content}</div>
      </div>
    </div>
  );
};

export default EditUser;
