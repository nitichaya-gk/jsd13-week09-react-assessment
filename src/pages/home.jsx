import Nav from "../components/Nav";
import SectionButtons from "../components/SectionButtons";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-200">
      <Nav />
      <div className="flex flex-col items-center pt-20">
        <h1 className="text-4xl font-extrabold text-center leading-tight">
          Generation Thailand
          <br />
          React - Assessment
        </h1>
        <SectionButtons />
      </div>
    </div>
  );
}
