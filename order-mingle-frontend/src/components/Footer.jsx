/**
 * v0 by Vercel.
 * @see https://v0.dev/t/9eE8ElzqNsc
 */
import { Link } from "react-router-dom";

export default function Component() {
  return (
    <>
      <footer className="w-full py-12 px-4 bg-gray-800 text-white">
        <div className="container mx-auto grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h2 className="text-lg font-bold mb-4">About Us</h2>
            <p className="text-sm">
              Order Mingle is a food delivery platform that connects customers
              with local restaurants. Our mission is to make food delivery fast,
              easy, and convenient.
            </p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Contact Us</h2>
            <form className="space-y-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Name"
                type="text"
              />
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email"
                type="email"
              />
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Message"
              />
              <button className="bg-dark">Send Message</button>
            </form>
            <p className="text-sm mt-4">Phone: (123) 456-7890</p>
            <p className="text-sm">Email: contact@ordermingle.com</p>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Social Media</h2>
            <div className="flex space-x-4">
              <Link to="/" target="_blank">
                <FacebookIcon className="w-6 h-6" />
              </Link>
              <Link to="/" target="_blank">
                <TwitterIcon className="w-6 h-6" />
              </Link>
              <Link to="/" target="_blank">
                <InstagramIcon className="w-6 h-6" />
              </Link>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Newsletter Subscription</h2>
            <div className="flex space-x-4">
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="Email Address"
                type="email"
              />
              <button className="bg-dark">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8 space-x-4">
          <Link className="text-sm text-gray-300 hover:underline" to="/">
            Privacy Policy
          </Link>
          <Link className="text-sm text-gray-300 hover:underline" to="/">
            Terms of Service
          </Link>
        </div>
      </footer>
    </>
  );
}

function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
