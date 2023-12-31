/* eslint-disable react/prop-types */
export default function Success({ message }) {
  return (
    <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justify-center mx-auto p-2 text-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md">
      {message}
    </div>
  );
}
