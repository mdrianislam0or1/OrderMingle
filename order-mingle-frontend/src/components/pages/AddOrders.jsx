import { useState } from "react";
import { useAddNewOrderMutation } from "../../features/api/apiSlice";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";
import { useParams } from "react-router-dom";

export default function AddOrders() {
  const { userId } = useParams();
  const [addOrder, { isLoading, isSuccess, isError }] =
    useAddNewOrderMutation(userId);

  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const resetForm = () => {
    setProductName("");
    setPrice(0);
    setQuantity(0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if any required fields are empty
    if (!userId || !productName || isNaN(price) || isNaN(quantity)) {
      console.error("All fields are required");
      return;
    }

    try {
      const response = await addOrder({
        userId,
        order: {
          productName,
          price,
          quantity,
        },
      });

      // Log the API response
      console.log("API Response:", response);

      if (response.error) {
        console.error("Order creation failed:", response.error);
        // Log the detailed error
        console.error("Detailed error:", response.error.data.error);
        // Handle error conditions
      } else {
        console.log("Order created successfully");
        resetForm();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle other unexpected errors
    }
  };

  return (
    <div className="max-w-7xl my-20 mx-auto px-5 lg:px-0">
      <div className="w-full">
        <div className="px-4 sm:px-0 pb-4">
          <h3 className="text-lg font-medium leading-6 text-gray-900">
            Add Order
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            Please fill up the form to Add Order
          </p>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form
            method="PUT"
            onSubmit={handleSubmit}
            className="shadow sm:rounded-md sm:overflow-hidden"
          >
            <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <TextInput
                    title="Product Name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextInput
                    title="Price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <TextInput
                    title="Quantity"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
                  />
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  disabled={isLoading}
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
                >
                  Create
                </button>
              </div>

              {isSuccess && (
                <Success message="Order was created successfully" />
              )}
              {isError && (
                <Error message="There was an error creating the order" />
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
