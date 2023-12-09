import { useParams } from "react-router-dom";
import { useGetUserQuery } from "../../features/api/apiSlice";
import UserDetails from "../Users/UserDetails";
import VideoLoader from "../ui/loaders/Loader";
import Error from "../ui/Error";
import { UserPhoto } from "../Users/UserPhoto";
import OrderDetails from "../Users/OrderDetails";

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
        <UserPhoto data={data.data} />
        <UserDetails user={data.data} />
      </>
    );
  }
  return (
    <div>
      <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
        <div className="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
          <div className="grid grid-cols-3 gap-2 lg:gap-8">
            <div className="col-span-full w-full space-y-8 lg:col-span-2">
              {content}
            </div>

            {/* {video?.id ? (
            <RelatedVideos id={video.id} title={video.title} />
          ) : isLoading ? (
            <>
              <RelatedVideoLoader />
              <RelatedVideoLoader />
              <RelatedVideoLoader />
            </>
          ) : (
            <Error message="No related videos found" />
          )} */}
          </div>
        </div>
      </section>
    </div>
  );
}
