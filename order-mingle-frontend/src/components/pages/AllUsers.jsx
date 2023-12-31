import Users from "../Users/Users";

export default function AllUsers() {
  return (
    <div className="container mx-auto">
      <section className="pt-6 pb-20 min-h-[calc(100vh_-_157px)]">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          <Users />
        </div>
      </section>
    </div>
  );
}
