import { useParams } from "react-router-dom";
import { useGetOrderQuery } from "../../features/api/apiSlice";
import OrderDetails from "../Users/OrderDetails";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/Loader";

export default function Orders() {
  const { userId } = useParams();
  const { data, isError, isLoading } = useGetOrderQuery(userId);

  console.log(data);

  let content = null;
  if (isLoading) {
    content = <VideoLoader />;
  } else if (isError) {
    content = <Error message="There was an error" />;
  } else if (!data || !data.data || !data.data.orders) {
    content = <Error message="No orders available" />;
  } else if (data.data.orders.length > 0) {
    content = data.data.orders.map((order) => (
      <OrderDetails key={order._id} order={order} />
    ));
  } else {
    content = <Error message="No orders available" />;
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div>{content}</div>
    </section>
  );
}
