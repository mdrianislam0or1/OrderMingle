/* eslint-disable react/prop-types */
export default function TextArea({ title, placeholder, ...attributes }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <div className="mt-1">
        <textarea
          {...attributes}
          rows="3"
          placeholder={placeholder}
          className="p-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md transition-all duration-300 ease-in-out focus:outline-none focus:ring focus:border-blue-300"
        ></textarea>
      </div>
      <p className="mt-2 text-sm text-gray-500">
        Brief description for your input
      </p>
    </div>
  );
}
