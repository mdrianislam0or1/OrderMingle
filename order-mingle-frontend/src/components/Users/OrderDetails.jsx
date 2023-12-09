import { Link, useParams } from "react-router-dom";

export default function OrderDetails({ order, data }) {
  const { userId } = useParams();
  const { productName, price, quantity } = order;
  console.log(data.photo);
  return (
    <div>
      <div className="">
        <div className="p-20 bg-orange-200">
          <h3 className="text-orange-400 font-bold mb-4">
            3. Horizontal &amp; Responsive Card
          </h3>
          <div className="bg-white rounded-lg shadow-2xl md:flex">
            <img
              src="https://images.unsplash.com/photo-1593642532744-d377ab507dc8"
              alt="Laptop on Desk"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="p-6">
              <div>
                <h1 className="text-lg font-semibold tracking-tight text-slate-800">
                  productName: {productName}
                </h1>
                <div className="pb-4 flex items-center space-between border-b gap-4">
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    price: {price}
                  </h2>
                  <h2 className="text-sm leading-[1.7142857] text-slate-600 w-full">
                    quantity: {quantity}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
