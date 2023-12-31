/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";

export default function OrderDetails({ order, totalPrice }) {
  const { userId } = useParams();
  const { productName, price, quantity } = order;

  return (
    <div className=" min-h-screen py-16">
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-lg">
        <h3 className="text-3xl font-bold text-center text-orange-500 mb-8">
          Order Details for User {userId}
        </h3>
        <div className="md:flex">
          <img
            src="https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product"
            className="md:w-1/3 rounded-t-lg md:rounded-l-lg md:rounded-t-none object-cover"
          />
          <div className="md:w-2/3 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold tracking-tight text-slate-800">
                Product: {productName}
              </h1>
              <div className="flex justify-between">
                <div className="space-y-2">
                  <p className="text-lg text-slate-600">Price: ${price}</p>
                  <p className="text-lg text-slate-600">Quantity: {quantity}</p>
                </div>
                <div className="text-right">
                  <p className="text-xl font-semibold text-orange-500">
                    Total Price:
                  </p>
                  <p className="text-2xl font-bold text-orange-500">
                    ${totalPrice}
                  </p>
                </div>
              </div>
            </div>
            <Link
              to={`/users/${userId}`}
              className="text-blue-500 hover:underline"
            >
              &larr; Back to User Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
