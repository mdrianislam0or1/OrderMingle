import { useGetUsersQuery } from "../../features/api/apiSlice";
import VideoLoader from "../ui/loaders/VideoLoader";
import Error from "../ui/Error";
import User from "./User";

const Users = () => {
  const { data, isLoading, isError, refetch } = useGetUsersQuery();
  let content = null;

  if (isLoading) {
    content = <VideoLoader />;
  } else if (isError) {
    content = <Error message="There was an error" />;
  } else if (!data || !data.data || data.data.length === 0) {
    content = <Error message="No data" />;
  } else {
    content = data.data.map((user, index) => (
      <User key={index} user={user} refetch={refetch} />
    ));
  }

  return <>{content}</>;
};

export default Users;
