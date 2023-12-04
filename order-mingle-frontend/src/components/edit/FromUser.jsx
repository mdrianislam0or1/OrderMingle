/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useGetEditUserMutation } from "../../features/api/apiSlice";
import TextInput from "../ui/TextInput";

const FromUser = ({ editData }) => {
  console.log(editData);
  //   const { username } = editData;
  //   const {
  //     userId,
  //     username,
  //     fullName,
  //     age,
  //     photo,
  //     email,
  //     isActive,
  //     hobbies,
  //     address,
  //   } = editData;

  //   const [editUser, { isLoading, isError, isSuccess }] =
  //     useGetEditUserMutation();

  //   const [username, setUserName] = useState(username);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     // editUser({
  //     //   userId,
  //     //   data:{
  //     //     username,
  //     //     fullName,
  //     //     age,
  //     //     photo,
  //     //     email,
  //     //     isActive,
  //     //     hobbies,
  //     //     address,
  //     //   }
  //     // })
  //   };

  return (
    <div>
      <form method="post">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <TextInput title="UserName " value={editData?.username} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FromUser;
