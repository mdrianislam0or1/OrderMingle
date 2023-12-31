/* eslint-disable react/prop-types */
export default function TextInput({ title, ...attributes }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <input
        type="text"
        className="mt-1 p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
        {...attributes}
      />
    </div>
  );
}
