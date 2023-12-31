import { useState } from "react";
import { useAddUserMutation } from "../../features/api/apiSlice";
import Success from "../ui/Success";
import Error from "../ui/Error";
import TextInput from "../ui/TextInput";

export default function FormUser() {
  const [addUser, { isLoading, isSuccess, isError }] = useAddUserMutation();

  const [userId, setUserId] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [isActive, setIsActive] = useState(false);
  const [hobbies, setHobbies] = useState([]);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    country: "",
  });
  const [orders, setOrders] = useState({
    productName: "",
    price: 0,
    quantity: 0,
  });
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const resetForm = () => {
    setUserId("");
    setUsername("");
    setAge(0);
    setPhoto("");
    setEmail("");
    setIsActive(false);
    setHobbies([]);
    setAddress({
      street: "",
      city: "",
      country: "",
    });
    setOrders({
      productName: "",
      price: 0,
      quantity: 0,
    });
    setFirstName("");
    setLastName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert userId and age to numbers
    const parsedUserId = parseInt(userId, 10);
    const parsedAge = parseInt(age, 10);

    // Check if any required fields are empty
    if (
      !parsedUserId ||
      !username ||
      !parsedAge ||
      !photo ||
      !email ||
      !hobbies.length ||
      !address.street ||
      !orders.productName ||
      !firstName ||
      !lastName
    ) {
      console.error("All fields are required");
      return;
    }

    try {
      const response = await addUser({
        userId: parsedUserId,
        user: {
          userId: parsedUserId,
          username,
          password: "sdfdfsdf",
          fullName: {
            firstName,
            lastName,
          },
          age: parsedAge,
          photo,
          email,
          isActive,
          hobbies,
          address,
          orders,
        },
      });

      // Log the API response
      console.log("API Response:", response);

      if (response.error) {
        if (
          response.error.status === 404 &&
          response.error.data &&
          response.error.data.description === "Not Created User!"
        ) {
          console.error("User creation failed: Not Created User!");
          // Handle the specific error condition as needed
        } else {
          console.error("User creation failed:", response.error);
          // Handle other error conditions
        }
      } else {
        console.log("User created successfully");
        resetForm();
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle other unexpected errors
    }
  };

  return (
    <div>
      <form
        method="POST"
        onSubmit={handleSubmit}
        className="shadow sm:rounded-md sm:overflow-hidden"
      >
        <div className="bg-white rounded-md p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="col-span-1">
              <TextInput
                title="UserName"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="UserId"
                value={userId}
                onChange={(e) => setUserId(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="hobbies"
                value={hobbies.join(", ")}
                onChange={(e) => setHobbies(e.target.value.split(", "))}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="address street"
                value={address.street}
                onChange={(e) =>
                  setAddress({ ...address, street: e.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="address city"
                value={address.city}
                onChange={(e) =>
                  setAddress({ ...address, city: e.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="address country"
                value={address.country}
                onChange={(e) =>
                  setAddress({ ...address, country: e.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="order product name"
                value={orders.productName}
                onChange={(e) =>
                  setOrders({ ...orders, productName: e.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="order price"
                value={orders.price}
                onChange={(e) =>
                  setOrders({ ...orders, price: e.target.value })
                }
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="order quantity"
                value={orders.quantity}
                onChange={(e) =>
                  setOrders({ ...orders, quantity: e.target.value })
                }
              />
            </div>
            <div className="col-span-2">
              <TextInput
                title="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-span-1">
              <TextInput
                title="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className="col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <div className="mt-1 flex rounded-md shadow-sm">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  http://
                </span>
                <input
                  type="text"
                  name="company_website"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  autoComplete="url"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  placeholder="www.example.com"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              disabled={isLoading}
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
            >
              Create
            </button>
          </div>
        </div>

        {isSuccess && <Success message="User was created successfully" />}
        {isError && <Error message="There was an error creating the user" />}
      </form>
    </div>
  );
}
