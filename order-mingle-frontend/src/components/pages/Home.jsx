import { Link } from "react-router-dom";
import PromoVideoSection from "./PromoVideoSection";
import Shop from "./shop";

export default function Home() {
  return (
    <div className="">
      <section
        className="w-full h-svh py-12 bg-cover bg-center bg-blur"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?q=80&w=2022&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        }}
      >
        <div className="container px-4 md:px-6 text-center mx-auto">
          <div className="flex flex-col justify-center mt-20 items-center space-y-6 text-center">
            <h1 className="text-5xl mt-20 pt-20 font-bold tracking-tighter text-white">
              Order Mingle
            </h1>
            <h2 className="text-2xl text-white animate-slideIn">
              Discover a world of flavors delivered to your door.
            </h2>
            <Link to={`/users/add`}>
              <button className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-lg font-medium text-white shadow transition-colors hover:bg-blue-700">
                Order Now
              </button>
            </Link>
            <div className="mt-12">
              <button size="icon">
                <ArrowDownIcon className="h-6 w-6 text-white animate-bounce" />
                <span className="sr-only">Scroll down</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto container">
        <Shop />
      </section>

      <section className="">
        <PromoVideoSection />
      </section>
    </div>
  );
}
function ArrowDownIcon(props) {
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
      <path d="M12 5v14" />
      <path d="m19 12-7 7-7-7" />
    </svg>
  );
}
