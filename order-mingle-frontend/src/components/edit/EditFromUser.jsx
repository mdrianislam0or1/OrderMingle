/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import TextInput from "../ui/TextInput";
import { useEditUserMutation } from "../../features/api/apiSlice";
import Success from "../ui/Success";
import Error from "../ui/Error";

const FromUser = ({ editData }) => {
  const [editUser, { isLoading, isError, isSuccess }] = useEditUserMutation();
  const {
    userId,
    username: initialUsername,
    age: initialAge,
    photo: initialPhoto,
    email: initialEmail,
    address: initialAddress = { city: "" },
  } = editData || {};

  const [username, setUsername] = useState(initialUsername);
  const [age, setAge] = useState(initialAge);
  const [photo, setPhoto] = useState(initialPhoto);
  const [email, setEmail] = useState(initialEmail);
  const [address, setAddress] = useState(initialAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser({
      userId,
      user: {
        username,
        age,
        photo,
        email,
      },
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="UserName"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Age"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Photo"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="UserName"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div> */}
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
          {isSuccess && <Success message="User was edited successfully" />}
          {isError && <Error message="There was an error editing User!" />}
        </div>
      </form>
    </div>
  );
};

export default FromUser;
