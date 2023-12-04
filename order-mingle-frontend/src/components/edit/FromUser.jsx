/* eslint-disable react/prop-types */
import { useState } from "react";
import TextInput from "../ui/TextInput";
import { useGetEditUserMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import Success from "../ui/Success";
import Error from "../ui/Error";

const FromUser = ({ editData }) => {
  const [editUser, { isLoading, isError, isSuccess }] =
    useGetEditUserMutation();
  const {
    userId,
    username: initialUsername,
    fullName: initialFullName,
    age: initialAge,
    photo: initialPhoto,
    email: initialEmail,
    date: initialDate,
    hobbies: initialHobbies,
    address: initialAddress,
  } = editData;

  const [username, setUsername] = useState(initialUsername);
  const [fullName, setFullName] = useState(initialFullName);
  const [age, setAge] = useState(initialAge);
  const [photo, setPhoto] = useState(initialPhoto);
  const [email, setEmail] = useState(initialEmail);
  const [date, setDate] = useState(initialDate);
  const [hobbies, setHobbies] = useState(initialHobbies);
  const [address, setAddress] = useState(initialAddress);

  const handleSubmit = (e) => {
    e.preventDefault();
    editUser({
      userId,
      data: {
        username,
        fullName,
        age,
        photo,
        email,
        hobbies,
        address,
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
                  title="Video title"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3">
                <TextInput
                  title="Author"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextArea
                  title="Description"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="YouTube Video link"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                />
              </div>

              <div className="col-span-6">
                <TextInput
                  title="Thumbnail link"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                <TextInput
                  title="Upload Date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video Duration"
                  value={hobbies}
                  onChange={(e) => setHobbies(e.target.value)}
                />
              </div>

              <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                <TextInput
                  title="Video no of views"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
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
    </div>
  );
};

export default FromUser;
