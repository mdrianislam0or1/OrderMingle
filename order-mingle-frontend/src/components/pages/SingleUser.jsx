import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/apiSlice";
import UserDetails from "../Users/UserDetails";
import VideoLoader from "../ui/loaders/Loader";
import Error from "../ui/Error";

export default function SingleUser() {
  const { userId } = useParams();
  const { data, isLoading, isError } = useGetUserQuery(userId);
  let content = null;

  if (isLoading) {
    return <VideoLoader />; // You can replace this with your loading component
  }

  if (isError) {
    return <Error message="something error" />; // You can replace this with your error component
  }

  if (!isLoading && !isError) {
    content = (
      <>
        {/* <UserPhoto data={data.data} /> */}
        <UserDetails user={data.data} />
      </>
    );
  }

  return (
    <div className="bg-gray-100">
      <section className="pt-10 pb-20 min-h-screen">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-md">{content}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
