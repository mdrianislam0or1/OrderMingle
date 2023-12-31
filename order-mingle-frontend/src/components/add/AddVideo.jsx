import Form from "./Form";

export default function AddVideo() {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
      <div className="w-full bg-white shadow-md rounded-md p-6">
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800">
            Add New Video
          </h3>
          <p className="mt-2 text-sm text-gray-600">
            Please fill out the form to add a new video.
          </p>
        </div>
        <div className="md:mt-0 md:col-span-2">
          <Form />
        </div>
      </div>
    </div>
  );
}
