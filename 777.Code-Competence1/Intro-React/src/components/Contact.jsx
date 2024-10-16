import { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
    setFormData({
      username: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {/* Form Section */}
        <form
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              rows="5"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>

        {/* Display Submitted Data */}
        {submittedData && (
          <div className="max-w-lg mx-auto mt-8 bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Submitted Data</h2>
            <p>
              <strong>Username:</strong> {submittedData.username}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
