/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";

export default function OrderDetails({ order, totalPrice }) {
  const { userId } = useParams();
  const { productName, price, quantity } = order;
  return (
    <div>
      <div className="">
        <div className="p-20 bg-purple-200">
          <h3 className="text-orange-400 font-bold mb-4">
            Order Details for {userId}
          </h3>
          <div className="bg-white rounded-lg shadow-2xl md:flex">
            <img
              src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Laptop on Desk"
              className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none"
            />
            <div className="p-20">
              <div className=" flex space-x-8 gap-4 text-center justify-end">
                <div>
                  <h1 className="text-2xl font-semibold tracking-tight text-slate-800">
                    Product Name : {productName}
                  </h1>

                  <h2 className="text-2xl leading-[1.7142857] text-slate-600 w-full">
                    Price: {price}
                  </h2>
                  <h2 className="text-2xl leading-[1.7142857] text-slate-600 w-full">
                    Quantity: {quantity}
                  </h2>
                </div>
                <div>
                  <h2 className="text-2xl leading-[1.7142857] text-slate-600 w-full">
                    Total Price: {totalPrice}
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
