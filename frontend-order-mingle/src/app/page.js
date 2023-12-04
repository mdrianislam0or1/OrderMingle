"use client";

import { useGetUsersQuery } from "./GlobalRedux/features/api/apiSlice";

const User = ({ user, refetch }) => {
  const { id, username, fullName, age, email, address } = user;

  return (
    <div className="col-span-12 sm:col-span-6 md:col-span-3 duration-300 hover:scale-[1.03]">
      <div className="w-full flex flex-col">
        <div className="relative">
          <p
            onClick={refetch}
            className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py"
          >
            {username}
          </p>
        </div>

        <div className="flex flex-row mt-2 gap-2">
          <img src="" className="rounded-full h-6 w-6 shrink-0" alt="" />

          <div className="flex flex-col">
            <p className="text-slate-900 text-sm font-semibold">
              {fullName.firstName} {fullName.lastName}
            </p>
            <span className="text-gray-400 text-xs hover:text-gray-600">
              {email}
            </span>
            <p className="text-gray-400 text-xs">
              {age} views . {age}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Videos = () => {
  const { data, isLoading, isError, refetch } = useGetUsersQuery();
  console.log(data.data);
  let content = null;

  if (isLoading) {
    content = <>Loading</>;
  } else if (isError) {
    content = <div> message="There was an error" </div>;
  } else if (!data || !data.data || data.data.length === 0) {
    content = <div> message="There was an error" </div>;
  } else {
    content = data.data.map((user, index) => (
      <User key={index} user={user} refetch={refetch} />
    ));
  }

  return <>{content}</>;
};

export default Videos;
