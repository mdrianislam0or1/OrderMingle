import { useState } from "react";
import { useAddNewOrderMutation } from "../../features/api/apiSlice";
import { TextInput } from "../../components/ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";
export default function FormOrder({ addData }) {
  const [addOrder, { isLoading, isError, isSuccess }] =
    useAddNewOrderMutation();
  const { productName, price, quantity } = addData || {};

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addOrder({
      productName,
      price,
      quantity,
    });
  };

  return (
    <form onSubmit={handleSubmit} method="POST">
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="product name"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="quantity"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
        {isSuccess && <Success message="Video was edited successfully" />}
        {isError && <Error message="There was an error editing video!" />}
      </div>
    </form>
  );
}
