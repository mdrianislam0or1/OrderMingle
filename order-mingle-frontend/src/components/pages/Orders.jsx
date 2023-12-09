import { useParams } from "react-router-dom";
import {
  useGetCalculateOrderQuery,
  useGetOrderQuery,
} from "../../features/api/apiSlice";
import OrderDetails from "../Users/OrderDetails";
import Error from "../ui/Error";
import VideoLoader from "../ui/loaders/Loader";

export default function Orders() {
  const { userId } = useParams();
  const { data, isError, isLoading } = useGetOrderQuery(userId);
  const {
    data: calculate,
    isError: calculateError,
    isLoading: calculateLoading,
  } = useGetCalculateOrderQuery(userId);

  let content = null;
  if (isLoading || calculateLoading) {
    content = <VideoLoader />;
  } else if (isError || calculateError) {
    content = <Error message="There was an error" />;
  } else if (!data || !data.data || !data.data.orders) {
    content = <Error message="No orders available" />;
  } else if (data.data.orders.length > 0) {
    content = (
      <div>
        {data.data.orders.map((order) => (
          <OrderDetails
            key={order._id}
            order={order}
            totalPrice={calculate.data.totalPrice}
          />
        ))}
      </div>
    );
  } else {
    content = <Error message="No orders available" />;
  }

  return (
    <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
      <div>{content}</div>
    </section>
  );
}
