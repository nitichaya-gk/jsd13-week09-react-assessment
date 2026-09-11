import Nav from "../components/Nav";

export default function Owner() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center pt-20">
        <h1 className="text-3xl font-extrabold">Owner</h1>
        <p className="mt-4 text-gray-600">
          Generation Thailand React Assessment — JSD13
        </p>
      </div>
    </div>
  );
}
